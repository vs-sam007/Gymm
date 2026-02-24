"use client";

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from "react";

export interface ChalkBlastHandle {
    blast: (x?: number, y?: number) => void;
}

const ChalkBlast = forwardRef<ChalkBlastHandle>((props, ref) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particles = useRef<any[]>([]);
    const lastScrollY = useRef(0);
    const scrollVelocity = useRef(0);

    useImperativeHandle(ref, () => ({
        blast(x?: number, y?: number) {
            createParticles(x ?? window.innerWidth / 2, y ?? window.innerHeight / 2, 60);
        }
    }));

    const createParticles = (x: number, y: number, countOverride?: number) => {
        const count = countOverride ?? (20 + Math.random() * 30);
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
            const force = 1 + Math.random() * 6;
            particles.current.push({
                x,
                y,
                vx: Math.cos(angle) * force,
                vy: Math.sin(angle) * force - 1.5, // Subtle upward bias
                size: 1 + Math.random() * 6,
                alpha: 0.4 + Math.random() * 0.4,
                life: 1.0,
                decay: 0.005 + Math.random() * 0.01, // 2x-3x longer life than before
                friction: 0.98, // Increased friction for "air resistance" feel
                gravity: 0.04,  // Lower gravity for "floating dust" feel
            });
        }
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const render = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = particles.current.length - 1; i >= 0; i--) {
                const p = particles.current[i];
                p.x += p.vx;
                p.y += p.vy;
                p.vx *= p.friction;
                p.vy *= p.friction;
                p.vy += p.gravity;
                p.life -= p.decay;

                if (p.life <= 0) {
                    particles.current.splice(i, 1);
                    continue;
                }

                ctx.save();
                // Particles fade out and grow/dissipate
                ctx.globalAlpha = p.alpha * p.life;
                ctx.fillStyle = "#ffffff";

                ctx.beginPath();
                // As it dies, it "dissipates" (grows slightly but gets more transparent)
                const currentSize = p.size * (1 + (1 - p.life) * 0.5);
                ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
                ctx.fill();

                if (p.life > 0.5) {
                    ctx.shadowBlur = 15;
                    ctx.shadowColor = "rgba(255,255,255,0.4)";
                }
                ctx.restore();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const diff = Math.abs(currentScrollY - lastScrollY.current);
            scrollVelocity.current = Math.min(diff, 100);
            lastScrollY.current = currentScrollY;

            // Sensitivity threshold significantly lowered (from 50 to 5)
            // This ensures even slow scrolls trigger the "chalk" feel
            if (diff > 5 && particles.current.length < 400) {
                const spawnCount = diff > 30 ? 15 : 4;
                for (let k = 0; k < (diff > 50 ? 2 : 1); k++) {
                    createParticles(
                        Math.random() * window.innerWidth,
                        Math.random() * window.innerHeight,
                        spawnCount
                    );
                }
            }
        };

        window.addEventListener("resize", resize);
        window.addEventListener("scroll", handleScroll, { passive: true });
        resize();
        render();

        return () => {
            window.removeEventListener("resize", resize);
            window.removeEventListener("scroll", handleScroll);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[100] opacity-50"
            style={{ mixBlendMode: 'screen', filter: 'blur(1px)' }}
        />
    );
});

ChalkBlast.displayName = "ChalkBlast";

export default ChalkBlast;
