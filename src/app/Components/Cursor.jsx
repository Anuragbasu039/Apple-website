"use client"; // Add this if using Next.js App Router

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", handleMouseMove);
        return () => document.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <motion.div
            className="cursor-dot"
            animate={{ x: position.x - 5, y: position.y - 5 }}
            transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />
    );
};

export default Cursor;
