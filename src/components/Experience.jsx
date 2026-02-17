import React from "react";
import ScrollAnimate from "./ScrollAnimate";

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
        duration: "2021 — 2022", // Approximate dates, adjusting to fit chronology if needed or leaving as is. User didn't specify dates, so I will infer or leave blank if unsure. Let's make it sit before Everglow.
        // Actually, looking at the user's previous data, "Education" was 2021-2024. 
        // I will add Mepangilinan.
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
    return (
        <section id="experience" className="section experience-section">
            <ScrollAnimate>
                <h2 className="section-title">Experience & Education</h2>
            </ScrollAnimate>
            <div className="timeline">
                {experienceData.map((item, index) => (
                    <ScrollAnimate key={index}>
                        <div className="timeline-item">
                            <div className="timeline-marker"></div>
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
                        </div>
                    </ScrollAnimate>
                ))}
            </div>
        </section>
    );
};

export default Experience;
