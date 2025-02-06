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
        },
        {
            name: 'iPhone 16',
            tagline: 'A total powerhouse.',
            image: '/apple2.png',
        },
        {
            name: 'iPhone 15',
            tagline: 'As amazing as ever.',
            image: '/apple1.png',
        },
        {
            name: 'iPhone 14',
            tagline: 'A modern classic.',
            image: '/apple2.png',
        },
        {
            name: 'iPhone 13',
            tagline: 'Simply brilliant.',
            image: '/apple1.png',
        },
        {
            name: 'iPhone 12',
            tagline: 'A new era begins.',
            image: '/apple2.png',
        },
    ];

    return (
        <div className="min-h-screen bg-black flex flex-col items-center justify-center px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">
                Explore the line-up.
            </h1>

            <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                spaceBetween={15}
                breakpoints={{
                    640: { slidesPerView: 2, slidesPerGroup: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, slidesPerGroup: 3, spaceBetween: 30 },
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper mt-8 w-full max-w-6xl"
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <motion.div
                            className="flex flex-col items-center"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ margin: '-50px' }} // Removed "once: true" for re-trigger on scroll
                        >
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={200}
                                height={400}
                                className="object-contain"
                            />
                            <div className="text-center mt-4">
                                <span className="text-orange-500 uppercase text-xs font-semibold">
                                    New
                                </span>
                                <h3 className="text-base md:text-lg font-bold text-white">
                                    {product.name}
                                </h3>
                                <p className="text-xs md:text-sm text-white">
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
