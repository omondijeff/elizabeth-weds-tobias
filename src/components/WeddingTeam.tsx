import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
    { name: "John Tobias", role: "Best Man", info: "The Brother" },
    { name: "Sarah Elizabeth", role: "Maid of Honor", info: "The Best Friend" },
    { name: "Kevin Wambua", role: "Groomsman", info: "College Roommate" },
    { name: "Mercy Atieno", role: "Bridesmaid", info: "Childhood Friend" }
];

export const WeddingTeam: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-navy text-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-8 bg-off-white border-b-4 border-navy border-dashed opacity-20"></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="text-center mb-20 relative z-10"
            >
                <h2 className="font-serif text-5xl md:text-6xl font-black text-white uppercase tracking-tighter">
                    The Wedding <span className="text-vibrant-orange italic">Team</span>
                </h2>
                <div className="mt-4 sticker bg-white text-navy border-white shadow-[4px_4px_0px_0px_white]">The Support System</div>
            </motion.div>

            <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ delay: index * 0.15, duration: 1.2, ease: "easeOut" }}
                        className="group"
                    >
                        <div className="relative w-32 h-32 md:w-44 md:h-44 mx-auto mb-6">
                            <div className="absolute inset-0 bg-vibrant-orange rounded-full translate-x-3 translate-y-3 group-hover:translate-x-5 group-hover:translate-y-5 transition-transform duration-300"></div>
                            <div className="absolute inset-0 border-4 border-white rounded-full bg-navy overflow-hidden z-10 flex items-center justify-center">
                                <div className="text-4xl font-serif italic text-white/20 uppercase tracking-widest -rotate-45 select-none">
                                    PHOTO
                                </div>
                            </div>
                        </div>
                        <h3 className="font-serif text-xl md:text-2xl font-black uppercase text-white mb-2">{member.name}</h3>
                        <div className="sticker bg-vibrant-orange text-white text-xs mb-2">{member.role}</div>
                        <p className="font-bold text-white/50 text-sm uppercase tracking-widest">{member.info}</p>
                    </motion.div>
                ))}
            </div>

            <div className="absolute bottom-0 left-0 w-full h-8 bg-off-white border-t-4 border-navy border-dashed opacity-20"></div>
        </section>
    );
};
