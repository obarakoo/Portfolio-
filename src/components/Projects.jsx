import React from "react";
import ProjectCard from "./ProjectCard";
import ScrollAnimate from "./ScrollAnimate";
import { motion } from "framer-motion";

const projectsData = [
    {
        title: "Boss Burger Landing Page",
        category: "Frontend Development",
        tech: ["HTML5", "CSS3", "Font Awesome"],
        challenge:
            "Building a high-impact, visual-first landing page for a restaurant that maintains brand consistency while providing a seamless user experience.",
        qaInsight:
            "Implemented a fully responsive dark-themed UI with high-contrast elements for accessibility. Optimized asset presentation to ensure smooth scrolling and visual clarity.",
        links: [{ label: "Live Demo", url: "https://obarakoo.github.io/Boss-burger/" }],
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop",
    },
    {
        title: "Alibijaban Travel Landing Page",
        category: "Interactive Design",
        tech: ["HTML5", "CSS3", "Swiper.js", "Glassmorphism"],
        challenge:
            "Creating an immersive, visually rich travel experience with complex interactive elements like glassmorphism and multi-layered swiper carousels.",
        qaInsight:
            "Fine-tuned interactive components for smooth touch and mouse responses. Validated glassmorphism effects for cross-browser consistency and visual depth.",
        links: [{ label: "Live Demo", url: "https://obarakoo.github.io/Basic-landing-page/" }],
        image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?q=80&w=800&auto=format&fit=crop",
    },
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
                <div className="section-header">
                    <h2 className="section-title" style={{ textWrap: "balance" }}>Case Studies &amp; Projects</h2>
                    <p className="section-subtitle">Real problems solved with engineering discipline and QA precision</p>
                </div>
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
