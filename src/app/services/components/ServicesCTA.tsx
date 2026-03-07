'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Magnetic from '@/components/Magnetic';

export default function ServicesCTA() {
    return (
        <section className="w-full py-32 px-6 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-64 bg-eckho-electric/10 blur-[120px] rounded-full pointer-events-none" />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-3xl"
            >
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">Ready to Engineer the <span className="text-eckho-electric">Future?</span></h2>
                <p className="text-xl text-white/50 mb-10 max-w-xl mx-auto">
                    Partner with Eckho to build digital products that command authority and scale without limits.
                </p>

                <Magnetic>
                    <button className="group relative px-6 py-3 md:py-4 bg-white text-black text-sm md:text-base font-bold rounded-full overflow-hidden transition-transform active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] inline-flex items-center justify-center">
                        <span className="relative z-10 flex items-center gap-2">
                            Initialize Project <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                        </span>
                    </button>
                </Magnetic>
            </motion.div>
        </section>
    );
}
