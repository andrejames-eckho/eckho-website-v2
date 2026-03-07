'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="fixed top-4 left-0 right-0 z-50 flex justify-center w-full px-4 md:px-6 pointer-events-none">
                <motion.nav
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, ease: "circOut" }}
                    className="pointer-events-auto px-3 md:px-4 py-1.5 md:py-2 glass rounded-full border border-white/10 flex items-center justify-between w-full md:w-max max-w-full gap-3 md:gap-6"
                >
                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-4 lg:gap-6">
                        <Link href="/" className="text-sm font-medium hover:text-eckho-electric transition-colors">Home</Link>
                        <Link href="/about" className="text-sm font-medium hover:text-eckho-electric transition-colors">About Us</Link>
                        <Link href="/services" className="text-sm font-medium hover:text-eckho-electric transition-colors">Services</Link>
                    </div>

                    {/* Mobile Logo / Home link */}
                    <Link href="/" className="md:hidden ml-2 text-lg font-black tracking-tighter text-white">ECKHO</Link>

                    {/* CTA Button */}
                    <Link href="#contact" className="hidden md:inline-flex px-4 py-1.5 md:py-2 bg-white text-black text-sm font-bold rounded-full hover:bg-eckho-electric transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]">Start Project</Link>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white p-2"
                    >
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </motion.nav>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6 md:hidden"
                    >
                        <Link href="/" onClick={() => setIsOpen(false)} className="text-3xl font-black text-white hover:text-eckho-electric transition-colors">Home</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)} className="text-3xl font-black text-white hover:text-eckho-electric transition-colors">About Us</Link>
                        <Link href="/services" onClick={() => setIsOpen(false)} className="text-3xl font-black text-white hover:text-eckho-electric transition-colors">Services</Link>
                        <Link href="#contact" onClick={() => setIsOpen(false)} className="mt-6 px-8 py-3 bg-white text-black text-lg font-bold rounded-full hover:bg-eckho-electric transition-all">Start Project</Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
