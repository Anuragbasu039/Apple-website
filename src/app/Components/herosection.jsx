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
        <div className="min-h-screen bg-gradient-to-b from-purple-200 to-white flex items-center justify-center bg-[radial-gradient(circle_at_bottom,_rgba(128,90,213,0.3),_transparent)]">
            <div className="text-center max-w-4xl mx-auto px-6 py-12">
                {/* Header Section */}
                <div className="mb-10">
                    <div className="text-sm uppercase text-purple-600 font-semibold">The Ultimate Traffic Analysis Platform</div>
                    <h1 className="text-5xl font-bold text-gray-900 mt-2">
                        Optimize Your Business with{' '}<br />
                        <span className="bg-purple-600 text-white">Real-Time Traffic Insights</span>
                    </h1>
                    <p className="mt-4 text-black-600 text-lg leading-relaxed">
                        Gain deep insights into your website’s performance with real-time analytics and detailed <br /> traffic reports.
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-8 flex justify-center gap-4">
                    <button className="bg-purple-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 transition">
                        Get Started
                    </button>
                    <button className="bg-gray-200 text-gray-700 py-3 px-8 rounded-lg shadow-lg hover:bg-gray-300 transition">
                        Learn More
                    </button>
                </div>

                {/* Image Mockup Section */}
                <div className="relative mt-12">
                    <div
                        className="bg-white rounded-3xl shadow-[0px_25px_50px_-12px_rgba(148,163,184,0.4)] overflow-hidden"
                        style={{
                            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                            transition: 'transform 0.2s ease-out',
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image
                            src="/heropic1.webp" // Place the image in the `public` folder
                            alt="Dashboard Preview"
                            width={800} // Set width and height for better optimization
                            height={500}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
