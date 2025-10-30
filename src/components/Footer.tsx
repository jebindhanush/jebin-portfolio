import React from "react";
import packageJson from "../../package.json";

interface Props {
  theme: "blue-cyan" | "green-purple";
  gradients: Record<string, string>;
}

const Footer: React.FC<Props> = ({ theme }) => (
  <footer
    className="text-center text-white py-4"
    style={{
      background:
        theme === "blue-cyan"
          ? "linear-gradient(90deg, #00141d, #00334d)"
          : "linear-gradient(90deg, #1a0020, #3b0055)",
    }}
  >
    <div className="container">
      <div className="d-flex justify-content-center gap-4 mb-3">
        <a
          href="https://www.linkedin.com/in/jebin-t-9752ab184/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: theme === "blue-cyan" ? "#00c2ff" : "#b000ff",
            fontSize: "1.5rem",
          }}
        >
          <i className="bi bi-linkedin"></i>
        </a>
        <a
          href="https://jebindhanush.github.io/jebin-portfolio/"
          target="_blank"
          rel="noreferrer"
          style={{
            color: theme === "blue-cyan" ? "#00c2ff" : "#b000ff",
            fontSize: "1.5rem",
          }}
        >
          <i className="bi bi-globe2"></i>
        </a>
      </div>

      <p className="small mb-0">
        © {new Date().getFullYear()} Jebin T — Portfolio v{packageJson.version}
      </p>
    </div>
  </footer>
);

export default Footer;
