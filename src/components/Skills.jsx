import React from "react";
import {
    SiPython,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiJira,
    SiCisco,
    SiGit,
    SiGithub,
    SiPostman,
    SiSelenium,
    SiReact,
} from "react-icons/si";
import { FaBug } from "react-icons/fa";
import ScrollAnimate from "./ScrollAnimate";
import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Languages & Scripting",
        items: [
            { name: "Python", icon: <SiPython className="skill-icon python" /> },
            { name: "JavaScript", icon: <SiJavascript className="skill-icon js" /> },
            { name: "HTML5", icon: <SiHtml5 className="skill-icon html" /> },
            { name: "CSS3", icon: <SiCss3 className="skill-icon css" /> },
        ],
    },
    {
        category: "Tools & Frameworks",
        items: [
            { name: "Playwright", icon: <FaBug className="skill-icon playwright" /> },
            { name: "Selenium", icon: <SiSelenium className="skill-icon selenium" /> },
            { name: "React", icon: <SiReact className="skill-icon react" /> },
            { name: "Jira", icon: <SiJira className="skill-icon jira" /> },
            { name: "Git", icon: <SiGit className="skill-icon git" /> },
            { name: "GitHub", icon: <SiGithub className="skill-icon github" /> },
        ],
    },
    {
        category: "Infrastructure & Concepts",
        items: [
            { name: "Cisco CCNA", icon: <SiCisco className="skill-icon cisco" /> },
            { name: "Postman", icon: <SiPostman className="skill-icon postman" /> },
            { name: "SDLC", icon: null, text: "SDLC" },
            { name: "Manual Testing", icon: null, text: "Explore" },
        ],
    },
];

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    };

    return (
        <section id="skills" className="section skills-section">
            <ScrollAnimate>
                <h2 className="section-title">Technical Skills</h2>
            </ScrollAnimate>
            <div className="skills-grid-container">
                {skillsData.map((category, index) => (
                    <div key={index} className="skills-category">
                        <ScrollAnimate>
                            <h3 className="category-title">{category.category}</h3>
                        </ScrollAnimate>

                        <motion.div
                            className="skills-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.2 }}
                        >
                            {category.items.map((skill, idx) => (
                                <motion.div key={idx} variants={itemVariants} className="skill-card">
                                    <div className="icon-wrapper">
                                        {skill.icon ? skill.icon : <span className="skill-text-icon">{skill.text}</span>}
                                    </div>
                                    <span className="skill-name">{skill.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
