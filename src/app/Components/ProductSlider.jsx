'use client';

import { useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
import { useEffect } from 'react';

const products = [
    {
        name: 'iPhone 16',
        tagline: 'Built for Apple Intelligence.',
        price: '₹79900.00',
        image: '/apple1.png',
        bg: 'bg-gradient-to-b from-blue-500 to-black',
    },
    {
        name: 'Apple Watch Ultra 2',
        tagline: 'New finish. Never quit.',
        price: '₹89900.00',
        image: '/utra watch.jpg',
        bg: 'bg-black',
    },
    {
        name: 'iPad Air',
        tagline: 'Built for Apple Intelligence.',
        price: '₹59900.00',
        image: '/apple2.png',
        bg: 'bg-gradient-to-b from-blue-500 to-black',
    },
    {
        name: 'Apple Watch Ultra 2',
        tagline: 'New finish. Never quit.',
        price: '₹89900.00',
        image: '/utra watch.jpg',
        bg: 'bg-black',
    },
    {
        name: 'iPad Air',
        tagline: 'Built for Apple Intelligence.',
        price: '₹59900.00',
        image: '/bg.png',
        bg: 'bg-gradient-to-b from-blue-900 to-black',
    },
];

export default function ProductSlider() {
    const sliderRef = useRef(null);
    const controls = useAnimation();

    useEffect(() => {
        controls.start({ opacity: 1, y: 0, transition: { duration: 0.8 } });
    }, [controls]);

    const scrollLeft = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (sliderRef.current) {
            sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
    };

    return (
        <motion.div initial={{ opacity: 0, y: 50 }} animate={controls}>
            <div className="relative px-6 md:px-12 py-8 overflow-hidden hover:rounded-3xl">
                <motion.h2
                    className="text-3xl font-bold text-white text-center mb-6"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-red-500">The latest.</span> All-new, and heartfelt.
                </motion.h2>
                <div className="relative flex items-center">
                    <button
                        onClick={scrollLeft}
                        className="absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md"
                    >
                        ◀
                    </button>
                    <motion.div
                        ref={sliderRef}
                        className="flex gap-6 overflow-hidden w-full scroll-smooth snap-x"
                    >
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                className={`min-w-[320px] md:min-w-[450px] rounded-2xl p-6 ${product.bg} text-white shadow-xl overflow-hidden`}
                                initial={{ opacity: 0, y: 100 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <h3 className="text-xl font-semibold">{product.name}</h3>
                                <p className="text-sm opacity-75">{product.tagline}</p>
                                <p className="text-lg font-bold mt-2">From {product.price}</p>
                                <div className="mt-4 flex justify-center">
                                    <Image src={product.image} alt={product.name} width={350} height={250} className="object-contain" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                    <button
                        onClick={scrollRight}
                        className="absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full shadow-md"
                    >
                        ▶
                    </button>
                </div>
                <style jsx>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .no-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                        overflow-x: hidden;
                        overflow-y: hidden;
                    }
                `}</style>
            </div>
        </motion.div>
    );
}
