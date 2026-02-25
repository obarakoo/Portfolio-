import React, { useRef } from "react";
import { motion } from "framer-motion";
import ScrollAnimate from "./ScrollAnimate";
import Typewriter from "./Typewriter";
import ParticlesBackground from "./ParticlesBackground";
import profileImage from "../../profile-user/image-profile.png";
import { skillsData } from "../data/skills";

const Hero = () => {
  const ref = useRef(null);


  const allSkills = skillsData.flatMap((category) => category.items).filter(item => item.icon);
  const totalSkills = allSkills.length;

  return (
    <section id="about" className="section hero-section" ref={ref}>
      {/* 1. Background Layer: Particles (Slowest) */}
      {/* 1. Background Layer: Particles (Slowest) */}
      <motion.div

        className="parallax-layer background-layer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <ParticlesBackground />
      </motion.div>

      <div className="hero-content">
        {/* Character & Logos - Pop In Animation */}
        <motion.div
          className="hero-foreground"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "backOut", delay: 0.2 }}
        >
          <ScrollAnimate>
            <div className="profile-wrapper character-vibe">
              <div className="hero-aura"></div>
              <div className="profile-image-container">
                <img src={profileImage} alt="Alfred Profile" className="profile-image" />
              </div>
              {/* Orbiting Tech Icons */}
              <div className="orbit-ring">
                {allSkills.map((skill, index) => {
                  const startAngle = (360 / totalSkills) * index;
                  return (
                    <div
                      key={index}
                      className="orbit-item"
                      title={skill.name}
                      style={{
                        "--start-angle": `${startAngle}deg`,
                      }}
                    >
                      <motion.div
                        className="orbit-icon-inner"
                        drag
                        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                        dragElastic={0.6}
                        dragSnapToOrigin
                        whileHover={{
                          scale: 1.3,
                          rotate: 15,
                          boxShadow: "0 0 40px var(--accent)",
                          backgroundColor: "var(--accent)",
                          color: "white",
                          borderColor: "white",
                          transition: { type: "spring", stiffness: 300 }
                        }}
                        whileTap={{ scale: 0.9, cursor: "grabbing" }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      >
                        <skill.icon />
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollAnimate>
        </motion.div>

        {/* Text Area - Slide Up Animation */}
        <motion.div
          className="hero-text-area"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
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
              I am a Technical QA Engineer and Frontend Developer
              who lives at the intersection of clean code and bulletproof reliability.
              I don’t just find bugs;
              I engineer the systems that prevent them.
              By blending a Senior Developer’s mindset with the precision of an
              IT Infrastructure Specialist, I bridge the gap between "it works
              on my machine" and "it’s ready for the world." Whether I’m crafting
              responsive UI in React or architecting automated test suites in
              Playwright, my goal remains the
              same: eliminating friction and elevating the user experience.
              I bring the technical depth to dive into the source code and the
              strategic vision to oversee the entire SDLC.
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
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
