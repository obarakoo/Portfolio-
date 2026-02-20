import React from "react";
import SectionWrapper from "./SectionWrapper";
import { SiLinkedin, SiFreecodecamp, SiGoogle, SiCisco } from "react-icons/si";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import ScrollAnimate from "./ScrollAnimate";

const certificationsData = [
    {
        category: "Automation",
        title: "Learning Playwright",
        issuer: "LinkedIn Learning",
        description: "Comprehensive course on end-to-end browser automation using Microsoft Playwright for modern web testing.",
        icon: <SiLinkedin className="cert-icon cert-icon--linkedin" />,
        url: "https://www.linkedin.com/learning/certificates/a7c9473888a17c018fdcd9dde4269025cb5f43f5cec080d68c25996d4075ade9?trk=public_profile_see-credential",
        year: "2024",
    },
    {
        category: "Agile / QA",
        title: "Planning & Releasing Software with Jira",
        issuer: "LinkedIn Learning",
        description: "Mastering Agile project management using Jira for sprint planning, backlog grooming, and release management.",
        icon: <SiLinkedin className="cert-icon cert-icon--linkedin" />,
        url: "https://www.linkedin.com/learning/certificates/556919d820ef3603149899c9949583ad101d17fd3018bd40917462ea457f4357?trk=public_profile_see-credential",
        year: "2024",
    },
    {
        category: "Foundations",
        title: "SDLC (Software Dev Life Cycle)",
        issuer: "LinkedIn Learning",
        description: "Deep dive into the software development life cycle, covering all phases from planning to deployment and maintenance.",
        icon: <SiLinkedin className="cert-icon cert-icon--linkedin" />,
        url: "https://www.linkedin.com/learning/certificates/0890e8e9e6702940b1dfb57ae1d394551e5496f02ac6729a88ca655c5501a629?trk=public_profile_see-credential",
        year: "2024",
    },
    {
        category: "Development",
        title: "Legacy JavaScript Algorithms",
        issuer: "freeCodeCamp",
        description: "Completed JavaScript algorithms and data structures certification, demonstrating proficiency in core programming concepts.",
        icon: <SiFreecodecamp className="cert-icon cert-icon--fcc" />,
        url: "https://www.freecodecamp.org/certification/fcccaa46088-894b-46b2-b26a-134eac820657/javascript-algorithms-and-data-structures?trk=public_profile_see-credential",
        year: "2023",
    },
    {
        category: "Networking",
        title: "Cisco® CCNAv7: Switching, Routing",
        issuer: "Cisco",
        description: "Cisco CCNA certification covering enterprise networking, switching, routing protocols, and network infrastructure.",
        icon: <SiCisco className="cert-icon cert-icon--cisco" />,
        url: "https://drive.google.com/file/d/11ViEmWJdJ963sNfhkPOs-RHejzh73EhL/view?trk=public_profile_see-credential&pli=1",
        year: "2023",
    },
    {
        category: "Front End",
        title: "Front End Development — CSS",
        issuer: "Google / Coursera",
        description: "Google-backed front-end certification focusing on advanced CSS techniques, layouts, animations, and responsive design.",
        icon: <SiGoogle className="cert-icon cert-icon--google" />,
        url: "https://drive.google.com/file/d/1hLm1AyOlXvuYMQiJfua67rE4EKZFQh4H/view?trk=public_profile_see-credential",
        year: "2023",
    },
    {
        category: "Front End",
        title: "Front End Development — HTML",
        issuer: "Google / Coursera",
        description: "Google-backed front-end certification covering semantic HTML5, accessibility standards, and modern web structure.",
        icon: <SiGoogle className="cert-icon cert-icon--google" />,
        url: "https://drive.google.com/file/d/1hIcxuAFkseQY6ENXc6X-E222rje0SGC6/view?trk=public_profile_see-credential",
        year: "2023",
    },
    {
        category: "Data Analysis",
        title: "Python for Data Analysis",
        issuer: "Google / Coursera",
        description: "Applied Python programming for data analysis, visualization, and insights using pandas, NumPy, and Matplotlib.",
        icon: <SiGoogle className="cert-icon cert-icon--google" />,
        url: "https://drive.google.com/file/d/1hSie_haw9O3Bo_iCDZjFc3EmrIlATJbo/view?trk=public_profile_see-credential",
        year: "2023",
    },
    {
        category: "Hardware",
        title: "NCII Computer Systems Servicing",
        issuer: "TESDA",
        description: "National Certificate II in Computer Systems Servicing covering hardware assembly, troubleshooting, and network installation.",
        icon: <FaCertificate className="cert-icon cert-icon--tesda" />,
        url: "https://drive.google.com/file/d/1Yqoive-L9cGxHJHP8g0liAmQbwrFJBJ8/view?trk=public_profile_see-credential",
        year: "2022",
    },
];

const Certifications = () => {
    return (
        <SectionWrapper id="certifications" className="certifications-section">
            <ScrollAnimate>
                <h2 className="section-title">Certification Vault</h2>
                <p className="cert-subtitle">A collection of credentials earned along the journey.</p>
            </ScrollAnimate>

            <div className="cert-scroll-container">
                <div className="cert-scroll-track">
                    {/* Render original list */}
                    {certificationsData.map((cert, index) => (
                        <div key={`orig-${index}`} className="cert-formal-card">
                            <div className="cert-card-header">
                                <div className="cert-card-icon">{cert.icon}</div>
                                <div className="cert-card-badge">{cert.year}</div>
                            </div>
                            <div className="cert-card-body">
                                <span className="cert-card-category">{cert.category}</span>
                                <h3 className="cert-card-title">{cert.title}</h3>
                                <p className="cert-card-issuer">{cert.issuer}</p>
                                <p className="cert-card-desc">{cert.description}</p>
                            </div>
                            <div className="cert-card-footer">
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-card-link"
                                >
                                    View Certificate <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>
                    ))}
                    {/* Render duplicate list for seamless infinite loop */}
                    {certificationsData.map((cert, index) => (
                        <div key={`dup-${index}`} className="cert-formal-card">
                            <div className="cert-card-header">
                                <div className="cert-card-icon">{cert.icon}</div>
                                <div className="cert-card-badge">{cert.year}</div>
                            </div>
                            <div className="cert-card-body">
                                <span className="cert-card-category">{cert.category}</span>
                                <h3 className="cert-card-title">{cert.title}</h3>
                                <p className="cert-card-issuer">{cert.issuer}</p>
                                <p className="cert-card-desc">{cert.description}</p>
                            </div>
                            <div className="cert-card-footer">
                                <a
                                    href={cert.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="cert-card-link"
                                >
                                    View Certificate <FaExternalLinkAlt />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
