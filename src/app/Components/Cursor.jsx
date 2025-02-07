"use client"; // Required for Next.js App Router

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDesktop, setIsDesktop] = useState(true);

    useEffect(() => {
        // Detect if the screen is larger than 768px (Tablet & Desktop)
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth > 768);
        };

        // Initial check
        checkScreenSize();

        // Listen for screen resize
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    useEffect(() => {
        if (!isDesktop) return; // Stop cursor tracking on mobile

        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, [isDesktop]);

    if (!isDesktop) return null; // Do not render cursor on mobile

    return (
        <motion.div
            className="cursor-dot"
            animate={{ x: position.x - 5, y: position.y - 5 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />
    );
};

export default Cursor;
