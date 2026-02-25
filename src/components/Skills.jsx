import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { skillsData } from "../data/skills";

const EASING = [0.17, 0.55, 0.55, 1];
const DURATION = 0.6;

// Direction each category slides in from
const categoryDirections = {
    "Languages & Scripting": { x: -120, y: 0 },
    "Tools & Frameworks": { x: 120, y: 0 },
    "Infrastructure & Concepts": { x: 0, y: 80 },
};

const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 },
    },
};

const Skills = () => {
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: false, amount: 0.5 });

    return (
        <section id="skills" className="section skills-section">
            {/* Animated Section Title */}
            <div className="section-header">
                <motion.div
                    ref={titleRef}
                    initial={{ opacity: 0, y: 20 }}
                    animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: DURATION, ease: EASING }}
                >
                    <h2 className="section-title">Technical Skills</h2>
                    <p className="section-subtitle">Tools and technologies I use to build and test software</p>
                </motion.div>
            </div>

            <div className="skills-grid-container">
                {skillsData.map((category, index) => {
                    const direction = categoryDirections[category.category] ?? { x: 0, y: 40 };
                    return (
                        <SkillCategory
                            key={index}
                            category={category}
                            direction={direction}
                        />
                    );
                })}
            </div>
        </section>
    );
};

const SkillCategory = ({ category, direction }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.25 });

    return (
        <motion.div
            ref={ref}
            className="skills-category"
            initial={{ opacity: 0, x: direction.x, y: direction.y }}
            animate={
                inView
                    ? { opacity: 1, x: 0, y: 0 }
                    : { opacity: 0, x: direction.x, y: direction.y }
            }
            transition={{ duration: DURATION, ease: EASING }}
        >
            <h3 className="category-title">{category.category}</h3>

            <motion.div
                className="skills-grid"
                variants={containerVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
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
        </motion.div>
    );
};

export default Skills;
