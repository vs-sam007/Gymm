"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, HeartPulse, Zap, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const programs = [
    {
        id: "strength",
        title: "STRENGTH TRAINING",
        description: "Forge raw power with olympic lifting integration. Our facility gives you the tools to break limits.",
        image: "/images/strength-male-dumbbells.jpg",
        icon: <Dumbbell className="w-8 h-8 text-neon" />,
        align: "left"
    },
    {
        id: "cardio",
        title: "CARDIO ENDURANCE",
        description: "High-intensity intervals to boost your stamina. Run into the future with state-of-the-art systems.",
        image: "/images/cardio-female-treadmill.jpg",
        icon: <HeartPulse className="w-8 h-8 text-neon" />,
        align: "right"
    },
    {
        id: "pt",
        title: "PERSONAL COACHING",
        description: "1-on-1 guidance from elite athletes who have walked the path. Precision training for your goals.",
        image: "/images/personal-trainer-helping.jpg",
        icon: <Users className="w-8 h-8 text-neon" />,
        align: "left"
    },
    {
        id: "hiit",
        title: "HIIT & METABOLIC",
        description: "Scientifically designed metabolic conditioning to shred fat and build functional resilience.",
        image: "/images/hiit-battle-ropes.jpg",
        icon: <Zap className="w-8 h-8 text-neon" />,
        align: "right"
    },
];

function ProgramSection({ program, index }: { program: typeof programs[0], index: number }) {
    const isLeft = program.align === "left";

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
            {/* Background Texture/Gradient */}
            <div className="absolute inset-0 bg-black -z-20" />
            <div className={`absolute top-0 ${isLeft ? 'right-0' : 'left-0'} w-1/2 h-full bg-neon/5 blur-[150px] -z-10`} />

            <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Image Section */}
                <motion.div
                    className={cn(
                        "relative aspect-[4/5] rounded-lg overflow-hidden border border-white/10",
                        isLeft ? "lg:order-1" : "lg:order-2"
                    )}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    {/* Placeholder for Image */}
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white/20">
                        <img
                            src={program.image}
                            alt={program.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                            }}
                        />
                    </div>
                </motion.div>

                {/* Text Section */}
                <motion.div
                    className={cn(
                        "space-y-8 flex flex-col justify-center",
                        isLeft ? "lg:order-2 lg:pl-12" : "lg:order-1 lg:pr-12"
                    )}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="flex items-center gap-4">
                        <div className="p-3 rounded-full bg-white/5 border border-white/10">
                            {program.icon}
                        </div>
                        <span className="text-neon tracking-widest font-bebas text-xl">0{index + 1}</span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-bebas text-white leading-[0.9]">
                        {program.title}
                    </h2>

                    <p className="text-lg text-white/60 font-montserrat leading-relaxed max-w-md">
                        {program.description}
                    </p>

                    <button className="w-fit px-8 py-4 bg-white text-black font-bebas text-xl tracking-wide hover:bg-neon hover:text-black transition-colors duration-300">
                        EXPLORE PROGRAM
                    </button>
                </motion.div>
            </div>
        </div>
    );
}

export default function Services() {
    return (
        <section className="bg-black relative">
            {programs.map((program, index) => (
                <ProgramSection key={program.id} program={program} index={index} />
            ))}
        </section>
    );
}
