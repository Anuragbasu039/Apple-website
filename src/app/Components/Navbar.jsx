'use client'

import { useState } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-white/30 backdrop-blur-lg z-50">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                {/* Apple Logo */}
                <div className="w-6 h-6  rounded-full flex justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100"
                         viewBox="0 0 50 50">
                        <path
                            d="M 44.527344 34.75 C 43.449219 37.144531 42.929688 38.214844 41.542969 40.328125 C 39.601563 43.28125 36.863281 46.96875 33.480469 46.992188 C 30.46875 47.019531 29.691406 45.027344 25.601563 45.0625 C 21.515625 45.082031 20.664063 47.03125 17.648438 47 C 14.261719 46.96875 11.671875 43.648438 9.730469 40.699219 C 4.300781 32.429688 3.726563 22.734375 7.082031 17.578125 C 9.457031 13.921875 13.210938 11.773438 16.738281 11.773438 C 20.332031 11.773438 22.589844 13.746094 25.558594 13.746094 C 28.441406 13.746094 30.195313 11.769531 34.351563 11.769531 C 37.492188 11.769531 40.8125 13.480469 43.1875 16.433594 C 35.421875 20.691406 36.683594 31.78125 44.527344 34.75 Z M 31.195313 8.46875 C 32.707031 6.527344 33.855469 3.789063 33.4375 1 C 30.972656 1.167969 28.089844 2.742188 26.40625 4.78125 C 24.878906 6.640625 23.613281 9.398438 24.105469 12.066406 C 26.796875 12.152344 29.582031 10.546875 31.195313 8.46875 Z"></path>
                    </svg>
                </div>
                <span className="text-lg font-bold text-black">Apple</span>
            </div>

            {/* Navigation Links for Desktop */}
            <div className="hidden md:flex space-x-6 text-gray-700">
                <a href="#features" className="hover:text-[#22d3ee] transition-colors">
                    Features
                </a>
                <a href="#benefits" className="hover:text-[#22d3ee] transition-colors">
                    Benefits
                </a>
                <a href="#solutions" className="hover:text-[#22d3ee] transition-colors">
                    Solutions
                </a>
                <a href="#testimonials" className="hover:text-[#22d3ee] transition-colors">
                    Testimonials
                </a>
                <a href="#pricing" className="hover:text-[#22d3ee] transition-colors">
                    Pricing
                </a>
                <a href="#faq" className="hover:text-[#22d3ee] transition-colors">
                    FAQ
                </a>
            </div>

            {/* Buy Template Button for Desktop */}
            <div className="hidden md:block">
                <button className="bg-[#22d3ee] text-white py-2 px-4 rounded-lg hover:bg-[#22d3ee] transition">
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
                    <div className="flex flex-col space-y-4 py-4 px-6 text-gray-700">
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
