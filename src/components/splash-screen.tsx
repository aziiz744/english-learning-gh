import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import owlWave from "@/assets/owl/owl-wave.png";

// شاشة ترحيب احترافية متحركة تظهر عند فتح التطبيق ثم تتلاشى بسلاسة
export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            background: "linear-gradient(160deg, #16B6C6 0%, #0DBFA0 55%, #08334A 100%)",
            overflow: "hidden",
          }}
        >
          {/* وهج إشعاعي خلف الشعار */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: "absolute", width: 420, height: 420, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.18) 0%, transparent 65%)",
            }}
          />

          {/* حلقات متموّجة تنتشر من المركز */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.3, opacity: 0.5 }}
              animate={{ scale: 2.2, opacity: 0 }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "easeOut" }}
              style={{
                position: "absolute", width: 180, height: 180, borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.25)",
              }}
            />
          ))}

          {/* بطاقة الشعار الزجاجية */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 180, damping: 16, delay: 0.1 }}
            style={{
              position: "relative", width: 130, height: 130, borderRadius: 36,
              background: "rgba(255,255,255,0.14)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.25)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 12px 40px rgba(0,0,0,0.2)",
            }}
          >
            <motion.img
              src={owlWave}
              alt="Owlio"
              width={96}
              height={96}
              draggable={false}
              animate={{ y: [0, -6, 0], rotate: [0, -3, 3, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              style={{ width: 96, height: 96, objectFit: "contain", filter: "drop-shadow(0 6px 14px rgba(0,0,0,0.2))" }}
            />
          </motion.div>

          {/* اسم التطبيق */}
          <motion.h1
            initial={{ opacity: 0, y: 14, letterSpacing: 8 }}
            animate={{ opacity: 1, y: 0, letterSpacing: 2 }}
            transition={{ delay: 0.45, duration: 0.6, ease: "easeOut" }}
            style={{
              marginTop: 26, fontSize: 42, fontWeight: 900, color: "white",
              fontFamily: "'Outfit', sans-serif",
              textShadow: "0 4px 14px rgba(0,0,0,0.22)",
            }}
          >
            Owlio
          </motion.h1>

          {/* خط فاصل أنيق */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 56, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            style={{ height: 2.5, background: "rgba(255,255,255,0.5)", borderRadius: 2, marginTop: 12 }}
          />

          {/* شعار فرعي */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            style={{
              marginTop: 14, fontSize: 15, fontWeight: 600,
              color: "rgba(255,255,255,0.88)", direction: "rtl", letterSpacing: 0.5,
            }}
          >
            رحلتك لإتقان الإنجليزية
          </motion.p>

          {/* مؤشّر تحميل أنيق (شريط) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            style={{
              position: "absolute", bottom: 64, width: 130, height: 3,
              background: "rgba(255,255,255,0.2)", borderRadius: 3, overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "60%", height: "100%", background: "white", borderRadius: 3 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
