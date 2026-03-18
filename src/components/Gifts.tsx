import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Phone, CreditCard } from 'lucide-react';

declare global {
    interface Window {
        PayHero: any;
    }
}

export const Gifts: React.FC = () => {
    useEffect(() => {
        // Initialize PayHero button
        if (window.PayHero) {
            window.PayHero.init({
                paymentUrl: "https://app.payhero.co.ke/lipwa/5", // Replace with your Lipwa link
                width: "100%",
                height: "100%",
                containerId: "payHero",
                channelID: 100, // Your payment channel ID
                amount: 1, // Payment amount
                phone: "", // (Optional) Customer phone
                name: "Wedding Guest", // (Optional) Customer name
                reference: "ElizabethTobiasWedding", // (Optional) Payment reference
                buttonName: "GIVE KES 1", // Button text
                buttonColor: "#FF6B26", // Button color (Vibrant Orange)
                successUrl: null,
                failedUrl: null,
                callbackUrl: null
            });
        }

        const handleMessage = (event: MessageEvent) => {
            if (event.data.paymentSuccess) {
                console.log("Payment Successful:", event.data);
                alert('Thank you for your generous gift!');
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, []);

    return (
        <section id="gifts" className="py-24 px-4 bg-off-white relative overflow-hidden">
            <div className="max-w-4xl mx-auto relative">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-center mb-16"
                >
                    <div className="inline-block relative">
                        <div className="absolute inset-0 bg-vibrant-orange -rotate-2 -z-10 blur-sm opacity-20"></div>
                        <h2 className="font-serif text-5xl md:text-6xl font-black text-navy uppercase tracking-tighter">
                            Gifts & <span className="text-vibrant-orange italic">Support</span>
                        </h2>
                    </div>
                    <p className="mt-6 font-bold text-navy/70 max-w-xl mx-auto text-lg">
                        Your presence is the greatest gift of all. However, if you wish to honor us with a gift, your support towards our new chapter is deeply appreciated.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* PayHero Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white border-4 border-navy p-8 shadow-brutal col-span-1 md:col-span-2 flex flex-col md:flex-row items-center gap-8"
                    >
                        <div className="flex-1">
                            <span className="sticker bg-navy text-white mb-3">Secure Contribution</span>
                            <h3 className="font-serif text-3xl font-black text-navy mb-4 uppercase">Direct Donation</h3>
                            <p className="font-bold text-navy/60 leading-relaxed mb-6">
                                Support us directly via cards or M-Pesa using our secure Pay Hero channel. Every blessing counts.
                            </p>
                            <div className="flex items-center gap-4 text-xs font-black text-navy/40 uppercase tracking-tighter">
                                <CreditCard size={16} />
                                SECURE ENCRYPTED PAYMENTS
                            </div>
                        </div>
                        <div className="w-full md:w-64">
                            <div id="payHero" className="min-h-[60px]"></div>
                        </div>
                    </motion.div>

                    {/* M-Pesa Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="bg-white border-4 border-navy p-8 shadow-brutal group relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-24 h-24 bg-vibrant-orange/10 rounded-bl-full -z-10 group-hover:bg-vibrant-orange/20 transition-colors"></div>
                        <div className="flex items-start gap-6">
                            <div className="bg-navy text-white p-4 rounded-xl shadow-[4px_4px_0px_0px_rgba(255,107,38,1)]">
                                <Phone size={32} />
                            </div>
                            <div>
                                <span className="sticker bg-vibrant-orange text-white mb-3">M-Pesa Support</span>
                                <h3 className="font-serif text-3xl font-black text-navy mb-4 uppercase">Tobias's Phone</h3>
                                <div className="space-y-2">
                                    <p className="text-xl font-black text-navy select-all tracking-wider">+254 711 528353</p>
                                    <p className="font-bold text-navy/60 uppercase text-sm tracking-widest">Account: Tobias Okoth</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Registry Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="bg-navy text-white border-4 border-navy p-8 shadow-brutal-orange group relative overflow-hidden"
                    >
                        <div className="absolute -bottom-4 -right-4 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                            <Gift size={160} />
                        </div>
                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <span className="sticker bg-white text-navy mb-3">Heartfelt Thanks</span>
                                <h3 className="font-serif text-3xl font-black text-white mb-4 uppercase">Registry & More</h3>
                                <p className="font-bold text-white/80 leading-relaxed">
                                    Whether it's a contribution to our honeymoon or a keepsake for our first home, your kindness blesses our union in a special way.
                                </p>
                            </div>
                            <div className="mt-8 flex items-center gap-2 text-vibrant-orange font-black uppercase tracking-widest text-sm">
                                <Heart size={18} fill="currentColor" />
                                With Love, E & T
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="mt-16 text-center opacity-30 select-none pointer-events-none">
                    <span className="font-black text-8xl text-navy uppercase tracking-[0.5em] block overflow-hidden whitespace-nowrap">
                        BLESSINGS • GRATITUDE • LOVE • SUPPORT •
                    </span>
                </div>
            </div>
        </section>
    );
};
