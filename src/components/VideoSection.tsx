import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export const VideoSection: React.FC = () => {
    return (
        <section className="py-24 px-4 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 1.8, ease: "easeOut" }}
                    className="relative group cursor-pointer"
                >
                    {/* Layered background */}
                    <div className="absolute inset-0 bg-navy translate-x-6 translate-y-6 shadow-brutal"></div>

                    <div className="bg-white border-4 border-navy aspect-video relative overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-navy/5 flex items-center justify-center group-hover:bg-vibrant-orange/10 transition-colors">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="w-24 h-24 bg-vibrant-orange border-4 border-navy rounded-full flex items-center justify-center shadow-brutal z-20"
                            >
                                <Play size={40} className="text-white ml-2" />
                            </motion.div>
                        </div>

                        {/* Text overlay */}
                        <div className="absolute top-8 left-8 text-left z-10">
                            <span className="sticker mb-2">Our Film</span>
                            <h3 className="font-serif text-3xl md:text-4xl font-black text-navy uppercase tracking-tighter outline-text">The Proposal Video</h3>
                        </div>

                        <div className="text-navy/10 font-black text-9xl uppercase tracking-tighter opacity-10 select-none -rotate-12">
                            COMING SOON
                        </div>
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 2 }}
                    className="mt-12 font-bold italic text-navy/60"
                >
                    Watch how the journey began...
                </motion.p>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
          .outline-text {
              -webkit-text-stroke: 1px #1A237E;
              color: white;
          }
      ` }} />
        </section>
    );
};
