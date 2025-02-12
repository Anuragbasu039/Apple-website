"use client"; // Required for Next.js App Router

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMouse } from '@/hooks/use-mouse';

const GradientCursor = () => {
    const [mouseState, ref] = useMouse();
    const [hue, setHue] = useState(0);
    const [particles, setParticles] = useState([]);
    const particleIdCounter = useRef(0);
    const [isTouchDevice, setIsTouchDevice] = useState(false);
    const [touchPosition, setTouchPosition] = useState({ x: null, y: null });

    // Check if device supports touch
    useEffect(() => {
        const checkTouch = () => {
            setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
        };
        checkTouch();
        window.addEventListener('resize', checkTouch);
        return () => window.removeEventListener('resize', checkTouch);
    }, []);

    // Handle touch events with passive tracking
    useEffect(() => {
        if (!isTouchDevice) return;

        const handleTouchMove = (e) => {
            const touch = e.touches[0];
            if (touch) {
                const rect = document.documentElement.getBoundingClientRect();
                setTouchPosition({
                    x: touch.clientX - rect.left,
                    y: touch.clientY - rect.top
                });

                const newHue = (touch.clientX || 0) % 360;
                setHue(newHue);
                const newParticles = Array.from({ length: 3 }, () => {
                    particleIdCounter.current += 1;
                    return {
                        id: `particle-${Date.now()}-${particleIdCounter.current}`,
                        x: touch.clientX + (Math.random() - 0.5) * 20,
                        y: touch.clientY + (Math.random() - 0.5) * 20,
                        size: Math.random() * 3 + 2,
                        intensity: Math.random() * 0.5 + 0.5,
                    };
                });
                setParticles((prev) => [...prev, ...newParticles].slice(-30));
            }
        };

        document.addEventListener('touchmove', handleTouchMove, { passive: true });
        document.addEventListener('touchstart', handleTouchMove, { passive: true });

        return () => {
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchstart', handleTouchMove);
        };
    }, [isTouchDevice]);

    // Handle mouse events
    useEffect(() => {
        if (isTouchDevice || !mouseState.x || !mouseState.y) return;

        const newHue = (mouseState.x || 0) % 360;
        setHue(newHue);
        const newParticles = Array.from({ length: 3 }, () => {
            particleIdCounter.current += 1;
            return {
                id: `particle-${Date.now()}-${particleIdCounter.current}`,
                x: mouseState.x + (Math.random() - 0.5) * 20,
                y: mouseState.y + (Math.random() - 0.5) * 20,
                size: Math.random() * 3 + 2,
                intensity: Math.random() * 0.5 + 0.5,
            };
        });
        setParticles((prev) => [...prev, ...newParticles].slice(-30));
    }, [mouseState.x, mouseState.y, isTouchDevice]);

    const currentX = isTouchDevice ? (touchPosition.x ?? mouseState.x ?? 0) : mouseState.x;
    const currentY = isTouchDevice ? (touchPosition.y ?? mouseState.y ?? 0) : mouseState.y;

    return (
        <div className="cursor-container" ref={ref}>
            {(currentX !== null && currentY !== null) && (
                <>
                    {/* Only show the cursor ball on non-touch devices */}
                    {!isTouchDevice && (
                        <motion.div
                            className="fixed pointer-events-none z-50"
                            style={{
                                left: currentX,
                                top: currentY,
                                x: '-50%',
                                y: '-50%',
                                width: '40px',
                                height: '40px',
                            }}
                            transition={{
                                duration: 0.2,
                                ease: "linear"
                            }}>
                            <div
                                className="w-full h-full rounded-full mix-blend-screen"
                                style={{
                                    background: `radial-gradient(
                                        circle at center,
                                        hsl(${hue}, 100%, 70%),
                                        hsl(${(hue + 60) % 360}, 100%, 60%)
                                    )`,
                                    boxShadow: `0 0 20px hsl(${hue}, 100%, 50%, 0.5)`,
                                }}
                            />
                        </motion.div>
                    )}

                    <AnimatePresence>
                        {particles.map((particle, index) => (
                            <motion.div
                                key={particle.id}
                                className="fixed pointer-events-none mix-blend-screen"
                                style={{
                                    left: particle.x,
                                    top: particle.y,
                                    x: '-50%',
                                    y: '-50%',
                                }}
                                initial={{ opacity: particle.intensity, scale: 0 }}
                                animate={{ opacity: 0, scale: particle.size }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1, ease: 'easeOut' }}>
                                <div
                                    className="rounded-full"
                                    style={{
                                        width: `${particle.size * (isTouchDevice ? 6 : 4)}px`,
                                        height: `${particle.size * (isTouchDevice ? 6 : 4)}px`,
                                        background: `radial-gradient(
                                            circle at center,
                                            hsl(${(hue + index * 10) % 360}, 100%, ${70 + particle.intensity * 30}%),
                                            transparent
                                        )`,
                                        filter: 'blur(2px)',
                                        boxShadow: `0 0 ${particle.size * 2}px hsl(${(hue + index * 10) % 360}, 100%, 50%, ${particle.intensity})`,
                                    }}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </>
            )}
        </div>
    );
};

export default GradientCursor;
