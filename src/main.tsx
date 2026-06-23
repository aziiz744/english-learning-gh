import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { hideSplash, isNative } from "./lib/native";

createRoot(document.getElementById("root")!).render(<App />);

// تهيئة المزايا الأصلية عند بدء التطبيق (تُتجاهل على الويب)
if (isNative) {
  window.addEventListener("load", () => {
    setTimeout(() => hideSplash(), 400);
  });
}
