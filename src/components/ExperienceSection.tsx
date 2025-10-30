import React from "react";
import experienceData from "../data/experience.json";
import "../styles/experience.css";   // in Experience.tsx

interface Props {
  theme: "blue-cyan" | "green-purple";
  gradients: Record<string, string>;
}

const ExperienceSection: React.FC<Props> = ({ theme, gradients }) => (
  <section id="experience" className="text-light" data-aos="fade-up"
    style={{
      background:
        theme === "blue-cyan"
          ? "linear-gradient(180deg, #02141d 0%, #0e1a24 100%)"
          : "linear-gradient(180deg, #1b0021 0%, #0c0012 100%)",
      padding: "80px 0",
    }}
  >
    <div className="text-center mb-5">
      <h2 className="fw-bold text-glow"
        style={{
          background: gradients[theme],
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent"
        }}>
        Professional Experience
      </h2>
    </div>

    <div className="container">
      {experienceData.map(({ role, company, period, projects }, i) => (
        <div key={i} className="mb-3 glass-card p-3 rounded-4">
          <div className="d-flex justify-content-between">
            <div>
              <h5 style={{ color: theme === "blue-cyan" ? "#00ff9d" : "#b000ff" }}>
                {role}
              </h5>
              <small>{company}</small>
            </div>
            <span>{period}</span>
          </div>
          <div className="mt-3">
            {projects.map((proj, j) => (
              <div key={j}>
                <h6>📁 {proj.name}</h6>
                <ul>{proj.description.map((d, k) => <li key={k}>{d}</li>)}</ul>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
