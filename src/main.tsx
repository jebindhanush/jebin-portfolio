import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// Bootstrap styles
import 'bootstrap/dist/css/bootstrap.min.css';

// PWA Service Worker
import App from './App';

import { registerSW } from 'virtual:pwa-register';

// Import AOS (Animate on Scroll)
import AOS from 'aos';
import 'aos/dist/aos.css';
 
// Register Service Worker for PWA
registerSW({ immediate: true });

  // Initialize AOS when app starts
AOS.init({
  duration: 1000,
  once: true,
  offset: 100,
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
