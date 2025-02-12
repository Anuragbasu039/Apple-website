"use client";

import React, { useEffect, useRef, useState, createContext, useContext } from "react";
import clsx from "clsx"; // Replacing cn with clsx
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { IconArrowNarrowLeft, IconArrowNarrowRight, IconX } from "@tabler/icons-react";

// Fallback icons if @tabler/icons-react is unavailable
const ArrowLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

const ArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

// Use Tabler icons if available; otherwise, fallback
let LeftIcon = ArrowLeft;
let RightIcon = ArrowRight;
let CloseX = CloseIcon;

try {
    LeftIcon = IconArrowNarrowLeft;
    RightIcon = IconArrowNarrowRight;
    CloseX = IconX;
} catch (error) {
    console.warn("Tabler icons not available, using fallback icons");
}

// Context for Carousel
const CarouselContext = createContext({
    onCardClose: () => { },
    currentIndex: 0,
});

// Carousel Component
const Carousel = ({ items, initialScroll = 0 }) => {
    const carouselRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    return (
        <CarouselContext.Provider value={{ onCardClose: setCurrentIndex, currentIndex }}>
            <div className="relative w-full">
                <div
                    className="flex w-full overflow-x-scroll py-10 md:py-20 scroll-smooth 
                    scrollbar-hide [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] 
                    [scrollbar-width:none]"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                >
                    <div className={clsx("absolute right-0 z-10 h-auto w-[5%] bg-gradient-to-l")}></div>
                    <div className={clsx("flex flex-row gap-4 pl-4 max-w-7xl mx-auto")}>
                        {items.map((item, index) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 * index, ease: "easeOut" }}
                                key={`card${index}`}
                                className="last:pr-[5%] md:last:pr-[33%] rounded-3xl"
                            >
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end gap-2 mr-10">
                    <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center" onClick={scrollLeft} disabled={!canScrollLeft}>
                        <LeftIcon className="h-6 w-6 text-gray-500" />
                    </button>
                    <button className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center" onClick={scrollRight} disabled={!canScrollRight}>
                        <RightIcon className="h-6 w-6 text-gray-500" />
                    </button>
                </div>
            </div>
        </CarouselContext.Provider>
    );
};

// Card Component
const Card = ({ card, index }) => {
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    const { onCardClose } = useContext(CarouselContext);

    const handleClose = () => {
        setOpen(false);
        onCardClose(index);
    };

    useOutsideClick(containerRef, handleClose);

    return (
        <>
            <AnimatePresence>
                {open && (
                    <div className="fixed inset-0 h-screen z-50 overflow-auto">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="bg-black/80 backdrop-blur-lg h-full w-full fixed inset-0"
                        />
                        <motion.div
                            ref={containerRef}
                            className="max-w-5xl mx-auto bg-white dark:bg-neutral-900 h-fit z-[60] my-10 p-4 md:p-10 rounded-3xl relative"
                        >
                            <button
                                className="absolute top-4 right-4 h-8 w-8 bg-black dark:bg-white rounded-full flex items-center justify-center"
                                onClick={handleClose}
                            >
                                <CloseX className="h-6 w-6 text-white dark:text-black" />
                            </button>
                            <h3 className="text-base font-medium text-black dark:text-white">
                                {card.category}
                            </h3>
                            <h2 className="text-2xl md:text-5xl font-semibold text-neutral-700 mt-4 dark:text-white">
                                {card.title}
                            </h2>
                            <div className="py-10">{card.content}</div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <motion.button
                onClick={() => setOpen(true)}
                className="rounded-3xl bg-gray-100 dark:bg-neutral-900 h-80 w-56 md:h-[40rem] md:w-96 overflow-hidden flex flex-col items-start justify-start relative"
            >
                <div className="absolute h-full top-0 inset-x-0 bg-gradient-to-b from-black/50 via-transparent to-transparent z-20" />
                <div className="relative z-30 p-8">
                    <p className="text-white text-sm md:text-base font-medium">
                        {card.category}
                    </p>
                    <p className="text-white text-xl md:text-3xl font-semibold max-w-xs mt-2">
                        {card.title}
                    </p>
                </div>
                <Image
                    src={card.src}
                    alt={card.title}
                    fill
                    className="object-cover absolute inset-0 z-10"
                />
            </motion.button>
        </>
    );
};

// Product Slider Component
const ProductSlider = () => {
    const items = [
        {
            // title: "iPhone 15 Pro",
            // category: "Smartphones",
            src: "/pic1.jpg",
            content: "Experience the latest iPhone with revolutionary features.",
        },
        {
            // title: "MacBook Pro",
            // category: "Laptops",
            src: "/pic2.jpg",
            content: "Powerful performance meets elegant design.",
        },
        {
            // title: "iPad Pro",
            // category: "Tablets",
            src: "/pic3.jpg",
            content: "Your next computer is not a computer.",
        },
        {
            // title: "iPad Pro",
            // category: "Tablets",
            src: "/pic4.jpg",
            content: "Your next computer is not a computer.",
        },
        {
            // title: "iPad Pro",
            // category: "Tablets",
            src: "/pic5.jpg",
            content: "Your next computer is not a computer.",
        },
    ];

    return (
        <div className="w-full bg-black">
            <Carousel
                items={items.map((item, index) => (
                    <Card key={index} card={item} index={index} />
                ))}
            />
        </div>
    );
};

export default ProductSlider;
