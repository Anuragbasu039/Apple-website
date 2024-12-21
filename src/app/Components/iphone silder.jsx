'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Only import Navigation module now

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import Image from 'next/image';
import { motion } from 'framer-motion'; // Import Framer Motion

export default function IphoneSlider() {
    const products = [
        {
            name: 'iPhone 16 Pro',
            tagline: 'The ultimate iPhone.',
            image: '/apple1.png',
            colors: ['#D5C5B6', '#E5D8D0', '#F3E8DE', '#FDFDFD'],
        },
        {
            name: 'iPhone 16',
            tagline: 'A total powerhouse.',
            image: '/apple2.png',
            colors: ['#B6C7F2', '#E4C8DF', '#C3D2CD', '#121212'],
        },
        {
            name: 'iPhone 15',
            tagline: 'As amazing as ever.',
            image: '/apple1.png',
            colors: ['#F2C8C7', '#D8D8C7', '#C9D4CF', '#121212'],
        },
        {
            name: 'iPhone 14',
            tagline: 'A modern classic.',
            image: '/apple2.png',
            colors: ['#FFD1DC', '#D7F0E1', '#CCDDEE', '#202020'],
        },
        {
            name: 'iPhone 13',
            tagline: 'Simply brilliant.',
            image: '/apple1.png',
            colors: ['#F5C2E7', '#FFDFBF', '#CEDDE7', '#0F0F0F'],
        },
        {
            name: 'iPhone 12',
            tagline: 'A new era begins.',
            image: '/apple2.png',
            colors: ['#C4E1E7', '#C7E8D9', '#F3E2E1', '#141414'],
        },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
                Explore the line-up.
            </h1>
            <p className="text-blue-600 text-xs md:text-sm font-semibold text-right w-full md:pr-8 mt-2 cursor-pointer">
                Compare all models &gt;
            </p>

            <Swiper
                slidesPerView={1} // Default for small screens
                slidesPerGroup={1} // Default for small screens
                spaceBetween={15} // Default spacing
                breakpoints={{
                    640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 30 },
                }} // Adjust per screen size
                navigation={true} // Navigation buttons (visible only on larger screens)
                modules={[Navigation]} // Only using Navigation now
                className="mySwiper mt-8 w-full max-w-6xl"
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 50 }} // Initial hidden state
                            whileInView={{ opacity: 1, y: 0 }} // Animation when in view
                            transition={{ duration: 0.5, delay: index * 0.2 }} // Stagger animation
                            viewport={{ once: true, margin: '-50px' }} // Trigger animation only once
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={200}
                                height={400}
                                className="object-contain"
                            />
                            <div className="flex gap-2 mt-4">
                                {product.colors.map((color, i) => (
                                    <span
                                        key={i}
                                        className="w-4 h-4 rounded-full"
                                        style={{
                                            backgroundColor: color,
                                        }}
                                    ></span>
                                ))}
                            </div>
                            <div className="text-center mt-4">
                                <span className="text-orange-500 uppercase text-xs font-semibold">
                                    New
                                </span>
                                <h3 className="text-base md:text-lg font-bold text-gray-900">
                                    {product.name}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-600">
                                    {product.tagline}
                                </p>
                            </div>
                        </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
