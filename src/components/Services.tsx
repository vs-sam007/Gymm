"use client";

import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Zap, Users, UserCheck, StretchHorizontal } from "lucide-react";

const programs = [
    {
        id: "01",
        title: "Metabolic Strength",
        category: "Power",
        icon: Dumbbell,
        desc: "An advanced explosive regimen designed for peak muscle recruitment and endocrine optimization.",
        image: "/images/strength-male-dumbbells.jpg"
    },
    {
        id: "02",
        title: "Athletic Flow",
        category: "Mobility",
        icon: StretchHorizontal,
        desc: "Bespoke mobility protocols that restore biomechanical harmony and improve neurological control.",
        image: "/images/gallery-2.jpg"
    },
    {
        id: "03",
        title: "Performance HIIT",
        category: "Endurance",
        icon: Zap,
        desc: "Shatter plateaus with high-precision interval cycles mapped to your heart rate variability.",
        image: "/images/hiit-battle-ropes.jpg"
    }
];

export default function Services() {
    return (
        <section id="programs" className="section-padding bg-background relative overflow-hidden">
            {/* Top Typography Header */}
            <div className="container mx-auto px-6 mb-24">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                    <div className="max-w-2xl">
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <span className="section-label">Institutional Mastery</span>
                            <div className="divider-gold" />
                        </motion.div>
                        <motion.h2
                            className="text-5xl md:text-8xl font-bebas text-white leading-[1.1] tracking-tighter pr-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            ELITE TRAINING <br />
                            <span className="text-gold italic font-light inline-block pr-[0.15em]" style={{ fontFamily: 'var(--font-playfair)' }}>Methodologies</span>
                        </motion.h2>
                    </div>
                    <motion.p
                        className="text-sm tracking-[0.15em] text-foreground/60 uppercase max-w-xs text-balance leading-loose text-right"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        Every methodology is crafted for individual biomechanics. We don't follow trends. We set the global standard.
                    </motion.p>
                </div>
            </div>

            {/* Editorial Program Cards */}
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-1px bg-white/[0.02] border border-white/[0.05] group">
                    {programs.map((prog, i) => (
                        <motion.div
                            key={prog.id}
                            className="relative bg-background overflow-hidden aspect-[4/5] group/card cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {/* Bg Image with Zoom */}
                            <div className="absolute inset-0 z-0">
                                <div className="absolute inset-0 bg-black/60 group-hover/card:bg-black/40 transition-colors duration-700 z-10" />
                                <img
                                    src={prog.image}
                                    alt={prog.title}
                                    className="w-full h-full object-cover grayscale brightness-50 group-hover/card:grayscale-0 group-hover/card:scale-110 transition-all duration-1000 ease-out"
                                />
                            </div>

                            {/* Card Content Overlay */}
                            <div className="absolute inset-0 z-20 p-10 flex flex-col justify-between">
                                <div className="flex justify-between items-start">
                                    <span className="text-4xl font-bebas text-gold/40 group-hover/card:text-gold transition-colors">{prog.id}</span>
                                    <prog.icon className="w-5 h-5 text-gold/60" strokeWidth={1} />
                                </div>

                                <div className="transform translate-y-8 group-hover/card:translate-y-0 transition-transform duration-700">
                                    <span className="text-[11px] font-bold tracking-[0.3em] uppercase text-gold/90 mb-2 block">{prog.category}</span>
                                    <h3 className="text-4xl font-bebas text-white tracking-widest mb-4">{prog.title}</h3>
                                    <p className="text-sm text-white/50 leading-relaxed font-inter opacity-0 group-hover/card:opacity-100 transition-opacity duration-700 delay-100">
                                        {prog.desc}
                                    </p>
                                </div>
                            </div>

                            {/* Bottom Reveal Border */}
                            <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gold-gradient group-hover/card:w-full transition-all duration-1000" />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Call to Action Bar */}
            <div className="mt-20 flex justify-center">
                <motion.div
                    className="flex items-center gap-6 group cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-gold group-hover:bg-gold-gradient group-hover:text-black transition-all">
                        →
                    </div>
                    <span className="text-xs font-bold tracking-[0.4em] uppercase text-white hover:text-gold transition-colors">
                        Exploration of Labs
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
