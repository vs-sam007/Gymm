"use client";

import { motion } from "framer-motion";

const trainers = [
    { id: 1, name: "ALEX THORNE", specialty: "Elite Strength", image: "/images/trainer-1.jpg" },
    { id: 2, name: "SARAH VANCE", specialty: "High Performance", image: "/images/trainer-2.jpg" },
    { id: 3, name: "MARCUS STEEL", specialty: "Combat Conditioning", image: "/images/trainer-3.jpg" },
    { id: 4, name: "ELENA CROSS", specialty: "Mobility & Flow", image: "/images/trainer-4.jpg" },
];

export default function Trainers() {
    return (
        <section className="bg-black py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-5xl md:text-7xl font-bebas text-white text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    ELITE <span className="text-neon">COACHING</span>
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trainers.map((trainer, index) => (
                        <motion.div
                            key={trainer.id}
                            className="group relative cursor-pointer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="aspect-[3/4] overflow-hidden rounded-lg border border-white/5 relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-neon/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                                {/* Placeholder Image */}
                                <div className="w-full h-full bg-gray-900 flex items-center justify-center text-white/20">
                                    <img
                                        src={trainer.image}
                                        alt={trainer.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-3xl font-bebas text-white">{trainer.name}</h3>
                                <p className="text-neon font-montserrat text-sm tracking-widest uppercase">{trainer.specialty}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
