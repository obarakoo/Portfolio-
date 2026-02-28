import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
    const smoothX = useSpring(cursorX, springConfig);
    const smoothY = useSpring(cursorY, springConfig);

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            const target = e.target;
            if (
                target.tagName.toLowerCase() === "a" ||
                target.tagName.toLowerCase() === "button" ||
                target.closest("a") ||
                target.closest("button") ||
                target.closest(".orbit-item") ||
                target.closest(".project-card") ||
                target.closest(".cert-card") ||
                target.closest(".skill-card")
            ) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        window.addEventListener("mousemove", updateMousePosition);
        window.addEventListener("mouseover", handleMouseOver);
        window.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("mouseover", handleMouseOver);
            window.removeEventListener("mouseout", handleMouseOut);
        };
    }, [cursorX, cursorY]);

    return (
        <div className="custom-cursor-portal">
            <motion.div
                className="custom-cursor-dot"
                style={{
                    x: smoothX,
                    y: smoothY,
                }}
                animate={{
                    scale: isHovering ? 0 : 1,
                    opacity: 1,
                }}
                transition={{ duration: 0.2 }}
            />
            <motion.div
                className="custom-cursor-ring"
                style={{
                    x: smoothX,
                    y: smoothY,
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? "rgba(0, 240, 255, 0.8)" : "rgba(255, 255, 255, 0.3)",
                    backgroundColor: isHovering ? "rgba(0, 240, 255, 0.1)" : "transparent",
                }}
                transition={{ duration: 0.2 }}
            />
            <motion.div
                className="custom-cursor-glow"
                style={{
                    x: cursorX,
                    y: cursorY,
                }}
            />
        </div>
    );
};

export default Cursor;
