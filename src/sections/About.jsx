import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { revealUp, slideInLeft, slideInRight } from '@animations/motionVariants';

const About = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="about" className="py-32 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div ref={ref} className="grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={slideInLeft}
                    >
                        <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                            About Me
                        </h2>
                        <div className="space-y-4 text-white/70 text-lg leading-relaxed">
                            <p>
                                I'm a Full Stack MERN Developer with a passion for building scalable,
                                high-performance web applications that solve real-world problems.
                            </p>
                            <p>
                                My expertise spans across modern frontend frameworks like React, backend
                                technologies including Node.js and Express, and database management with MongoDB.
                                I have a strong foundation in both frontend and backend development.
                            </p>
                            <p>
                                What sets me apart is my experience in integrating AI-powered systems into
                                full-stack applications. I've built intelligent, data-driven solutions that
                                combine traditional web development with modern AI capabilities.
                            </p>
                            <p>
                                I believe in writing clean, maintainable code and creating user experiences
                                that are both beautiful and functional. Every project is an opportunity to
                                push boundaries and learn something new.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Content - Visual */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={slideInRight}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-sm overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                            {/* Stats Grid */}
                            <div className="absolute inset-0 p-12 flex flex-col justify-between">
                                <div className="space-y-8">
                                    <div className="border-l-2 border-white/30 pl-6">
                                        <h3 className="text-5xl font-heading font-bold text-white mb-2">3+</h3>
                                        <p className="text-white/60">Years Experience</p>
                                    </div>
                                    <div className="border-l-2 border-white/30 pl-6">
                                        <h3 className="text-5xl font-heading font-bold text-white mb-2">10+</h3>
                                        <p className="text-white/60">Projects Completed</p>
                                    </div>
                                    <div className="border-l-2 border-white/30 pl-6">
                                        <h3 className="text-5xl font-heading font-bold text-white mb-2">100%</h3>
                                        <p className="text-white/60">Client Satisfaction</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl" />
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 blur-3xl" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
