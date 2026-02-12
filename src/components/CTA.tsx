"use client";

import { motion } from "framer-motion";

export default function CTA() {
    return (
        <section className="h-[80vh] bg-black flex items-center justify-center relative overflow-hidden">
            {/* Pulsing Background */}
            <div className="absolute inset-0 bg-neon/5 animate-pulse" />
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon/10 to-transparent opacity-50" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.h2
                    className="text-6xl md:text-9xl font-bebas text-white leading-none mb-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    START TODAY. <br />
                    <span className="text-neon">NOT TOMORROW.</span>
                </motion.h2>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                >
                    <button className="px-12 py-5 bg-neon text-black text-2xl font-bebas tracking-wide rounded-sm hover:scale-105 transition-transform shadow-[0_0_50px_rgba(163,255,18,0.4)]">
                        JOIN IRON PULSE
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
