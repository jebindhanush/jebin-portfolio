import React from "react";
import myInfo from "../data/myInfo.json";
import "../styles/education.css";    // in Education.tsx

interface Props {
  theme: "blue-cyan" | "green-purple";
  gradients: Record<string, string>;
}

const ContactSection: React.FC<Props> = ({ theme, gradients }) => (
  <section
  id="education"
  className="text-light position-relative overflow-hidden"
  data-aos="fade-up"
  style={{
    background:
      theme === "blue-cyan"
        ? "linear-gradient(180deg, #04121b 0%, #0e1a24 100%)"
        : "linear-gradient(180deg, #1a0020 0%, #0c0012 100%)",
    padding: "100px 0",
    transition: "background 0.8s ease",
  }}
>
  {/* 🌌 Floating Glitter Overlay */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background: `radial-gradient(circle at 10% 20%, ${
        theme === "blue-cyan"
          ? "rgba(0,255,157,0.2)"
          : "rgba(180,0,255,0.2)"
      }, transparent 70%)`,
      mixBlendMode: "screen",
      pointerEvents: "none",
      animation: "twinkle 10s linear infinite",
    }}
  ></div>

  <div className="container position-relative">
    {/* ✨ Title */}
    <div className="text-center mb-5">
     <h2
  key={theme}
  className="fw-bold text-glow"
  style={{
    background: gradients[theme],
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    textShadow:
      theme === "blue-cyan"
        ? "0 0 15px rgba(0,255,157,0.4)"
        : "0 0 15px rgba(155,0,255,0.4)",
    transition: "all 0.5s ease",
  }}
>
  Education
</h2>
      <p className="opacity-75">
        My academic path that built the foundation of my tech journey.
      </p>
    </div>

    {/* 🎓 Education Cards */}
    <div className="row g-4 justify-content-center">
      {myInfo.education.map(({ degree, institution, year }, index) => (
        <div className="col-md-6 col-lg-4" key={index}>
          <div
            className="glass-card shadow-lg p-4 rounded-4 position-relative h-100"
            style={{
              background:
                theme === "blue-cyan"
                  ? "rgba(0, 255, 157, 0.08)"
                  : "rgba(155, 0, 255, 0.08)",
              border: `1px solid ${
                theme === "blue-cyan"
                  ? "rgba(0, 255, 157, 0.4)"
                  : "rgba(155, 0, 255, 0.4)"
              }`,
              backdropFilter: "blur(12px)",
              boxShadow:
                theme === "blue-cyan"
                  ? "0 0 25px rgba(0,255,157,0.2), inset 0 0 10px rgba(0,255,157,0.15)"
                  : "0 0 25px rgba(155,0,255,0.2), inset 0 0 10px rgba(155,0,255,0.15)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              overflow: "hidden",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-6px)";
              e.currentTarget.style.boxShadow =
                theme === "blue-cyan"
                  ? "0 0 35px rgba(0,255,157,0.4)"
                  : "0 0 35px rgba(155,0,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow =
                theme === "blue-cyan"
                  ? "0 0 25px rgba(0,255,157,0.2)"
                  : "0 0 25px rgba(155,0,255,0.2)";
            }}
          >
            {/* 🌟 Shimmer Border Animation */}
            <div
              className="position-absolute top-0 start-0 w-100 h-100"
              style={{
                background: `linear-gradient(120deg, transparent, ${
                  theme === "blue-cyan"
                    ? "rgba(0,255,157,0.2)"
                    : "rgba(180,0,255,0.2)"
                }, transparent)`,
                transform: "translateX(-100%)",
                animation: "shine 6s linear infinite",
              }}
            ></div>

            <h5
              className="fw-bold mb-2"
              style={{
                color: theme === "blue-cyan" ? "#00ff9d" : "#b000ff",
              }}
            >
              🎓 {degree}
            </h5>
            <p className="mb-1 small opacity-75">{institution}</p>
            <span
              className="fw-semibold small"
              style={{
                color: theme === "blue-cyan" ? "#00c2ff" : "#dba6ff",
              }}
            >
              {year}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
);

export default ContactSection;
