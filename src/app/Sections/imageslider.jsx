'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
    '/img1.jpg',
    '/imgs2.jpg',
    '/img3.jpg',
    '/img4.jpg',
    '/img5.jpg',
    '/img6.jpg',
];

export default function ImageSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
                <Image
                    src={images[currentIndex]}
                    alt="Slide Image"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover mb-20 transition-transform duration-500 ease-in-out transform scale-100 hover:scale-105"
                />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-gray/60 px-4 py-2 rounded-full">
                <button onClick={prevSlide} className="p-2 bg-gray/40 rounded-full hover:bg-gray/60">
                    <ChevronLeft className="text-white" size={20} />
                </button>
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-white' : 'bg-gray-500'}`}
                    />
                ))}
                <button onClick={nextSlide} className="p-2 bg-black/40 rounded-full hover:bg-black/60">
                    <ChevronRight className="text-white" size={20} />
                </button>
            </div>
        </div>
    );
}
