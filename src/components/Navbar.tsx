"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "Story", href: "#story" },
    { label: "Programs", href: "#programs" },
    { label: "Membership", href: "#pricing" },
    { label: "Coaches", href: "#coaches" },
];

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <>
            <motion.nav
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-700",
                    scrolled
                        ? "py-4 bg-background/90 backdrop-blur-2xl shadow-2xl"
                        : "py-6 md:py-8 bg-transparent"
                )}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative w-10 h-10 overflow-hidden">
                            <motion.div
                                className="absolute inset-0 bg-gold-gradient rounded-sm"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center font-bebas text-black text-xl font-bold">
                                IP
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl font-bebas tracking-[0.2em] text-foreground leading-[1.1]">
                                IRON <span className="text-gold">PULSE</span>
                            </span>
                            <span className="text-[10px] font-inter tracking-[0.2em] md:tracking-[0.4em] text-foreground-muted uppercase mt-0.5 whitespace-nowrap">
                                Elite Fitness Hub
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-12">
                        {navLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                className="text-[12px] font-semibold text-foreground/60 hover:text-gold tracking-[0.25em] uppercase transition-all duration-500 relative group"
                            >
                                {link.label}
                                <span className="absolute -bottom-1.5 left-0 w-0 h-[1px] bg-gold/50 group-hover:w-full transition-all duration-500" />
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="#contact"
                            className="text-[12px] font-semibold text-foreground/80 hover:text-gold tracking-[0.2em] uppercase transition-colors"
                        >
                            Guest Pass
                        </Link>
                        <Link
                            href="#pricing"
                            className="px-8 py-3 rounded-sm btn-gold text-sm tracking-[0.15em]"
                        >
                            ENROLL NOW
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-foreground hover:text-gold transition-colors"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Sidebar */}
            <motion.div
                className={cn(
                    "fixed inset-0 z-[60] md:hidden",
                    mobileOpen ? "pointer-events-auto" : "pointer-events-none"
                )}
                initial={false}
            >
                <motion.div
                    className="absolute inset-0 bg-black/95 backdrop-blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: mobileOpen ? 1 : 0 }}
                    transition={{ duration: 0.8 }}
                    onClick={() => setMobileOpen(false)}
                />
                <motion.div
                    className="absolute top-0 right-0 w-full xs:w-[350px] h-full bg-background-2 p-10 flex flex-col justify-center overflow-y-auto"
                    initial={{ x: "100%" }}
                    animate={{ x: mobileOpen ? 0 : "100%" }}
                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                >
                    <div className="space-y-8 my-auto">
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
                                transition={{ delay: mobileOpen ? 0.2 + i * 0.1 : 0, duration: 0.6 }}
                            >
                                <Link
                                    href={link.href}
                                    className="text-3xl xs:text-4xl sm:text-5xl font-bebas text-foreground hover:text-gold tracking-wider transition-colors"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : 20 }}
                            transition={{ delay: 0.6 }}
                            className="pt-10 flex flex-col gap-4"
                        >
                            <Link
                                href="#pricing"
                                className="block text-center py-4 rounded-sm btn-gold text-sm tracking-widest uppercase"
                                onClick={() => setMobileOpen(false)}
                            >
                                BECOME A MEMBER
                            </Link>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
}
