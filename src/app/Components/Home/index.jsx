"use client";

import { motion } from "framer-motion";
import HeroSection from "@/app/Components/herosection";
import IphoneSilder from "@/app/Components/iphone silder";
import Ad from "@/app/Components/Ads";
import ProductSlider from "@/app/Components/ProductSlider";
import VideoFrame from "@/app/Components/macvideo";
import VideoFrameMacOpen from "@/app/Components/videoframe";
import Imageslider from "@/app/Components/imageslider";
import Footer from "@/app/Components/Footer";
import Navbar from "@/app/Components/Navbar";

const Home = () => {
    const containerVariants = {
        hidden: {
            opacity: 0,
            scale: 1.2
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-black min-h-screen w-full overflow-x-hidden"
        >
            <motion.div variants={itemVariants} className="fixed top-0 w-full z-50">
                <Navbar />
            </motion.div>
            <div className="space-y-0">
                <motion.div variants={itemVariants}><HeroSection /></motion.div>
                <motion.div variants={itemVariants}><IphoneSilder /></motion.div>
                <motion.div variants={itemVariants}><Ad /></motion.div>
                <motion.div variants={itemVariants}><ProductSlider /></motion.div>
                <motion.div variants={itemVariants}><VideoFrame /></motion.div>
                <motion.div variants={itemVariants}><VideoFrameMacOpen /></motion.div>
                <motion.div variants={itemVariants}><Imageslider /></motion.div>
                <motion.div variants={itemVariants}><Footer /></motion.div>
            </div>
        </motion.div>
    );
};

export default Home; 