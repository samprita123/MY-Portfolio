import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

// Correct imports based on verified assets
import animalImg from '../assets/animal.png';
import crmImg from '../assets/crm.png';
import ocrImg from '../assets/ocrr.jpg';
import foodieImg from '../assets/gofoodie.png';
import frmImg from '../assets/frm.png';

import { useMobile } from '../hooks/useMobile';

const ProjectCard = ({ project, i }) => {
    const isMobile = useMobile();

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
                position: 'relative',
                height: isMobile ? '400px' : '550px',
                borderRadius: '40px',
                overflow: 'hidden',
                background: 'var(--bg-card)',
                border: '1px solid var(--glass-border)',
                cursor: 'pointer',
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                perspective: '1000px'
            }}
            whileHover={{ y: -15, transition: { duration: 0.4 } }}
            className="project-card"
        >
            {/* Image Layer with Zoom effect */}
            <motion.div
                style={{ position: 'absolute', inset: 0, zIndex: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
                <img
                    src={project.image || `https://placehold.co/800x1200/121214/f8c0c8?text=${project.title.replace(/ /g, '+')}`}
                    alt={project.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        opacity: 0.6,
                    }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, var(--bg-dark) 15%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.6) 100%)'
                }}></div>
            </motion.div>

            {/* Content Layer */}
            <div style={{
                position: 'relative',
                zIndex: 1,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: isMobile ? '30px' : '50px',
                textAlign: 'left'
            }}>
                {/* Top: Tech Tags */}
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {project.tech.map((t, idx) => (
                        <span key={idx} style={{
                            padding: '6px 12px',
                            background: 'rgba(255,255,255,0.05)',
                            backdropFilter: 'blur(10px)',
                            border: '1px solid rgba(255,255,255,0.1)',
                            borderRadius: '100px',
                            fontSize: '0.65rem',
                            fontWeight: 700,
                            letterSpacing: '1px',
                            color: 'var(--accent)',
                            textTransform: 'uppercase'
                        }}>
                            {t}
                        </span>
                    ))}
                </div>

                {/* Bottom: Info */}
                <div>
                    <h3 style={{
                        fontFamily: 'Anton',
                        fontSize: 'clamp(32px, 4vw, 56px)',
                        color: '#fff',
                        lineHeight: 1,
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                        textShadow: '0 5px 15px rgba(0,0,0,0.5)'
                    }}>
                        {project.title}
                    </h3>

                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        whileHover={{ opacity: 1, height: 'auto' }}
                        className="card-content-expand"
                        style={{
                            overflow: 'hidden',
                            transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                        }}
                    >
                        <p style={{
                            color: 'rgba(255,255,255,0.7)',
                            fontSize: '0.9rem',
                            lineHeight: 1.5,
                            marginBottom: '25px',
                            maxWidth: '100%'
                        }}>
                            {project.description}
                        </p>

                        <div style={{ display: 'flex', gap: '25px', alignItems: 'center' }}>
                            <a href={project.github} target="_blank" rel="noreferrer" style={{
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                textDecoration: 'none',
                                fontSize: '0.8rem',
                                fontWeight: 800,
                                letterSpacing: '1px'
                            }}>
                                <Github size={18} color="var(--accent)" /> GITHUB
                            </a>
                            <a href={project.external} target="_blank" rel="noreferrer" style={{
                                color: '#fff',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                textDecoration: 'none',
                                fontSize: '0.8rem',
                                fontWeight: 800,
                                letterSpacing: '1px'
                            }}>
                                <ExternalLink size={18} color="var(--accent)" /> DEMO
                            </a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <style>{`
                .project-card:hover .card-content-expand { height: auto; opacity: 1; margin-top: 15px; }
                @media (max-width: 768px) {
                    .card-content-expand { opacity: 1 !important; height: auto !important; margin-top: 15px !important; }
                }
            `}</style>
        </motion.div>
    );
};

const Projects = () => {
    const isMobile = useMobile();

    const projects = [
        {
            title: "Automated Firing Scheduler",
            description: "Priority-driven scheduler with conflict-avoidance logic for firing systems.",
            tech: ["REACT", "NODE", "ALGO"],
            github: "https://github.com/samprita123",
            external: "#",
            image: animalImg // Placeholder for missing schedulerImg
        },
        {
            title: "GoFoodie MERN App",
            description: "Full-stack food delivery application with secure authentication and tracking.",
            tech: ["MONGODB", "EXPRESS", "NODE"],
            github: "https://github.com/samprita123",
            external: "#",
            image: foodieImg
        },
        {
            title: "Face Recognition Model",
            description: "Real-time attendance system using OpenCV and Python. Automates facial detection.",
            tech: ["PYTHON", "OPENCV", "DL"],
            github: "https://github.com/samprita123",
            external: "#",
            image: frmImg
        },
        {
            title: "Animal Prediction Model",
            description: "Animal classification using Convolutional Neural Networks for high-accuracy species identification.",
            tech: ["PYTHON", "CNN", "TENSORFLOW"],
            github: "https://github.com/samprita123/Animal_Prediction",
            external: "https://github.com/samprita123/Animal_Prediction",
            image: animalImg
        },
        {
            title: "Customer Relationship Management",
            description: "Comprehensive system to manage customer records and transactions using Java and MySQL.",
            tech: ["JAVA", "SWING", "MYSQL"],
            github: "https://github.com/samprita123/Customer_Relationship_Management",
            external: "https://github.com/samprita123/Customer_Relationship_Management",
            image: crmImg
        },
        {
            title: "ODIA-OCR",
            description: "Optical Character Recognition system for Odia text extraction with integrated TTS features.",
            tech: ["HTML", "CSS", "JS"],
            github: "https://github.com/samprita123/ODIA-OCR",
            external: "https://github.com/samprita123/ODIA-OCR",
            image: ocrImg
        }
    ];

    return (
        <section id="projects" style={{
            background: 'var(--bg-dark)',
            padding: isMobile ? '100px 0' : '200px 0',
            width: '100%',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Decorative Text */}
            <div style={{
                position: 'absolute',
                top: '10%',
                left: '-5%',
                fontSize: '30vw',
                fontFamily: 'Anton',
                color: 'rgba(255,255,255,0.03)',
                lineHeight: 1,
                zIndex: 0,
                pointerEvents: 'none',
                textTransform: 'uppercase'
            }}>
                PORTFOLIO
            </div>

            <div className="container" style={{ maxWidth: '1400px', margin: '0 auto', padding: isMobile ? '0 20px' : '0 40px', position: 'relative', zIndex: 1 }}>
                {/* Header */}
                <div style={{
                    marginBottom: isMobile ? '80px' : '120px',
                    textAlign: isMobile ? 'left' : 'center'
                }}>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '8px', fontSize: '0.8rem', marginBottom: '20px' }}
                    >
                        Work Showcase
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ fontFamily: 'Anton', fontSize: 'clamp(60px, 12vw, 180px)', textTransform: 'uppercase', lineHeight: 0.8 }}
                    >
                        Selected <br /> <span style={{ color: 'transparent', WebkitTextStroke: '1.5px var(--text-primary)' }}>Works</span>
                    </motion.h2>
                </div>

                {/* Grid Layout */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                    gap: isMobile ? '40px' : '60px',
                    width: '100%'
                }}>
                    {projects.map((project, i) => (
                        <ProjectCard key={i} project={project} i={i} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    style={{ marginTop: '120px', textAlign: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '60px' }}
                >
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px' }}>
                        Curious for more?
                    </p>
                    <a href="https://www.linkedin.com/in/sampritapatra123" target="_blank" rel="noreferrer" style={{
                        fontFamily: 'Anton',
                        fontSize: '2rem',
                        color: '#fff',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '15px'
                    }}>
                        EXPLORE LINKEDIN <motion.span whileHover={{ x: 10 }}>→</motion.span>
                    </a>
                    <br />
                    <a href="https://github.com/samprita123" target="_blank" rel="noreferrer" style={{
                        fontFamily: 'Anton',
                        fontSize: '2rem',
                        color: '#fff',
                        textDecoration: 'none',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '15px'
                    }}>
                        EXPLORE GITHUB <motion.span whileHover={{ x: 10 }}>→</motion.span>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
