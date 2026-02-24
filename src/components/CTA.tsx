"use client";

import { motion } from "framer-motion";
import { Instagram, Youtube, Facebook, ArrowUp, Globe, Shield } from "lucide-react";

export default function CTA() {
    const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <footer id="contact" className="bg-background-2 relative pt-32 overflow-hidden border-t border-white/[0.03]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            {/* Closing Narrative */}
            <div className="container mx-auto px-6 mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-7">
                        <motion.div
                            className="flex items-center gap-3 mb-8"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <span className="section-label">THE DEPARTURE</span>
                            <div className="divider-gold" />
                        </motion.div>

                        <motion.h2
                            className="text-6xl md:text-[10vw] font-bebas text-white leading-[0.85] tracking-tighter mb-12"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            THE FUTURE <br />
                            <span className="text-gold italic font-light" style={{ fontFamily: 'var(--font-playfair)' }}>In Your Hands.</span>
                        </motion.h2>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <a href="#" className="btn-gold px-12 py-6 rounded-sm text-sm tracking-[0.2em] font-bold">
                                SECURE PRIVILEGES
                            </a>
                            <div className="flex items-center gap-4 text-white/50 hover:text-white transition-colors cursor-pointer group px-4">
                                <span className="text-xs font-bold tracking-[0.2em] uppercase">Private Consultation</span>
                                <div className="w-8 h-[1px] bg-white/20 group-hover:w-full transition-all duration-700" />
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-5 grid grid-cols-1 xs:grid-cols-2 gap-12">
                        <div>
                            <h4 className="text-[11px] font-bold tracking-[0.3em] text-white/30 uppercase mb-8">Navigation</h4>
                            <ul className="space-y-4">
                                {['The Story', 'Methodology', 'Membership', 'Our Faculty', 'The Sanctuary'].map(item => (
                                    <li key={item}>
                                        <a href="#" className="text-xs font-bold tracking-[0.15em] text-foreground/60 hover:text-gold transition-colors uppercase">{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[11px] font-bold tracking-[0.3em] text-white/30 uppercase mb-8">Contact</h4>
                            <address className="not-italic space-y-4">
                                <p className="text-xs font-bold tracking-[0.15em] text-foreground/60 uppercase leading-relaxed">
                                    88 Elite Avenue, <br />
                                    Mumbai, MH 400001
                                </p>
                                <p className="text-xs font-bold tracking-[0.15em] text-foreground/60 uppercase">+91 22 8888 7777</p>
                                <p className="text-xs font-bold tracking-[0.15em] text-gold uppercase">reservations@ironpulse.club</p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Utility Bar */}
            <div className="bg-background border-t border-white/5 py-10 relative z-10">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Brand Footprint */}
                    <div className="flex items-center gap-6">
                        <div className="w-8 h-8 rounded-sm bg-white/[0.03] border border-white/5 flex items-center justify-center font-bebas text-gold text-sm font-bold">
                            IP
                        </div>
                        <div className="flex gap-6">
                            {[Instagram, Youtube, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="text-white/20 hover:text-gold transition-colors">
                                    <Icon size={14} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Trust Signals */}
                    <div className="flex items-center gap-12 text-[10px] font-bold tracking-[0.25em] text-white/20 uppercase">
                        <div className="flex items-center gap-2">
                            <Globe size={12} strokeWidth={1.5} />
                            Global Alliance
                        </div>
                        <div className="flex items-center gap-2">
                            <Shield size={12} strokeWidth={1.5} />
                            Biometric Secure
                        </div>
                    </div>

                    {/* Legal & Scroll */}
                    <div className="flex items-center gap-8">
                        <p className="text-[10px] font-bold tracking-[0.25em] text-white/20 uppercase">© 2024 IRON PULSE INSTITUTE</p>
                        <button
                            onClick={scrollTop}
                            className="w-10 h-10 border border-white/10 flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/30 transition-all group"
                        >
                            <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Floating Bio-ID Indicator */}
            <div className="fixed bottom-8 left-8 z-[60] hidden xl:flex items-center gap-3 glass-gold px-4 py-2 rounded-sm border border-gold/10 pointer-events-none">
                <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[8px] font-bold tracking-[0.4em] text-gold uppercase">Neural Hub Online</span>
            </div>

            {/* Cinematic Overlay at bottom */}
            <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-gold/5 to-transparent pointer-events-none" />
        </footer>
    );
}
