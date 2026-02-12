"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "BASIC",
        price: "49",
        features: ["Gym Access", "Locker Room", "Free WiFi"],
        highlight: false,
    },
    {
        name: "PRO",
        price: "89",
        features: ["Gym Access", "Group Classes", "Sauna & Spa", "Nutrition Guide"],
        highlight: true,
    },
    {
        name: "ELITE",
        price: "149",
        features: ["All Pro Features", "Personal Training (4x)", "Private Lounge", "Gear Kit"],
        highlight: false,
    },
];

export default function Pricing() {
    return (
        <section className="py-32 bg-[#0B0F0E] relative">
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-5xl md:text-7xl font-bebas text-white text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    CHOOSE YOUR <span className="text-neon">WEAPON</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className={cn(
                                "relative p-8 rounded-2xl border flex flex-col items-center text-center group transition-all duration-300",
                                plan.highlight
                                    ? "bg-white/5 border-neon shadow-[0_0_30px_rgba(163,255,18,0.1)] scale-105 z-10"
                                    : "bg-white/5 border-white/10 hover:border-white/30"
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 bg-neon text-black px-4 py-1 font-bold text-sm tracking-wider rounded-sm">
                                    MOST POPULAR
                                </div>
                            )}

                            <h3 className="text-2xl font-bebas text-white mb-2">{plan.name}</h3>
                            <div className="flex items-start gap-1 mb-8">
                                <span className="text-xl text-neon">$</span>
                                <span className="text-6xl font-bebas text-white">{plan.price}</span>
                                <span className="self-end text-gray-400 mb-2">/mo</span>
                            </div>

                            <ul className="space-y-4 mb-8 w-full">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center justify-center gap-3 text-gray-300 text-sm">
                                        <Check className="w-4 h-4 text-neon" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button className={cn(
                                "w-full py-3 font-bebas tracking-wide rounded-sm transition-all",
                                plan.highlight
                                    ? "bg-neon text-black hover:bg-neon/90"
                                    : "bg-transparent border border-white/20 text-white hover:bg-white hover:text-black"
                            )}>
                                SELECT PLAN
                            </button>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-neon/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
