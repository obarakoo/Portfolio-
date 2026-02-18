import React from "react";
import ScrollAnimate from "./ScrollAnimate";
import Typewriter from "./Typewriter";
import profileImage from "../../profile-user/image-profile.png";
import { skillsData } from "../data/skills";

const Hero = () => {
  const allSkills = skillsData.flatMap((category) => category.items).filter(item => item.icon);
  const totalSkills = allSkills.length;

  return (
    <section id="about" className="section hero-section">
      <div className="hero-grid-bg"></div>
      <div className="hero-content">
        <ScrollAnimate>
          <div className="profile-wrapper character-vibe">
            <div className="profile-image-container">
              <img src={profileImage} alt="Alfred Profile" className="profile-image" />
              <div className="profile-glow-overlay"></div>
            </div>
            {/* Orbiting Tech Icons */}
            <div className="orbit-ring">
              {allSkills.map((skill, index) => {
                const angle = (360 / totalSkills) * index;
                const radius = 192; // 384px width / 2
                return (
                  <div
                    key={index}
                    className="orbit-item"
                    title={skill.name}
                    style={{
                      animationDelay: `calc(-20s / ${totalSkills} * ${index})`,
                    }}
                  >
                    <div className="orbit-icon-inner">
                      <skill.icon />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollAnimate>
        <ScrollAnimate>
          <Typewriter />
        </ScrollAnimate>

        <ScrollAnimate>
          <h2 className="hero-headline">
            Bridging the Gap Between Quality Assurance and Development
          </h2>
        </ScrollAnimate>

        <ScrollAnimate>
          <p className="hero-subheadline">
            Detail-oriented Software Tester and IT Specialist with a proven
            track record in manual testing, defect identification, and
            systematic troubleshooting. Leveraging a technical foundation in
            HTML, CSS, and JavaScript, I collaborate with development teams to
            validate functionality and improve UI/UX. With certifications in
            Playwright, Jira, and the SDLC, I am dedicated to advancing quality
            through QA automation and modern testing methodologies.
          </p>
        </ScrollAnimate>

        <ScrollAnimate>
          <div className="hero-actions">
            <a href="#projects" className="primary-button">
              View Projects
            </a>
            <a href="/resume.pdf" download className="secondary-button">
              Download Resume
            </a>
          </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default Hero;
