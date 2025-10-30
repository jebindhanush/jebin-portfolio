import React from "react";
import skillsData from "../data/skills.json";

interface Props {
  theme: "blue-cyan" | "green-purple";
  gradients: Record<string, string>;
}

const SkillsSection: React.FC<Props> = ({ theme, gradients }) => (
  <section id="skills" className="text-light" data-aos="fade-up">
    <div className="text-center mb-5">
      <h2 className="fw-bold text-glow">My Technical Skills</h2>
    </div>

    <div className="row g-4">
      {skillsData.map(({ title, skills }) => (
        <div className="col-md-6 col-lg-4" key={title}>
          <div className="card glass-card text-light h-100 shadow-sm p-3">
            <h5 className="fw-bold mb-3 text-accent">{title}</h5>
            {skills.map(({ name, level }) => (
              <div key={name}>
                <div className="d-flex justify-content-between small">
                  <span>{name}</span><span>{level}%</span>
                </div>
                <div className="progress" style={{ height: "8px" }}>
                  <div
                    className="progress-bar"
                    style={{
                      width: `${level}%`,
                      background: gradients[theme],
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
);

export default SkillsSection;
