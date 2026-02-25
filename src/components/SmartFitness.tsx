"use client";

import { motion } from "framer-motion";
import { Smartphone, ShieldCheck, BarChart4, Cpu } from "lucide-react";

const techFeatures = [
    {
        icon: Smartphone,
        label: "Bespoke Interface",
        desc: "An ultra-intuitive experience to manage your physiological data and session bookings."
    },
    {
        icon: BarChart4,
        label: "AI Performance Lab",
        desc: "Advanced predictive modeling that forecasts your gains based on current training load."
    },
    {
        icon: ShieldCheck,
        label: "Secure Biometrics",
        desc: "Seamless entry and progress tracking via encrypted biometric synchronization."
    },
    {
        icon: Cpu,
        label: "Real-time Telemetry",
        desc: "Live stream your heart rate and effort metrics to your coach's dashboard during sessions."
    }
];

export default function SmartFitness() {
    return (
        <section className="section-padding bg-background border-y border-white/[0.03] relative overflow-hidden">
            {/* Background Narrative Lettering */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center opacity-[0.03] select-none pointer-events-none">
                <span className="text-[30vw] font-bebas leading-none font-outline text-white tracking-widest">
                    HUB
                </span>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Background Blobs for Density */}
                <div className="bg-blob -top-1/4 -right-1/4 opacity-10" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    {/* Left Typography Block */}
                    <div className="lg:col-span-5 relative z-10">
                        <motion.div
                            className="flex items-center gap-3 mb-8"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <span className="section-label">THE INTERFACE</span>
                            <div className="divider-gold" />
                        </motion.div>

                        <motion.h2
                            className="text-5xl md:text-8xl font-bebas text-white leading-[1.1] tracking-tighter mb-10 pr-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            SMART <br />
                            <span className="text-gold italic font-light inline-block pr-[0.15em]" style={{ fontFamily: 'var(--font-playfair)' }}>Ecosystem</span>
                        </motion.h2>

                        <div className="space-y-10">
                            {techFeatures.map((feat, i) => (
                                <motion.div
                                    key={feat.label}
                                    className="flex gap-8 group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <div className="w-1px h-12 bg-white/10 relative group-hover:bg-gold transition-colors duration-500">
                                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold opacity-0 group-hover:opacity-100 transition-all duration-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase mb-2 group-hover:text-gold transition-colors">{feat.label}</h3>
                                        <p className="text-sm text-foreground/60 leading-relaxed font-inter uppercase tracking-wide">
                                            {feat.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Interactive Visual */}
                    <div className="lg:col-span-7 relative flex justify-center lg:justify-end">
                        <motion.div
                            className="relative w-full max-w-sm"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1.2 }}
                        >
                            <div className="glass-gold p-10 rounded-sm aspect-[9/16] flex flex-col justify-between animate-float-elegant">
                                <div className="space-y-8">
                                    <div className="flex justify-between items-center pb-6 border-b border-white/10">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] font-bold tracking-[0.25em] text-gold/60 uppercase">System Status</span>
                                            <span className="text-xs font-bold text-white tracking-[0.1em] uppercase mt-1">Operational</span>
                                        </div>
                                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    </div>

                                    <div className="space-y-4">
                                        <span className="text-[10px] font-bold tracking-[0.25em] text-white/30 uppercase">Recovery Score</span>
                                        <div className="text-6xl font-bebas text-white">96%</div>
                                        <div className="w-full h-1px bg-white/5">
                                            <div className="h-full w-[96%] bg-gold-gradient" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        {['VO2 MAX', 'HRV', 'LOAD', 'SLEEP'].map(metric => (
                                            <div key={metric} className="glass p-4 rounded-sm">
                                                <p className="text-[10px] font-bold text-white/20 tracking-widest uppercase mb-1">{metric}</p>
                                                <p className="text-xs font-bold text-white tracking-widest">OPTIMAL</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-8 flex flex-col gap-3">
                                    <button className="w-full py-4 text-xs font-bold tracking-[0.25em] text-black bg-gold-gradient rounded-sm uppercase">
                                        Sync Bio-ID
                                    </button>
                                    <span className="text-[9px] text-center text-white/10 uppercase tracking-[0.2em]">Iron Pulse Neural Hub v4.28</span>
                                </div>
                            </div>

                            {/* Decorative gold strands */}
                            <div className="absolute -top-10 -right-10 w-40 h-40 border-r border-t border-gold/20 -z-10" />
                            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-l border-b border-gold/20 -z-10" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
