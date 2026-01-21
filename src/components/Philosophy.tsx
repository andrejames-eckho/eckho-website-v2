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
        <section className="w-full max-w-7xl mx-auto py-32 px-6">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-black mb-4">Our Technical DNA</h2>
                <p className="text-white/50">The pillars that define our 'Boutique Tech' approach.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {values.map((v, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="glass-card p-10 rounded-[2rem] text-center group hover:border-eckho-electric/30 transition-all duration-500"
                    >
                        <div className="w-16 h-16 rounded-full bg-eckho-electric/10 flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                            <v.icon className="w-8 h-8 text-eckho-electric" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                        <p className="text-white/50 leading-relaxed">{v.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
