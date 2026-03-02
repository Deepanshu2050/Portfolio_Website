import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { revealUp, stagger, staggerItem, scaleIn } from '@animations/motionVariants';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const [hoveredId, setHoveredId] = useState(null);

    const projects = [
        {
            id: 1,
            title: 'Local Vendor Marketplace',
            subtitle: 'Hyperlocal',
            description: 'A production-grade hyperlocal marketplace mobile app connecting customers with nearby service vendors using geo-location based discovery, real-time booking, and seamless chat.',
            techStack: ['React Native', 'Expo', 'TypeScript', 'Material UI', 'Node.js', 'Express', 'MongoDB', 'Socket.IO'],
            featured: true,
            liveUrl: 'https://github.com/Deepanshu2050/Local_Vendor_Marketplace-HyperLocal-',
            githubUrl: 'https://github.com/Deepanshu2050/Local_Vendor_Marketplace-HyperLocal-',
            highlights: [
                'Multi-role auth (Customer, Vendor, Admin) with JWT',
                'Real-time booking with time-slot management',
                'GPS-based vendor search with GeoJSON indexing',
                'Live chat & push notifications via Socket.IO',
                'Material 3 design system with dynamic theming',
                'Ratings & reviews for verified bookings',
                'Offline caching & optimistic UI updates',
                'Scalable modular REST API architecture'
            ]
        },
        {
            id: 2,
            title: 'Subscription Manager',
            subtitle: 'SaaS Billing',
            description: 'SaaS application for managing recurring subscriptions with automated billing and analytics.',
            techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
            featured: false,
            liveUrl: 'https://subcription-manager.vercel.app/login',
            githubUrl: 'https://github.com/Deepanshu2050/subcription_manager',
            highlights: [
                'Recurring billing management',
                'Usage analytics dashboard',
                'JWT-based authentication',
                'RESTful API architecture'
            ]
        },
        {
            id: 3,
            title: 'ValoBot',
            subtitle: 'Valorant Player Finder',
            description: 'An intelligent matchmaking system for Valorant players using rule-based AI and data-driven matching algorithms. Features chatbot-style interaction for seamless team building.',
            techStack: ['Python', 'Flask', 'JavaScript', 'REST API', 'AI Algorithms'],
            featured: false,
            liveUrl: 'https://github.com/Deepanshu2050',
            githubUrl: 'https://github.com/Deepanshu2050',
            highlights: [
                'Rule-based matching engine',
                'Chatbot-style user interaction',
                'Real-time player recommendations',
                'Responsive frontend design'
            ]
        },
        {
            id: 4,
            title: 'E-Commerce Platform',
            subtitle: 'Full-Stack Store',
            description: 'Full-featured e-commerce platform with product management, shopping cart, checkout, and admin dashboard.',
            techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
            featured: false,
            liveUrl: 'https://github.com/Deepanshu2050',
            githubUrl: 'https://github.com/Deepanshu2050',
            highlights: [
                'Product catalog with search & filters',
                'Shopping cart and checkout flow',
                'Admin dashboard with analytics',
                'Stripe payment integration'
            ]
        }
    ];

    const featuredProject = projects.find(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section id="projects" className="py-32 bg-black relative overflow-hidden">
            {/* Subtle background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 -left-32 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-white/[0.02] rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={revealUp}
                    className="text-center mb-20"
                >
                    <motion.span
                        className="inline-block text-sm font-medium text-white/40 tracking-[0.2em] uppercase mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        Portfolio
                    </motion.span>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        A showcase of my recent work in full-stack development, mobile apps, and AI integration
                    </p>
                </motion.div>

                {/* Featured Project - Full Width Hero Card */}
                {featuredProject && (
                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={scaleIn}
                        className="mb-16"
                    >
                        <div
                            className="group relative overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm hover:border-white/25 transition-all duration-500"
                            onMouseEnter={() => setHoveredId(featuredProject.id)}
                            onMouseLeave={() => setHoveredId(null)}
                        >
                            <div className="grid lg:grid-cols-2 gap-0">
                                {/* Left: Visual Section */}
                                <div className="relative aspect-video lg:aspect-auto overflow-hidden bg-gradient-to-br from-white/10 via-white/5 to-transparent">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="relative">
                                            <motion.div
                                                className="text-white/[0.06] text-[10rem] font-heading font-bold leading-none select-none"
                                                animate={hoveredId === featuredProject.id ? { scale: 1.05, rotate: -2 } : { scale: 1, rotate: 0 }}
                                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                            >
                                                LVM
                                            </motion.div>
                                            <motion.div
                                                className="absolute inset-0 flex items-center justify-center"
                                                animate={hoveredId === featuredProject.id ? { y: -5 } : { y: 0 }}
                                                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                                            >
                                                <div className="text-center">
                                                    <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
                                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        </svg>
                                                    </div>
                                                    <span className="text-white/40 text-xs tracking-widest uppercase">Hyperlocal</span>
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Animated grid pattern */}
                                    <div className="absolute inset-0 opacity-[0.03]"
                                        style={{
                                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                                            backgroundSize: '40px 40px'
                                        }}
                                    />

                                    {/* Featured Badge */}
                                    <div className="absolute top-6 left-6 px-4 py-1.5 bg-white text-black text-xs font-bold tracking-wider rounded-full flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                        FEATURED PROJECT
                                    </div>
                                </div>

                                {/* Right: Content Section */}
                                <div className="p-8 lg:p-10 flex flex-col justify-between">
                                    <div>
                                        <h3 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-2">
                                            {featuredProject.title}
                                        </h3>
                                        <span className="text-white/40 text-sm tracking-wider uppercase mb-6 block">
                                            {featuredProject.subtitle}
                                        </span>
                                        <p className="text-white/70 text-base leading-relaxed mb-8">
                                            {featuredProject.description}
                                        </p>

                                        {/* Key Highlights */}
                                        <div className="grid sm:grid-cols-2 gap-2 mb-8">
                                            {featuredProject.highlights.map((highlight, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="flex items-start gap-2 text-sm text-white/60"
                                                    initial={{ opacity: 0, x: -10 }}
                                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                                    transition={{ delay: 0.3 + i * 0.05 }}
                                                >
                                                    <svg className="w-4 h-4 text-white/30 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                    </svg>
                                                    {highlight}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        {/* Tech Stack */}
                                        <div className="flex flex-wrap gap-2 mb-8">
                                            {featuredProject.techStack.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-xs font-medium text-white/70 bg-white/[0.06] border border-white/10 rounded-full hover:border-white/25 hover:text-white transition-all duration-200"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Action Buttons */}
                                        <div className="flex gap-4">
                                            <a
                                                href={featuredProject.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn inline-flex items-center gap-2 px-8 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                                            >
                                                View Live
                                                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                </svg>
                                            </a>
                                            <a
                                                href={featuredProject.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group/btn inline-flex items-center gap-2 px-8 py-3 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300"
                                            >
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                GitHub
                                                <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* Other Projects Grid */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={stagger}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {otherProjects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} isInView={isInView} hoveredId={hoveredId} setHoveredId={setHoveredId} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project, index, isInView, hoveredId, setHoveredId }) => (
    <motion.div
        variants={staggerItem}
        className="group relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-all duration-500"
        whileHover={{ y: -8, transition: { type: "spring", stiffness: 300, damping: 20 } }}
        onMouseEnter={() => setHoveredId(project.id)}
        onMouseLeave={() => setHoveredId(null)}
    >
        {/* Project Visual */}
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    className="text-white/[0.07] text-7xl font-heading font-bold select-none"
                    animate={hoveredId === project.id ? { scale: 1.1 } : { scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                    {project.title.split(' ').map(w => w[0]).join('')}
                </motion.div>
            </div>

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}
            />

            {/* Hover Overlay */}
            <motion.div
                className="absolute inset-0 bg-black/85 backdrop-blur-sm flex items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
            >
                <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-white/90 transition-colors flex items-center gap-2"
                    initial={{ y: 10, opacity: 0 }}
                    animate={hoveredId === project.id ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.05 }}
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                </motion.a>
                <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 border border-white/40 text-white text-sm font-semibold rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"
                    initial={{ y: 10, opacity: 0 }}
                    animate={hoveredId === project.id ? { y: 0, opacity: 1 } : { y: 10, opacity: 0 }}
                    transition={{ duration: 0.2, delay: 0.1 }}
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                </motion.a>
            </motion.div>
        </div>

        {/* Project Info */}
        <div className="p-6">
            <div className="flex items-start justify-between mb-1">
                <h3 className="text-xl font-heading font-bold text-white group-hover:text-white/90 transition-colors">
                    {project.title}
                </h3>
            </div>
            <span className="text-white/30 text-xs tracking-wider uppercase mb-3 block">
                {project.subtitle}
            </span>
            <p className="text-white/60 mb-5 text-sm leading-relaxed">
                {project.description}
            </p>

            {/* Key Highlights (compact) */}
            {project.highlights && (
                <div className="mb-5 space-y-1.5">
                    {project.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-white/50">
                            <span className="w-1 h-1 rounded-full bg-white/30 flex-shrink-0" />
                            {h}
                        </div>
                    ))}
                </div>
            )}

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="px-2.5 py-1 text-[10px] font-medium text-white/50 border border-white/10 rounded-full"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </div>
    </motion.div>
);

export default Projects;
