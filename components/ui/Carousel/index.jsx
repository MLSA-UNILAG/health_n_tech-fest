"use client"

import { Image1, Image2, Image3, Image4, } from '@/public/Images';
import React, { useState, useEffect } from 'react';

export const Carousel = () => {
    const images = [
        <Image1 />,
        <Image2 />,
        <Image3 />,
        <Image4 />,
        // <Image1 />,
        // <Image2 />,
        // <Image3 />,
        // <Image4 />,
        // <Image1 />,
        // <Image2 />,
        // <Image3 />,
        // <Image4 />,
    ]

    // const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    //     }, 3000); // Change image every 3 seconds

    //     return () => clearInterval(interval);
    // }, [images.length]);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [visibleImages, setVisibleImages] = useState(images.slice(0, 4));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const newIndex = (prevIndex + 4) % images.length;
                setVisibleImages(images.slice(newIndex, newIndex + 4));
                return newIndex;
            });
        }, 3000); // Change images every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="!bg-white flex overflow-hidden w-full pb-10">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {visibleImages.map((image, index) => (
                    <div className=' border-t-8 border-r-4 border-b-8 border-black border-collapse'>
                        {image}
                    </div>
                ))}
            </div>
        </div>
    );
}
