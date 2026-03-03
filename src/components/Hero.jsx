import React, { useRef } from "react";
import { motion } from "framer-motion";
import ScrollAnimate from "./ScrollAnimate";
import Typewriter from "./Typewriter";
import ParticlesBackground from "./ParticlesBackground";
import profileImage from "../../profile-user/image-profile.png";
import resumePdf from "../Resume/Alfred.cv.pdf";
import { skillsData } from "../data/skills";

const Hero = () => {
  const ref = useRef(null);


  const allSkills = skillsData.flatMap((category) => category.items).filter(item => item.icon);
  const totalSkills = allSkills.length;

  return (
    <section id="about" className="section hero-section" ref={ref} style={{ maxWidth: "100%", paddingLeft: "2%", paddingRight: "2%" }}>
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

      <div className="hero-content" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center', justifyContent: 'center', paddingTop: '2rem', width: '100%', maxWidth: '100%', margin: '0 auto' }}>
        {/* LEFT COLUMN */}
        <div className="hero-left-col" style={{ flex: '0.5 1 400px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
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
                <motion.div
                  className="orbit-ring"
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                >
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
                          style={{ width: "100%", height: "100%" }}
                          animate={{ rotate: -360 }} // Reverse rotation to keep icons upright
                          transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
                        >
                          <motion.div
                            className="orbit-icon-inner"
                            drag
                            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                            dragElastic={0.6}
                            dragSnapToOrigin
                            whileHover={{
                              scale: 1.3,
                              rotate: 360,
                              boxShadow: "0 0 40px var(--accent)",
                              backgroundColor: "var(--accent)",
                              color: "white",
                              borderColor: "white",
                              transition: { rotate: { repeat: Infinity, duration: 1, ease: "linear" }, type: "spring", stiffness: 300 }
                            }}
                            whileTap={{ scale: 0.9, cursor: "grabbing" }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                          >
                            <skill.icon />
                          </motion.div>
                        </motion.div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </ScrollAnimate>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            style={{ width: "100%", marginTop: "1rem" }}
          >

            <ScrollAnimate>
              <div style={{ marginBottom: "1.5rem" }}>
                <Typewriter />
              </div>
            </ScrollAnimate>
            <ScrollAnimate>
              <div className="hero-actions" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#projects" className="primary-button">
                  View Projects
                </a>
                <a href={resumePdf} download="Alfred-CV.pdf" className="secondary-button">
                  Download Resume
                </a>
              </div>
            </ScrollAnimate>
          </motion.div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="hero-right-col" style={{ flex: '1 1 500px' }}>
          <motion.div
            className="hero-text-area"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            style={{ textAlign: "center" }}
          >
            <ScrollAnimate>
              <h2 className="hero-headline" style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontWeight: "700", marginBottom: "2rem", lineHeight: "1.2" }}>
                Bridging the Gap Between Quality <span style={{ color: "var(--accent-cyber)" }}>Assurance</span> and
                <span style={{ color: "var(--accent-purple)" }}>Development</span>
              </h2>
            </ScrollAnimate>

            <ScrollAnimate>
              <p className="hero-subheadline" style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "var(--text-muted)", margin: "0 auto", maxWidth: "100%" }}>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
