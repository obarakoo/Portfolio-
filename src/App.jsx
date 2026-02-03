import React, { useEffect, useState } from "react";

function App() {
  const [activeSection, setActiveSection] = useState("about");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll(".section"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            const id = entry.target.id;
            if (id) {
              setActiveSection(id);
            }
          }
        });
      },
      {
        root: null,
        threshold: 0.3
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
    }
  }, []);

  useEffect(() => {
    document.body.classList.remove("theme-dark", "theme-light");
    document.body.classList.add(theme === "dark" ? "theme-dark" : "theme-light");
    window.localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const handleNavClick = (id) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    setActiveSection(id);
  };

  return (
    <div className={`page ${theme === "dark" ? "page-dark" : "page-light"}`}>
      <aside className="sidebar">
        <div className="avatar-wrapper">
          <img
            src="/assets/images/alfred.jpg"
            alt="Profile"
            className="avatar-img"
          />
        </div>
        <h1 className="name">Alfred M. Porcales</h1>
        <p className="role">
      <Typical
        steps={[
          "Front End Developer",
          1000,
          "Full Stack Developer",
          1000,
          "Mobile Developer",
          1000,
        ]}
        loop={Infinity}
        wrapper="span"
      />
    </p>
        <p className="tagline">
          I build fast, modern web experiences with a focus on clean design and
          smooth interactions.
        </p>

        <button
          type="button"
          className="theme-toggle"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <span className="theme-toggle-icon" aria-hidden="true">
            {theme === "dark" ? "☀️" : "🌙"}
          </span>
          <span className="theme-toggle-label">
            {theme === "dark" ? "Light mode" : "Dark mode"}
          </span>
        </button>

        <div className="socials">
          <a href="#" className="social-link">
            GitHub
          </a>
          <a href="#" className="social-link">
            LinkedIn
          </a>
          <a href="#" className="social-link">
            Resume
          </a>
        </div>

        <nav className="sidebar-nav">
          <button
            type="button"
            className={`nav-link ${activeSection === "about" ? "active" : ""}`}
            onClick={() => handleNavClick("about")}
          >
            About
          </button>
          <button
            type="button"
            className={`nav-link ${activeSection === "experience" ? "active" : ""}`}
            onClick={() => handleNavClick("experience")}
          >
            Experience
          </button>
          <button
            type="button"
            className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </button>
          <button
            type="button"
            className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
            onClick={() => handleNavClick("skills")}
          >
            Skills
          </button>
          <button
            type="button"
            className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </button>
        </nav>
      </aside>

      <main className="content">
        <section id="about" className="section">
          <h2 className="section-title">About</h2>
          <p className="section-text">
            I am an entry-level QA Tester with an IT background, focused on manual testing, bug reporting, and maintaining software quality.
            I have experience validating application behavior, identifying issues, and documenting defects clearly. I am familiar with SDLC, Jira, 
            and basic web technologies, which helps me understand how applications work from both a user and system perspective. I am actively learning 
            test automation and continuously improving my skills, with the goal of growing into a QA Automation Engineer and becoming a reliable QA Engineer 
            who contributes to building stable, high-quality, and user-friendly applications.
          </p>
          <p className="section-text">
            Curabitur in mauris nec nunc suscipit condimentum. Vestibulum ante
            ipsum primis in faucibus orci luctus et ultrices posuere cubilia
            curae; Nulla facilisi. Phasellus ac justo sed lorem tincidunt
            laoreet sit amet id tortor. Cras commodo mi non magna tempor, eget
            bibendum urna convallis.
          </p>
          <p className="section-text">
            Sed vitae lorem non justo ultricies facilisis. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Sed ut blandit nibh, sit amet efficitur justo.
            Maecenas tincidunt, nisl eu pulvinar luctus, justo lacus
            sollicitudin lacus, eu egestas urna lorem id elit.
          </p>
          <div className="scroll-hint">
            <span className="scroll-hint-dot" />
            Scroll down to see more sections
          </div>
        </section>

        <section id="experience" className="section">
          <h2 className="section-title">Experience</h2>
          <div className="card-list">
            <article className="card">
              <header className="card-header">
                <h3 className="card-title">Everglow AI</h3>
                <span className="card-meta">2022 — Present · Remote</span>
              </header>
              <p className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                sagittis, turpis nec congue aliquam, tellus leo faucibus velit,
                eget blandit dui justo quis ipsum. Mauris interdum, mi id
                maximus facilisis, lorem dui rhoncus lorem, at imperdiet nisl
                urna in nisl.
              </p>
            </article>

            <article className="card">
              <header className="card-header">
                <h3 className="card-title">Full Stack Developer</h3>
                <span className="card-meta">2019 — 2022 · On-site</span>
              </header>
              <p className="card-body">
                Integer efficitur, magna a fermentum fringilla, ex arcu
                placerat odio, id rhoncus enim lacus in arcu. Nam lobortis,
                ipsum at euismod facilisis, orci arcu rhoncus leo, nec
                fringilla nunc arcu in arcu.
              </p>
            </article>
             <article className="card">
              <header className="card-header">
                <h3 className="card-title">Full Stack Developer</h3>
                <span className="card-meta">2019 — 2022 · On-site</span>
              </header>
              <p className="card-body">
                Integer efficitur, magna a fermentum fringilla, ex arcu
                placerat odio, id rhoncus enim lacus in arcu. Nam lobortis,
                ipsum at euismod facilisis, orci arcu rhoncus leo, nec
                fringilla nunc arcu in arcu.
              </p>
            </article>
          </div>
        </section>

        <section id="projects" className="section">
          <h2 className="section-title">Projects</h2>
          <div className="card-grid">
            <article className="card">
              <header className="card-header">
                <h3 className="card-title">Minimal Portfolio</h3>
                <span className="card-meta">React · Framer Motion</span>
              </header>
              <p className="card-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                feugiat, lorem quis pretium fermentum, augue metus tristique
                mi, vitae vulputate arcu metus quis nisi.
              </p>
            </article>

            <article className="card">
              <header className="card-header">
                <h3 className="card-title">Design System Kit</h3>
                <span className="card-meta">TypeScript · Storybook</span>
              </header>
              <p className="card-body">
                Praesent vehicula, mauris eget iaculis bibendum, justo quam
                vestibulum velit, non iaculis elit erat eget quam. Suspendisse
                congue malesuada lorem.
              </p>
            </article>

            <article className="card">
              <header className="card-header">
                <h3 className="card-title">API Performance Dashboard</h3>
                <span className="card-meta">Next.js · Charts</span>
              </header>
              <p className="card-body">
                Phasellus tincidunt, neque a pulvinar interdum, ex tortor
                vulputate justo, sed feugiat dolor enim non est. Cras
                sollicitudin ante id urna ultrices, in volutpat eros malesuada.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <p className="section-text skills-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              fringilla urna in blandit tristique. Donec a urna et erat
              porttitor porttitor.
            </p>
            <div className="pill-group">
              <span className="pill">JavaScript / TypeScript</span>
              <span className="pill">React / Next.js</span>
              <span className="pill">Node.js / Express</span>
              <span className="pill">HTML / CSS / Tailwind</span>
              <span className="pill">REST / GraphQL</span>
              <span className="pill">UI / UX Design</span>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2 className="section-title">Contact</h2>
          <p className="section-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            tincidunt sem est, non varius elit feugiat eget. Pellentesque
            facilisis augue eget ipsum interdum, non tempor ante lobortis.
          </p>
          <a href="mailto:you@example.com" className="primary-button">
            Say Hello
          </a>
        </section>

        <footer className="footer">
          <p>© 2026 · Built with ❤ Alfred-style layout</p>
        </footer>
      </main>
    </div>
  );
}

export default App;




