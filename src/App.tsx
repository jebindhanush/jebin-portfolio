import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Capacitor } from "@capacitor/core";
import skillsData from "./data/skills.json";
import experienceData from "./data/experience.json";


const App: React.FC = () => {
  const [isApp, setIsApp] = useState(false);  

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-in-out" });

    const isCapacitorApp = Capacitor.isNativePlatform();
    const isStandalonePWA =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    setIsApp(isCapacitorApp || isStandalonePWA);
  }, []);

  const handleDownloadClick = () => {
    alert("⚠️ Unsigned test APK — installation may show a warning.");
  };

  return (
    <div className="portfolio-app position-relative text-light">
      {/* 📦 APK Download Button */}
      {!isApp && (
        <div className="position-absolute top-0 end-0 p-3">
          <a
            href="https://github.com/jebindhanush/my-pwa-app/releases/download/test/app-debug.apk"
            onClick={handleDownloadClick}
            target="_blank"
            rel="noopener noreferrer"
            className="btn fw-semibold shadow-sm"
            style={{
              background: "linear-gradient(90deg, #36d1dc, #5b86e5)",
              color: "#fff",
              border: "none",
              borderRadius: "20px",
            }}
          >
            📱 Download APK
          </a>

          
        </div>

        
      )}
{/* 🌟 Hero / Intro Section */}
<section
  className="hero-section d-flex flex-column justify-content-center align-items-start px-4 px-md-5 text-light position-relative overflow-hidden"
  data-aos="fade-up"
>
  {/* Subtle background glow */}
  <div
    className="position-absolute top-0 start-0 w-100 h-100"
    style={{
      background: "radial-gradient(circle at 30% 20%, rgba(0,255,157,0.15), transparent 70%)",
      zIndex: 0,
    }}
  ></div>

  <div style={{ zIndex: 1 }}>
    <h1
      className="display-4 fw-bold mb-3"
      style={{
        background: "linear-gradient(90deg, #00ff9d, #00c2ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        textShadow: "0 0 20px rgba(0,255,157,0.4)",
      }}
    >
      👋 Hi, I’m <span className="fw-bold">Jebin&nbsp;T</span>
    </h1>

    <h3
      className="fw-semibold mb-3"
      style={{
        color: "#a8e6ff",
        letterSpacing: "1px",
        textShadow: "0 0 10px rgba(0,194,255,0.4)",
      }}
    >
      💻 Full Stack Developer | Cloud Enthusiast | Tech Explorer
    </h3>

    <p
      className="lead mb-4 opacity-75"
      style={{ maxWidth: "600px", lineHeight: "1.7" }}
    >
      I craft <span className="text-accent fw-semibold">scalable web & mobile solutions</span> using{" "}
      <strong>ASP.NET</strong>, <strong>Angular</strong>, <strong>React</strong>, and{" "}
      <strong>Cloud Platforms (Azure / AWS)</strong>.  
      Passionate about <span className="highlight">modern UI, performance</span>, and
      delivering meaningful digital experiences.
    </p>

    <div data-aos="zoom-in" data-aos-delay="300">
      <a href="#skills" className="btn btn-gradient fw-semibold shadow-sm rounded-pill me-2">
        🚀 Explore My Skills
      </a>
      <a
        href="#experience"
        className="btn btn-outline-light fw-semibold rounded-pill shadow-sm"
        style={{ border: "2px solid #00c2ff", color: "#00c2ff" }}
      >
        👨‍💻 Explore Experience
      </a>
    </div>
  </div>
</section>


{/* 🧑‍💻 Experience Section */}
 <section
      id="experience"
      className="section-gradient-cyan text-light"
      data-aos="fade-up"
    >
      <div className="text-center mb-5">
        <h2 className="fw-bold text-glow">Professional Experience</h2>
        <p className="opacity-75">
          A snapshot of my journey building enterprise applications, leading migrations,
          and delivering scalable software solutions.
        </p>
      </div>

      <div className="container">
        {experienceData.map(({ role, company, period, projects }, i) => (
          <div
            key={i}
            className="mb-3 glass-card shadow-sm p-3 rounded-4"
            style={{ cursor: "pointer" }}
            onClick={(e) => e.currentTarget.classList.toggle("expanded")}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="fw-bold text-accent mb-0">{role}</h5>
                <small className="opacity-75">{company}</small>
              </div>
              <span className="text-accent small fw-semibold">{period}</span>
            </div>

            <div className="experience-details mt-3">
              {projects.map((proj, j) => (
                <div key={j} className="mb-3">
                  <h6 className="fw-semibold text-light mb-1">📁 {proj.name}</h6>
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
                    style={{ height: "8px", background: "rgba(255,255,255,0.1)" }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${level}%`,
                        background: "linear-gradient(90deg, #00ff9d, #00c2ff)",
                        boxShadow: "0 0 10px rgba(0,255,150,0.6)"
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
      <section id="contact" className="section-gradient-white text-dark text-center" data-aos="fade-up">
        <h2 className="fw-bold text-glow mb-4">Get In Touch ✉️</h2>
        <p className="opacity-75 mb-4">
          Have a project or collaboration idea? Let’s build something together.
        </p>
        <a
          href="mailto:jebin.t97@gmail.com"
          className="btn btn-gradient-lg fw-semibold rounded-pill shadow-sm"
        >
          📧 jebin.t97@gmail.com
        </a>
      </section>

      {/* ⚫ Footer */}
      <footer className="text-center text-white py-3 bg-dark">
        © {new Date().getFullYear()} Jebin Dhanush — Portfolio | Built with React + PWA
      </footer>
    </div>
  );
};

export default App;
