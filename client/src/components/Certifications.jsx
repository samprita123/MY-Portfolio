import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
    return (
        <section id="certifications" style={{ padding: '150px 0', background: 'var(--bg-dark)' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', marginBottom: '20px' }}>
                    Badges of Honor
                </p>
                <h2 style={{
                    fontFamily: 'Anton',
                    fontSize: 'clamp(40px, 8vw, 100px)',
                    textTransform: 'uppercase',
                    marginBottom: '80px',
                    lineHeight: 1
                }}>
                    Certifications
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '30px' }}>
                    {[
                        { title: "Industry 4.0 & IoT", issuer: "IIT Kharagpur", grade: "Top 5%" },
                        { title: "Machine Learning", issuer: "IIT Guwahati", grade: "A+" },
                        { title: "Big Data Analytics", issuer: "CDAC", grade: "Gold" },
                    ].map((cert, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10, borderColor: 'var(--accent)' }}
                            style={{
                                padding: '40px',
                                border: '1px solid var(--glass-border)',
                                background: 'var(--bg-card)',
                                borderRadius: '30px',
                                transition: 'var(--transition)'
                            }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <h3 style={{ marginBottom: '15px', fontSize: '1.5rem', fontWeight: '600' }}>{cert.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>{cert.issuer}</p>
                            {cert.grade && (
                                <span style={{
                                    color: 'var(--accent)',
                                    fontSize: '0.75rem',
                                    border: '1px solid var(--accent)',
                                    padding: '4px 12px',
                                    borderRadius: '10px',
                                    textTransform: 'uppercase',
                                    fontWeight: '600'
                                }}>
                                    {cert.grade}
                                </span>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
