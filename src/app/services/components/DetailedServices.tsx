'use client';

import { motion } from 'framer-motion';
import { Monitor, Smartphone, Cpu, Layers, ShieldCheck, Zap } from 'lucide-react';

const detailedServices = [
    {
        title: "Custom Platforms",
        icon: Monitor,
        description: "We build bespoke, high-performance web applications tailored to your specific operational needs. From complex SaaS products to internal enterprise tools, our architectures are designed for scale, security, and uncompromising speed.",
        features: ["Microservices Architecture", "Real-time Data Processing", "Cloud-Native Infrastructure"],
    },
    {
        title: "Mobile Ecosystems",
        icon: Smartphone,
        description: "Deliver unparalleled user experiences directly to your clients' pockets. We develop boutique native and cross-platform applications that don't just function—they feel fluid, intuitive, and expertly crafted.",
        features: ["iOS & Android Native", "React Native / Flutter", "Seamless API Integration"],
    },
    {
        title: "AI Integration",
        icon: Cpu,
        description: "Transform legacy workflows into intelligent, automated systems. We seamlessly integrate cutting-edge Large Language Models (LLMs) and custom machine learning pipelines to give your business a decisive competitive edge.",
        features: ["Custom LLM Deployment", "Automated Workflows", "Predictive Analytics"],
    },
    {
        title: "Legacy Refresh",
        icon: Layers,
        description: "Don't let technical debt slow your growth. We meticulously audit, refactor, and modernize outdated codebases, transforming fragile systems into robust, modern digital assets without disrupting your operations.",
        features: ["Zero-Downtime Migration", "Codebase Refactoring", "Performance Optimization"],
    },
    {
        title: "Enterprise Security",
        icon: ShieldCheck,
        description: "Security isn't an afterthought—it's foundational. We implement bank-grade encryption, rigorous authentication protocols, and continuous monitoring to ensure your digital assets remain impenetrable.",
        features: ["Zero-Trust Architecture", "Penetration Testing", "Compliance (SOC2/GDPR)"],
    },
    {
        title: "High-Speed Infrastructure",
        icon: Zap,
        description: "Speed is a feature. We engineer infrastructure that delivers sub-second load times globally, optimizing every layer from the database queries to the CDN delivery edge.",
        features: ["Edge Computing", "Database Sharding", "Global CDN Deployment"],
    }
];

export default function DetailedServices() {
    return (
        <section className="w-full max-w-7xl mx-auto py-24 px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {detailedServices.map((service, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: i * 0.1 }}
                        className="glass-card !p-8 md:!p-12 rounded-[2.5rem] group relative overflow-hidden flex flex-col"
                    >
                        <div className="absolute top-0 right-0 w-80 h-80 bg-eckho-electric/5 blur-[120px] group-hover:bg-eckho-electric/20 transition-all duration-700" />

                        <div className="h-full flex flex-col items-start relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white/5 text-eckho-electric flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                                <service.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-3xl font-black mb-4 tracking-tighter text-white">
                                {service.title}
                            </h3>
                            <p className="text-white/60 text-lg leading-relaxed mb-8">
                                {service.description}
                            </p>

                            <div className="mt-auto w-full">
                                <div className="h-px w-full bg-white/10 mb-6" />
                                <ul className="space-y-3">
                                    {service.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm font-medium text-white/40">
                                            <div className="w-1.5 h-1.5 rounded-full bg-eckho-electric mr-3" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
