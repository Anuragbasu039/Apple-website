"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { isTouchDevice } from "@/lib/utils";

const IntroAnimation = ({ children }) => {
    const containerRef = useRef(null);
    const [hasScrolled, setHasScrolled] = useState(false);
    const [animationTriggered, setAnimationTriggered] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    const [deviceType, setDeviceType] = useState('desktop');

    useEffect(() => {
        const checkDevice = () => {
            const width = window.innerWidth;
            setIsTouch(isTouchDevice());

            if (width <= 640) {
                setDeviceType('mobile');
            } else if (width <= 1024) {
                setDeviceType('tablet');
            } else {
                setDeviceType('desktop');
            }
        };

        checkDevice();
        window.addEventListener('resize', checkDevice);
        return () => window.removeEventListener('resize', checkDevice);
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const animationConfig = {
        mobile: {
            scale: [1, 20],
            scalePoint: [0, 0.2],
            opacity: [1, 0],
            opacityPoint: [0.15, 0.2],
            triggerPoint: 0.25,
            height: "130vh"
        },
        tablet: {
            scale: [1, 25],
            scalePoint: [0, 0.25],
            opacity: [1, 0],
            opacityPoint: [0.2, 0.25],
            triggerPoint: 0.3,
            height: "150vh"
        },
        desktop: {
            scale: [1, 30],
            scalePoint: [0, 0.3],
            opacity: [1, 0],
            opacityPoint: [0.25, 0.3],
            triggerPoint: 0.35,
            height: "175vh"
        }
    };

    const config = animationConfig[deviceType];

    const scale = useTransform(
        scrollYProgress,
        config.scalePoint,
        config.scale
    );

    const opacity = useTransform(
        scrollYProgress,
        config.opacityPoint,
        config.opacity
    );

    useEffect(() => {
        if (!scrollYProgress) return;

        const handleScroll = () => {
            const scrollValue = scrollYProgress.get();

            if (!animationTriggered) {
                if (scrollValue > 0.1) {
                    setHasScrolled(true);
                }
                if (scrollValue > config.triggerPoint) {
                    setAnimationTriggered(true);
                    requestAnimationFrame(() => {
                        window.scrollTo(0, 0);
                    });
                }
            }
        };

        const scrollListener = () => {
            requestAnimationFrame(handleScroll);
        };

        window.addEventListener('scroll', scrollListener);
        return () => window.removeEventListener('scroll', scrollListener);
    }, [scrollYProgress, animationTriggered, config.triggerPoint]);

    return (
        <div className="relative">
            {!animationTriggered && (
                <motion.div
                    ref={containerRef}
                    className="fixed inset-0 bg-black z-50"
                    style={{ height: config.height }}
                >
                    <div className="sticky top-0 h-screen w-full flex items-center justify-center">
                        <motion.div
                            style={{ scale, opacity }}
                            className="relative z-20"
                        >
                            <AppleLogo deviceType={deviceType} />
                        </motion.div>

                        {!hasScrolled && !isTouch && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ opacity: hasScrolled ? 0 : 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute bottom-10 flex flex-col items-center text-white/60"
                            >
                                <motion.div
                                    animate={{ y: [0, 8, 0] }}
                                    transition={{ repeat: Infinity, duration: 1.2 }}
                                >
                                    ↓
                                </motion.div>
                                <span className="text-sm mt-2">Scroll to explore</span>
                            </motion.div>
                        )}

                        {!hasScrolled && isTouch && (
                            <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ opacity: hasScrolled ? 0 : 1 }}
                                transition={{ duration: 0.3 }}
                                className="absolute bottom-10 text-center text-white/60"
                            >
                                <span className="text-sm">Swipe up to explore</span>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            )}

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: animationTriggered ? 1 : 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                {children}
            </motion.div>
        </div>
    );
};

const AppleLogo = ({ deviceType }) => {
    const logoSizes = {
        mobile: 'w-7 h-7',
        tablet: 'w-12 h-12',
        desktop: 'w-16 h-16'
    };

    return (
        <motion.svg
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: 0.1
            }}
            className={`${logoSizes[deviceType]} text-white`}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"
                fill="currentColor"
            />
        </motion.svg>
    );
};

export default IntroAnimation; 