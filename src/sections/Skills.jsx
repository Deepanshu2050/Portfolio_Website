import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { revealUp, stagger, staggerItem, hoverLift } from '@animations/motionVariants';

const Skills = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skillCategories = [
        {
            title: 'Frontend & Mobile',
            skills: ['React & React Native', 'JavaScript & TypeScript', 'Expo', 'Tailwind CSS & Material UI', 'Framer Motion & GSAP']
        },
        {
            title: 'Backend & Database',
            skills: ['Node.js & Express', 'MongoDB & Mongoose', 'REST APIs', 'Socket.IO (WebSockets)', 'JWT Authentication']
        },
        {
            title: 'State & Data Management',
            skills: ['Redux Toolkit', 'Zustand', 'TanStack Query', 'Context API', 'AsyncStorage & Caching']
        },
        {
            title: 'Tools & AI',
            skills: ['Git & GitHub', 'Python & Flask', 'Vite & Webpack', 'Postman', 'Vercel / Render']
        }
    ];

    return (
        <section id="skills" className="py-32 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={revealUp}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        Skills & Expertise
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        A comprehensive toolkit for building modern, scalable web applications
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={stagger}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            variants={staggerItem}
                            whileHover="hover"
                            initial="rest"
                            className="group"
                        >
                            <motion.div
                                variants={hoverLift}
                                className="h-full border border-white/10 rounded-sm p-8 bg-white/[0.02] backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.05] hover:border-white/20"
                            >
                                {/* Category Title */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">
                                        <span className="text-white/60 text-sm font-bold">{index + 1}</span>
                                    </div>
                                    <h3 className="text-xl font-heading font-semibold text-white">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Skills List */}
                                <ul className="space-y-3">
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill}
                                            className="flex items-center gap-2 text-white/70 group-hover:text-white/90 transition-colors duration-200"
                                        >
                                            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm">{skill}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
