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
          {/* وهج إشعاعي ناعm خلف Owlie */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1.1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            style={{
              position: "absolute", width: 480, height: 480, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.22) 0%, transparent 62%)",
              top: "30%", transform: "translateY(-50%)",
            }}
          />

          {/* حلقات متموّجة تنتشر بهدوء */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.4, opacity: 0.4 }}
              animate={{ scale: 2.4, opacity: 0 }}
              transition={{ duration: 3.2, repeat: Infinity, delay: i * 1.05, ease: "easeOut" }}
              style={{
                position: "absolute", top: "30%", width: 220, height: 220, borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.22)", transform: "translateY(-50%)",
              }}
            />
          ))}

          {/* Owlie — كبير وبارز بدون إطار، يدخل بحركة احترافية */}
          <motion.img
            src={owlWave}
            alt="Owlio"
            width={200}
            height={200}
            draggable={false}
            initial={{ scale: 0.4, opacity: 0, y: 30 }}
            animate={{
              scale: 1, opacity: 1, y: [0, -12, 0],
            }}
            transition={{
              scale: { type: "spring", stiffness: 160, damping: 14, delay: 0.1 },
              opacity: { duration: 0.5, delay: 0.1 },
              y: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
            }}
            style={{
              width: 200, height: 200, objectFit: "contain",
              filter: "drop-shadow(0 14px 30px rgba(0,0,0,0.3))",
              marginBottom: 10,
            }}
          />

          {/* اسم التطبيق */}
          <motion.h1
            initial={{ opacity: 0, y: 16, letterSpacing: 10 }}
            animate={{ opacity: 1, y: 0, letterSpacing: 2 }}
            transition={{ delay: 0.5, duration: 0.65, ease: "easeOut" }}
            style={{
              fontSize: 46, fontWeight: 900, color: "white",
              fontFamily: "'Outfit', sans-serif",
              textShadow: "0 4px 16px rgba(0,0,0,0.25)",
            }}
          >
            Owlio
          </motion.h1>

          {/* خط فاصل أنيق */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 60, opacity: 1 }}
            transition={{ delay: 0.75, duration: 0.5 }}
            style={{ height: 2.5, background: "rgba(255,255,255,0.55)", borderRadius: 2, marginTop: 14 }}
          />

          {/* شعار فرعي */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            style={{
              marginTop: 16, fontSize: 16, fontWeight: 600,
              color: "rgba(255,255,255,0.9)", direction: "rtl", letterSpacing: 0.5,
            }}
          >
            رحلتك لإتقان الإنجليزية
          </motion.p>

          {/* مؤشّر تحميل أنيق */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15 }}
            style={{
              position: "absolute", bottom: 66, width: 140, height: 3,
              background: "rgba(255,255,255,0.22)", borderRadius: 3, overflow: "hidden",
            }}
          >
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: "55%", height: "100%", background: "white", borderRadius: 3 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
