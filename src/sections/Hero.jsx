import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { revealUp, textReveal, stagger, staggerItem } from '@animations/motionVariants';

const Hero = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden grain">
            {/* Content */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={stagger}
                    className="text-center"
                >
                    {/* Greeting */}
                    <motion.p
                        variants={staggerItem}
                        className="text-white/60 text-lg md:text-xl mb-6 font-body"
                    >
                        Hi, I'm Deepanshu
                    </motion.p>

                    {/* Main Heading */}
                    <motion.h1
                        variants={textReveal}
                        className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-tight"
                        style={{
                            transform: `translateY(${scrollY * 0.3}px)`,
                        }}
                    >
                        I build scalable
                        <br />
                        <span className="text-white/80">full-stack web applications</span>
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={staggerItem}
                        className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-body"
                    >
                        Full Stack MERN Developer specializing in React, Node.js, Express, MongoDB, and AI-powered systems
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={staggerItem}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <button
                            onClick={() => scrollToSection('projects')}
                            className="group relative px-8 py-4 bg-white text-black font-medium rounded-sm overflow-hidden transition-all duration-300 hover:scale-105"
                        >
                            <span className="relative z-10">View Projects</span>
                            <div className="absolute inset-0 bg-white/90 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                        </button>

                        <button
                            onClick={() => scrollToSection('contact')}
                            className="px-8 py-4 border border-white/30 text-white font-medium rounded-sm hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
                        >
                            Contact Me
                        </button>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <div className="flex flex-col items-center gap-2">
                        <p className="text-white/40 text-xs uppercase tracking-wider">Scroll</p>
                        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
