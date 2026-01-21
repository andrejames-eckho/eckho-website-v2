'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "circOut" }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-8 py-3 glass rounded-full border border-white/10 flex items-center gap-12"
        >
            <Link href="/" className="text-sm font-medium hover:text-eckho-electric transition-colors">Home</Link>
            <Link href="/about" className="text-sm font-medium hover:text-eckho-electric transition-colors">About Us</Link>
            <Link href="#services" className="text-sm font-medium hover:text-eckho-electric transition-colors">Services</Link>
            <Link href="#contact" className="px-5 py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-eckho-electric transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">Start Project</Link>
        </motion.nav>
    );
}
