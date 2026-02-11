"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const images = [
    "/images/gallery-1.jpg",
    "/images/gallery-2.jpg",
    "/images/gallery-3.jpg",
    "/images/gallery-4.jpg",
    "/images/gallery-5.jpg",
];

export default function Gallery() {
    return (
        <section className="bg-black py-0 border-y border-white/10 overflow-hidden relative">
            <div className="absolute inset-0 bg-neon/5 blur-[100px] pointer-events-none" />

            <div className="flex whitespace-nowrap overflow-hidden">
                <motion.div
                    className="flex gap-4 py-8"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                >
                    {[...images, ...images].map((src, index) => (
                        <div key={index} className="relative w-[400px] h-[250px] shrink-0 rounded-lg overflow-hidden border border-white/10 group">
                            {/* Placeholder */}
                            <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white/20">
                                <img
                                    src={src}
                                    alt="Gym Life"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                    }}
                                />
                            </div>
                            <div className="absolute inset-0 bg-neon/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
