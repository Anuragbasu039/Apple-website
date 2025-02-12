'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    const footerLinks = [
        { name: 'Mac', href: '#', gradient: 'from-blue-400 to-cyan-400' },
        { name: 'iPhone', href: '#', gradient: 'from-purple-400 to-pink-400' },
        { name: 'iPad', href: '#', gradient: 'from-green-400 to-emerald-400' },
        { name: 'Watch', href: '#', gradient: 'from-red-400 to-orange-400' },
        { name: 'AirPods', href: '#', gradient: 'from-yellow-400 to-amber-400' },
        { name: 'TV & Home', href: '#', gradient: 'from-indigo-400 to-violet-400' },
        { name: 'Entertainment', href: '#', gradient: 'from-pink-400 to-rose-400' },
        { name: 'Accessories', href: '#', gradient: 'from-teal-400 to-cyan-400' },
        { name: 'Support', href: '#', gradient: 'from-blue-400 to-indigo-400' },
    ];

    return (
        <footer className="bg-black text-gray-400">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Image
                            src="/logo.png" // Make sure to add your logo in public folder
                            alt="Logo"
                            width={40}
                            height={40}
                            className="cursor-pointer"
                        />
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`relative group`}
                            >
                                <span className={`bg-gradient-to-r ${link.gradient} bg-clip-text text-transparent 
                                    opacity-70 group-hover:opacity-100 transition-opacity duration-200`}>
                                    {link.name}
                                </span>
                                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r ${link.gradient}
                                    group-hover:w-full transition-all duration-200`}>
                                </span>
                            </Link>
                        ))}
                    </nav>
                </div>

                {/* Copyright */}
                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
                    <p className="bg-gradient-to-r from-gray-400 to-gray-500 bg-clip-text text-transparent">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
} 