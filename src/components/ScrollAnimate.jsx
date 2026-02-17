import React from "react";
import { motion } from "framer-motion";

const ScrollAnimate = ({ children, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={className}
    >
        {children}
    </motion.div>
);

export default ScrollAnimate;
