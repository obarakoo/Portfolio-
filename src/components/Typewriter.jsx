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
        <h2 className="hero-headline-typewriter">
            Hi, I am <span className="highlight-text">Alfred</span> <br />
            <span className="typewriter-text">
                {words[index].substring(0, subIndex)}
                <span className={`cursor ${blink ? "blink-on" : "blink-off"}`}>|</span>
            </span>
        </h2>
    );
};

export default Typewriter;
