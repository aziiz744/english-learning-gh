import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import owlWave from "@/assets/owl/owl-wave.png";

// شاشة ترحيب متحركة تظهر عند فتح التطبيق ثم تتلاشى بسلاسة
export function SplashScreen({ onDone }: { onDone: () => void }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // اعرض الشاشة ~2.2 ثانية ثم اخفِها
    const timer = setTimeout(() => setShow(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onDone}>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center",
            background: "linear-gradient(160deg, #16B6C6 0%, #0DBFA0 60%, #08334A 100%)",
            overflow: "hidden",
          }}
        >
          {/* دوائر زخرفية متحركة في الخلفية */}
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "absolute", top: "-15%", right: "-10%", width: 300, height: 300, borderRadius: "50%", background: "rgba(255,255,255,0.12)" }}
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            style={{ position: "absolute", bottom: "-10%", left: "-12%", width: 280, height: 280, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }}
          />

          {/* Owlie يظهر بحركة لطيفة */}
          <motion.div
            initial={{ scale: 0, rotate: -20, y: 20 }}
            animate={{ scale: 1, rotate: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 14, delay: 0.15 }}
          >
            <motion.img
              src={owlWave}
              alt="Owlie"
              width={150}
              height={150}
              draggable={false}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              style={{ width: 150, height: 150, objectFit: "contain", filter: "drop-shadow(0 8px 20px rgba(0,0,0,0.25))" }}
            />
          </motion.div>

          {/* اسم التطبيق */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            style={{
              marginTop: 20, fontSize: 44, fontWeight: 900, color: "white",
              letterSpacing: 1, textShadow: "0 4px 12px rgba(0,0,0,0.2)",
            }}
          >
            Owlio
          </motion.h1>

          {/* شعار فرعي */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            style={{ marginTop: 6, fontSize: 15, fontWeight: 600, color: "rgba(255,255,255,0.9)", direction: "rtl" }}
          >
            رحلتك لإتقان الإنجليزية 🦉
          </motion.p>

          {/* نقاط تحميل متحركة */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            style={{ marginTop: 30, display: "flex", gap: 8 }}
          >
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.18 }}
                style={{ width: 9, height: 9, borderRadius: "50%", background: "white" }}
              />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
