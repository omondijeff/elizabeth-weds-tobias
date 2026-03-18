import React from 'react';
import { motion } from 'framer-motion';

const photos = [
    {
        id: 1,
        verse: "I have found the one my soul loves.",
        reference: "Song of Solomon 3:4",
        src: "/pictures/PHOTO-2026-03-17-10-55-12.jpg",
        size: "md:col-span-2 md:row-span-2"
    },
    {
        id: 2,
        verse: "Two are better than one.",
        reference: "Ecclesiastes 4:9",
        src: "/pictures/PHOTO-2026-03-17-10-55-13.jpg",
        size: "md:col-span-1 md:row-span-1"
    },
    {
        id: 3,
        verse: "Love is patient, love is kind.",
        reference: "1 Corinthians 13:4",
        src: "/pictures/PHOTO-2026-03-17-21-47-21.jpg",
        size: "md:col-span-1 md:row-span-2"
    },
    {
        id: 4,
        verse: "And over all these virtues put on love.",
        reference: "Colossians 3:14",
        src: "/pictures/PHOTO-2026-03-17-21-47-21 2.jpg",
        size: "md:col-span-1 md:row-span-1"
    }
];

export const Gallery: React.FC = () => {
    return (
        <section className="py-24 px-4 overflow-hidden bg-white">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="text-center mb-16"
            >
                <h2 className="font-serif text-5xl md:text-6xl font-black text-navy uppercase tracking-tighter">
                    Our <span className="text-vibrant-orange italic">Moments</span>
                </h2>
                <div className="mt-4 sticker bg-white">A Journey of Faith & Love</div>
            </motion.div>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 auto-rows-[300px]">
                {photos.map((photo, index) => (
                    <motion.div
                        key={photo.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: index * 0.1, duration: 1.2, ease: "easeOut" }}
                        className={`border-4 border-navy bg-white shadow-brutal p-2 relative overflow-hidden group ${photo.size}`}
                    >
                        <div className="w-full h-full overflow-hidden relative bg-navy/5 flex items-center justify-center">
                            <img
                                src={photo.src}
                                alt={photo.reference}
                                className="max-w-full max-h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                            />

                            {/* Hover Overlay - Bible Verse */}
                            <div className="absolute inset-0 bg-navy/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm">
                                <span className="text-vibrant-orange text-4xl mb-4 font-serif">"</span>
                                <p className="font-serif text-lg md:text-xl italic text-white leading-relaxed mb-4 px-4">
                                    {photo.verse}
                                </p>
                                <div className="h-px w-12 bg-vibrant-orange/50 mb-4"></div>
                                <span className="font-black text-vibrant-orange text-xs uppercase tracking-[0.3em]">
                                    {photo.reference}
                                </span>
                            </div>
                        </div>

                        {/* Sticker overlay on hover */}
                        <div className="absolute top-4 right-4 sticker bg-vibrant-orange text-white opacity-0 group-hover:opacity-100 transition-opacity z-10 translate-x-2 group-hover:translate-x-0">
                            God's Grace
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
