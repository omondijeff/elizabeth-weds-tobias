import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Gift, Heart, Phone, CreditCard } from 'lucide-react';

declare global {
    interface Window {
        PayHero: any;
    }
}

export const Gifts: React.FC = () => {
    const [amount, setAmount] = React.useState<number>(1000); // Default 1000 KES

    useEffect(() => {
        let retryCount = 0;
        const maxRetries = 10;

        const initButton = () => {
            if (window.PayHero) {
                const container = document.getElementById('payHero');
                if (container) container.innerHTML = ''; // Clear previous instances
                window.PayHero.init({
                    paymentUrl: `https://app.payhero.co.ke/lipwa/5?amount=${amount || 1}`,
                    width: "100%",
                    height: "100%",
                    containerId: "payHero",
                    channelID: 100,
                    amount: amount || 1, // Fallback to 1 if empty
                    phone: "",
                    name: "Wedding Guest",
                    reference: "ElizabethTobiasWedding",
                    buttonName: `BLESSED GIFT (KES ${amount || 1})`,
                    buttonColor: "#FF6B26",
                    successUrl: null,
                    failedUrl: null,
                    callbackUrl: null
                });
            } else if (retryCount < maxRetries) {
                retryCount++;
                setTimeout(initButton, 500);
            }
        };

        initButton();

        const handleMessage = (event: MessageEvent) => {
            if (event.data.paymentSuccess) {
                alert('Thank you for your generous gift! May you be blessed.');
            }
        };

        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [amount]); // Re-initialize when amount changes

    return (
        <section id="gifts" className="py-24 px-4 bg-off-white relative overflow-hidden">
            {/* Background Decorative Text - "BLESSINGS" */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-[0.03] select-none pointer-events-none z-0">
                <span className="font-black text-[15vw] leading-none text-navy uppercase tracking-[-0.05em] block text-center">
                    BLESSINGS
                </span>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="text-center mb-20"
                >
                    <div className="inline-block relative">
                        <div className="absolute inset-0 bg-vibrant-orange -rotate-2 -z-10 blur-sm opacity-20"></div>
                        <h2 className="font-serif text-5xl md:text-7xl font-black text-navy uppercase tracking-tighter">
                            Gifts & <span className="text-vibrant-orange italic">Support</span>
                        </h2>
                    </div>
                    <p className="mt-8 font-bold text-navy/70 max-w-xl mx-auto text-lg leading-relaxed">
                        Your presence is the greatest gift of all. However, if you wish to honor us with a gift, your support towards our new chapter is deeply appreciated.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {/* PayHero Card - Primary Contribution */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-white border-4 border-navy p-8 md:p-12 shadow-brutal col-span-1 md:col-span-2"
                    >
                        <div className="flex flex-col lg:flex-row gap-12 items-center">
                            <div className="flex-1 w-full text-center lg:text-left">
                                <span className="sticker bg-navy text-white mb-4">Secure & Fast</span>
                                <h3 className="font-serif text-3xl md:text-4xl font-black text-navy mb-6 uppercase">Direct Donation</h3>
                                <p className="font-bold text-navy/60 leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                                    Support us directly via cards or M-Pesa. Enter your desired amount below and follow the secure Pay Hero prompt.
                                </p>

                                <div className="space-y-4 max-w-sm mx-auto lg:mx-0">
                                    <label className="block text-xs font-black text-navy uppercase tracking-[0.2em] opacity-40">
                                        Enter Amount (KES)
                                    </label>
                                    <div className="relative group">
                                        <input
                                            type="number"
                                            value={amount}
                                            onChange={(e) => setAmount(Number(e.target.value))}
                                            placeholder="Enter amount..."
                                            className="w-full bg-off-white border-4 border-navy p-5 font-black text-3xl text-navy outline-none focus:bg-white focus:shadow-[8px_8px_0px_0px_rgba(255,107,38,1)] transition-all placeholder:text-navy/10"
                                        />
                                        <div className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-navy/20 text-xl">KES</div>
                                    </div>
                                </div>

                                <div className="mt-10 flex items-center justify-center lg:justify-start gap-4 text-xs font-black text-navy/30 uppercase tracking-[0.1em]">
                                    <CreditCard size={18} />
                                    SECURE ENCRYPTED PAYMENTS
                                </div>
                            </div>

                            <div className="w-full lg:w-80 flex flex-col items-center justify-center bg-off-white border-4 border-navy/5 p-10 rounded-3xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-vibrant-orange opacity-0 group-hover:opacity-[0.02] transition-opacity"></div>
                                <div id="payHero" className="w-full min-h-[60px] relative z-10 scale-110"></div>
                                <p className="mt-8 text-[10px] font-black text-navy/20 text-center uppercase tracking-[0.2em] leading-loose">
                                    Official Payment Channel<br />Powered by Pay Hero Kenya
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* M-Pesa Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                        className="bg-white border-4 border-navy p-8 md:p-10 shadow-brutal group flex flex-col justify-between"
                    >
                        <div className="flex items-start gap-6">
                            <div className="bg-navy text-white p-5 rounded-2xl shadow-[6px_6px_0px_0px_rgba(255,107,38,1)] flex-shrink-0">
                                <Phone size={36} />
                            </div>
                            <div>
                                <span className="sticker bg-vibrant-orange text-white mb-4">Mobile Money</span>
                                <h3 className="font-serif text-3xl font-black text-navy mb-6 uppercase">M-Pesa Support</h3>
                                <div className="space-y-3">
                                    <p className="text-2xl font-black text-navy select-all tracking-wider">+254 711 528353</p>
                                    <p className="font-black text-navy/40 uppercase text-xs tracking-widest bg-navy/5 inline-block px-3 py-1 rounded-full">
                                        Account: Tobias Okoth
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Registry Alternative Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.4 }}
                        className="bg-navy text-white border-4 border-navy p-8 md:p-10 shadow-brutal-orange group relative overflow-hidden flex flex-col justify-between"
                    >
                        <div className="absolute -bottom-6 -right-6 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000">
                            <Gift size={200} />
                        </div>
                        <div className="relative z-10">
                            <span className="sticker bg-white text-navy mb-4">Gifts Registry</span>
                            <h3 className="font-serif text-3xl font-black text-white mb-6 uppercase">Future Home</h3>
                            <p className="font-bold text-white/70 leading-relaxed text-lg mb-8">
                                Helping us build our first home together is a blessing we will cherish forever.
                            </p>
                        </div>
                        <div className="relative z-10 flex items-center gap-3 text-vibrant-orange font-black uppercase tracking-[0.2em] text-xs">
                            <Heart size={20} fill="currentColor" />
                            E & T • WITH LOVE
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
