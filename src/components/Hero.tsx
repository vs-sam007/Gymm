"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Zoom */}
            <motion.div
                className="absolute inset-0 z-0"
                style={{ scale }}
            >
                <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20 z-10" /> {/* Gradient */}
                {/* Fallback gradient until image is generated */}
                <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black select-none">
                    <img
                        src="/images/hero-gym-dark.jpg"
                        alt="Iron Pulse Gym"
                        className="w-full h-full object-cover opacity-80"
                        onError={(e) => {
                            e.currentTarget.style.display = 'none';
                        }}
                    />
                </div>
            </motion.div>

            {/* Content */}
            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
                <motion.div style={{ y: textY, opacity }}>
                    <motion.h1
                        className="text-[15vw] md:text-[12vw] leading-[0.85] font-bebas text-white tracking-tighter"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        IRON <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-emerald-500">PULSE</span>
                    </motion.h1>

                    <motion.p
                        className="mt-6 text-xl md:text-3xl text-white/80 font-medium tracking-widest uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                    >
                        Forge Your Legacy
                    </motion.p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
            >
                <span className="text-xs text-white/50 tracking-widest uppercase">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-neon to-transparent" />
            </motion.div>
        </section>
    );
}
