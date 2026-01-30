import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import samprita from '../assets/samprita.png';
import mypic from '../assets/my_pic.png';

import { useMobile } from '../hooks/useMobile';

const Hero = () => {
    const { scrollY } = useScroll();
    const isMobile = useMobile();

    // Parallax effects
    const textY = useTransform(scrollY, [0, 500], [0, 150]);
    const imageY = useTransform(scrollY, [0, 500], [0, -50]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="hero" style={{
            height: '100vh',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>

            <div className="container" style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, var(--bg-dark) 0%, transparent 20%)' }}></div>
                {/* Central Image - Background layer */}
                <motion.div
                    style={{
                        y: imageY,
                        position: 'relative',
                        width: isMobile ? '80%' : 'clamp(300px, 35vw, 550px)',
                        height: 'auto',
                        zIndex: 1, // Behind the text
                        display: 'flex',
                        justifyContent: 'center'
                    }}
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Distinct Ring Structure - Enhanced */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '100%',
                        height: '100%',
                        borderRadius: '50%',
                        background: 'conic-gradient(from 0deg, transparent 0%, var(--neon-blue) 40%, var(--neon-pink) 70%, transparent 100%)',
                        padding: '4px',
                        zIndex: -1,
                        filter: 'blur(2px)',
                        boxShadow: '0 0 50px rgba(56, 189, 248, 0.3)'
                    }}>
                        <div style={{
                            width: '100%',
                            height: '100%',
                            background: 'var(--bg-dark)',
                            borderRadius: '50%'
                        }}></div>
                    </div>

                    <img
                        src={mypic}
                        alt="Samprita Patra"
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                            filter: 'grayscale(10%) contrast(1.2) brightness(0.9)', // B&W high contrast
                        }}
                    />
                    {/* Subtle bottom fade */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '30%',
                        background: 'linear-gradient(to top, var(--bg-dark) 20%, transparent 100%)'
                    }}></div>
                </motion.div>

                {/* Main Name Text - Foreground layer (Overlapping image) */}
                <motion.div
                    style={{
                        position: 'absolute',
                        zIndex: 3, // In front of image
                        textAlign: 'center',
                        width: '100%',
                        pointerEvents: 'none',
                        y: textY,
                        bottom: isMobile ? '35%' : '30%' // Positioned across the torso
                    }}
                >
                    <h1 className="hero-text" style={{
                        fontSize: isMobile ? 'clamp(40px, 14vw, 80px)' : 'clamp(100px, 15vw, 220px)',
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'center',
                        gap: isMobile ? '0' : '0.2em',
                        lineHeight: '0.8',
                        textTransform: 'uppercase',
                        background: 'linear-gradient(to bottom, var(--text-primary) 50%, var(--accent) 50%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '-0.04em',
                        fontFamily: 'Anton',
                        fontWeight: 'normal'
                    }}>
                        <span>SAMPRITA</span>
                        <span>PATRA</span>
                    </h1>
                </motion.div>

                {/* Role & CTA Bottom Bar */}
                <motion.div
                    style={{
                        position: 'absolute',
                        bottom: isMobile ? '5%' : '10%',
                        left: '0',
                        width: '100%',
                        padding: '0 5%',
                        zIndex: 10,
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        justifyContent: 'space-between',
                        alignItems: isMobile ? 'center' : 'flex-end',
                        gap: isMobile ? '20px' : '0'
                    }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 1 }}
                >
                    <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                        <p style={{
                            color: 'var(--text-secondary)',
                            fontSize: isMobile ? '0.75rem' : '0.9rem',
                            letterSpacing: '2px',
                            fontWeight: '400',
                            maxWidth: isMobile ? '100%' : '400px',
                            lineHeight: '1.4',
                            textTransform: 'uppercase',
                            marginBottom: '15px'
                        }}>
                            Frontend & Backend Developer <br /> AI/ML Engineer
                        </p>
                    </div>

                    <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                        <a href="#contact" style={{
                            padding: '10px 25px',
                            fontSize: '0.75rem',
                            borderRadius: '30px',
                            background: 'transparent',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--text-primary)',
                            textDecoration: 'none',
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            Get in touch &rarr;
                        </a>

                        {!isMobile && (
                            <motion.div
                                animate={{ y: [0, 8, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                style={{ width: '20px', height: '35px', borderRadius: '10px', border: '1px solid var(--glass-border)', position: 'relative' }}
                            >
                                <div style={{ width: '3px', height: '6px', background: 'var(--text-secondary)', borderRadius: '2px', position: 'absolute', top: '6px', left: '50%', transform: 'translateX(-50%)' }}></div>
                            </motion.div>
                        )}
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
