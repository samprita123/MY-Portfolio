import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    return (
        <section id="certifications" style={{ padding: '80px 0', background: 'var(--bg-dark)' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', marginBottom: '20px' }}>
                    Badges of Honor
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '50px', alignItems: 'start' }}>

                    {/* Left Side - Certificates Box with Animated Border */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        style={{ position: 'relative' }}
                    >
                        <h2 style={{
                            fontFamily: 'Anton',
                            fontSize: 'clamp(40px, 6vw, 80px)',
                            textTransform: 'uppercase',
                            marginBottom: '40px',
                            lineHeight: 1
                        }}>
                            Certifications
                        </h2>

                        {/* Animated Border Container */}
                        <div style={{
                            position: 'relative',
                            background: 'var(--bg-card)',
                            padding: '3px', /* Space for the border */
                            borderRadius: '24px',
                            overflow: 'hidden'
                        }}>
                            {/* The Animated Gradient Border Layer */}
                            <div style={{
                                position: 'absolute',
                                top: '-50%',
                                left: '-50%',
                                width: '200%',
                                height: '200%',
                                background: 'conic-gradient(transparent, transparent, transparent, var(--accent))',
                                animation: 'rotateBorder 4s linear infinite'
                            }} />

                            {/* Inner Content Layer */}
                            <div style={{
                                position: 'relative',
                                background: 'var(--bg-dark)',
                                borderRadius: '22px',
                                padding: '30px',
                                height: '100%'
                            }}>
                                <div style={{ display: 'grid', gap: '20px' }}>
                                    {[
                                        { title: "Industry 4.0 & IoT", issuer: "IIT Kharagpur", grade: "Top 5%" },
                                        { title: "Machine Learning", issuer: "IIT Guwahati", grade: "A+" },
                                        { title: "Big Data Analytics", issuer: "CDAC", grade: "Gold" },
                                    ].map((cert, i) => (
                                        <div key={i} style={{
                                            paddingBottom: '20px',
                                            borderBottom: i !== 2 ? '1px solid var(--glass-border)' : 'none'
                                        }}>
                                            <h3 style={{ marginBottom: '5px', fontSize: '1.2rem', fontWeight: '600' }}>{cert.title}</h3>
                                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{cert.issuer}</p>
                                                {cert.grade && (
                                                    <span style={{
                                                        color: 'var(--accent)',
                                                        fontSize: '0.7rem',
                                                        border: '1px solid var(--accent)',
                                                        padding: '2px 8px',
                                                        borderRadius: '8px',
                                                        textTransform: 'uppercase',
                                                        fontWeight: '600'
                                                    }}>
                                                        {cert.grade}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Side - Achievements */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h2 style={{
                            fontFamily: 'Anton',
                            fontSize: 'clamp(40px, 6vw, 80px)',
                            textTransform: 'uppercase',
                            marginBottom: '40px',
                            lineHeight: 1
                        }}>
                            Achievements
                        </h2>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <motion.div
                                whileHover={{ x: 10 }}
                                style={{
                                    padding: '30px',
                                    borderLeft: '4px solid var(--accent)',
                                    background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 0%, transparent 100%)'
                                }}
                            >
                                <div style={{
                                    display: 'inline-block',
                                    padding: '5px 10px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '5px',
                                    marginBottom: '15px',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    color: 'var(--accent)'
                                }}>
                                    2025
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>Festronix (Event Lead Coordinator)</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}>GIFT College</p>
                                <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.8)' }}>EVENT: AI-ML Model Contest</p>
                            </motion.div>

                            <motion.div
                                whileHover={{ x: 10 }}
                                style={{
                                    padding: '30px',
                                    borderLeft: '4px solid var(--accent)',
                                    background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 0%, transparent 100%)'
                                }}
                            >
                                <div style={{
                                    display: 'inline-block',
                                    padding: '5px 10px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    borderRadius: '5px',
                                    marginBottom: '15px',
                                    fontSize: '0.9rem',
                                    fontWeight: 'bold',
                                    color: 'var(--accent)'
                                }}>
                                    2025
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '5px' }}>BRICS Idea Competition (Finalist)</h3>
                                <p style={{ color: 'var(--text-secondary)', marginBottom: '10px' }}>INDIA</p>
                                <p style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.8)' }}>IDEA: AlgaeGuard (AI-Powered system for algae mitigation)</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <style>{`
                @keyframes rotateBorder {
                    0% { transform: rotate(0deg); }
                    100% { transform: rotate(360deg); }
                }
            `}</style>
        </section>
    );
};

export default Certifications;
