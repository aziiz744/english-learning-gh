import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { hideSplash, isNative } from "./lib/native";
import { unlockAudio } from "./hooks/useSound";

createRoot(document.getElementById("root")!).render(<App />);

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
