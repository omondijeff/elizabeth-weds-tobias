import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TimeUnitProps {
    value: number;
    label: string;
    color: string;
    delay: number;
}

const TimeUnit = React.memo(({ value, label, color, delay }: TimeUnitProps) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
        className="flex flex-col items-center group cursor-help"
    >
        <div className="relative w-24 h-24 md:w-32 md:h-32 border-4 border-navy bg-white shadow-brutal transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center overflow-hidden">
            <div className={`absolute inset-0 ${color} translate-y-full group-hover:translate-y-0 transition-transform duration-300`}></div>
            <span className="relative z-10 text-4xl md:text-6xl font-black font-serif text-navy group-hover:text-white transition-colors duration-300">
                {value.toString().padStart(2, '0')}
            </span>
        </div>
        <div className="mt-4 sticker bg-white group-hover:bg-vibrant-orange group-hover:text-white transition-colors">
            {label}
        </div>
    </motion.div>
));

TimeUnit.displayName = 'TimeUnit';

export const Countdown: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const targetDate = new Date('2026-04-11T10:00:00').getTime();

        const updateTimer = () => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000)
                });
            }
        };

        updateTimer();
        const interval = setInterval(updateTimer, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-20 px-4 flex flex-col items-center" id="countdown">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative mb-16"
            >
                <h2 className="font-serif text-4xl md:text-5xl font-black uppercase tracking-tighter text-navy relative z-10 text-center">
                    The Final <span className="text-vibrant-orange italic">Countdown</span>
                </h2>
                <div className="absolute -bottom-2 left-0 w-full h-4 bg-vibrant-orange/20 -z-10 -rotate-1"></div>
            </motion.div>

            <div className="flex flex-wrap gap-6 md:gap-10 justify-center w-full">
                <TimeUnit value={timeLeft.days} label="Days" color="bg-navy" delay={0.1} />
                <TimeUnit value={timeLeft.hours} label="Hours" color="bg-vibrant-orange" delay={0.2} />
                <TimeUnit value={timeLeft.minutes} label="Minutes" color="bg-navy" delay={0.3} />
                <TimeUnit value={timeLeft.seconds} label="Seconds" color="bg-vibrant-orange" delay={0.4} />
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 1.5 }}
                className="mt-16 font-black uppercase tracking-[0.4em] text-navy/30 text-xs md:text-sm text-center"
            >
                Counting down to the most important "I Do"
            </motion.p>
        </section>
    );
};
