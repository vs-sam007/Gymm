"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
    variant?: "default" | "premium" | "float";
    tiltIntensity?: number;
    glowOnHover?: boolean;
}

export default function GlassCard({
    children,
    className,
    variant = "default",
    tiltIntensity = 8,
    glowOnHover = true,
}: GlassCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const glassClass = {
        default: "glass",
        premium: "glass-premium",
        float: "glass-float",
    }[variant];

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = cardRef.current;
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const x = e.clientX - rect.left - cx;
        const y = e.clientY - rect.top - cy;
        setTilt({ x: -(y / cy) * tiltIntensity, y: (x / cx) * tiltIntensity });
        setGlowPos({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        });
    };

    const handleMouseLeave = () => {
        setTilt({ x: 0, y: 0 });
        setIsHovered(false);
    };

    return (
        <motion.div
            ref={cardRef}
            className={cn("rounded-2xl relative overflow-hidden", glassClass, className)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={() => setIsHovered(true)}
            animate={{ rotateX: tilt.x, rotateY: tilt.y }}
            transition={{ type: "spring", stiffness: 300, damping: 30, mass: 0.5 }}
            style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
        >
            {glowOnHover && (
                <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-500 z-0"
                    style={{
                        opacity: isHovered ? 1 : 0,
                        background: `radial-gradient(600px circle at ${glowPos.x}% ${glowPos.y}%, rgba(255,69,0,0.06), transparent 40%)`,
                    }}
                />
            )}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
