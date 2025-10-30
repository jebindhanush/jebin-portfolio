import React from "react";

interface Props {
  theme: "blue-cyan" | "green-purple";
  gradients: Record<string, string>;
}

const ContactSection: React.FC<Props> = ({ theme, gradients }) => (
  <section id="contact" className="text-center text-light py-5" data-aos="fade-up">
    <h2 className="fw-bold mb-3">Get In Touch ✉️</h2>
    <p>Have a project or idea? Let’s build together.</p>
    <a
      href="mailto:jebin.t97@gmail.com"
      className="btn rounded-pill shadow-sm"
      style={{ background: gradients[theme], color: "#fff" }}
    >
      📧 jebin.t97@gmail.com
    </a>
  </section>
);

export default ContactSection;
