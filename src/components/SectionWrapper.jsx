import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ children, id, className = "" }) => (
    <motion.section
        id={id}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className={`section ${className}`}
    >
        {children}
    </motion.section>
);

export default SectionWrapper;
