import React from "react";
import ProjectCard from "./ProjectCard";
import ScrollAnimate from "./ScrollAnimate";
import { motion } from "framer-motion";

const projectsData = [
    {
        title: "Automated Testing Suite",
        category: "QA Automation",
        tech: ["Playwright", "JavaScript"],
        challenge:
            "Manual regression testing was taking 15+ hours per sprint, leading to bottlenecked deployments. Needed a reliable automated solution to catch regressions early.",
        qaInsight:
            "Implemented a suite of 200+ end-to-end tests using Playwright. Reduced regression time to <30 minutes. Verified flakiness by implementing retry logic and tracing.",
        links: [{ label: "View Code", url: "#" }],
    },
    {
        title: "Front-End UI Audit & Fix",
        category: "UI/UX",
        tech: ["HTML5", "CSS3", "JavaScript"],
        challenge:
            "Legacy portal had inconsistent spacing, broken mobile layouts, and poor accessibility scores. Users reported navigation difficulties.",
        qaInsight:
            "Conducted a full UI/UX audit. Fixed CSS grid layouts and implemented responsive breakpoints. Validated using Chrome DevTools Device Mode and Lighthouse accessibility checks.",
        links: [{ label: "Before/After", url: "#" }],
    },
    {
        title: "Data Log Analysis Tool",
        category: "Data Analysis",
        tech: ["Python"],
        challenge:
            "System logs were unstructured and massive (GBs), making it impossible to spot error patterns manually during outages.",
        qaInsight:
            "Created a Python script to parse logs and visualize error frequency. Used regex to extract error codes. Verified accuracy by comparing script output against known manual samples.",
        links: [{ label: "View Script", url: "#" }],
    },
    {
        title: "Network Security Lab",
        category: "Infrastructure",
        tech: ["Cisco"],
        challenge:
            "Simulating a secure enterprise network with VLANs and firewall rules to understand data flow and potential security vulnerabilities.",
        qaInsight:
            "Configured Packet Tracer simulation. Verified connectivity restrictions between VLANs using ping tests and ACL verification. Confirms understanding of network layer security.",
        links: [{ label: "View Diagram", url: "#" }],
    },
];

const Projects = () => {
    // Stagger container variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="projects" className="section projects-section">
            <ScrollAnimate>
                <h2 className="section-title">Case Studies & Projects</h2>
            </ScrollAnimate>

            <motion.div
                className="projects-grid"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
            >
                {projectsData.map((project, index) => (
                    <motion.div key={index} variants={itemVariants}>
                        <ProjectCard project={project} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
};

export default Projects;
