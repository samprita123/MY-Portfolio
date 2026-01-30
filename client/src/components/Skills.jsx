import React from 'react';
import { motion } from 'framer-motion';
import { useMobile } from '../hooks/useMobile';

const Skills = () => {
    const isMobile = useMobile();

    const skills = [
        "JavaScript", "React", "Node.js", "Express", "MongoDB", "Python",
        "TensorFlow", "OpenCV", "Java", "SQL", "Git", "Framer Motion"
    ];

    return (
        <section id="skills" style={{ padding: isMobile ? '100px 0' : '150px 0', overflow: 'hidden' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', marginBottom: '20px' }}>
                    Capabilities
                </p>
                <h2 style={{
                    fontFamily: 'Anton',
                    fontSize: 'clamp(40px, 8vw, 100px)',
                    textTransform: 'uppercase',
                    marginBottom: isMobile ? '40px' : '80px',
                    lineHeight: 1
                }}>
                    Tech Arsenal
                </h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? 'repeat(auto-fill, minmax(140px, 1fr))' : 'repeat(auto-fill, minmax(180px, 1fr))',
                    gap: isMobile ? '15px' : '20px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            whileHover={{
                                y: -10,
                                backgroundColor: 'var(--glass-bg)',
                                borderColor: 'var(--accent)'
                            }}
                            style={{
                                padding: '30px 20px',
                                border: '1px solid var(--glass-border)',
                                borderRadius: '24px',
                                fontSize: '1rem',
                                cursor: 'default',
                                userSelect: 'none',
                                background: 'var(--bg-card)',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontWeight: '500',
                                color: 'var(--text-secondary)'
                            }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                        >
                            {skill}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
