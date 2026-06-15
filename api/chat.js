// Rate limit: max 30 requests per user per minute
const rateLimitMap = new Map();

function checkRateLimit(userId) {
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 30;

  if (!rateLimitMap.has(userId)) {
    rateLimitMap.set(userId, { count: 1, resetAt: now + windowMs });
    return true;
  }

  const entry = rateLimitMap.get(userId);
  if (now > entry.resetAt) {
    // Reset window
    rateLimitMap.set(userId, { count: 1, resetAt: now + windowMs });
    return true;
  }

  if (entry.count >= maxRequests) return false;
  entry.count++;
  return true;
}

// Clean up old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, val] of rateLimitMap.entries()) {
    if (now > val.resetAt + 60000) rateLimitMap.delete(key);
  }
}, 5 * 60 * 1000);

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://english-learning-gh.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  // Verify Supabase JWT
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authHeader.split(" ")[1];
  let userId = "anonymous";

  try {
    // Decode JWT to get user id (verify with Supabase)
    const supabaseUrl = process.env.VITE_SUPABASE_URL;
    const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

    const userRes = await fetch(`${supabaseUrl}/auth/v1/user`, {
      headers: { "Authorization": `Bearer ${token}`, "apikey": supabaseKey },
    });

    if (!userRes.ok) return res.status(401).json({ error: "Invalid token" });
    const userData = await userRes.json();
    userId = userData.id;

    // Check if user is Pro
    const statsRes = await fetch(`${supabaseUrl}/rest/v1/user_stats?user_id=eq.${userId}&select=is_pro`, {
      headers: { "Authorization": `Bearer ${token}`, "apikey": supabaseKey },
    });
    const statsData = await statsRes.json();
    const isPro = statsData?.[0]?.is_pro === true;

    if (!isPro) return res.status(403).json({ error: "Pro subscription required" });

  } catch {
    return res.status(401).json({ error: "Auth failed" });
  }

  // Rate limit
  if (!checkRateLimit(userId)) {
    return res.status(429).json({ error: "Too many requests. Wait a minute." });
  }

  try {
    const { messages, system } = req.body;

    // Validate input
    if (!messages || !Array.isArray(messages) || messages.length > 50) {
      return res.status(400).json({ error: "Invalid request" });
    }

    // Sanitize: only allow role+content strings, limit length
    const cleanMessages = messages.map(m => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content ?? "").slice(0, 1000),
    }));

    const cleanSystem = String(system ?? "").slice(0, 2000);

    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.VITE_GROQ_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        max_tokens: 300,
        messages: [{ role: "system", content: cleanSystem }, ...cleanMessages],
      }),
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content;

    if (!reply) return res.status(500).json({ error: "No reply from AI" });
    return res.status(200).json({ reply });

  } catch (err) {
    return res.status(500).json({ error: "Server error" });
  }
}
