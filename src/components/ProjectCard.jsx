import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    SiPython, SiJavascript, SiHtml5, SiCss3, SiReact, 
    SiNodedotjs, SiFramer, SiCisco
} from "react-icons/si";
import { FaBug, FaExternalLinkAlt, FaGithub, FaChevronDown, FaRocket } from "react-icons/fa";

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
        "Framer Motion": <SiFramer />,
        Cisco: <SiCisco />,
        "Context API": <FaRocket />,
        "Web Audio API": <SiJavascript />,
        "Swiper.js": <SiJavascript />,
    };
    return icons[name] || <SiJavascript />;
};

const ProjectCard = ({ project }) => {
    const [isOpen, setIsOpen] = useState(false);

    const bgImage = project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop";

    return (
        <motion.div
            layout
            transition={{ layout: { type: "spring", stiffness: 200, damping: 20 } }}
            onClick={() => setIsOpen(!isOpen)}
            className={`project-card ${isOpen ? "expanded" : ""}`}
            whileHover={{ y: -10, boxShadow: "0 30px 60px rgba(0, 0, 0, 0.5)" }}
            whileTap={{ scale: 0.98 }}
        >
            <div className="project-layer-bg">
                <motion.div
                    className="project-layer-img"
                    style={{ backgroundImage: `url(${bgImage})` }}
                    animate={{ scale: isOpen ? 1.1 : 1 }}
                    transition={{ duration: 0.6 }}
                ></motion.div>
                <div className="project-layer-overlay"></div>
            </div>

            <motion.div layout className="card-header">
                <div className="card-title-row">
                    <div className="tag-group">
                        <span className="visual-tag">{project.category}</span>
                    </div>
                    <motion.h3 layout="position" className="project-title">
                        {project.title}
                    </motion.h3>
                    <motion.div layout="position" className="tech-stack-mini">
                        {project.tech.slice(0, 4).map((t) => (
                            <span key={t} title={t} className="tech-icon-mini">{getIcon(t)}</span>
                        ))}
                        {project.tech.length > 4 && <span className="tech-more">+{project.tech.length - 4}</span>}
                    </motion.div>
                </div>
            </motion.div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="card-content"
                    >
                        <div className="content-grid">
                            <div className="discussion-section">
                                <div className="section-label">
                                    <FaRocket className="label-icon" />
                                    <h4>The Challenge</h4>
                                </div>
                                <p>{project.challenge}</p>
                            </div>

                            <div className="qa-insight-section">
                                <div className="section-label">
                                    <FaBug className="label-icon" />
                                    <h4>Engineering Insight</h4>
                                </div>
                                <p className="qa-note">{project.qaInsight}</p>
                            </div>
                        </div>

                        <div className="tech-section">
                            <h4>Built With</h4>
                            <div className="tech-tags">
                                {project.tech.map(t => (
                                    <span key={t} className="tech-tag">
                                        <span className="tag-icon">{getIcon(t)}</span>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="card-links">
                            {project.links && project.links.map((link, i) => (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="project-btn">
                                    {link.label.toLowerCase().includes("code") ? <FaGithub /> : <FaExternalLinkAlt />}
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            <motion.div 
                layout 
                className="card-expand-hint"
                animate={{ rotate: isOpen ? 180 : 0 }}
            >
                <FaChevronDown />
            </motion.div>
        </motion.div>
    );
};

export default ProjectCard;
