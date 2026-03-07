'use client';

import { motion } from 'framer-motion';

const LOGOS = [
    "ARK PRO", "CORDEN AGRO", "LE CAFE PHILIPPINES", "ROBERTO'S", "ARK PRO", "CORDEN AGRO", "LE CAFE PHILIPPINES", "ROBERTO'S",
];

export default function Marquee() {
    return (
        <div className="w-full py-12 border-y border-white/5 bg-white/[0.02] overflow-hidden whitespace-nowrap">
            <div className="flex items-center">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="flex items-center gap-20 min-w-full pr-20"
                >
                    {LOGOS.concat(LOGOS).map((logo, i) => (
                        <span
                            key={i}
                            className="text-2xl font-black text-white/20 tracking-tighter hover:text-eckho-electric/40 transition-colors cursor-default"
                        >
                            {logo}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
