import React, { useState, useEffect } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Footer from "./components/Footer";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import Cursor from "./components/Cursor";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Close menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

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

  const handleNavClick = (id) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

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

      <nav className="navbar">
        <div className="nav-logo">AP.</div>

        {/* Desktop Nav */}
        <div className="nav-links nav-links--desktop">
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

        {/* Mobile Controls */}
        <div className="nav-mobile-controls">
          <motion.button
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
          </motion.button>
          <motion.button
            className="hamburger-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            whileTap={{ scale: 0.9 }}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <nav className="mobile-menu-nav">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  className="mobile-nav-link"
                  onClick={() => handleNavClick(item.id)}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.07, duration: 0.3 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="mobile-nav-index">0{index + 1}</span>
                  {item.label}
                </motion.button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

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
