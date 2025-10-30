# 🌐 **Jebin T — Portfolio (React PWA + Vite + Bootstrap)**

[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge\&logo=vite\&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-149ECA?style=for-the-badge\&logo=react\&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge\&logo=typescript\&logoColor=white)](https://www.typescriptlang.org/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7311F5?style=for-the-badge\&logo=bootstrap\&logoColor=white)](https://getbootstrap.com/)
[![PWA](https://img.shields.io/badge/PWA-5A0FC8?style=for-the-badge\&logo=pwa\&logoColor=white)](https://web.dev/progressive-web-apps/)
[![GitHub Pages](https://img.shields.io/badge/Deployed-GitHub%20Pages-222222?style=for-the-badge\&logo=github\&logoColor=white)](https://jebindhanush.github.io/jebin-portfolio/)
[![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?style=for-the-badge\&logo=githubactions\&logoColor=white)](https://github.com/features/actions)

---

## 🚀 **Live Portfolio**

🌐 **View Now:**
👉 [https://jebindhanush.github.io/jebin-portfolio/](https://jebindhanush.github.io/jebin-portfolio/)

My personal **Progressive Web App (PWA) Portfolio**, built with **React + TypeScript + Vite**, styled using **Bootstrap**, and enhanced with **glassmorphism** and **glitter gradient effects**.

This portfolio showcases my **skills, education, and professional experience**, all wrapped in a **fast, offline-ready, and installable** web app.

---

## 🧠 **Tech Stack**

| Category           | Tools / Libraries                                      |
| ------------------ | ------------------------------------------------------ |
| 🖥️ Frontend       | React, TypeScript, Vite                                |
| 💅 Styling         | Bootstrap 5, Custom CSS (Glassmorphism, Gradients)     |
| ⚙️ Functionality   | PWA, AOS Animations, Capacitor (optional mobile build) |
| 🚀 Deployment      | GitHub Pages + GitHub Actions CI/CD                    |
| 📦 Package Manager | npm                                                    |

---

## 🏗️ **Project Setup**

```bash
# 1️⃣ Clone this repository
git clone https://github.com/jebindhanush/jebin-portfolio.git
cd jebin-portfolio

# 2️⃣ Install dependencies
npm install

# 3️⃣ Start development server
npm run dev

# 4️⃣ Build for production
npm run build
```

---

## ⚙️ **PWA Features**

✅ Offline caching via Service Worker
✅ Add to Home Screen (A2HS) support
✅ Auto-version tracking using `version.json`
✅ Installable across Android, iOS & Desktop
✅ Fast, responsive, and SEO-friendly

---

## 🚀 **Deployment (GitHub Actions + Pages)**

This portfolio deploys **automatically** to **GitHub Pages** whenever changes are pushed to the `main` branch.

**Workflow Overview:**

```yaml
- name: Deploy Vite React App to gh-pages
  uses: peaceiris/actions-gh-pages@v4
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
    publish_branch: gh-pages
```

🔗 **Deployed Site:**
👉 [https://jebindhanush.github.io/jebin-portfolio/](https://jebindhanush.github.io/jebin-portfolio/)

---

## 📁 **Folder Structure**

```
📦 jebin-portfolio
 ┣ 📁 public
 ┃ ┗ 📜 version.json
 ┣ 📁 src
 ┃ ┣ 📁 components
 ┃ ┣ 📁 data
 ┃ ┣ 📁 assets
 ┃ ┗ 📜 main.tsx
 ┣ 📜 index.html
 ┣ 📜 vite.config.ts
 ┣ 📜 manifest.webmanifest
 ┣ 📜 package.json
 ┗ 📜 README.md
```

---

## ✨ **Highlights**

* 🎨 Dynamic Theme Switching
* 💎 Glassy + Glitter Gradient UI
* 💼 Milky “Professional Experience” Section
* 🎓 Interactive Education Section with CTAs
* 🚀 Animated Skills Grid with Glitter Effect
* 🌈 Fully Responsive and Mobile-Optimized
* 🔄 Auto Deployed via GitHub Actions

---

## 🧑‍💻 **Author**

**👋 Jebin T**
Full Stack Developer | Cloud Enthusiast | Tech Explorer

🌐 **Portfolio:** [https://jebindhanush.github.io/jebin-portfolio/](https://jebindhanush.github.io/jebin-portfolio/)
💼 **GitHub:** [https://github.com/jebindhanush](https://github.com/jebindhanush)
✉️ *(Optional: Add your email or LinkedIn link here)*

---

## 🪪 **License**

This project is open source and available under the [MIT License](LICENSE).
 