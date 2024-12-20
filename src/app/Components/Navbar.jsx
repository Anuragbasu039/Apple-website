'use client'

import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white/30 backdrop-blur-lg z-50">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex justify-center items-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <span className="text-lg font-bold text-black">DataFlow</span>
            </div>

            {/* Navigation Links for Desktop */}
            <div className="hidden md:flex space-x-6 text-gray-700">
                <a href="#features" className="hover:text-purple-600 transition-colors">
                    Features
                </a>
                <a href="#benefits" className="hover:text-purple-600 transition-colors">
                    Benefits
                </a>
                <a href="#solutions" className="hover:text-purple-600 transition-colors">
                    Solutions
                </a>
                <a href="#testimonials" className="hover:text-purple-600 transition-colors">
                    Testimonials
                </a>
                <a href="#pricing" className="hover:text-purple-600 transition-colors">
                    Pricing
                </a>
                <a href="#faq" className="hover:text-purple-600 transition-colors">
                    FAQ
                </a>
            </div>

            {/* Buy Template Button for Desktop */}
            <div className="hidden md:block">
                <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
                    Buy Template
                </button>
            </div>

            {/* Hamburger Icon for Mobile */}
            <button
                className="md:hidden flex items-center justify-center w-10 h-10 text-purple-600"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                    <div className="flex flex-col  space-y-4 py-4 px-6 text-gray-700">
                        <a
                            href="#features"
                            className="hover:text-purple-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Features
                        </a>
                        <a
                            href="#benefits"
                            className="hover:text-purple-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Benefits
                        </a>
                        <a
                            href="#solutions"
                            className="hover:text-purple-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Solutions
                        </a>
                        <a
                            href="#testimonials"
                            className="hover:text-purple-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Testimonials
                        </a>
                        <a
                            href="#pricing"
                            className="hover:text-purple-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Pricing
                        </a>
                        <a
                            href="#faq"
                            className="hover:text-purple-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            FAQ
                        </a>
                        <button className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 transition">
                            Buy Template
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
