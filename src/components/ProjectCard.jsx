import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, SiNodedotjs } from "react-icons/si";
import { FaBug } from "react-icons/fa";

// Helper to get icon by name
const getIcon = (name) => {
    const icons = {
        Python: <SiPython />,
        JavaScript: <SiJavascript />,
        HTML5: <SiHtml5 />,
        CSS3: <SiCss3 />,
        Playwright: <FaBug />,
        React: <SiReact />,
        Node: <SiNodedotjs />,
    };
    return icons[name] || null;
};

const ProjectCard = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            transition={{ layout: { duration: 0.3 } }}
            onClick={() => setIsOpen(!isOpen)}
            className={`project-card ${isOpen ? "expanded" : ""}`}
        >
            <motion.div layout className="card-header">
                <div className="card-visual-placeholder">
                    {/* Visual placeholder - could be image or pattern */}
                    <span className="visual-tag">{project.category}</span>
                </div>
                <div className="card-title-row">
                    <motion.h3 layout="position" className="project-title">
                        {project.title}
                    </motion.h3>
                    <motion.div layout="position" className="tech-stack-mini">
                        {project.tech.map((t) => (
                            <span key={t} className="tech-icon-mini">{getIcon(t)}</span>
                        ))}
                    </motion.div>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="card-content"
                    >
                        <div className="discussion-section">
                            <h4>The Challenge</h4>
                            <p>{project.challenge}</p>
                        </div>

                        <div className="tech-section">
                            <h4>Tech Stack</h4>
                            <div className="tech-tags">
                                {project.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
                            </div>
                        </div>

                        <div className="qa-insight-section">
                            <h4>QA Insight</h4>
                            <p className="qa-note">{project.qaInsight}</p>
                        </div>

                        <div className="card-links">
                            {project.links && project.links.map((link, i) => (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="project-link">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {!isOpen && (
                <motion.div layout className="card-expand-hint">
                    Click to expand
                </motion.div>
            )}
        </motion.div>
    );
};

export default ProjectCard;
