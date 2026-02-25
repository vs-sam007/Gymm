"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ScrollStoryProps {
    image: string;
    title: string;
    subtitle: string;
    accent?: string;
}

export default function ScrollStory({
    image,
    title,
    subtitle,
    accent = "INSTITUTIONAL PERFORMANCE",
}: ScrollStoryProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const mediaRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"]
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const opacityText = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [1, 1, 0.5, 0]);

    useEffect(() => {
        const section = sectionRef.current;
        const wrapper = wrapperRef.current;
        const media = mediaRef.current;
        if (!section || !wrapper || !media) return;

        const ctx = gsap.context(() => {
            // Main Wrapper Reveal (Curving corner + Scaling)
            gsap.fromTo(wrapper,
                { scale: 1, borderRadius: "0px", opacity: 1 },
                {
                    scale: 0.92,
                    borderRadius: "24px",
                    opacity: 0.4,
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: "bottom top",
                        scrub: 1,
                    }
                }
            );

            // diagonal reveal mask for the image itself
            gsap.fromTo(media,
                { clipPath: "inset(0 0 0 100%)", scale: 1.2 },
                {
                    clipPath: "inset(0 0 0 0%)",
                    scale: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: "top 80%",
                        end: "top 20%",
                        scrub: 1.5,
                    }
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="h-[130vh] relative z-[5]"
        >
            <motion.div
                ref={wrapperRef}
                className="sticky top-0 h-screen w-full overflow-hidden gpu-accelerate"
                style={{ willChange: "transform, opacity, border-radius" }}
            >
                {/* Image Media Container */}
                <div
                    ref={mediaRef}
                    className="absolute inset-0 z-0 origin-center overflow-hidden"
                >
                    <div className="absolute inset-0 bg-black/40 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30 z-10" />
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover grayscale-[30%] brightness-[0.8] transition-all duration-1000"
                    />
                </div>

                {/* Editorial Typography Content */}
                <div className="relative z-20 h-full flex items-center justify-center px-6">
                    <motion.div
                        ref={textRef}
                        className="max-w-6xl w-full flex flex-col md:flex-row items-end gap-12"
                        style={{ opacity: opacityText }}
                    >
                        <div className="flex-1 text-left">
                            <motion.div
                                className="flex items-center gap-3 mb-8"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="section-label">{accent}</span>
                                <div className="h-[1px] w-24 bg-gold/30" />
                            </motion.div>

                            <h2 className="text-6xl sm:text-7xl md:text-[10vw] font-bebas text-white leading-[1.1] tracking-tighter mb-8 italic italic-luxury pr-10">
                                {title}
                            </h2>
                        </div>

                        <div className="md:w-1/3 text-left">
                            <motion.div
                                className="glass-premium p-10 rounded-sm mb-8"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <p className="text-sm md:text-base font-inter tracking-wide text-white leading-relaxed uppercase">
                                    {subtitle}
                                </p>
                            </motion.div>

                            <div className="flex items-center gap-4 group cursor-pointer overflow-hidden">
                                <span className="text-xs font-bold tracking-[0.3em] text-gold uppercase">Deep Dive Inside</span>
                                <div className="h-[1px] w-full bg-gold/30 group-hover:bg-gold transition-all duration-700" />
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Floating Parallax Layers */}
                <motion.div
                    className="absolute inset-0 z-[15] pointer-events-none"
                    style={{ y: yParallax }}
                >
                    <div className="absolute top-[20%] right-[15%] text-[15rem] leading-none font-bebas text-white/[0.04] select-none uppercase">
                        {accent.split(" ")[0]}
                    </div>
                </motion.div>
            </motion.div>

            <style jsx>{`
                .italic-luxury {
                    font-family: var(--font-playfair);
                    font-weight: 300;
                    font-style: italic;
                }
            `}</style>
        </section>
    );
}
