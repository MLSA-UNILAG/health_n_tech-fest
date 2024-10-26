"use client"
// components/CountdownTimer.js
import { useState, useEffect } from 'react';


const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState({});
    const [diff, setDiff] = useState(0);

    const formatTime = (time) => {
        return String(time).padStart(2, '0');
    };

    const calculateTimeLeft = () => {
        const difference = new Date(targetDate) - new Date();
        setDiff(difference);
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

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timerComponents = [];
    timerComponents.push(
        <div key={1} className="text-center my-4">
            <p className="text-lightBlue text-xl tracking-widest">COMING TO YOU IN</p>
            <div className="flex flex-row my-10 gap-3 md:gap-8 items-center justify-center align-middle">
                <div>
                    <p className="text-white text-3xl xs:text-5xl md:text-7xl font-semibold">{formatTime(timeLeft['days'])}</p>
                    <p className="text-yellow text-sm md:text-2xl">Days</p>
                </div>

                <p className="text-2xl md:text-8xl text-white">:</p>
                <div>
                    <p className="text-white text-3xl xs:text-5xl md:text-7xl font-semibold">{formatTime(timeLeft['hours'])}</p>
                    <p className="text-yellow text-sm md:text-2xl">Hours</p>
                </div>
                <p className="text-2xl md:text-8xl text-white">:</p>

                <div>
                    <p className="text-white text-3xl xs:text-5xl md:text-7xl font-semibold">{formatTime(timeLeft['minutes'])}</p>
                    <p className="text-yellow text-sm md:text-2xl">Minutes</p>
                </div>
                <p className="text-2xl md:text-8xl text-white">:</p>

                <div>
                    <p className="text-white text-3xl xs:text-5xl md:text-7xl font-semibold">{formatTime(timeLeft['seconds'])}</p>
                    <p className="text-yellow text-sm md:text-2xl">Seconds</p>
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
