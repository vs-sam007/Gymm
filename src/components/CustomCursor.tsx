"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const dotRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const dot = dotRef.current;
        const ring = ringRef.current;
        if (!dot || !ring) return;

        let mouseX = 0;
        let mouseY = 0;
        let ringX = 0;
        let ringY = 0;

        const onMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            gsap.to(dot, { x: mouseX, y: mouseY, duration: 0.05, ease: "none" });
        };

        const onEnterLink = () => {
            dot.classList.add("expanded");
            ring.classList.add("expanded");
        };
        const onLeaveLink = () => {
            dot.classList.remove("expanded");
            ring.classList.remove("expanded");
        };

        window.addEventListener("mousemove", onMove);

        const interactiveEls = document.querySelectorAll("a, button, [data-cursor-expand]");
        interactiveEls.forEach((el) => {
            el.addEventListener("mouseenter", onEnterLink);
            el.addEventListener("mouseleave", onLeaveLink);
        });

        // Ring follows with lag
        let animId: number;
        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.12;
            ringY += (mouseY - ringY) * 0.12;
            gsap.set(ring, { x: ringX, y: ringY });
            animId = requestAnimationFrame(animateRing);
        };
        animateRing();

        return () => {
            window.removeEventListener("mousemove", onMove);
            interactiveEls.forEach((el) => {
                el.removeEventListener("mouseenter", onEnterLink);
                el.removeEventListener("mouseleave", onLeaveLink);
            });
            cancelAnimationFrame(animId);
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" />
            <div ref={ringRef} className="cursor-ring" />
        </>
    );
}
