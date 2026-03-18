import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { Story } from './components/Story';
import { Gallery } from './components/Gallery';
import { Gifts } from './components/Gifts';
import { RSVPForm } from './components/RSVPForm';
import { ThankYou } from './components/ThankYou';
import { MapPin, Clock, Calendar } from 'lucide-react';

const PerforatedDivider = ({ text }: { text?: string }) => (
  <div className="my-32 relative h-1 w-full bg-navy/10 flex items-center justify-center">
    <div className="absolute inset-x-0 h-4 border-y-4 border-navy border-dashed opacity-10"></div>
    {text && (
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="sticker bg-white text-navy px-8 py-2 z-10 border-4 border-navy font-black tracking-[0.3em] uppercase text-xs"
      >
        {text}
      </motion.div>
    )}
  </div>
);

function App() {
  const [isRSVPSubmitted, setIsRSVPSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-off-white text-navy font-sans selection:bg-vibrant-orange selection:text-white overflow-x-hidden">
      {/* Top Navbar Sticker */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", damping: 15 }}
          className="sticker bg-navy text-white px-10 py-3 shadow-[8px_8px_0px_0px_rgba(255,109,0,1)] flex items-center gap-6"
        >
          <span className="font-serif italic text-xl">E&T</span>
          <div className="w-[2px] h-6 bg-white/20"></div>
          <a href="#rsvp" className="text-xs font-black tracking-widest hover:text-vibrant-orange transition-colors">RSVP NOW</a>
        </motion.div>
      </div>

      <main className="max-w-7xl mx-auto">

        <Hero />

        <PerforatedDivider text="The Countdown" />

        <Countdown />

        <PerforatedDivider text="Our Story" />

        <Story />

        <PerforatedDivider text="Our Moments" />

        <Gallery />

        <PerforatedDivider text="The Event" />

        <section className="py-24 px-4 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative group w-full max-w-4xl"
          >
            <div className="absolute inset-0 bg-navy translate-x-6 translate-y-6 shadow-brutal"></div>
            <div className="bg-white border-4 border-navy p-12 md:p-24 relative text-center">
              <h2 className="font-serif text-5xl md:text-7xl font-black mb-16 text-navy uppercase tracking-tighter">
                Event <span className="text-vibrant-orange italic">Details</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                <div className="flex flex-col items-center gap-6 group/item">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-24 h-24 bg-navy text-white flex items-center justify-center border-4 border-navy shadow-brutal"
                  >
                    <Calendar size={48} />
                  </motion.div>
                  <span className="sticker text-xs">When</span>
                  <span className="font-black text-2xl">April 11, 2026</span>
                </div>

                <div className="flex flex-col items-center gap-6 group/item">
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    className="w-24 h-24 bg-vibrant-orange text-white flex items-center justify-center border-4 border-navy shadow-brutal"
                  >
                    <Clock size={48} />
                  </motion.div>
                  <span className="sticker text-xs">Time</span>
                  <span className="font-black text-2xl">10:00 AM Sharp</span>
                </div>

                <div className="flex flex-col items-center gap-6 group/item text-center">
                  <motion.div
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    className="w-24 h-24 bg-navy text-white flex items-center justify-center border-4 border-navy shadow-brutal"
                  >
                    <MapPin size={48} />
                  </motion.div>
                  <span className="sticker text-xs">Where</span>
                  <div>
                    <span className="block font-black text-xl md:text-2xl">ACK Christ Church Cathedral</span>
                    <span className="block font-serif italic text-navy/60 text-lg">Kakamega, Kenya</span>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-20 p-10 border-4 border-navy border-dashed flex flex-col items-center gap-6 bg-vibrant-orange/10"
              >
                <p className="font-black text-2xl uppercase tracking-tighter italic">"Formal Attire with a touch of Boldness"</p>
                <div className="sticker bg-navy text-white px-10">The Dress Code</div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        <Gifts />

        <PerforatedDivider text="RSVP NOW" />

        <section className="px-4 pb-44" id="rsvp">
          <AnimatePresence mode="wait">
            {isRSVPSubmitted ? (
              <motion.div
                key="thank-you"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <ThankYou />
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
              >
                <RSVPForm onSuccess={() => setIsRSVPSubmitted(true)} />
              </motion.div>
            )}
          </AnimatePresence>
        </section>

      </main>

      <footer className="py-20 border-t-[12px] border-navy text-center bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 flex flex-col items-center gap-12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="font-serif text-8xl md:text-9xl font-black uppercase text-navy relative"
          >
            E <span className="text-vibrant-orange italic">&</span> T
            <div className="absolute -bottom-4 right-0 sticker text-xl">2026</div>
          </motion.div>

          <div className="flex flex-col gap-4 items-center">
            <p className="font-black uppercase tracking-[0.5em] text-xs md:text-sm text-navy/40">
              Elizabeth & Tobias • Built for the Bold
            </p>
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-navy border-4 border-navy shadow-brutal"></div>
              <div className="w-12 h-12 bg-vibrant-orange border-4 border-navy shadow-brutal"></div>
              <div className="w-12 h-12 bg-white border-4 border-navy shadow-brutal"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
