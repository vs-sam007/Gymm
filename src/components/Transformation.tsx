"use client";

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

const words = [
    { text: "WEAK", color: "text-white/20" },
    { text: "STRONG", color: "text-white" },
    { text: "ORDINARY", color: "text-white/20" },
    { text: "UNSTOPPABLE", color: "text-neon" },
];

export default function Transformation() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const [activeIndex, setActiveIndex] = useState(0);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const index = Math.min(Math.floor(latest * words.length), words.length - 1);
        setActiveIndex(index);
    });

    return (
        <section ref={containerRef} className="h-[300vh] relative bg-black">
            <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
                {/* Abstract Background Animation */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon/10 rounded-full blur-[100px] animate-pulse" />
                </div>

                <div className="relative z-10 text-center">
                    {words.map((word, index) => (
                        <div key={index} className={cn(
                            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500",
                            index === activeIndex ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-50 blur-xl pointer-events-none"
                        )}>
                            <h2 className={cn("text-[15vw] font-bebas leading-none tracking-tighter", word.color)}>
                                {word.text}
                            </h2>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-10 left-0 right-0 text-center text-white/40 font-montserrat text-sm animate-bounce">
                    SCROLL TO EVOLVE
                </div>
            </div>
        </section>
    );
}
