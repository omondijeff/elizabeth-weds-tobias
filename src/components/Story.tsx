import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Coffee, MessageSquare } from 'lucide-react';

const events = [
    {
        date: "The Beginning",
        title: "The Library Meet",
        description: "I still remember the day we met in that uni library, surrounded by books and late-night caffeine fixes.",
        icon: <Coffee size={24} />,
        color: "bg-navy"
    },
    {
        date: "The Connection",
        title: "More Than Study",
        description: "Our conversations started like a casual chat, but turned into something more. We'd talk about everything from lecture notes to life goals.",
        icon: <MessageSquare size={24} />,
        color: "bg-vibrant-orange"
    },
    {
        date: "The Realization",
        title: "The Study Buddy",
        description: "Who knew those late-night study sessions would turn into a love story? You became my partner in crime and my forever person.",
        icon: <Heart size={24} />,
        color: "bg-navy"
    },
    {
        date: "The Vow",
        title: "Our New Chapter",
        description: "Now, I'm counting down the days 'til I call you my wife, Elizabeth. I love you more with each passing day 💕.",
        icon: <Star size={24} />,
        color: "bg-vibrant-orange"
    }
];

export const Story: React.FC = () => {
    return (
        <section className="py-24 px-4 overflow-hidden">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-center mb-20"
            >
                <h2 className="font-serif text-5xl md:text-6xl font-black text-navy uppercase tracking-tighter">
                    Our Love <span className="text-vibrant-orange italic">Story</span>
                </h2>
                <div className="mt-4 sticker bg-white">Narrated by Tobias</div>
            </motion.div>

            <div className="max-w-4xl mx-auto relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-navy -translate-x-1/2 hidden md:block border-x-2 border-white"></div>

                <div className="space-y-16">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                            className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                        >
                            {/* Icon Circle */}
                            <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full border-4 border-navy bg-white z-20 hidden md:flex items-center justify-center">
                                <div className={`${event.color} text-white p-2 rounded-full`}>
                                    {event.icon}
                                </div>
                            </div>

                            {/* Content Card */}
                            <div className={`w-full md:w-[45%] group`}>
                                <div className="bg-white border-4 border-navy p-8 shadow-brutal transition-all group-hover:-translate-y-2 group-hover:shadow-[12px_12px_0px_0px_rgba(26,35,126,1)]">
                                    <span className="sticker mb-4">{event.date}</span>
                                    <h3 className="font-serif text-2xl font-black text-navy mb-2 uppercase">{event.title}</h3>
                                    <p className="font-bold text-navy/70 leading-relaxed">{event.description}</p>
                                </div>
                            </div>

                            <div className="w-[10%] hidden md:block"></div>
                            <div className="w-[45%] hidden md:block"></div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="mt-20 text-center"
            >
                <div className="inline-block border-4 border-dashed border-navy p-8 bg-vibrant-orange/5 max-w-2xl">
                    <p className="font-serif italic text-xl text-navy">
                        "You're my partner in crime, my study buddy, and my forever person. I can't wait to start this new chapter with you."
                    </p>
                    <div className="mt-4 font-black uppercase tracking-widest text-sm text-vibrant-orange">— Tobias</div>
                </div>
            </motion.div>
        </section>
    );
};
