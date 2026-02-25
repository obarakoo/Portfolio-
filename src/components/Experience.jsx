import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASING = [0.17, 0.55, 0.55, 1];
const DURATION = 0.6;

const experienceData = [
    {
        role: "QA Tester",
        company: "UTest",
        duration: "2024 — Present",
        type: "Freelance",
        description:
            "Conducted exploratory testing on mobile and web applications. Identified critical functional bugs and reported them with detailed reproduction steps. Validated fixes and performed regression testing.",
    },
    {
        role: "Content Moderator",
        company: "Everglow AI",
        duration: "2022 — 2024",
        type: "Remote",
        description:
            "Ensured platform safety and data integrity by reviewing user-generated content. Maintained high accuracy rates in a fast-paced environment, contributing to cleaner datasets for AI training models.",
    },
    {
        role: "Real Estate Assistant",
        company: "Mepangilinan Real Estate Brokerage Corp.",
        duration: "2021 — 2022",
        type: "On-site",
        description: "Assisted in managing property listings and client documentation. Streamlined administrative processes to improve operational efficiency.",
    },
    {
        role: "Bachelor of Science in Information Technology",
        company: "University",
        duration: "2021 — 2024",
        type: "Education",
        description:
            "Major in Information Technology. Capstone project focused on Advanced Manufacturing systems. Gained strong foundation in networking, programming, and system analysis.",
    },
];

const Experience = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.15 });
    const titleRef = useRef(null);
    const titleInView = useInView(titleRef, { once: false, amount: 0.5 });

    return (
        <section
            id="experience"
            className="section experience-section"
            ref={sectionRef}
        >
            <div className="experience-content">
                <div className="section-header">
                    <motion.div
                        ref={titleRef}
                        initial={{ opacity: 0, y: 20 }}
                        animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: DURATION, ease: EASING }}
                    >
                        <h2 className="section-title">Experience &amp; Education</h2>
                        <p className="section-subtitle">A timeline of my professional journey</p>
                    </motion.div>
                </div>

                {/* Timeline wrapper — vertical line drawn by clip-path */}
                <div className="timeline timeline--animated">
                    {/* Animated growing vertical line */}
                    <motion.div
                        className="timeline-line"
                        initial={{ scaleY: 0 }}
                        animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                        transition={{ duration: 1.2, ease: EASING, transformOrigin: "top" }}
                    />

                    {experienceData.map((item, index) => (
                        <TimelineItem key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ item, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, amount: 0.3 });

    return (
        <motion.div
            ref={ref}
            className="timeline-item"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{
                duration: DURATION,
                ease: EASING,
                delay: index * 0.1,
            }}
        >
            {/* Pulsing blue dot */}
            <motion.div
                className="timeline-marker"
                initial={{ scale: 1 }}
                animate={inView ? { scale: [1, 1.5, 1] } : { scale: 1 }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: index * 0.5 + 0.3,
                }}
            />
            <div className="timeline-content">
                <h3 className="role-title">{item.role}</h3>
                <div className="company-meta">
                    <span className="company-name">{item.company}</span>
                    <span className="dot">·</span>
                    <span className="duration">{item.duration}</span>
                    <span className="dot">·</span>
                    <span className="type">{item.type}</span>
                </div>
                <p className="role-description">{item.description}</p>
            </div>
        </motion.div>
    );
};

export default Experience;
