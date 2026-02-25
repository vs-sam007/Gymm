"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

const tiers = [
    {
        name: "Associate",
        price: 1500,
        desc: "Essential access for the dedicated trainee.",
        features: ["Access (6am–10pm)", "Locker Room access", "Hydration Bar", "Introductory Assessment"],
        cta: "JOIN ASSOCIATE"
    },
    {
        name: "Executive",
        price: 3500,
        desc: "Our most coveted membership for elite performance.",
        features: ["24/7 Priority Access", "Unlimited Classes", "Recovery Suite access", "Bi-weekly PT session", "Nutrition Analysis"],
        popular: true,
        cta: "UPGRADE TO EXECUTIVE"
    },
    {
        name: "Institutional",
        price: 5500,
        desc: "Total physiological optimization package.",
        features: ["All Executive perks", "Personal Concierge", "Daily 1 PT session", "Bespoke Supplementation", "Guest Access (Daily)"],
        cta: "ENROLL INSTITUTIONAL"
    }
];

export default function Pricing() {
    const [quarterly, setQuarterly] = useState(false);

    return (
        <section id="pricing" className="section-padding bg-background-2 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        className="flex items-center justify-center gap-3 mb-6"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                    >
                        <div className="h-[1px] w-12 bg-gold/30" />
                        <span className="section-label">MEMBERSHIP PRIVILEGES</span>
                        <div className="h-[1px] w-12 bg-gold/30" />
                    </motion.div>

                    <motion.h2
                        className="text-5xl md:text-8xl font-bebas text-white tracking-widest leading-tight pr-10"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                    >
                        THE IRON <span className="text-gold italic font-light" style={{ fontFamily: 'var(--font-playfair)' }}>Standard</span>
                    </motion.h2>

                    {/* Minimal Toggle */}
                    <div className="mt-12 inline-flex items-center p-1 bg-white/[0.03] border border-white/10 rounded-sm">
                        <button
                            onClick={() => setQuarterly(false)}
                            className={`px-8 py-2.5 text-xs font-bold tracking-[0.2em] transition-all rounded-sm ${!quarterly ? "btn-gold text-black shadow-lg" : "text-foreground/40 hover:text-foreground"}`}
                        >
                            MONTHLY
                        </button>
                        <button
                            onClick={() => setQuarterly(true)}
                            className={`px-8 py-2.5 text-xs font-bold tracking-[0.2em] transition-all rounded-sm ${quarterly ? "btn-gold text-black shadow-lg" : "text-foreground/40 hover:text-foreground"}`}
                        >
                            QUARTERLY <span className="ml-2 text-[10px] opacity-60">-25%</span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 border-b border-white/[0.03] pb-24">
                    {tiers.map((tier, i) => (
                        <motion.div
                            key={tier.name}
                            className={`relative p-12 md:p-14 flex flex-col border-b md:border-b-0 border-white/10 last:border-0 ${i === 1 ? 'bg-white/[0.02]' : ''}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {tier.popular && (
                                <div className="absolute top-0 right-0 p-4">
                                    <div className="bg-gold-gradient text-[10px] font-bold tracking-[0.25em] text-black px-4 py-1 uppercase">
                                        PREFERRED
                                    </div>
                                </div>
                            )}

                            <span className="section-label text-sm text-gold/60 mb-2">{tier.name}</span>
                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-6xl font-bebas text-white">₹{quarterly ? Math.floor(tier.price * 0.75 * 3) : tier.price}</span>
                                <span className="text-xs font-inter tracking-[0.1em] text-foreground/40 uppercase">
                                    {quarterly ? '/ QUARTER' : '/ MONTH'}
                                </span>
                            </div>

                            <p className="text-sm text-foreground/60 leading-relaxed mb-10 font-inter min-h-[48px]">
                                {tier.desc}
                            </p>

                            <div className="flex-1 space-y-4 mb-12">
                                {tier.features.map((feat) => (
                                    <div key={feat} className="flex items-center gap-4">
                                        <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
                                        <span className="text-xs tracking-wide text-foreground/80 uppercase font-medium">{feat}</span>
                                    </div>
                                ))}
                            </div>

                            <button className={`w-full py-5 rounded-sm text-xs font-bold tracking-[0.25em] border transition-all ${tier.popular ? "btn-gold border-transparent" : "border-white/10 text-white hover:border-gold hover:text-gold"}`}>
                                {tier.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="text-[11px] font-inter tracking-[0.2em] text-foreground/30 uppercase">
                        All memberships include access to our London and New York clubs. Prices exclude GST.
                    </p>
                </div>
            </div>
        </section>
    );
}
