import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { revealUp, stagger, staggerItem } from '@animations/motionVariants';

const Experience = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const experiences = [
        {
            year: '2024',
            role: 'Full Stack Developer',
            project: 'ValoBot - Valorant Player Finder',
            description: 'Led the development of an AI-powered matchmaking platform for Valorant players.',
            achievements: [
                'Designed and implemented rule-based matching algorithms',
                'Built RESTful APIs with Flask and Python',
                'Created responsive frontend with modern JavaScript',
                'Integrated chatbot-style user interaction system',
                'Achieved 95% match satisfaction rate'
            ],
            tech: ['Python', 'Flask', 'JavaScript', 'AI Algorithms']
        },
        {
            year: '2023',
            role: 'MERN Stack Developer',
            project: 'E-Commerce & SaaS Projects',
            description: 'Developed multiple full-stack applications using the MERN stack.',
            achievements: [
                'Built complete e-commerce platform with payment integration',
                'Implemented subscription management system',
                'Created admin dashboards with real-time analytics',
                'Optimized database queries for better performance',
                'Deployed applications to production environments'
            ],
            tech: ['React', 'Node.js', 'Express', 'MongoDB']
        }
    ];

    return (
        <section id="experience" className="py-32 bg-black relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={revealUp}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        Experience
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        Building impactful solutions and delivering results
                    </p>
                </motion.div>

                {/* Timeline */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={stagger}
                    className="relative"
                >
                    {/* Vertical Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-white/0 via-white/20 to-white/0 transform md:-translate-x-1/2" />

                    {/* Experience Items */}
                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                className={`relative grid md:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Left Side (Year) */}
                                <div className={`${index % 2 === 0 ? 'md:text-right' : 'md:col-start-2'}`}>
                                    <div className="inline-block">
                                        <div className="text-6xl md:text-8xl font-heading font-bold text-white/10 mb-4">
                                            {exp.year}
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side (Content) */}
                                <div className={`${index % 2 === 0 ? '' : 'md:col-start-1 md:row-start-1'}`}>
                                    <div className="border border-white/10 rounded-sm p-8 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300">
                                        <h3 className="text-2xl font-heading font-bold text-white mb-2">
                                            {exp.role}
                                        </h3>
                                        <h4 className="text-lg text-white/70 mb-4 font-medium">
                                            {exp.project}
                                        </h4>
                                        <p className="text-white/60 mb-6 text-sm leading-relaxed">
                                            {exp.description}
                                        </p>

                                        {/* Achievements */}
                                        <ul className="space-y-2 mb-6">
                                            {exp.achievements.map((achievement, i) => (
                                                <li key={i} className="flex items-start gap-2 text-white/70 text-sm">
                                                    <svg className="w-4 h-4 flex-shrink-0 mt-1 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2">
                                            {exp.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs font-medium text-white/60 border border-white/20 rounded-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Center Dot */}
                                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 bg-white rounded-full transform md:-translate-x-1/2 border-4 border-black" />
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
