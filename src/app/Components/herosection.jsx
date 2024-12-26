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
            className=" min-h-screen flex items-center justify-center"
            style={{
                background: `radial-gradient(circle,rgba(170, 237, 255, 0.8), transparent), url('/background-image.jpg') center / cover no-repeat`,
            }}
        >
            <div className="text-center max-w-4xl mx-auto px-6 py-12">
                {/* Header Section */}
                <div className="mt-20">
                    {/*<div className="text-sm uppercase text-[#22d3ee] font-semibold">The Ultimate Traffic Analysis Platform</div>*/}
                    {/*<h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-10">*/}
                    {/*    Iphone 16{' '}<br/>*/}
                    {/*</h1>*/}
                    <span
                        className="bg-gradient-to-r from-[#0090f7] via-[#ba62fc] to-[#f2416b] text-white text-3xl md:text-5xl font-bold">
    Build For Apple Intelligents
</span>
                    {/*<p className="mt-4 text-black-600 text-lg leading-relaxed">*/}
                    {/*    Gain deep insights into your website’s performance with real-time analytics and detailed <br /> traffic reports.*/}
                    {/*</p>*/}
                </div>

                {/* Buttons */}
                <div className="mt-8 flex justify-center gap-4">
                    <button
                        className="bg-[#22d3ee] text-white py-3 px-8 rounded-lg shadow-lg hover:bg-[#22d3ee] transition">
                        Get Started
                    </button>
                    <button className="bg-gray-200 text-gray-700 py-3 px-8 rounded-lg shadow-lg hover:bg-gray-300 transition">
                        Learn More
                    </button>
                </div>

                {/* Image Mockup Section */}
                <div className="relative mt-12">
                    <div
                        className=" rounded-3xl overflow-hidden glass-effect"
                        style={{
                            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                            transition: 'transform 0.2s ease-out',
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Image
                            src="/iphone 16.png" // Place the image in the `public` folder
                            alt="Dashboard Preview"
                            width={600} // Set width and height for better optimization
                            height={600}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
