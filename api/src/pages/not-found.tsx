import { useLocation } from "wouter";
import owlThink from "@/assets/owl/owl-think.png";

export default function NotFound() {
  const [, setLocation] = useLocation();
  return (
    <div style={{
      minHeight: "100vh", display: "flex", flexDirection: "column",
      alignItems: "center", justifyContent: "center", padding: 24,
      textAlign: "center", gap: 12, direction: "rtl",
      background: "hsl(var(--background))",
    }}>
      <img src={owlThink} alt="Owlie" width={130} height={130}
        style={{ width: 130, height: 130, objectFit: "contain" }} draggable={false} />
      <h1 style={{ fontSize: 48, fontWeight: 900, color: "hsl(var(--primary))", margin: 0, lineHeight: 1 }}>
        404
      </h1>
      <h2 style={{ fontSize: 21, fontWeight: 800, color: "hsl(var(--foreground))", margin: 0 }}>
        الصفحة غير موجودة
      </h2>
      <p style={{ fontSize: 15, color: "hsl(var(--muted-foreground))", maxWidth: 320, lineHeight: 1.7, margin: 0 }}>
        يبدو أن Owlie لم يجد هذه الصفحة! ربما تم نقلها أو أن الرابط غير صحيح.
      </p>
      <button
        onClick={() => setLocation("/")}
        style={{
          marginTop: 10, padding: "13px 32px", borderRadius: 14,
          background: "hsl(var(--primary))", color: "white", border: "none",
          fontWeight: 800, fontSize: 16, cursor: "pointer",
          boxShadow: "0 4px 0 hsl(var(--primary-border))",
        }}
      >
        العودة للرئيسية 🏠
      </button>
    </div>
  );
}
