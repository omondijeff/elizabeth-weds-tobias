import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
    return (
        <section className="relative flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
            {/* Decorative Background Element */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.2, scale: 1 }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-10 -left-20 w-64 h-64 bg-vibrant-orange/10 rounded-full blur-3xl -z-10"
            ></motion.div>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="relative mb-12 group"
            >
                {/* Layered Photo Frame */}
                <div className="absolute inset-0 bg-navy translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform"></div>
                <div className="absolute inset-0 bg-vibrant-orange -translate-x-2 -translate-y-2 -z-20 group-hover:-translate-x-4 group-hover:-translate-y-4 transition-transform"></div>

                <div className="border-4 border-navy bg-white p-3 shadow-brutal max-w-md mx-auto relative overflow-hidden">
                    <div className="w-full aspect-[4/5] overflow-hidden bg-navy/5">
                        <img
                            src="/pictures/PHOTO-2026-03-17-10-55-12.jpg"
                            alt="Elizabeth & Tobias"
                            className="w-full h-full object-contain transition-all duration-700 scale-105 group-hover:scale-100"
                        />
                    </div>

                    {/* Sticker Badge */}
                    <motion.div
                        initial={{ rotate: -15, scale: 0 }}
                        animate={{ rotate: -2, scale: 1.1 }}
                        transition={{ delay: 1, type: "spring" }}
                        className="absolute -bottom-4 -right-4 sticker"
                    >
                        Top Secret
                    </motion.div>
                </div>
            </motion.div>

            <div className="relative text-center">
                <motion.h2
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5, duration: 1.2 }}
                    className="sticker mb-6"
                >
                    Save the Date
                </motion.h2>
                <motion.h1
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    className="relative font-serif text-6xl md:text-8xl lg:text-9xl font-black text-navy tracking-tighter uppercase leading-[0.8]"
                >
                    Elizabeth
                    <span className="block text-vibrant-orange outline-text py-2">Weds</span>
                    Tobias
                </motion.h1>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.8, duration: 1.5, ease: "easeOut" }}
                className="relative mt-12 flex flex-col gap-0 shadow-[12px_12px_0px_0px_rgba(26,35,126,1)] border-4 border-navy"
            >
                <div className="bg-navy text-white px-8 py-3 font-black uppercase tracking-widest text-sm">
                    Grand Wedding Invitation
                </div>
                <div className="flex flex-col md:flex-row divide-y-4 md:divide-y-0 md:divide-x-4 divide-navy bg-white">
                    <div className="px-10 py-6 text-2xl md:text-3xl font-black italic text-center">
                        APRIL 11 <span className="text-vibrant-orange">2026</span>
                    </div>
                    <div className="px-10 py-6 text-xl md:text-2xl font-bold flex flex-col items-center justify-center gap-1 text-center">
                        <div className="flex items-center gap-2">
                            <motion.span
                                animate={{ scale: [1, 1.5, 1] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="w-3 h-3 bg-vibrant-orange rounded-full"
                            ></motion.span>
                            ACK Christ Church Cathedral
                        </div>
                        <span className="text-sm md:text-base font-serif italic text-navy/40 uppercase tracking-widest">Kakamega, Kenya</span>
                    </div>
                </div>
            </motion.div>

            <style dangerouslySetInnerHTML={{
                __html: `
                .outline-text {
                    -webkit-text-stroke: 2px #1A237E;
                    color: transparent;
                }
            ` }} />
        </section>
    );
};
