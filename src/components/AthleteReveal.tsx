"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AthleteReveal() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax effects
    const yLeft = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const yRight = useTransform(scrollYProgress, [0, 1], [200, -200]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
    const shapeRotate = useTransform(scrollYProgress, [0, 1], [0, 180]);

    return (
        <section ref={containerRef} className="relative min-h-[150vh] bg-[#0B0F0E] overflow-hidden flex items-center justify-center">

            {/* Background Shapes */}
            <motion.div
                style={{ rotate: shapeRotate, y: yLeft }}
                className="absolute top-20 left-10 w-64 h-64 border border-neon/20 rounded-full blur-3xl z-0"
            />
            <motion.div
                style={{ rotate: shapeRotate, y: yRight }}
                className="absolute bottom-20 right-10 w-96 h-96 border border-neon/10 rounded-full blur-3xl z-0"
            />

            {/* Content Container */}
            <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 items-center h-full">

                {/* Left Athlete */}
                <motion.div style={{ y: yLeft }} className="hidden md:block h-[600px] w-full relative grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholder for now - normally Image component */}
                    <div className="w-full h-full bg-neutral-900 overflow-hidden relative group">
                        {/* Simulated Image */}
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470')] bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-4 left-4 text-neon font-bebas text-xl">STRENGTH</div>
                    </div>
                </motion.div>

                {/* Center Text */}
                <motion.div
                    style={{ opacity }}
                    className="text-center md:col-span-1 space-y-6"
                >
                    <h2 className="text-6xl md:text-8xl font-bebas text-white leading-none">
                        MAKE YOUR <br />
                        <span className="text-neon text-stroke-neon">BODY SHAPE</span>
                    </h2>
                    <p className="text-gray-400 font-montserrat text-sm md:text-base tracking-wider">
                        TRAIN SMARTER. GET STRONGER. <br /> LIVE BETTER.
                    </p>
                    <button className="px-8 py-3 border border-neon text-neon font-bebas tracking-widest hover:bg-neon hover:text-black transition-all shadow-[0_0_20px_rgba(163,255,18,0.2)] hover:shadow-[0_0_40px_rgba(163,255,18,0.5)]">
                        EXPLORE PROGRAMS
                    </button>
                </motion.div>

                {/* Right Athlete */}
                <motion.div style={{ y: yRight }} className="hidden md:block h-[600px] w-full relative grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="w-full h-full bg-neutral-900 overflow-hidden relative group">
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469')] bg-cover bg-center opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute bottom-4 right-4 text-neon font-bebas text-xl">ENDURANCE</div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
