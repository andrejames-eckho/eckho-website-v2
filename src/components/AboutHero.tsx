'use client';

import { motion } from 'framer-motion';

export default function AboutHero() {
    return (
        <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-7xl font-black mb-8">The Human Element <br />in <span className="text-eckho-electric">High-Performance</span></h1>
                <p className="text-xl text-white/50 max-w-2xl mx-auto italic">"Engineering is not just about code; it's about the extraordinary humans who interact with it."</p>
            </motion.div>
        </section>
    );
}
