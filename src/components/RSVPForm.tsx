import React, { useState } from 'react';
import { supabase } from '../lib/supabase';
import { Users, Phone, User, MessageSquare, Ticket } from 'lucide-react';
import { motion } from 'framer-motion';

interface RSVPFormProps {
    onSuccess: () => void;
}

export const RSVPForm: React.FC<RSVPFormProps> = ({ onSuccess }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        full_name: '',
        guest_count: 1,
        phone_number: '',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const { error: supabaseError } = await supabase
                .from('rsvp_responses')
                .insert([formData]);

            if (supabaseError) {
                throw supabaseError;
            }

            onSuccess();
        } catch (err: any) {
            console.error('Error submitting RSVP:', err);
            setError(err.message || 'An error occurred while submitting your RSVP. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'guest_count' ? parseInt(value) : value
        }));
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="w-full max-w-4xl mx-auto my-16 relative"
        >
            {/* Ticket Perforation Effect (CSS) */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-off-white border-2 border-navy shadow-[inner_0_2px_4px_rgba(0,0,0,0.1)]"></div>
                ))}
            </div>
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-10">
                {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-off-white border-2 border-navy"></div>
                ))}
            </div>

            <div className="bg-white border-4 border-navy shadow-[16px_16px_0px_0px_rgba(26,35,126,1)] p-8 md:p-12 relative overflow-hidden group">
                {/* Decorative Ticket Header */}
                <div className="flex justify-between items-center mb-10 border-b-4 border-navy pb-6 border-dashed">
                    <div>
                        <span className="sticker bg-navy text-white mb-2">Our Special Day</span>
                        <h2 className="font-serif text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter">
                            Join Our <span className="text-vibrant-orange italic">Celebration</span>
                        </h2>
                    </div>
                    <Ticket size={64} className="text-navy/20 -rotate-12 hidden md:block group-hover:rotate-12 transition-transform duration-500" />
                </div>

                {error && (
                    <div className="mb-8 sticker bg-red-100 text-red-700 border-red-500 w-full text-center py-4">
                        ⚠️ ERROR: {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8 relative">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label htmlFor="full_name" className="block font-black uppercase tracking-widest text-sm flex items-center gap-2">
                                <User size={18} className="text-vibrant-orange" />
                                Host/Guest Name
                            </label>
                            <input
                                type="text"
                                id="full_name"
                                name="full_name"
                                required
                                value={formData.full_name}
                                onChange={handleChange}
                                className="w-full border-4 border-navy p-4 focus:outline-none focus:bg-vibrant-orange/10 font-bold transition-colors shadow-brutal"
                                placeholder="Your Name"
                            />
                        </div>

                        <div className="space-y-3">
                            <label htmlFor="phone_number" className="block font-black uppercase tracking-widest text-sm flex items-center gap-2">
                                <Phone size={18} className="text-vibrant-orange" />
                                Contact No.
                            </label>
                            <input
                                type="tel"
                                id="phone_number"
                                name="phone_number"
                                value={formData.phone_number}
                                onChange={handleChange}
                                className="w-full border-4 border-navy p-4 focus:outline-none focus:bg-vibrant-orange/10 font-bold transition-colors shadow-brutal"
                                placeholder="+254..."
                            />
                        </div>
                    </div>

                    <div className="space-y-3">
                        <label htmlFor="guest_count" className="block font-black uppercase tracking-widest text-sm flex items-center gap-2">
                            <Users size={18} className="text-vibrant-orange" />
                            Party Size (Max 5)
                        </label>
                        <select
                            id="guest_count"
                            name="guest_count"
                            value={formData.guest_count}
                            onChange={handleChange}
                            className="w-full border-4 border-navy p-4 focus:outline-none focus:bg-vibrant-orange/10 font-black transition-colors shadow-brutal appearance-none cursor-pointer bg-white"
                        >
                            {[1, 2, 3, 4, 5].map(num => (
                                <option key={num} value={num}>
                                    00{num} — {num === 1 ? 'PERSON' : 'PEOPLE'}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-3">
                        <label htmlFor="message" className="block font-black uppercase tracking-widest text-sm flex items-center gap-2">
                            <MessageSquare size={18} className="text-vibrant-orange" />
                            Personal Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={4}
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full border-4 border-navy p-4 focus:outline-none focus:bg-vibrant-orange/10 font-bold transition-colors shadow-brutal resize-none"
                            placeholder="Wishes for Elizabeth & Tobias..."
                        />
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="brutal-btn w-full text-2xl py-6 tracking-[0.2em] uppercase"
                    >
                        {isSubmitting ? 'VALIDATING...' : "I'M COMING!"}
                    </motion.button>
                </form>

                {/* Decorative Footer */}
                <div className="mt-12 pt-6 border-t-4 border-navy border-dashed flex justify-between items-center opacity-40">
                    <span className="font-black italic">INVITATION CODE: 041126-ET</span>
                    <span className="font-black">EST. 2026</span>
                </div>
            </div>
        </motion.div>
    );
};
