import React from "react";

interface ThemeSwitcherProps {
  theme: "blue-cyan" | "green-purple";
  toggleTheme: () => void;
  gradients: Record<string, string>;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ theme, toggleTheme, gradients }) => (
  <div
    className="position-fixed top-0 end-0 p-3"
    style={{ zIndex: 9999, display: "flex", gap: "0.5rem" }}
  >
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
);

export default ThemeSwitcher;
