import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import skillsData from "./data/skills.json";
import experienceData from "./data/experience.json";
import myInfo from "./data/myInfo.json";


const App: React.FC = () => {
  const [theme, setTheme] = useState<"blue-cyan" | "green-purple">(
    (localStorage.getItem("theme") as "blue-cyan" | "green-purple") || "blue-cyan"
  );

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });

  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "blue-cyan" ? "green-purple" : "blue-cyan"));
  };

  const gradients = {
    "blue-cyan": "linear-gradient(90deg, #00ff9d, #00c2ff)",
    "green-purple": "linear-gradient(90deg, #7fff00, #b000ff)",
  };

  return (
    <div
      className="portfolio-app position-relative text-light"
      data-theme={theme} // 👈 add this line
      style={{
        background:
          theme === "blue-cyan"
            ? "linear-gradient(180deg, #0b0b0b 0%, #0e1a24 100%)"
            : "linear-gradient(180deg, #18001f 0%, #0b0010 100%)",
        transition: "background 0.8s ease",
      }}
    >
  <div
    className="position-fixed top-0 end-0 p-3"
    style={{ zIndex: 9999, display: "flex", gap: "0.5rem" }}
  >
    
    {/* 🎨 Theme Switcher */}
    <button
      onClick={toggleTheme}
      className="btn fw-semibold shadow-sm"
      style={{
        background: gradients[theme],
        border: "none",
        borderRadius: "20px",
        color: "#fff",
        transition: "all 0.3s ease",
      }}
    >
      🎨 Switch Theme
    </button>
  </div>

      {/* 🌟 Hero / Intro Section */}
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
         <h1
  className="display-4 fw-bold mb-3 gradient-text"
  key={theme} // 👈 forces React to re-render text properly on theme change
>
  👋 Hi, I’m <span className="fw-bold">{myInfo.name}</span>
</h1>

          <h3
            className="fw-semibold mb-3"
            style={{
              color: theme === "blue-cyan" ? "#a8e6ff" : "#dba6ff",
              letterSpacing: "1px",
              textShadow:
                theme === "blue-cyan"
                  ? "0 0 10px rgba(0,194,255,0.4)"
                  : "0 0 10px rgba(155,0,255,0.4)",
            }}
          >
            💻 {myInfo.title}
          </h3>

          <p
            className="lead mb-4 opacity-75"
            style={{ maxWidth: "600px", lineHeight: "1.7" }}
          >
            {myInfo.about.part1}{" "}
            <span className="text-accent fw-semibold">
              {myInfo.about.part2}
            </span>{" "}
            {myInfo.about.part3}
            <span className="highlight">{myInfo.about.part4}</span>
            {myInfo.about.part5}.
          </p>

          <div data-aos="zoom-in" data-aos-delay="300">
            <a
              href="#skills"
              className="btn btn-gradient fw-semibold shadow-sm rounded-pill me-2"
              style={{ background: gradients[theme], color: "#fff" }}
            >
              🚀 Explore My Skills
            </a>
            <a
              href="#experience"
              className="btn btn-outline-light fw-semibold rounded-pill shadow-sm"
              style={{
                border: `2px solid ${
                  theme === "blue-cyan" ? "#00c2ff" : "#b000ff"
                }`,
                color: theme === "blue-cyan" ? "#00c2ff" : "#b000ff",
              }}
            >
              👨‍💻 Explore Experience
            </a>
          </div>
        </div>
      </section>

      {/* 🧑‍💻 Experience Section */}
{/* 🧑‍💻 Experience Section */}
<section
  id="experience"
  className="text-light"
  data-aos="fade-up"
  style={{
    background:
      theme === "blue-cyan"
        ? "linear-gradient(180deg, #02141d 0%, #0e1a24 100%)"
        : "linear-gradient(180deg, #1b0021 0%, #0c0012 100%)",
    transition: "background 0.8s ease",
    padding: "80px 0",
  }}
>
  <div className="text-center mb-5">
    <h2
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
      Professional Experience
    </h2>
    <p className="opacity-75">
      A snapshot of my journey building enterprise applications, leading
      migrations, and delivering scalable software solutions.
    </p>
  </div>

  <div className="container">
    {experienceData.map(({ role, company, period, projects }, i) => (
      <div
        key={i}
        className="mb-3 glass-card shadow-sm p-3 rounded-4"
        style={{
          cursor: "pointer",
          background:
            theme === "blue-cyan"
              ? "rgba(0, 255, 157, 0.05)"
              : "rgba(155, 0, 255, 0.05)",
          border: `1px solid ${
            theme === "blue-cyan" ? "rgba(0, 255, 157, 0.3)" : "rgba(155, 0, 255, 0.3)"
          }`,
          transition: "all 0.4s ease",
        }}
        onClick={(e) => e.currentTarget.classList.toggle("expanded")}
      >
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h5
              className="fw-bold mb-0"
              style={{
                color: theme === "blue-cyan" ? "#00ff9d" : "#b000ff",
              }}
            >
              {role}
            </h5>
            <small className="opacity-75">{company}</small>
          </div>
          <span
            className="small fw-semibold"
            style={{
              color: theme === "blue-cyan" ? "#00c2ff" : "#dba6ff",
            }}
          >
            {period}
          </span>
        </div>

        <div className="experience-details mt-3">
          {projects.map((proj, j) => (
            <div key={j} className="mb-3">
              <h6
                className="fw-semibold mb-1"
                style={{ color: theme === "blue-cyan" ? "#a8e6ff" : "#dba6ff" }}
              >
                📁 {proj.name}
              </h6>
              <ul className="list-unstyled small mb-0 opacity-85">
                {proj.description.map((d, k) => (
                  <li key={k}>• {d}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
</section>

      {/* 💼 Skills Section */}
      <section id="skills" className="section-gradient-blue text-light" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-glow">My Technical Skills</h2>
          <p className="opacity-75">
            Expertise across front-end, back-end, mobile, and cloud — with strong focus on quality and scalability.
          </p>
        </div>

        <div className="row g-4">
          {skillsData.map(({ title, skills }) => (
            <div className="col-md-6 col-lg-4" key={title}>
              <div className="card glass-card text-light h-100 shadow-sm p-3">
                <h5 className="fw-bold mb-3 text-accent">{title}</h5>
                {skills.map(({ name, level }) => (
                  <div key={name} className="mb-3">
                    <div className="d-flex justify-content-between small">
                      <span>{name}</span>
                      <span>{level}%</span>
                    </div>
                    <div
                      className="progress"
                      style={{
                        height: "8px",
                        background: "rgba(255,255,255,0.1)",
                      }}
                    >
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${level}%`,
                          background: gradients[theme],
                          boxShadow: "0 0 10px rgba(0,255,150,0.6)",
                          transition: "width 1s ease",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ✉️ Contact Section */}
      <section
        id="contact"
        className="section-gradient-white text-dark text-center"
        data-aos="fade-up"
      >
        <h2 className="fw-bold text-glow mb-4">Get In Touch ✉️</h2>
        <p className="opacity-75 mb-4">
          Have a project or collaboration idea? Let’s build something together.
        </p>
        <a
          href="mailto:jebin.t97@gmail.com"
          className="btn fw-semibold rounded-pill shadow-sm"
          style={{
            background: gradients[theme],
            color: "#fff",
            border: "none",
          }}
        >
          📧 jebin.t97@gmail.com
        </a>
      </section>

      {/* ⚫ Footer */}
      <footer className="text-center text-white py-3 bg-dark">
        © {new Date().getFullYear()} Jebin T — Portfolio | Built with React + PWA
      </footer>
    </div>
  );
};

export default App;
