import React, { useState, useEffect } from 'react';

const Typewriter = () => {
    const words = ["Software Tester", "Front-End Developer", "IT Specialist", "Automation Enthusiast"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);

    // Blinking cursor state
    const [blink, setBlink] = useState(true);

    // Blinking cursor effect
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setTimeout(() => setReverse(true), 2000);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, reverse ? 75 : 150);

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    return (
        <h1 className="hero-headline-typewriter">
            <h1 style={{ fontSize: "2.2rem", fontWeight: "bold", margin: "1rem 0 0.5rem 0" }}>
                Hi, I am Alfred
            </h1>
            <span className="typewriter-text">
                {words[index].substring(0, subIndex)}
                <span className={`cursor ${blink ? "blink-on" : "blink-off"}`}>|</span>
            </span>
        </h1>
    );
};

export default Typewriter;
