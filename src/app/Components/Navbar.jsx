'use client'

import { useState, useEffect } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { name: 'MAC', gradient: 'from-blue-400 to-cyan-400' },
        { name: 'iPad', gradient: 'from-green-400 to-emerald-400' },
        { name: 'iPhone', gradient: 'from-purple-400 to-pink-400' },
        { name: 'Watch', gradient: 'from-red-400 to-orange-400' },
        { name: 'AirPods', gradient: 'from-yellow-400 to-amber-400' },
        { name: 'TV & Home', gradient: 'from-indigo-400 to-violet-400' },
        { name: 'Entertainment', gradient: 'from-pink-400 to-rose-400' },
        { name: 'Accessories', gradient: 'from-teal-400 to-cyan-400' },
        { name: 'Support', gradient: 'from-blue-400 to-indigo-400' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 transition-all duration-300 ${isScrolled ? "bg-black/30 backdrop-blur-lg" : "bg-black"}`}>
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
                {/* Apple Logo */}

                <div className="w-6 h-6 rounded-full flex justify-center items-center">
                    <svg fill="#FFFFFF" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64px" height="64px"><path d="M54.166,19.783c-0.258,0.162-6.401,3.571-6.401,11.13c0.29,8.621,7.752,11.644,7.88,11.644	c-0.128,0.162-1.127,4.119-4.085,8.267C49.213,54.398,46.607,58,42.65,58c-3.764,0-5.115-2.381-9.458-2.381	c-4.664,0-5.984,2.381-9.555,2.381c-3.957,0-6.756-3.795-9.232-7.335c-3.216-4.633-5.95-11.903-6.047-18.883	c-0.065-3.699,0.644-7.335,2.444-10.423c2.541-4.312,7.077-7.238,12.031-7.335c3.795-0.128,7.173,2.606,9.49,2.606	c2.22,0,6.37-2.606,11.065-2.606C45.415,14.026,50.82,14.636,54.166,19.783z M32.002,13.285c-0.676-3.378,1.19-6.756,2.927-8.911	C37.149,1.769,40.655,0,43.678,0c0.193,3.378-1.03,6.691-3.216,9.104C38.5,11.71,35.122,13.671,32.002,13.285z" /></svg>
                </div>
                <span className="text-lg font-bold text-white">Apple</span>
            </div>

            {/* Navigation Links for Desktop */}
            <div className="hidden md:flex space-x-6 text-white">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={`#${item.name.toLowerCase()}`}
                        className="relative group"
                    >
                        <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent 
                            opacity-70 group-hover:opacity-100 transition-opacity duration-200`}>
                            {item.name}
                        </span>
                        <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${item.gradient}
                            group-hover:w-full transition-all duration-200`}>
                        </span>
                    </a>
                ))}
            </div>

            {/* Buy Template Button for Desktop */}
            <div className="hidden md:block">
                <button className=" text-white py-2 px-4 rounded-lg bg black border border-white hover:bg-white hover:text-black transition-all duration-300">
                    Buy Now
                </button>
            </div>

            {/* Hamburger Icon for Mobile */}
            <button
                className="md:hidden flex items-center justify-center w-10 h-10 text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-black/90 backdrop-blur-lg md:hidden">
                    <div className="flex flex-col space-y-4 py-4 px-6">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={`#${item.name.toLowerCase()}`}
                                className="relative group"
                                onClick={() => setIsOpen(false)}
                            >
                                <span className={`bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent 
                                    opacity-70 group-hover:opacity-100 transition-opacity duration-200`}>
                                    {item.name}
                                </span>
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${item.gradient}
                                    group-hover:w-full transition-all duration-200`}>
                                </span>
                            </a>
                        ))}
                        <button className="text-white py-2 px-4 rounded-lg bg black border border-white hover:bg-white hover:text-black transition-all duration-300">
                            Buy Now
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}
