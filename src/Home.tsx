import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

import ThemeSwitcher from "./components/ThemeSwitcher";
import HeroSection from "./components/HeroSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const Home: React.FC = () => {
  const [theme, setTheme] = useState<"blue-cyan" | "green-purple">(
    (localStorage.getItem("theme") as "blue-cyan" | "green-purple") || "blue-cyan"
  );

  const gradients = {
    "blue-cyan": "linear-gradient(90deg, #00ff9d, #00c2ff)",
    "green-purple": "linear-gradient(90deg, #7fff00, #b000ff)",
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "blue-cyan" ? "green-purple" : "blue-cyan"));
    localStorage.setItem("theme", theme);
  };

  return (
    <div className="portfolio-app text-light" data-theme={theme}>
      <ThemeSwitcher theme={theme} toggleTheme={toggleTheme} gradients={gradients} />
      <HeroSection theme={theme} gradients={gradients} />
      <ExperienceSection theme={theme} gradients={gradients} />
      <SkillsSection theme={theme} gradients={gradients} />
      <EducationSection theme={theme} gradients={gradients} />
      <ContactSection theme={theme} gradients={gradients} />
      <Footer theme={theme} gradients={gradients} />
    </div>
  );
};

export default Home;
