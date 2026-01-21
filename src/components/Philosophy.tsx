'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Users } from 'lucide-react';

const values = [
    {
        title: "Radical Transparency",
        description: "Our 'Glass-Box' approach ensures you have zero-latency visibility into every sprint, commit, and design decision.",
        icon: Shield
    },
    {
        title: "Engineering Precision",
        description: "We don't just solve problems; we architect systems that are future-proof, scalable, and mathematically sound.",
        icon: Target
    },
    {
        title: "Human-Centricity",
        description: "At the end of every line of code is a human. We build for the user experience first, the machine second.",
        icon: Users
    }
];

export default function Philosophy() {
    return (
        <section className="w-full max-w-7xl mx-auto py-48 px-6">
            <div className="mb-24">
                <h2 className="text-5xl font-black mb-6 tracking-tighter">Our Technical DNA</h2>
                <p className="text-white/40 text-lg max-w-xl">The pillars that define our 'Boutique Tech' approach.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {values.map((v, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="glass-card !p-12 rounded-[2.5rem] group cursor-pointer relative overflow-hidden flex flex-col items-start"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-eckho-electric/5 blur-[120px] group-hover:bg-eckho-electric/20 transition-all duration-700" />

                        <div className="h-full flex flex-col items-start relative z-10 w-full">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 text-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:bg-eckho-electric group-hover:text-black shadow-[0_0_30px_rgba(255,255,255,0.05)] group-hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]">
                                <v.icon className="w-8 h-8" />
                            </div>

                            <div className="mt-16">
                                <h3 className="text-4xl font-black mb-4 transition-colors tracking-tighter text-white group-hover:text-eckho-electric">
                                    {v.title}
                                </h3>
                                <p className="text-white/40 text-lg leading-relaxed max-w-[380px]">
                                    {v.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
