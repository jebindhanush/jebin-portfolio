import React from "react";
import myInfo from "../data/myInfo.json";
import "../styles/hero.css";         // in Hero.tsx

interface HeroProps {
  theme: "blue-cyan" | "green-purple";
  gradients: Record<string, string>;
}

const HeroSection: React.FC<HeroProps> = ({ theme, gradients }) => (
  <section
    className="hero-section d-flex flex-column justify-content-center align-items-start px-4 px-md-5 text-light position-relative overflow-hidden"
    data-aos="fade-up"
  >
    <div
      className="position-absolute top-0 start-0 w-100 h-100"
      style={{
        background:
          theme === "blue-cyan"
            ? "radial-gradient(circle at 30% 20%, rgba(0,255,157,0.15), transparent 70%)"
            : "radial-gradient(circle at 30% 20%, rgba(155,0,255,0.15), transparent 70%)",
        zIndex: 0,
      }}
    ></div>

    <div style={{ zIndex: 1 }}>
      <h1 className="display-4 fw-bold mb-3 gradient-text" key={theme}>
        👋 Hi, I’m <span className="fw-bold">{myInfo.name}</span>
      </h1>
      <h3
        className="fw-semibold mb-3"
        style={{
          color: theme === "blue-cyan" ? "#a8e6ff" : "#dba6ff",
          textShadow:
            theme === "blue-cyan"
              ? "0 0 10px rgba(0,194,255,0.4)"
              : "0 0 10px rgba(155,0,255,0.4)",
        }}
      >
        💻 {myInfo.title}
      </h3>

      <p className="lead mb-4 opacity-75" style={{ maxWidth: "600px" }}>
        {myInfo.about.part1}{" "}
        <span className="text-accent fw-semibold">{myInfo.about.part2}</span>{" "}
        {myInfo.about.part3}
        <span className="highlight">{myInfo.about.part4}</span>
        {myInfo.about.part5}.
      </p>

      <div className="d-flex flex-wrap gap-3">
        <a href="#experience" className="btn btn-outline-light rounded-pill" style={{
          border: `2px solid ${theme === "blue-cyan" ? "#00c2ff" : "#b000ff"}`,
          color: theme === "blue-cyan" ? "#00c2ff" : "#b000ff"
        }}>👨‍💻 Experience</a>

        <a href="#skills" className="btn rounded-pill" style={{
          background: gradients[theme], color: "#fff"
        }}>🚀 Skills</a>

        <a href="#education" className="btn btn-outline-light rounded-pill" style={{
          border: `2px solid ${theme === "blue-cyan" ? "#00ff9d" : "#b000ff"}`,
          color: theme === "blue-cyan" ? "#00ff9d" : "#b000ff"
        }}>🎓 Education</a>
      </div>
    </div>
  </section>
);

export default HeroSection;
