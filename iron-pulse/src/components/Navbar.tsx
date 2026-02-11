"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
    const { scrollY } = useScroll();
    const [scrolled, setScrolled] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 50);
    });

    return (
        <motion.nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
                scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <div className="text-2xl font-bebas tracking-wider text-white">
                IRON <span className="text-neon">PULSE</span>
            </div>

            <div className="hidden md:flex items-center gap-8 font-bebas tracking-wide text-lg text-white/80">
                <Link href="#" className="hover:text-neon transition-colors">Programs</Link>
                <Link href="#" className="hover:text-neon transition-colors">Coaches</Link>
                <Link href="#" className="hover:text-neon transition-colors">Membership</Link>
            </div>

            <button className="px-6 py-2 bg-neon text-black font-bebas tracking-wide rounded-sm hover:bg-neon/80 transition-colors">
                JOIN NOW
            </button>
        </motion.nav>
    );
}
