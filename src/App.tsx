import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Capacitor } from "@capacitor/core";
import skillsData from "./data/skills.json";

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

      {/* 🌟 Header Section */}
      <section className="hero-section d-flex flex-column justify-content-center align-items-start px-4 px-md-5 text-light">
        <h1 className="display-4 fw-bold mb-3">
          Hi, I’m <span className="text-accent">Jebin Dhanush</span> 👋
        </h1>
        <p className="lead mb-4">
          I’m a <strong>Full Stack Developer</strong> who builds{" "}
          <span className="highlight">scalable web & mobile apps</span> using{" "}
          <strong>ASP.NET</strong>, <strong>Angular</strong>, <strong>React</strong>, and{" "}
          <strong>Cloud Technologies</strong>.
        </p>
        <a href="#skills" className="btn btn-gradient fw-semibold shadow-sm rounded-pill">
          Explore My Skills 🚀
        </a>
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
            A snapshot of my journey in building software and leading development efforts.
          </p>
        </div>

        <div className="container">
          {[
            {
              role: "Lead Analyst",
              company: "CGI Inc.",
              period: "March 2023 – Present",
              details: [
                "Developing and deploying scalable web applications using React, .NET, and Azure.",
                "Built custom APIs and improved load times by 40%.",
                "Collaborated cross-functionally with product and design teams.",
              ],
            },
            {
              role: "Lean Engineer",
              company: "Hcl Technologies",
              period: "Jan 2021 – March 2023",
              details: [
                "Created enterprise dashboards in Angular & ASP.NET Core.",
                "Implemented CI/CD pipelines for faster, automated releases.",
                "Mentored junior developers on React and TypeScript.",
              ],
            },
            {
              role: "Software Developer",
              company: "Creative Minds Labs",
              period: "Jan 2019 – Oct 2022",
              details: [
                "Built responsive UI prototypes with HTML, CSS, and JavaScript.",
                "Assisted in database design and SQL query optimization.",
              ],
            },
          ].map(({ role, company, period, details }, i) => (
            <div
              key={i}
              className="mb-3 glass-card shadow-sm p-3 rounded-4"
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                const card = e.currentTarget;
                card.classList.toggle("expanded");
              }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="fw-bold text-accent mb-0">{role}</h5>
                  <small className="opacity-75">{company}</small>
                </div>
                <span className="text-accent small fw-semibold">{period}</span>
              </div>

              <div className="experience-details mt-3">
                <ul className="list-unstyled small mb-0">
                  {details.map((d, j) => (
                    <li key={j}>• {d}</li>
                  ))}
                </ul>
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
