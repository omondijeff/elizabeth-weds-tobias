import React from 'react';
import { PartyPopper, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const ThankYou: React.FC = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full max-w-2xl mx-auto my-16 relative"
        >
            <div className="bg-navy border-4 border-navy shadow-[16px_16px_0px_0px_rgba(255,109,0,1)] p-12 text-center text-white relative overflow-hidden">
                {/* Confetti-like background elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div key={i} className={`absolute bg-white rounded-full`} style={{
                            width: Math.random() * 10 + 5 + 'px',
                            height: Math.random() * 10 + 5 + 'px',
                            top: Math.random() * 100 + '%',
                            left: Math.random() * 100 + '%',
                            animation: `ping ${Math.random() * 3 + 2}s infinite`
                        }}></div>
                    ))}
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    <motion.div
                        initial={{ rotate: -180, scale: 0 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ type: "spring", damping: 10 }}
                        className="w-24 h-24 bg-vibrant-orange rounded-full flex items-center justify-center mb-8 shadow-[4px_4px_0px_0px_white]"
                    >
                        <PartyPopper size={48} className="text-white" />
                    </motion.div>

                    <span className="sticker bg-white text-navy mb-6">RSVP CONFIRMED</span>

                    <h2 className="font-serif text-5xl md:text-6xl font-black mb-6 uppercase tracking-tighter">
                        See You <span className="text-vibrant-orange italic">There!</span>
                    </h2>

                    <p className="text-xl font-bold mb-10 text-white/80 max-w-md mx-auto leading-relaxed">
                        Your response has been securely recorded. We can't wait to celebrate our <span className="thick-underline">big day</span> with you!
                    </p>

                    <div className="flex items-center gap-3 bg-white/10 px-8 py-4 border-2 border-white/20">
                        <CheckCircle className="text-vibrant-orange" />
                        <span className="font-black uppercase tracking-widest text-sm">Official Entry Secured</span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
