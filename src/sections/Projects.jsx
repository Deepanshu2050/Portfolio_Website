import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { revealUp, stagger, staggerItem, scaleIn } from '@animations/motionVariants';

const Projects = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [selectedProject, setSelectedProject] = useState(null);

    // Hardcoded projects for now (will be fetched from MongoDB later)
    const projects = [
        {
            id: 1,
            title: 'ValoBot - Valorant Player Finder',
            description: 'An intelligent matchmaking system for Valorant players using rule-based AI and data-driven matching algorithms. Features chatbot-style interaction for seamless team building.',
            image: '/project-valobot.jpg', // Placeholder
            techStack: ['Python', 'Flask', 'JavaScript', 'REST API', 'AI Algorithms'],
            featured: true,
            liveUrl: '#',
            githubUrl: '#',
            highlights: [
                'Rule-based matching engine',
                'Chatbot-style user interaction',
                'Real-time player recommendations',
                'Responsive frontend design'
            ]
        },
        {
            id: 2,
            title: 'E-Commerce Platform',
            description: 'Full-featured e-commerce platform with product management, shopping cart, checkout, and admin dashboard.',
            image: '/project-ecommerce.jpg', // Placeholder
            techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
            featured: false,
            liveUrl: '#',
            githubUrl: '#'
        },
        {
            id: 3,
            title: 'Subscription Manager',
            description: 'SaaS application for managing recurring subscriptions with automated billing and analytics.',
            image: '/project-subscriptions.jpg', // Placeholder
            techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
            featured: false,
            liveUrl: '#',
            githubUrl: '#'
        }
    ];

    const ProjectCard = ({ project, index }) => (
        <motion.div
            variants={staggerItem}
            className="group relative overflow-hidden rounded-sm border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-white/20 transition-all duration-300"
            whileHover={{ y: -6 }}
        >
            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-white/10 to-white/5">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white/20 text-6xl font-heading font-bold">
                        {project.title.split(' ')[0][0]}{project.title.split(' ')[1]?.[0] || ''}
                    </div>
                </div>

                {/* Overlay on hover */}
                <motion.div
                    className="absolute inset-0 bg-black/80 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-white text-black text-sm font-medium rounded-sm hover:bg-white/90 transition-colors"
                    >
                        View Live
                    </a>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 border border-white text-white text-sm font-medium rounded-sm hover:bg-white hover:text-black transition-all"
                    >
                        GitHub
                    </a>
                </motion.div>

                {/* Featured Badge */}
                {project.featured && (
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white text-black text-xs font-bold rounded-sm">
                        FEATURED
                    </div>
                )}
            </div>

            {/* Project Info */}
            <div className="p-6">
                <h3 className="text-2xl font-heading font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
                    {project.title}
                </h3>
                <p className="text-white/70 mb-6 text-sm leading-relaxed">
                    {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium text-white/60 border border-white/20 rounded-sm"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );

    return (
        <section id="projects" className="py-32 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={revealUp}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">
                        Featured Projects
                    </h2>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto">
                        A showcase of my recent work in full-stack development and AI integration
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={stagger}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
