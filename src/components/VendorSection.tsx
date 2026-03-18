import React from 'react';
import { motion } from 'framer-motion';

const vendors = [
    "Venue Partner", "Floral Design", "Capture Studio", "The Bakery", "Music & Co", "Style Haus"
];

export const VendorSection: React.FC = () => {
    return (
        <section className="py-24 px-4 bg-white border-y-8 border-navy overflow-hidden">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.5 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="mb-12"
                >
                    <h3 className="font-black uppercase tracking-[0.4em] text-navy/30 text-xs">A Sincere Thanks to Our Partners</h3>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center grayscale opacity-80 hover:grayscale-0 transition-all duration-500">
                    {vendors.map((vendor, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ delay: index * 0.1, duration: 1.2, ease: "easeOut" }}
                            className="font-serif text-xl md:text-2xl font-black text-navy italic border-2 border-navy/10 px-6 py-2"
                        >
                            {vendor}
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 sticker bg-navy text-white text-[10px] tracking-widest px-8">The Professional Team</div>
            </div>
        </section>
    );
};
