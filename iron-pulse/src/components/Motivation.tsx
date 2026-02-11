"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface MotivationProps {
    text: string;
    image: string;
    align?: "left" | "right" | "center";
}

export default function Motivation({ text, image, align = "center" }: MotivationProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [-50, 50]);

    return (
        <section ref={containerRef} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
            {/* Parallax Background */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ y }}
            >
                <div className="absolute inset-0 bg-black/60 z-10" />
                {/* Placeholder Image */}
                <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white/20">
                    <img
                        src={image}
                        alt="Motivation"
                        className="w-full h-full object-cover opacity-80"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                </div>
            </motion.div>

            <div className="relative z-20 container mx-auto px-6">
                <motion.h2
                    className="text-[10vw] leading-none font-bebas text-white text-center opacity-90 mix-blend-overlay"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    {text}
                </motion.h2>
            </div>
        </section>
    );
}
