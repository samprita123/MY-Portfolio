import React from 'react';
import { motion } from 'framer-motion';
import { useMobile } from '../hooks/useMobile';

const About = () => {
    const isMobile = useMobile();

    return (
        <section id="about" style={{ padding: isMobile ? '100px 0' : '200px 0', background: 'var(--bg-dark)', color: 'var(--text-primary)' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr',
                    gap: isMobile ? '40px' : '80px',
                    alignItems: 'start'
                }}>

                    {/* Left: Sticky Title */}
                    <div style={{ position: isMobile ? 'static' : 'sticky', top: '150px' }}>
                        <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', marginBottom: '20px' }}>
                            The Story
                        </p>
                        <h2 style={{
                            fontFamily: 'Anton',
                            fontSize: 'clamp(40px, 8vw, 100px)',
                            textTransform: 'uppercase',
                            lineHeight: '0.9'
                        }}>
                            About <br /> Me
                        </h2>
                    </div>

                    {/* Right: Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <p style={{ fontSize: '1.4rem', lineHeight: '1.6', color: 'var(--text-primary)', marginBottom: '40px', fontWeight: '400' }}>
                            I am a passionate <span style={{ color: 'var(--accent)' }}>Full-Stack Developer</span> and <span style={{ color: 'var(--accent)' }}>AI/ML enthusiast</span> currently pursuing my B.Tech in CSE at <span style={{ color: 'var(--text-primary)' }}>GIFT College, Bhubaneswar</span>.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8' }}>
                            <p>
                                I enjoy building scalable web applications and intelligent systems using modern technologies. My focus is on creating efficient, user-centric solutions by combining software engineering with AI.
                            </p>
                            <p>
                                Currently, as a Research Intern at <span style={{ color: 'var(--text-primary)' }}>DRDO</span>, I am working on <span style={{ color: 'var(--accent)' }}>optimization and intelligent scheduling systems</span>, exploring the intersection of software engineering and intelligent automation.
                            </p>
                            <p>
                                I strive for excellence in every project, whether it's developing high-performance web apps with the MERN stack or designing sophisticated ML models to solve real-world problems.
                            </p>
                        </div>

                        <div style={{ marginTop: '60px', display: 'flex', gap: '40px' }}>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '5px' }}>4+</h4>
                                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)' }}>Internships</p>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--text-primary)', fontSize: '2rem', marginBottom: '5px' }}>15+</h4>
                                <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: 'var(--text-secondary)' }}>Projects</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
