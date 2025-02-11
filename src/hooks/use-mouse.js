'use client';

import { useState, useEffect, useRef } from 'react';

export const useMouse = () => {
    const [mouseState, setMouseState] = useState({ x: null, y: null });
    const ref = useRef(null);
    const isMoving = useRef(false);

    useEffect(() => {
        const handleMouseMove = (event) => {
            if (!isMoving.current) {
                isMoving.current = true;
                requestAnimationFrame(() => {
                    setMouseState({
                        x: event.clientX,
                        y: event.clientY,
                    });
                    isMoving.current = false;
                });
            }
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return [mouseState, ref];
}; 