import React from "react";
import ScrollAnimate from "./ScrollAnimate";
import { motion } from "framer-motion";
import { skillsData } from "../data/skills";

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
                                        {skill.icon ? (
                                            <skill.icon className={`skill-icon ${skill.className}`} />
                                        ) : (
                                            <span className="skill-text-icon">{skill.text}</span>
                                        )}
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
