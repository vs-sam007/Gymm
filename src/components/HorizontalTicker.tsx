"use client";

import { motion } from "framer-motion";

const items = [
    "REDEFINE LIMITS", "ELITE STRENGTH", "OPTIMAL PERFORMANCE", "BESPOKE COACHING",
    "REDEFINE LIMITS", "ELITE STRENGTH", "OPTIMAL PERFORMANCE", "BESPOKE COACHING",
];

export default function HorizontalTicker() {
    return (
        <div className="bg-gold-dim border-y border-gold/10 py-4 md:py-6 overflow-hidden relative z-20">
            <div className="marquee-track marquee-animate">
                {items.concat(items).map((item, i) => (
                    <div key={i} className="flex items-center">
                        <span className="text-xl md:text-3xl font-bebas tracking-[0.1em] text-white/30 px-12 transition-colors hover:text-gold/60 cursor-default">
                            {item}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-gold/20" />
                    </div>
                ))}
            </div>
        </div>
    );
}
