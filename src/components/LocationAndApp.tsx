"use client";

import { motion } from "framer-motion";
import { MapPin, Smartphone, Apple, PlayCircle, ShieldCheck, Activity, QrCode } from "lucide-react";

export default function LocationAndApp() {
    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Background Narrative */}
            <div className="absolute top-[10%] right-[-5%] opacity-[0.02] select-none pointer-events-none">
                <span className="text-[25vw] font-bebas leading-none font-outline text-white">HUB</span>
            </div>

            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

                    {/* Left: Google Maps Institutional Integration */}
                    <motion.div
                        className="relative group"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-3 mb-8">
                            <span className="section-label">THE SANCTUARY LOCATION</span>
                            <div className="divider-gold" />
                        </div>

                        <div className="relative aspect-square md:aspect-video lg:aspect-[4/5] rounded-sm overflow-hidden border border-white/10 group">
                            {/* Dark Mode Map Filter Overlay */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.803274291!2d72.825!3d18.925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1c16d2524d9%3A0x6e8a002244a30a13!2sColaba%20Causeway%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                className="w-full h-full grayscale invert opacity-70 contrast-125 brightness-75 scale-110 group-hover:scale-100 transition-all duration-1000"
                                style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(1.1) brightness(0.8)' }}
                                loading="lazy"
                            ></iframe>

                            {/* Map Floating UI */}
                            <div className="absolute top-8 left-8 z-10 glass-gold p-6 border border-gold/10 hidden md:block">
                                <div className="flex items-center gap-4 mb-2">
                                    <MapPin className="text-gold w-4 h-4" />
                                    <span className="text-[10px] font-bold tracking-[0.3em] text-white">INSTITUTE HEADQUARTERS</span>
                                </div>
                                <p className="text-xs font-inter text-white/60 tracking-widest uppercase">
                                    88 Elite Avenue, Colaba <br />
                                    Mumbai, MH 400001
                                </p>
                            </div>

                            <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
                        </div>
                    </motion.div>

                    {/* Right: The Sanctuary App Showcase */}
                    <motion.div
                        className="flex flex-col items-center lg:items-start"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="max-w-md w-full">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="section-label text-gold/60">DIGITAL ECOSYSTEM</span>
                                <div className="divider-gold" />
                            </div>

                            <h2 className="text-5xl md:text-7xl font-bebas text-white leading-[0.9] tracking-tighter mb-8">
                                THE <span className="text-gold">SANC-TUARY</span> <br />
                                MOBILE HUB
                            </h2>

                            <p className="text-sm text-white/40 font-inter uppercase tracking-[0.15em] leading-relaxed mb-12">
                                Seamlessly manage your physiological evolution. Track biometric data, secure private sessions, and unlock biometric gate access from your device.
                            </p>

                            {/* Phone Mockup Frame */}
                            <div className="relative mb-12 group mx-auto lg:mx-0">
                                <div className="w-[280px] h-[580px] border-[6px] border-[#1A1A1A] rounded-[45px] bg-[#0A0A0A] relative overflow-hidden shadow-[0_0_50px_rgba(201,168,76,0.1)] group-hover:shadow-[0_0_80px_rgba(201,168,76,0.15)] transition-all duration-700">
                                    {/* Notch */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-[#1A1A1A] rounded-b-2xl z-30" />

                                    {/* App UI Contents */}
                                    <div className="p-6 pt-12 flex flex-col h-full bg-background relative">
                                        <div className="bg-blob -top-24 -right-24 opacity-20" />

                                        <div className="flex justify-between items-center mb-8 relative z-10">
                                            <div className="w-8 h-8 rounded-full border border-gold/20 flex items-center justify-center font-bebas text-gold text-xs">IP</div>
                                            <Activity className="w-4 h-4 text-gold/60" />
                                        </div>

                                        <div className="mb-8 relative z-10">
                                            <p className="text-[8px] font-bold tracking-[0.3em] text-white/20 uppercase mb-2">Institutional ID</p>
                                            <div className="text-xl font-bebas text-white tracking-widest leading-none">VIKRAM SINGHANIA</div>
                                            <div className="text-[9px] text-gold/80 tracking-widest mt-1">EXECUTIVE PRIVILEGE</div>
                                        </div>

                                        {/* Activity Rings (Abstract) */}
                                        <div className="flex justify-center my-6 relative animate-pulse">
                                            <div className="w-32 h-32 rounded-full border-4 border-gold/5 flex items-center justify-center">
                                                <div className="w-24 h-24 rounded-full border-4 border-gold/40 flex items-center justify-center">
                                                    <div className="w-16 h-16 rounded-full border-4 border-white/10" />
                                                </div>
                                            </div>
                                            <div className="absolute inset-0 flex items-center justify-center flex-col">
                                                <span className="text-2xl font-bebas text-white">88%</span>
                                                <span className="text-[7px] text-white/40 tracking-[0.2em]">KINETIC LOAD</span>
                                            </div>
                                        </div>

                                        {/* Biometric QR Placeholder */}
                                        <div className="mt-auto bg-white/[0.03] border border-white/5 p-4 rounded-sm flex items-center justify-between mb-4">
                                            <div>
                                                <p className="text-[7px] font-bold tracking-[0.2em] text-white/40 uppercase mb-1">Gate Pass</p>
                                                <p className="text-[10px] font-bold text-gold tracking-widest">ACTIVE SESSION</p>
                                            </div>
                                            <QrCode className="w-6 h-6 text-white/20" />
                                        </div>
                                    </div>
                                </div>

                                {/* Floating App Signals */}
                                <div className="absolute -right-8 top-1/4 glass-gold p-4 border border-gold/10 hidden md:block">
                                    <ShieldCheck className="w-4 h-4 text-gold mb-1" />
                                    <span className="text-[8px] font-bold tracking-widest text-white/60 uppercase">SECURE BIOMETRIC</span>
                                </div>
                            </div>

                            {/* Download Buttons */}
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                <button className="flex items-center gap-3 px-6 py-3 border border-white/10 hover:border-gold/30 rounded-sm transition-all group">
                                    <Apple className="w-5 h-5 text-white/60 group-hover:text-gold" />
                                    <div className="text-left">
                                        <p className="text-[7px] text-white/30 uppercase tracking-widest">Available on</p>
                                        <p className="text-xs font-bold text-white tracking-widest uppercase">App Store</p>
                                    </div>
                                </button>
                                <button className="flex items-center gap-3 px-6 py-3 border border-white/10 hover:border-gold/30 rounded-sm transition-all group">
                                    <PlayCircle className="w-5 h-5 text-white/60 group-hover:text-gold" />
                                    <div className="text-left">
                                        <p className="text-[7px] text-white/30 uppercase tracking-widest">Get it on</p>
                                        <p className="text-xs font-bold text-white tracking-widest uppercase">Play Store</p>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
