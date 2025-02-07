'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Adsection() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-black px-4 md:px-6 lg:px-12 py-12 overflow-hidden">
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left Section */}
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.2 }}
                >
                    {/* Sales Statistic Card */}
                    <div>
                        <Image
                            src="/a1.jpg" // Place the image in the `public` folder
                            alt="Dashboard Preview"
                            width={1000} // Set width and height for better optimization
                            height={1000}
                        />
                    </div>
                </motion.div>

                {/* Right Section */}
                <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.2 }}
                >
                    {/* Video Frame with Light Reflection Effect */}
                    <div className="mt-6 rounded-2xl overflow-hidden shadow-lg group relative border-glow">
                        <video
                            autoPlay
                            loop
                            muted
                            className="w-full h-full rounded-2xl relative"
                            onEnded={(e) => e.target.play()} // Restart the video if it stops
                        >
                            <source src="https://www.apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/large.mp4" type="video/mp4" />
                        </video>
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

                            video::-webkit-media-controls { display: none !important; }
                        `}</style>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
