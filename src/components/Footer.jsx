import React from "react";
import { SiGithub, SiLinkedin, SiGmail } from "react-icons/si";

const Footer = () => {
    return (
        <footer id="contact" className="footer-section">
            <div className="footer-content">
                <h2 className="footer-title">Let's Connect</h2>
                <p className="footer-text">
                    Currently open for QA and Front-End opportunities.
                </p>
                <div className="social-links">
                    <a
                        href="https://github.com/obarakoo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon-link"
                        aria-label="GitHub"
                    >
                        <SiGithub />
                    </a>
                    <a
                        href="https://linkedin.com/in/alfredporcales"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon-link"
                        aria-label="LinkedIn"
                    >
                        <SiLinkedin />
                    </a>
                    <a
                        href="mailto:alfredporcales@gmail.com"
                        className="social-icon-link"
                        aria-label="Email"
                    >
                        <SiGmail />
                    </a>
                </div>
                <div className="resume-link-footer" style={{ marginTop: '1rem' }}>
                    <a href="/resume.pdf" download className="text-slate-400 hover:text-blue-400 text-sm transition-colors border-b border-transparent hover:border-blue-400">
                        Download Resume
                    </a>
                </div>
                <div className="footer-copy">
                    <p>© {new Date().getFullYear()} Alfred M. Porcales. Built with React & various caffeinated beverages.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
