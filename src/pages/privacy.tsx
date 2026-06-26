import { useLocation } from "wouter";
export default function Privacy() {
  const [, setLocation] = useLocation();
  return (
    <>
      <div style={{ maxWidth: 640, margin: "0 auto", padding: "24px 18px", direction: "rtl", lineHeight: 1.9 }}>
        <button onClick={() => setLocation("/")}
          style={{ background: "none", border: "none", color: "hsl(var(--muted-foreground))", fontSize: 15, fontWeight: 700, cursor: "pointer", marginBottom: 18 }}>
          ← رجوع
        </button>

        <h1 style={{ fontSize: 26, fontWeight: 900, marginBottom: 8 }}>سياسة الخصوصية</h1>
        <p style={{ color: "hsl(var(--muted-foreground))", fontSize: 13, marginBottom: 24 }}>
          آخر تحديث: 2026
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 800, marginTop: 24, marginBottom: 8 }}>المعلومات التي نجمعها</h2>
        <p>
          يجمع تطبيق "مسار الإنجليزية" الحدّ الأدنى من المعلومات اللازمة لتشغيل التطبيق:
          بريدك الإلكتروني عند إنشاء حساب، وتقدّمك في الدروس (الوحدات المكتملة، النقاط، السلسلة اليومية).
          نستخدم هذه البيانات فقط لحفظ تقدّمك ومزامنته بين أجهزتك.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 800, marginTop: 24, marginBottom: 8 }}>كيف نستخدم بياناتك</h2>
        <p>
          نستخدم بياناتك حصرياً لتقديم خدمة التعلّم: حفظ تقدّمك، عرض إحصائياتك، وتمكين المنافسات.
          لا نبيع بياناتك ولا نشاركها مع أطراف ثالثة لأغراض تسويقية.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 800, marginTop: 24, marginBottom: 8 }}>التخزين والأمان</h2>
        <p>
          تُخزّن بياناتك بشكل آمن عبر خدمة Supabase. بعض البيانات (مثل الكلمات التي شاهدتها)
          تُحفظ محلياً على جهازك فقط. نتّخذ إجراءات معقولة لحماية معلوماتك.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 800, marginTop: 24, marginBottom: 8 }}>الإشعارات</h2>
        <p>
          قد يرسل التطبيق إشعارات تذكير يومية للدراسة، فقط بعد موافقتك الصريحة.
          يمكنك إيقافها في أي وقت من إعدادات جهازك.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 800, marginTop: 24, marginBottom: 8 }}>حقوقك</h2>
        <p>
          يحقّ لك الوصول إلى بياناتك أو حذف حسابك في أي وقت. لحذف حسابك وكل بياناتك،
          تواصل معنا عبر البريد الإلكتروني الموضّح أدناه.
        </p>

        <h2 style={{ fontSize: 18, fontWeight: 800, marginTop: 24, marginBottom: 8 }}>التواصل</h2>
        <p>
          لأي استفسار حول الخصوصية، تواصل معنا عبر البريد الإلكتروني:
          <br />
          <span style={{ fontWeight: 700, direction: "ltr", display: "inline-block" }}>support@englishpath.app</span>
        </p>

        <p style={{ marginTop: 32, color: "hsl(var(--muted-foreground))", fontSize: 13 }}>
          باستخدامك للتطبيق، فإنك توافق على سياسة الخصوصية هذه.
        </p>
      </div>
    </>
  );
}
