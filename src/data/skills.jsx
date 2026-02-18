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

export const skillsData = [
    {
        category: "Languages & Scripting",
        items: [
            { name: "Python", icon: SiPython, className: "python" },
            { name: "JavaScript", icon: SiJavascript, className: "js" },
            { name: "HTML5", icon: SiHtml5, className: "html" },
            { name: "CSS3", icon: SiCss3, className: "css" },
        ],
    },
    {
        category: "Tools & Frameworks",
        items: [
            { name: "Playwright", icon: FaBug, className: "playwright" },
            { name: "Selenium", icon: SiSelenium, className: "selenium" },
            { name: "React", icon: SiReact, className: "react" },
            { name: "Jira", icon: SiJira, className: "jira" },
            { name: "Git", icon: SiGit, className: "git" },
            { name: "GitHub", icon: SiGithub, className: "github" },
        ],
    },
    {
        category: "Infrastructure & Concepts",
        items: [
            { name: "Cisco CCNA", icon: SiCisco, className: "cisco" },
            { name: "Postman", icon: SiPostman, className: "postman" },
            { name: "SDLC", text: "SDLC" },
            { name: "Manual Testing", text: "Explore" },
        ],
    },
];
