'use client';

import { motion } from 'framer-motion';
import { Monitor, Smartphone, Cpu, Layers } from 'lucide-react';

const services = [
    {
        title: "Custom Platforms",
        description: "Enterprise-grade web ecosystems designed for scale and high performance.",
        icon: Monitor,
        size: "col-span-2 row-span-2",
        delay: 0.1
    },
    {
        title: "Mobile Ecosystems",
        description: "Boutique iOS and Android experiences that feel native and refined.",
        icon: Smartphone,
        size: "col-span-1 row-span-1",
        delay: 0.2
    },
    {
        title: "AI Integration",
        description: "Infusing intelligence into legacy workflows with modern LLM architectures.",
        icon: Cpu,
        size: "col-span-1 row-span-1",
        delay: 0.3
    },
    {
        title: "Legacy Refresh",
        description: "Modernizing technical debt into high-authority digital assets.",
        icon: Layers,
        size: "col-span-2 row-span-1",
        delay: 0.4
    }
];

export default function Services() {
    return (
        <section id="services" className="w-full max-w-7xl mx-auto py-48 px-6">
            <div className="mb-24">
                <h2 className="text-5xl font-black mb-6 tracking-tighter">Core Capabilities</h2>
                <p className="text-white/40 text-lg max-w-xl">We don't just build software. We engineer systems that define industries.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 auto-rows-[360px]">
                {services.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: service.delay }}
                        className={`${service.size} glass-card !p-12 rounded-[2.5rem] group cursor-pointer relative overflow-hidden flex flex-col`}
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-eckho-electric/5 blur-[120px] group-hover:bg-eckho-electric/20 transition-all duration-700" />

                        <div className="h-full flex flex-col items-start relative z-10">
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 ${i === 0 ? 'bg-eckho-electric text-black shadow-[0_0_30px_rgba(0,240,255,0.5)]' : 'bg-white/5 text-white group-hover:bg-eckho-electric group-hover:text-black'}`}>
                                <service.icon className="w-8 h-8" />
                            </div>

                            <div className="mt-auto pt-16">
                                <h3 className={`text-4xl font-black mb-4 transition-colors tracking-tighter ${i === 0 ? 'text-eckho-electric' : 'text-white group-hover:text-eckho-electric'}`}>
                                    {service.title}
                                </h3>
                                <p className="text-white/40 text-lg leading-relaxed max-w-[380px]">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
