'use client';

import { motion } from 'framer-motion';
import Magnetic from './Magnetic';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-32 pb-20 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center max-w-5xl"
            >
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="inline-block px-4 py-1.5 rounded-full border border-eckho-electric/20 bg-eckho-electric/5 text-eckho-electric text-xs font-bold uppercase tracking-wider mb-8"
                >
                    Custom Software Development
                </motion.span>

                <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
                    Engineering the <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-eckho-electric via-eckho-violet to-eckho-electric bg-[length:200%_auto] animate-[gradient_4s_linear_infinite]">
                        Extraordinary
                    </span>
                </h1>

                <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed">
                    We build high-performance digital ecosystems that empower category leaders. Human-centric engineering meets technical authority.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Magnetic>
                        <button className="group relative px-8 py-4 bg-eckho-electric text-black font-bold rounded-full overflow-hidden transition-transform active:scale-95 shadow-[0_0_40px_rgba(0,240,255,0.3)] hover:shadow-[0_0_60px_rgba(0,240,255,0.5)]">
                            <span className="relative z-10 flex items-center gap-2">
                                Start Call <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </span>
                        </button>
                    </Magnetic>

                    <button className="text-white/80 hover:text-white font-medium transition-colors flex items-center gap-2">
                        View Capabilities <div className="w-1.5 h-1.5 rounded-full bg-eckho-violet" />
                    </button>
                </div>
            </motion.div>

            {/* Decorative vertical line */}
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100px" }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-eckho-electric/50 to-eckho-electric"
            />
        </section>
    );
}
