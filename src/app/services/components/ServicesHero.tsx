'use client';

import { motion } from 'framer-motion';

export default function ServicesHero() {
    return (
        <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-32 pb-20 px-6 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight md:leading-none">
                    Engineering the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-eckho-electric via-eckho-violet to-eckho-electric bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                        Systems of Tomorrow
                    </span>
                </h1>
                <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                    We transcend basic web design. We architect enterprise-grade digital solutions engineered to scale, perform, and dominate.
                </p>
            </motion.div>
        </section>
    );
}
