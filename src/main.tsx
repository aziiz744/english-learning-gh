import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { hideSplash, isNative } from "./lib/native";
import { unlockAudio } from "./hooks/useSound";

createRoot(document.getElementById("root")!).render(<App />);

// أخفِ شاشة الترحيب الفورية (HTML) بعد أن يجهز React — انتقال سلس للـ splash المتحرّك
requestAnimationFrame(() => {
  const boot = document.getElementById("boot-splash");
  if (boot) {
    boot.style.opacity = "0";
    setTimeout(() => boot.remove(), 400);
  }
});

// فتح الصوت عند أول لمسة/ضغطة (الآيفون يتطلّب تفاعلاً مباشراً لتشغيل الصوت)
function unlockOnce() {
  unlockAudio();
  window.removeEventListener("touchstart", unlockOnce);
  window.removeEventListener("touchend", unlockOnce);
  window.removeEventListener("click", unlockOnce);
  window.removeEventListener("keydown", unlockOnce);
}
window.addEventListener("touchstart", unlockOnce, { passive: true });
window.addEventListener("touchend", unlockOnce, { passive: true });
window.addEventListener("click", unlockOnce);
window.addEventListener("keydown", unlockOnce);

// تهيئة المزايا الأصلية عند بدء التطبيق (تُتجاهل على الويب)
if (isNative) {
  window.addEventListener("load", () => {
    setTimeout(() => hideSplash(), 400);
  });
}

// تسجيل Service Worker (يخزّن التطبيق للأداء و offline) — على الويب فقط
if (!isNative && "serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/sw.js").catch(() => {
      // فشل التسجيل لا يؤثّر على عمل التطبيق
    });
  });
}
