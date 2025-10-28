import React, { useEffect, useState } from "react";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Capacitor } from "@capacitor/core";

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

      {/* 🌟 Hero Section */}
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

      {/* 💼 Skills Section */}
      <section id="skills" className="section-gradient-blue text-light" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-glow">My Technical Skills</h2>
          <p className="opacity-75">
            Expertise across front-end, back-end, and cloud for complete product development.
          </p>
        </div>

        <div className="row g-4">
          {[
            {
              title: "🎨 Frontend Development",
              items: ["HTML / CSS / SCSS", "JavaScript / TypeScript", "Angular", "React.js"],
            },
            {
              title: "⚙️ Backend Development",
              items: ["ASP.NET", "PHP"],
            },
            {
              title: "🗄️ Databases",
              items: ["SQL Server", "PostgreSQL", "MySQL"],
            },
            {
              title: "☁️ Cloud Platforms",
              items: ["Microsoft Azure", "Amazon Web Services (AWS)"],
            },
            {
              title: "🤖 AI & Developer Tools",
              items: ["GitHub Copilot", "Git & GitHub", "VS Code / Visual Studio"],
            },
          ].map(({ title, items }) => (
            <div className="col-md-6 col-lg-4" key={title}>
              <div className="card glass-card text-light h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="fw-bold mb-3 text-accent">{title}</h5>
                  <ul className="list-unstyled small">
                    {items.map((i) => (
                      <li key={i}>• {i}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 📱 Projects Section */}
      <section id="projects" className="section-gradient-purple text-light" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-glow">Featured Projects</h2>
          <p className="opacity-75">Some of the products and experiments I’ve built recently.</p>
        </div>

        <div className="row g-4">
          {[
            {
              title: "React PWA Portfolio",
              desc: "Responsive PWA portfolio with offline access and installable features.",
              img: "react-pwa-diagram.png",
            },
            {
              title: "ASP.NET + SQL Server Dashboard",
              desc: "Full-stack data visualization dashboard with secure API backend.",
              img: "dashboard.png",
            },
          ].map(({ title, desc, img }) => (
            <div className="col-md-6" key={title}>
              <div className="card glass-card h-100">
                <img src={img} alt={title} className="card-img-top rounded-top" />
                <div className="card-body">
                  <h5 className="fw-bold text-accent mb-2">{title}</h5>
                  <p className="opacity-75">{desc}</p>
                  <a href="#" className="btn btn-gradient btn-sm rounded-pill">
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ☁️ Cloud & Tools Section */}
      <section className="section-gradient-green text-light" data-aos="fade-up">
        <div className="text-center mb-5">
          <h2 className="fw-bold text-glow">React + PWA + Capacitor Stack</h2>
          <p className="opacity-75">Build once, run everywhere — web to mobile.</p>
        </div>

        <div className="row align-items-center g-4">
          <div className="col-md-6">
            <ul className="fs-6 list-unstyled">
              <li>⚛️ React — Component-based UI</li>
              <li>📦 Vite — Lightning-fast build tool</li>
              <li>📱 Capacitor — Native Android/iOS wrapper</li>
              <li>☁️ Service Worker — Offline caching</li>
              <li>🧭 Manifest.json — App metadata</li>
            </ul>
          </div>
          <div className="col-md-6 text-center">
            <img
              src="tech-diagram.png"
              alt="Tech Stack"
              className="img-fluid rounded-3 shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* ✉️ Contact Section */}
      <section id="contact" className="section-gradient-orange text-light text-center" data-aos="fade-up">
        <h2 className="fw-bold text-glow mb-4">Get In Touch ✉️</h2>
        <p className="opacity-75 mb-4">
          Have a project or collaboration idea? Let’s build something together.
        </p>
        <a
          href="mailto:jebin@example.com"
          className="btn btn-gradient-lg fw-semibold rounded-pill shadow-sm"
        >
          📧 jebin@example.com
        </a>
      </section>

      {/* ⚫ Footer */}
      <footer className="text-center text-white py-3 bg-dark">
        © {new Date().getFullYear()} Jebin Dhanush — Portfolio | Built with React + PWA + Capacitor
      </footer>
    </div>
  );
};

export default App;
