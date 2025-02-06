'use client'

import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });

    // Function to calculate rotation based on cursor position
    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width; // Horizontal position (0 to 1)
        const y = (e.clientY - top) / height; // Vertical position (0 to 1)

        // Calculate rotation values (-15deg to 15deg)
        setRotation({
            x: (y - 0.5) * 30, // Invert Y-axis for rotation
            y: (x - 0.5) * -30,
        });
    };

    const handleMouseLeave = () => {
        // Reset rotation on mouse leave
        setRotation({ x: 0, y: 0 });
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                background: `radial-gradient(rgba(255, 255, 255, 0), transparent), center / cover no-repeat`,
            }}
        >
            <div className="text-center max-w-4xl mx-auto px-6 py-12">
                {/* Header Section */}
                <div className="mt-20">
                    <Image
                        src="/appleheadingtag.png" // Replace with the correct image path
                        alt="Apple Intelligents Logo"
                        width={1000}
                        height={500}
                    />
                </div>

                {/* Buttons */}
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        className="bg-black text-white py-3 px-8 rounded-lg shadow-lg hover:bg-white hover:text-black transition border white">
                        Get Started
                    </button>
                    <button className="bg-gray-200 text-gray-700 py-3 px-8 rounded-lg shadow-lg hover:bg-gray-300 transition">
                        Learn More
                    </button>
                </div>

                {/* Video Mockup Section */}
                <div className="relative mt-10">
                    <div
                        className="rounded-3xl overflow-hidden glass-effect relative border-glow"
                        style={{
                            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                            transition: 'transform 0.2s ease-out',
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            className="w-full h-full rounded-2xl"
                            onEnded={(e) => e.target.play()} // Restart the video if it stops
                        >
                            <source src="https://www.apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/large.mp4" type="video/mp4" />
                        </video>
                    </div>
                </div>

                <style jsx>{`
                    @keyframes glow-border {
                        0% { box-shadow: 0 0 10px #22d3ee; }
                        50% { box-shadow: 0 0 20px #eb34cf; }
                        75% { box-shadow: 0 0 10px #eb3465; }
                        100% { box-shadow: 0 0 10px #c9b906; }
                    }

                    .border-glow {
                        border-radius: 16px;
                        animation: glow-border 2s infinite alternate;
                    }
                `}</style>
            </div>
        </div>
    );
}
