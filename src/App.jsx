import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion, useScroll, useSpring } from "framer-motion";
import Cursor from "./components/Cursor";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [theme, setTheme] = useState("dark");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme === "dark" ? "theme-dark" : "theme-light";
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "projects", label: "Work" },
    { id: "skills", label: "Skills" },
    { id: "certifications", label: "Certifications" },
    { id: "experience", label: "Experience" }
  ];

  return (
    <div className={`app-container ${theme}`}>
      <Cursor />

      <div className="bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
      </div>

      <div className="scroll-progress">
        <motion.div className="scroll-bar" style={{ scaleX }} />
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="mobile-menu-link"
            onClick={() => setIsMenuOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <button onClick={() => { toggleTheme(); setIsMenuOpen(false); }} className="theme-toggle" style={{ transform: 'scale(1.5)' }}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      <nav className="navbar">
        <div className="nav-logo">AP.</div>

        {/* Desktop Nav */}
        <div className="nav-links">
          {navItems.map((item) => (
            <motion.a
              key={item.id}
              href={`#${item.id}`}
              whileHover={{ scale: 1.05, textShadow: "0 0 8px rgb(59, 130, 246)" }}
              whileTap={{ scale: 0.95 }}
              className="nav-link-item"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </motion.button>
        </div>

        {/* Mobile Hamburger */}
        <button className="hamburger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </nav>

      <main className="main-content">
        <Hero />
        <Skills />
        <Certifications />
        <Projects />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}

export default App;
