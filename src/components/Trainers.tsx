"use client";

import { motion } from "framer-motion";
import { User, Shield, Zap } from "lucide-react";

const coaches = [
    {
        name: "DR. ARJUN NAIR",
        role: "Master of Biomechanics",
        speciality: "Physiological Optimization · Powerlifting",
        credentials: "PhD Sports Science · IFBB Elite Coach",
        img: "/images/trainer-1.jpg"
    },
    {
        name: "MEERA IYER",
        role: "Neurological Conditioning",
        speciality: "Mobility · Cognitive Load · Endocrine Health",
        credentials: "Performance Neurologist · Yoga Acharya",
        img: "/images/trainer-2.jpg"
    },
    {
        name: "VIKRAM KAPUR",
        role: "The Human Architect",
        speciality: "Fat Loss · Hypertrophy · Life Extension",
        credentials: "Master of Nutrition · Olympic Consultant",
        img: "/images/trainer-3.jpg"
    }
];

export default function Trainers() {
    return (
        <section id="coaches" className="section-padding bg-background relative overflow-hidden px-4 md:px-0">
            {/* Background Filler */}
            <div className="bg-blob -bottom-1/4 -left-1/4 opacity-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
                    <div className="max-w-xl">
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <span className="section-label">THE FACULTY</span>
                            <div className="divider-gold" />
                        </motion.div>
                        <motion.h2
                            className="text-5xl md:text-8xl font-bebas text-white leading-[1.1] tracking-tighter pr-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            ELITE <br />
                            <span className="text-gold italic font-light inline-block pr-[0.15em]" style={{ fontFamily: 'var(--font-playfair)' }}>Practitioners</span>
                        </motion.h2>
                    </div>

                    <motion.p
                        className="text-sm tracking-[0.15em] text-foreground/50 uppercase max-w-sm leading-loose md:text-right"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        Our faculty is composed of clinical experts, international athletes, and biomechanical masters. We don't just instruct. We architect humans.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-white/[0.05] overflow-hidden bg-white/[0.02]">
                    {coaches.map((coach, i) => (
                        <motion.div
                            key={coach.name}
                            className="relative aspect-[3/4] group overflow-hidden border-r border-white/[0.05] last:border-0 bg-background"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {/* Image with high-end editorial grayscale hover */}
                            <img
                                src={coach.img}
                                alt={coach.name}
                                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 opacity-80 group-hover:opacity-40 transition-opacity duration-1000" />

                            {/* Portfolio Status */}
                            <div className="absolute top-0 right-0 p-6 z-20">
                                <div className="text-[11px] font-bold tracking-[0.2em] text-gold/80 uppercase flex items-center gap-2">
                                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                                    Active Portfolio
                                </div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 z-20 p-10 flex flex-col justify-end">
                                <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                                    <span className="text-xs font-bold tracking-[0.2em] text-gold/90 uppercase block mb-1">{coach.speciality}</span>
                                    <h3 className="text-4xl font-bebas text-white tracking-widest">{coach.name}</h3>

                                    <div className="mt-4 overflow-hidden">
                                        <p className="text-[11px] text-white/50 leading-relaxed font-inter uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">
                                            {coach.credentials}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Corner Stat Badge (Hidden on Mobile) */}
                            <div className="absolute bottom-10 right-10 z-30 hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                                <div className="w-12 h-12 rounded-full border border-gold/40 flex items-center justify-center text-xs font-bold text-gold bg-black/50 backdrop-blur-sm">
                                    1:1
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
