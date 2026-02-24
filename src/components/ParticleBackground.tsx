"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    alpha: number;
    size: number;
    life: number;
    maxLife: number;
}

export default function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const particles: Particle[] = [];
        const NUM = 40;

        const spawn = (): Particle => ({
            x: Math.random() * canvas.width,
            y: canvas.height + 10,
            vx: (Math.random() - 0.5) * 0.5,
            vy: -(Math.random() * 0.6 + 0.3),
            alpha: 0,
            size: Math.random() * 1.5 + 0.5,
            life: 0,
            maxLife: Math.random() * 300 + 200,
        });

        for (let i = 0; i < NUM; i++) {
            const p = spawn();
            p.y = Math.random() * canvas.height;
            p.life = Math.random() * p.maxLife;
            particles.push(p);
        }

        let animId: number;
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.life++;
                p.x += p.vx;
                p.y += p.vy;

                const t = p.life / p.maxLife;
                p.alpha = t < 0.1 ? t * 10 : t > 0.8 ? (1 - t) * 5 : 1;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,69,0,${p.alpha * 0.35})`;
                ctx.fill();

                if (p.life >= p.maxLife) {
                    particles[i] = spawn();
                }
            }

            animId = requestAnimationFrame(draw);
        };

        draw();
        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0 opacity-60"
            style={{ mixBlendMode: "screen" }}
        />
    );
}
