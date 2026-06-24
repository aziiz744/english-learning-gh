import { Component, type ReactNode } from "react";

// ════════════════════════════════════════════════════════════════
//  حاجز الأخطاء — يمنع الشاشة البيضاء لو صار خطأ غير متوقّع
//  ويعرض رسالة لطيفة مع زر إعادة المحاولة
// ════════════════════════════════════════════════════════════════

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    // سجّل الخطأ في الكونسول للتشخيص (لا يظهر للمستخدم)
    console.error("تم التقاط خطأ:", error);
  }

  handleReset = () => {
    this.setState({ hasError: false });
    window.location.href = "/";
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: "100vh", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", padding: 24,
          textAlign: "center", gap: 16, direction: "rtl",
          background: "hsl(var(--background))",
        }}>
          <div style={{ fontSize: 56 }}>😅</div>
          <h2 style={{ fontSize: 22, fontWeight: 900, color: "hsl(var(--foreground))", margin: 0 }}>
            صار خطأ بسيط
          </h2>
          <p style={{ fontSize: 15, color: "hsl(var(--muted-foreground))", maxWidth: 320, lineHeight: 1.7, margin: 0 }}>
            لا تقلق، تقدّمك محفوظ. اضغط الزر تحت للعودة للصفحة الرئيسية والمتابعة.
          </p>
          <button
            onClick={this.handleReset}
            style={{
              marginTop: 8, padding: "12px 28px", borderRadius: 14,
              background: "#1e40af", color: "white", border: "none",
              fontWeight: 800, fontSize: 15, cursor: "pointer",
              boxShadow: "0 4px 0 #1e3a8a",
            }}
          >
            العودة للرئيسية
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
