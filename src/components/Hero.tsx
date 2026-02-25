"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const { scrollY } = useScroll();
    const yRotate = useTransform(scrollY, [0, 800], [0, -10]);

    useEffect(() => {
        const container = containerRef.current;
        const image = imageRef.current;
        const content = contentRef.current;
        if (!container || !image || !content) return;

        // Cinematic Horizontal Peel Reveal
        const ctx = gsap.context(() => {
            gsap.fromTo(".char",
                { y: "110%", rotationX: -15, opacity: 0 },
                {
                    y: "0%",
                    rotationX: 0,
                    opacity: 1,
                    duration: 1.4,
                    stagger: 0.02,
                    ease: "power4.out",
                    delay: 0.5
                }
            );

            // Flicker entry sequence
            const flickerTl = gsap.timeline({ delay: 0.5 });
            flickerTl
                .to(image, { filter: "brightness(0.1)", duration: 0.05 })
                .to(image, { filter: "brightness(0.6)", duration: 0.05 })
                .to(image, { filter: "brightness(0.2)", duration: 0.1 })
                .to(image, { filter: "brightness(0.9)", duration: 0.05 })
                .to(image, { filter: "brightness(0.3)", duration: 0.15 })
                .to(image, { filter: "brightness(1) blur(0px)", duration: 1.5, ease: "power2.out" });

            gsap.fromTo(image,
                { scale: 1.15 },
                { scale: 1, duration: 2.5, ease: "power2.out" }
            );

            // Scale-Sync Scroll Effect
            gsap.to(image, {
                scale: 0.85,
                borderRadius: "40px",
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                }
            });

            gsap.to(content, {
                opacity: 0,
                y: -100,
                scale: 0.95,
                scrollTrigger: {
                    trigger: container,
                    start: "top top",
                    end: "60% top",
                    scrub: true,
                }
            });
        }, container);

        return () => ctx.revert();
    }, []);

    const headline = "FORGING ELITE LEGACIES.";
    const titleArr = headline.split("");

    return (
        <section
            ref={containerRef}
            className="relative h-[120vh] bg-background overflow-visible"
        >
            <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
                {/* Background Layer with subtle blob */}
                <div className="bg-blob -top-1/4 -left-1/4 opacity-20" />
                <div
                    ref={imageRef}
                    className="absolute inset-0 z-0 origin-center gpu-accelerate"
                >
                    <div className="absolute inset-0 bg-black/40 z-[1]" />
                    <div className="absolute inset-0 overlay-cinematic z-[2]" />
                    <img
                        src="/images/hero-gym-dark.jpg"
                        alt="Iron Pulse Elite"
                        className="w-full h-full object-cover animate-slow-zoom"
                    />
                </div>

                {/* Floating Depth Elements */}
                <motion.div
                    className="absolute inset-0 pointer-events-none z-[3]"
                    style={{ rotateX: yRotate }}
                >
                    <div className="absolute top-[15%] left-[10%] w-[30vw] h-[1px] bg-gradient-to-r from-gold/40 to-transparent" />
                    <div className="absolute bottom-[25%] right-[10%] w-[40vw] h-[1px] bg-gradient-to-l from-gold/30 to-transparent" />
                </motion.div>

                {/* Central Content */}
                <div
                    ref={contentRef}
                    className="relative z-10 w-full px-6 flex flex-col items-center justify-center text-center"
                >
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2 }}
                    >
                        <span className="section-label">Institutional Class Fitness</span>
                        <div className="divider-gold mx-auto mt-2" />
                    </motion.div>

                    <h1 className="heading-display text-[12vw] xs:text-[13vw] md:text-[11vw] text-white tracking-tighter flex flex-wrap justify-center md:overflow-hidden md:h-[1.1em] leading-[1] md:leading-[0.88] mask-text">
                        {headline.split(" ").map((word, wordIdx) => (
                            <span key={wordIdx} className="inline-block whitespace-nowrap mx-[0.15em]">
                                {word.split("").map((char, charIdx) => (
                                    <span key={`${wordIdx}-${charIdx}`} className="char inline-block whitespace-pre">
                                        {char}
                                    </span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    <div className="max-w-3xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-baseline">
                        <motion.p
                            className="text-sm md:text-base font-inter tracking-[0.15em] text-foreground/70 uppercase text-balance leading-loose md:text-left"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.5, delay: 1.2 }}
                        >
                            We provide more than training. We provide a sanctuary for those who demand the pinnacle of physical performance.
                        </motion.p>

                        <motion.div
                            className="flex flex-col gap-4 md:items-end"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.2, delay: 1.4 }}
                        >
                            <a href="#pricing" className="btn-gold px-12 py-5 rounded-sm text-sm">
                                START JOURNEY
                            </a>
                            <span className="text-[11px] font-inter tracking-widest text-gold/70 uppercase">
                                Mumbai · London · New York
                            </span>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom Decor */}
                <div className="absolute bottom-12 left-12 z-20 hidden md:block">
                    <div className="flex items-center gap-4 text-white/30">
                        <div className="w-12 h-[1px] bg-current" />
                        <span className="text-[12px] tracking-[0.35em] uppercase font-inter">Institutional Authority</span>
                    </div>
                </div>

                <div className="absolute bottom-12 right-12 z-20">
                    <motion.div
                        className="w-10 h-16 border border-white/10 rounded-full flex justify-center p-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                    >
                        <motion.div
                            className="w-1 h-2 bg-gold border rounded-full"
                            animate={{ y: [0, 10, 0], opacity: [0.3, 1, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                    </motion.div>
                </div>
            </div>

            <style jsx>{`
                .mask-text {
                    perspective: 1000px;
                }
            `}</style>
        </section>
    );
}
