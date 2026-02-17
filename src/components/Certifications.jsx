import React from "react";
import SectionWrapper from "./SectionWrapper";
import { SiLinkedin, SiFreecodecamp, SiGoogle, SiCisco, SiCoursera } from "react-icons/si";
import { FaCertificate } from "react-icons/fa";
import ScrollAnimate from "./ScrollAnimate";

const certificationsData = [
    {
        category: "Automation",
        title: "Learning Playwright",
        issuer: "LinkedIn Learning",
        icon: <SiLinkedin className="cert-icon linkedin" />,
        url: "https://www.linkedin.com/learning/certificates/a7c9473888a17c018fdcd9dde4269025cb5f43f5cec080d68c25996d4075ade9?trk=public_profile_see-credential"
    },
    {
        category: "Agile/QA",
        title: "Planning & Releasing Software with Jira",
        issuer: "LinkedIn Learning",
        icon: <SiLinkedin className="cert-icon linkedin" />,
        url: "https://www.linkedin.com/learning/certificates/556919d820ef3603149899c9949583ad101d17fd3018bd40917462ea457f4357?trk=public_profile_see-credential"
    },
    {
        category: "Foundations",
        title: "SDLC (Software Dev Life Cycle)",
        issuer: "LinkedIn Learning",
        icon: <SiLinkedin className="cert-icon linkedin" />,
        url: "https://www.linkedin.com/learning/certificates/0890e8e9e6702940b1dfb57ae1d394551e5496f02ac6729a88ca655c5501a629?trk=public_profile_see-credential"
    },
    {
        category: "Development",
        title: "Legacy JavaScript Algorithms",
        issuer: "freeCodeCamp",
        icon: <SiFreecodecamp className="cert-icon fcc" />,
        url: "https://www.freecodecamp.org/certification/fcccaa46088-894b-46b2-b26a-134eac820657/javascript-algorithms-and-data-structures?trk=public_profile_see-credential"
    },
    {
        category: "Networking",
        title: "Cisco® CCNAv7: Switching, Routing",
        issuer: "Cisco",
        icon: <SiCisco className="cert-icon cisco" />,
        url: "https://drive.google.com/file/d/11ViEmWJdJ963sNfhkPOs-RHejzh73EhL/view?trk=public_profile_see-credential&pli=1"
    },
    {
        category: "Front End",
        title: "Front End Development - CSS",
        issuer: "Google / Coursera",
        icon: <SiGoogle className="cert-icon google" />,
        url: "https://drive.google.com/file/d/1hLm1AyOlXvuYMQiJfua67rE4EKZFQh4H/view?trk=public_profile_see-credential"
    },
    {
        category: "Front End",
        title: "Front End Development - HTML",
        issuer: "Google / Coursera",
        icon: <SiGoogle className="cert-icon google" />,
        url: "https://drive.google.com/file/d/1hIcxuAFkseQY6ENXc6X-E222rje0SGC6/view?trk=public_profile_see-credential"
    },
    {
        category: "Data Analysis",
        title: "Python for Data Analysis",
        issuer: "Google / Coursera",
        icon: <SiGoogle className="cert-icon google" />,
        url: "https://drive.google.com/file/d/1hSie_haw9O3Bo_iCDZjFc3EmrIlATJbo/view?trk=public_profile_see-credential"
    },
    {
        category: "Hardware",
        title: "NCII Computer Systems Servicing",
        issuer: "TESDA",
        icon: <FaCertificate className="cert-icon tesda" />,
        url: "https://drive.google.com/file/d/1Yqoive-L9cGxHJHP8g0liAmQbwrFJBJ8/view?trk=public_profile_see-credential"
    }
];

const Certifications = () => {
    return (
        <SectionWrapper id="certifications" className="certifications-section">
            <ScrollAnimate>
                <h2 className="section-title">Certification Vault</h2>
            </ScrollAnimate>
            <div className="cert-grid">
                {certificationsData.map((cert, index) => (
                    <ScrollAnimate key={index} className="h-full">
                        <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cert-card"
                        >
                            <div className="cert-icon-wrapper">
                                {cert.icon}
                            </div>
                            <div className="cert-details">
                                <span className="cert-category">{cert.category}</span>
                                <h3 className="cert-title">{cert.title}</h3>
                                <span className="cert-issuer">{cert.issuer}</span>
                            </div>
                            <div className="cert-action">
                                View Certificate &rarr;
                            </div>
                        </a>
                    </ScrollAnimate>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Certifications;
