"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
    {
        name: "VIKRAM SINGHANIA",
        role: "Institutional Member",
        quote: "Iron Pulse is not a gymnasium. It is a laboratory for human potential. The level of precision in their coaching has fundamentally restructured my approach to performance.",
        stat: "14% Body Fat Loss",
        image: "/images/gallery-1.jpg",
    },
    {
        name: "ANANYA KAPOOR",
        role: "Executive Member",
        quote: "The environment is uniquely designed to eliminate distractions. Every session feels like an investment in absolute physiological excellence.",
        stat: "+8kg Lean Mass",
        image: "/images/gallery-3.jpg",
    },
    {
        name: "MARCUS CHEN",
        role: "Elite Athlete",
        quote: "I've trained globally — London, NY, Tokyo. Iron Pulse stands alone in its integration of bespoke technology and world-class biomechanics.",
        stat: "Marathon PB - 2:48",
        image: "/images/gallery-5.jpg",
    },
];

export default function Transformation() {
    const [current, setCurrent] = useState(0);
    const direction = useRef(1);

    const navigate = (dir: number) => {
        direction.current = dir;
        setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
    };

    const t = testimonials[current];

    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background Filler */}
            <div className="bg-blob -top-1/4 -right-1/4 opacity-[0.05]" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
                    <div className="max-w-xl">
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <span className="section-label">HUMAN EVOLUTION</span>
                            <div className="divider-gold" />
                        </motion.div>
                        <motion.h2
                            className="text-5xl md:text-8xl font-bebas text-white leading-[0.9] tracking-tighter"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            THE IRON <br />
                            <span className="text-gold italic font-light" style={{ fontFamily: 'var(--font-playfair)' }}>Testimonials</span>
                        </motion.h2>
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={() => navigate(-1)}
                            className="w-16 h-16 rounded-full border border-white/[0.05] flex items-center justify-center text-white/20 hover:text-gold hover:border-gold/40 transition-all duration-500 group"
                        >
                            <ChevronLeft className="w-5 h-5 group-active:scale-90 transition-transform" />
                        </button>
                        <button
                            onClick={() => navigate(1)}
                            className="w-16 h-16 rounded-full border border-white/[0.05] flex items-center justify-center text-white/20 hover:text-gold hover:border-gold/40 transition-all duration-500 group"
                        >
                            <ChevronRight className="w-5 h-5 group-active:scale-90 transition-transform" />
                        </button>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center"
                            initial={{ opacity: 0, x: direction.current * 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -direction.current * 40 }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        >
                            {/* Cinematic Testimonial Image */}
                            <div className="md:col-span-5 relative group">
                                <div className="aspect-[4/5] overflow-hidden rounded-sm border border-white/10">
                                    <motion.img
                                        src={t.image}
                                        alt={t.name}
                                        className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                                        initial={{ scale: 1.2 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 1.5 }}
                                    />
                                </div>
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 glass-gold flex items-center justify-center border border-gold/20 hidden lg:flex">
                                    <Quote className="w-8 h-8 text-gold/40" />
                                </div>
                            </div>

                            <div className="md:col-span-7">
                                <p className="text-2xl md:text-3xl text-white font-inter font-light leading-snug mb-12" style={{ fontStyle: 'italic', fontFamily: 'var(--font-playfair)' }}>
                                    "{t.quote}"
                                </p>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 py-8 border-y border-white/[0.03]">
                                    <div className="flex items-center gap-6">
                                        <div className="w-px h-12 bg-gold/30" />
                                        <div>
                                            <p className="text-sm font-bold tracking-[0.3em] font-bebas text-gold/80 mb-1">{t.name}</p>
                                            <p className="text-[11px] tracking-[0.2em] uppercase text-white/30">{t.role}</p>
                                        </div>
                                    </div>

                                    <div className="glass-gold px-8 py-4 rounded-sm border border-gold/10">
                                        <span className="text-[9px] font-bold tracking-[0.4em] text-gold/40 uppercase mb-1 block">Institutional Gain</span>
                                        <div className="text-2xl font-bebas text-white tracking-widest">{t.stat}</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Background Texture Ticker */}
            <div className="absolute -bottom-10 left-0 w-full opacity-[0.03] select-none pointer-events-none overflow-hidden whitespace-nowrap">
                <span className="text-[20vw] font-bebas tracking-tighter">TRANSFORMATION · EVOLUTION · ARCHITECTURE · TRANSFORMATION</span>
            </div>
        </section>
    );
}
