'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
    {
        year: "2018",
        title: "The Genesis",
        description: "Eckho Systems was founded on a single premise: engineering should be as beautiful as it is functional."
    },
    {
        year: "2020",
        title: "Global Scale",
        description: "Expanded to 3 continents, delivering high-performance platforms for Fortune 500 innovators."
    },
    {
        year: "2023",
        title: "AI First",
        description: "Pioneering human-centric AI integrations that enhance rather than replace the human experience."
    },
    {
        year: "2026",
        title: "The Extraordinary",
        description: "Redefining the boutique tech landscape with technical authority and premium design DNA."
    }
];

export default function Narrative() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section ref={containerRef} className="relative w-full max-w-4xl mx-auto py-48 px-6">
            {/* The Vertical Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-white/10">
                <motion.div
                    style={{ height }}
                    className="w-full bg-gradient-to-b from-eckho-electric to-eckho-violet origin-top"
                />
            </div>

            <div className="space-y-48">
                {milestones.map((m, i) => (
                    <div key={i} className={`flex items-center w-full ${i % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                        <div className={`w-[45%] ${i % 2 === 0 ? 'text-left pl-12' : 'text-right pr-12'}`}>
                            <motion.div
                                initial={{ opacity: 0, x: i % 2 === 0 ? 20 : -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                            >
                                <span className="text-eckho-electric font-black text-2xl mb-2 block">{m.year}</span>
                                <h3 className="text-3xl font-bold mb-4">{m.title}</h3>
                                <p className="text-white/50 leading-relaxed">{m.description}</p>
                            </motion.div>
                        </div>
                        <div className="w-[10%] flex justify-center relative z-10">
                            <motion.div
                                whileInView={{ scale: [0, 1.5, 1], opacity: 1 }}
                                initial={{ opacity: 0 }}
                                viewport={{ once: true }}
                                className="w-4 h-4 rounded-full bg-eckho-electric shadow-[0_0_20px_rgba(0,240,255,0.8)]"
                            />
                        </div>
                        <div className="w-[45%]" />
                    </div>
                ))}
            </div>
        </section>
    );
}
