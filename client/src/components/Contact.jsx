import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useMobile } from '../hooks/useMobile';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', subject: '', message: '' });
    const [status, setStatus] = useState('');
    const isMobile = useMobile();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, subject, message } = formData;

        // Construct mailto link
        const mailtoLink = `mailto:sampritapatra123@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\n\nMessage:\n${message}`)}`;

        // Open user's email client
        window.location.href = mailtoLink;

        setStatus('Opening Gmail...');
        setTimeout(() => setStatus(''), 3000);
    };

    return (
        <section id="contact" style={{ padding: isMobile ? '60px 0' : '80px 0', textAlign: 'center' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: isMobile ? '60px' : '100px',
                    textAlign: 'left'
                }}>

                    {/* Left: Contact Info */}
                    <div>
                        <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', marginBottom: '20px' }}>
                            Get in Touch
                        </p>
                        <h2 style={{
                            fontFamily: 'Anton',
                            fontSize: 'clamp(40px, 6vw, 80px)',
                            textTransform: 'uppercase',
                            lineHeight: '1',
                            marginBottom: '40px'
                        }}>
                            Let's Build <br /> Something <br /> Together
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', color: 'var(--text-secondary)', fontSize: isMobile ? '1.1rem' : '1.2rem' }}>
                            <p>Interested in collaborating? Drop me a message and I'll get back to you as soon as possible.</p>
                            <a href="mailto:sampritapatra123@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: '500' }}>sampritapatra123@gmail.com</a>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div style={{
                        background: 'var(--bg-card)',
                        padding: isMobile ? '40px 20px' : '60px',
                        borderRadius: '40px',
                        border: '1px solid var(--glass-border)',
                        boxShadow: 'var(--card-shadow)'
                    }}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                                gap: '30px'
                            }}>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    style={{
                                        padding: '20px',
                                        background: 'rgba(255,255,255,0.03)',
                                        border: '1px solid var(--glass-border)',
                                        color: '#fff',
                                        outline: 'none',
                                        fontSize: '1rem',
                                        borderRadius: '15px'
                                    }}
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                required
                                style={{
                                    padding: '20px',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid var(--glass-border)',
                                    color: '#fff',
                                    outline: 'none',
                                    fontSize: '1rem',
                                    borderRadius: '15px'
                                }}
                            />
                            <textarea
                                rows="5"
                                placeholder="Message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                required
                                style={{
                                    padding: '20px',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid var(--glass-border)',
                                    color: '#fff',
                                    outline: 'none',
                                    fontSize: '1rem',
                                    borderRadius: '15px',
                                    resize: 'none'
                                }}
                            ></textarea>

                            <button type="submit" style={{
                                padding: '20px',
                                background: 'var(--text-primary)',
                                color: 'var(--bg-dark)',
                                border: 'none',
                                borderRadius: '15px',
                                fontWeight: '600',
                                cursor: 'pointer',
                                fontSize: '1rem',
                                transition: 'all 0.3s ease'
                            }}
                                onMouseOver={(e) => e.target.style.transform = 'scale(1.02)'}
                                onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                            >
                                Open in Gmail
                            </button>
                            {status && <p style={{ marginTop: '10px', color: status.includes('Failed') ? '#ff4d4d' : 'var(--accent)' }}>{status}</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
