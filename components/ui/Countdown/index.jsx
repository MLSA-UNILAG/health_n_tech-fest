"use client"
// components/CountdownTimer.js
import { useState, useEffect } from 'react';

export const Countdown = () => {
    return (
        <div className="text-center my-4">
            <p className="text-lightBlue text-xl">COMING TO YOU IN</p>
            <div className="flex flex-row my-6 gap-8 items-center justify-center align-middle">
                <div>
                    <p className="text-white text-7xl font-extrabold">23</p>
                    <p className="text-yellow">Days</p>
                </div>

                <p className="text-8xl text-white">:</p>
                <div>
                    <p className="text-white text-7xl font-extrabold">13</p>
                    <p className="text-yellow">Hours</p>
                </div>
                <p className="text-8xl text-white">:</p>

                <div>
                    <p className="text-white text-7xl font-extrabold">14</p>
                    <p className="text-yellow">Minutes</p>
                </div>
                <p className="text-8xl text-white">:</p>

                <div>
                    <p className="text-white text-7xl font-extrabold">5</p>
                    <p className="text-yellow">Seconds</p>
                </div>
            </div>
        </div>
    )
}


const CountdownTimer = ({ targetDate }) => {
    let diff;

    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        diff = difference;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const timerComponents = [];
    timerComponents.push(
        <div className="text-center my-4">
            <p className="text-lightBlue md:text-xl text-md tracking-widest">COMING TO YOU IN</p>
            <div className="flex flex-row md:mb-10 md:my-3 my-10 gap-3 md:gap-8 items-center justify-center align-middle">
                <div>
                    <p className="text-white text-[8vw] md:text-7xl font-extrabold">{timeLeft['days']}</p>
                    <p className="text-yellow text-[12px] md:text-lg">Days</p>
                </div>

                <p className="text-[8vw] md:text-8xl text-white">:</p>
                <div>
                    <p className="text-white text-[8vw] md:text-7xl font-extrabold">{timeLeft['hours']}</p>
                    <p className="text-yellow text-[12px] md:text-lg">Hours</p>
                </div>
                <p className="text-[8vw] md:text-8xl text-white">:</p>

                <div>
                    <p className="text-white text-[8vw] md:text-7xl font-extrabold">{timeLeft['minutes']}</p>
                    <p className="text-yellow text-[12px] md:text-lg">Minutes</p>
                </div>
                <p className="text-[8vw] md:text-8xl text-white">:</p>

                <div>
                    <p className="text-white text-[8vw] md:text-7xl font-extrabold">{timeLeft['seconds']}</p>
                    <p className="text-yellow text-[12px] md:text-lg">Seconds</p>
                </div>
            </div>
        </div>
);

    return (
        <div className="text-center text-white my-10">
            {diff > 0 ? timerComponents : <span className='text-5xl font-extrabold'>Its Today!</span>}
        </div>
    );
};

export default CountdownTimer;
