"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const schedule: Record<string, { time: string; name: string; coach: string; duration: string; type: string }[]> = {
    Mon: [
        { time: "06:30", name: "Metabolic HIIT", coach: "Meera I.", duration: "45m", type: "Kinetic" },
        { time: "09:00", name: "Strength Architecture", coach: "Arjun N.", duration: "60m", type: "Power" },
        { time: "18:00", name: "Institutional Lift", coach: "Vikram K.", duration: "75m", type: "Power" },
        { time: "19:30", name: "Recovery Flow", coach: "Meera I.", duration: "45m", type: "Mobility" },
    ],
    Tue: [
        { time: "07:00", name: "Neuro-Conditioning", coach: "Arjun N.", duration: "45m", type: "Kinetic" },
        { time: "10:00", name: "Olympic Biomechanics", coach: "Vikram K.", duration: "90m", type: "Power" },
        { time: "17:30", name: "Endocrine Blast", coach: "Meera I.", duration: "60m", type: "Kinetic" },
    ],
    Wed: [
        { time: "06:30", name: "Structural Integrity", coach: "Arjun N.", duration: "60m", type: "Power" },
        { time: "11:00", name: "Mobility Lab", coach: "Meera I.", duration: "45m", type: "Mobility" },
        { time: "18:00", name: "Hypertrophy Session", coach: "Vikram K.", duration: "75m", type: "Power" },
    ],
    Thu: [
        { time: "07:00", name: "Explosive Dynamics", coach: "Vikram K.", duration: "45m", type: "Power" },
        { time: "19:00", name: "Regenerative Yoga", coach: "Meera I.", duration: "50m", type: "Mobility" },
    ],
    Fri: [
        { time: "06:30", name: "Full Cycle Kinetic", coach: "Meera I.", duration: "60m", type: "Kinetic" },
        { time: "10:00", name: "Compound Mastery", coach: "Arjun N.", duration: "90m", type: "Power" },
        { time: "18:30", name: "Friday Syndicate", coach: "The Faculty", duration: "60m", type: "Power" },
    ],
    Sat: [
        { time: "08:00", name: "The Lab Marathon", coach: "Faculty Lead", duration: "120m", type: "Power" },
        { time: "11:00", name: "Mobility Intensive", coach: "Meera I.", duration: "75m", type: "Mobility" },
    ],
    Sun: [
        { time: "09:00", name: "Quietism & Flow", coach: "Meera I.", duration: "90m", type: "Mobility" },
        { time: "11:00", name: "Family Syndicate", coach: "The Faculty", duration: "60m", type: "Kinetic" },
    ],
};

const typeColors: Record<string, string> = {
    Power: "text-gold bg-gold/5 border-gold/10",
    Kinetic: "text-white/80 bg-white/5 border-white/5",
    Mobility: "text-white/40 bg-white/[0.02] border-white/5",
};

export default function ClassSchedule() {
    const [activeDay, setActiveDay] = useState("Mon");

    return (
        <section id="schedule" className="section-padding bg-background-2 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
                    <div className="max-w-xl">
                        <motion.div
                            className="flex items-center gap-3 mb-6"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <span className="section-label">THE COMPENDIUM</span>
                            <div className="divider-gold" />
                        </motion.div>
                        <motion.h2
                            className="text-5xl md:text-8xl font-bebas text-white leading-[1.1] tracking-tighter pr-10"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            INSTITUTIONAL <br />
                            <span className="text-gold italic font-light inline-block pr-[0.15em]" style={{ fontFamily: 'var(--font-playfair)' }}>Timetable</span>
                        </motion.h2>
                    </div>

                    <div className="flex flex-wrap gap-2 glass p-1.5 rounded-sm">
                        {days.map((day) => (
                            <button
                                key={day}
                                onClick={() => setActiveDay(day)}
                                className={`px-4 py-2 text-xs font-bold tracking-[0.2em] transition-all rounded-sm ${activeDay === day
                                    ? "btn-gold text-black shadow-lg"
                                    : "text-foreground/40 hover:text-foreground"
                                    }`}
                            >
                                {day.toUpperCase()}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="max-w-5xl mx-auto">
                    <div className="border border-white/10 bg-white/[0.01]">
                        {/* Header Row */}
                        <div className="hidden md:grid grid-cols-5 gap-4 p-8 border-b border-white/5 text-[11px] font-bold tracking-[0.3em] text-white/30 uppercase">
                            <div>Time (24H)</div>
                            <div className="col-span-2">Protocol Name</div>
                            <div>Practitioner</div>
                            <div className="text-right">Classification</div>
                        </div>

                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeDay}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5 }}
                                className="divide-y divide-white/5"
                            >
                                {schedule[activeDay]?.map((cls, i) => (
                                    <div
                                        key={`${activeDay}-${i}`}
                                        className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-4 p-8 items-center hover:bg-white/[0.02] transition-colors group cursor-default"
                                    >
                                        <div className="text-2xl md:text-xl font-bebas text-gold/40 group-hover:text-gold transition-colors">{cls.time}</div>
                                        <div className="col-span-2">
                                            <p className="text-lg md:text-base font-bold text-white tracking-widest uppercase mb-1">{cls.name}</p>
                                            <p className="md:hidden text-[11px] text-white/40 tracking-[0.2em] uppercase">{cls.coach} · {cls.duration}</p>
                                        </div>
                                        <div className="hidden md:block text-[11px] text-white/50 tracking-[0.15em] uppercase">{cls.coach}</div>
                                        <div className="flex md:justify-end">
                                            <span className={`text-[10px] font-bold uppercase tracking-[0.25em] px-3 py-1.5 rounded-sm border ${typeColors[cls.type]}`}>
                                                {cls.type}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="mt-8 flex justify-between items-center px-4">
                        <span className="text-[11px] font-inter tracking-[0.2em] text-white/20 uppercase">v2.1 Master Schedule</span>
                        <div className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                            <span className="text-[11px] font-inter tracking-[0.2em] text-gold/80 uppercase">Registration Required via App</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
