'use client';

import { motion, useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { useEffect } from 'react';

export default function DynamicBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const maskImage = useMotionTemplate`radial-gradient(circle at ${springX}px ${springY}px, black 0%, transparent 300px)`;

    return (
        <motion.div
            className="fixed inset-0 -z-10 bg-mesh opacity-40 overflow-hidden"
            style={{
                maskImage,
                WebkitMaskImage: maskImage,
            }}
        />
    );
}
