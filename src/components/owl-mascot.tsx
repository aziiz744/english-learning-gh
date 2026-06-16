import { useState, useEffect } from "react";

// البومة السماوية — هوية الموقع التحفيزية
// states: idle | happy | sad | celebrate
export function OwlMascot({ state = "idle", size = 120, message }: {
  state?: "idle" | "happy" | "sad" | "celebrate";
  size?: number;
  message?: string;
}) {
  const scale = size / 170;
  const [jump, setJump] = useState(false);

  useEffect(() => {
    if (state === "happy" || state === "celebrate") {
      setJump(true);
      const t = setTimeout(() => setJump(false), 600);
      return () => clearTimeout(t);
    }
  }, [state]);

  // ميلان العين حسب الحالة
  const pupilShift = state === "sad" ? 4 : 0;
  const eyeScaleY = state === "sad" ? 0.6 : 1;

  return (
    <div style={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center", userSelect: "none" }}>
      {/* فقاعة الكلام */}
      {message && (
        <div style={{
          background: "#fff", border: "3px solid #00b4cc", borderRadius: 16,
          padding: "8px 16px", fontWeight: 800, color: "#00b4cc", fontSize: 13,
          boxShadow: "0 6px 14px rgba(0,0,0,0.1)", marginBottom: 14,
          position: "relative", textAlign: "center", whiteSpace: "nowrap", direction: "ltr",
        }}>
          {message}
          <div style={{ position:"absolute", bottom:-10, left:"50%", transform:"translateX(-50%)", width:0, height:0, borderLeft:"9px solid transparent", borderRight:"9px solid transparent", borderTop:"10px solid #00b4cc" }}/>
          <div style={{ position:"absolute", bottom:-6, left:"50%", transform:"translateX(-50%)", width:0, height:0, borderLeft:"7px solid transparent", borderRight:"7px solid transparent", borderTop:"8px solid #fff" }}/>
        </div>
      )}

      {/* الجسم */}
      <div
        className={jump ? "owl-jump" : "owl-float"}
        style={{ width: 170 * scale, height: 170 * scale, position: "relative", transformOrigin: "bottom center" }}
      >
        <div style={{ width: 170, height: 170, position: "absolute", top: 0, left: 0, transform: `scale(${scale})`, transformOrigin: "top left" }}>
          {/* السماعات */}
          <div style={{ position: "absolute", width: "100%", top: -5 }}>
            <div style={{ position:"absolute", width:150, height:80, border:"8px solid #ff7043", borderBottom:"none", borderRadius:"80px 80px 0 0", left:"50%", transform:"translateX(-50%)", top:-5 }}/>
            <div style={{ width:24, height:45, background:"#ff7043", position:"absolute", borderRadius:12, top:45, left:-8, boxShadow:"0 4px 8px rgba(0,0,0,0.1)" }}/>
            <div style={{ width:24, height:45, background:"#ff7043", position:"absolute", borderRadius:12, top:45, right:-8, boxShadow:"0 4px 8px rgba(0,0,0,0.1)" }}/>
          </div>

          {/* جسم البومة */}
          <div style={{ width:170, height:170, background:"#4fc3f7", borderRadius:"50% 50% 45% 45%", position:"relative", boxShadow:"inset -12px -12px 0px rgba(0,0,0,0.06), 0 12px 24px rgba(0,0,0,0.1)" }}>
            {/* العينان */}
            <div style={{ position:"absolute", top:45, width:"100%", display:"flex", justifyContent:"space-around", padding:"0 20px", boxSizing:"border-box" }}>
              {[0,1].map(i=>(
                <div key={i} style={{ width:42, height:42*eyeScaleY, background:"#fff", borderRadius:"50%", position:"relative", display:"flex", justifyContent:"center", alignItems:"center", border:"2px solid #29b6f6", transition:"height 0.3s" }}>
                  <div style={{ width:22, height:22, background:"#37474f", borderRadius:"50%", position:"relative", transform:`translateY(${pupilShift}px)`, transition:"transform 0.3s" }}>
                    <div style={{ position:"absolute", top:3, left:3, width:7, height:7, background:"#fff", borderRadius:"50%" }}/>
                  </div>
                </div>
              ))}
            </div>

            {/* المنقار */}
            <div style={{ position:"absolute", top:80, left:"50%", transform:"translateX(-50%)", width:0, height:0, borderLeft:"12px solid transparent", borderRight:"12px solid transparent", borderTop:"16px solid #ffb74d", borderRadius:4 }}/>

            {/* الأجنحة */}
            <div style={{ position:"absolute", width:"100%", top:75 }}>
              <div className={jump?"owl-wing-l-up":""} style={{ width:35, height:55, background:"#29b6f6", borderRadius:"50%", position:"absolute", left:-20, transformOrigin:"right top", transform:"rotate(20deg)" }}/>
              <div className={jump?"owl-wing-r-up":""} style={{ width:35, height:55, background:"#29b6f6", borderRadius:"50%", position:"absolute", right:-20, transformOrigin:"left top", transform:"rotate(-20deg)" }}/>
            </div>

            {/* ريش الصدر */}
            <div style={{ position:"absolute", bottom:25, width:"100%", display:"flex", justifyContent:"center", gap:8 }}>
              {[0,1,2].map(i=>(
                <div key={i} style={{ width:14, height:8, border:"2px solid #e0f7fa", borderTop:"none", borderRadius:"0 0 10px 10px" }}/>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes owlFloat { 0%{transform:translateY(0)} 50%{transform:translateY(-12px)} 100%{transform:translateY(0)} }
        @keyframes owlJump {
          0%{transform:scale(1) translateY(0)}
          20%{transform:scale(1.12,0.88) translateY(0)}
          50%{transform:scale(0.88,1.18) translateY(-38px)}
          80%{transform:scale(1.04,0.96) translateY(0)}
          100%{transform:scale(1) translateY(0)}
        }
        .owl-float { animation: owlFloat 3s ease-in-out infinite; }
        .owl-jump { animation: owlJump 0.6s cubic-bezier(0.175,0.885,0.32,1.275); }
        .owl-wing-l-up { transform: rotate(-40deg) !important; transition: transform 0.2s; }
        .owl-wing-r-up { transform: rotate(40deg) !important; transition: transform 0.2s; }
      `}</style>
    </div>
  );
}
