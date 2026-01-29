import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Github, Linkedin, Instagram, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import logo from '../assets/logoo.jpg';

import { useMobile } from '../hooks/useMobile';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const isMobile = useMobile();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const navLinks = [
        { name: 'Home', to: 'hero' },
        { name: 'Projects', to: 'projects' },
        { name: 'About', to: 'about' },
        { name: 'Experience', to: 'experience' },
        { name: 'Contact', to: 'contact' },
    ];

    const socialLinks = [
        { icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/sampritapatra123' },
        { icon: <Github size={18} />, url: 'https://github.com/samprita123' },
        { icon: <Instagram size={18} />, url: 'https://www.instagram.com/_saamy02_' },
    ];

    return (
        <>
            {/* Logo - Top Left */}
            <Link to="hero" smooth={true} duration={500} style={{
                position: 'fixed',
                top: '30px',
                left: '30px',
                zIndex: 105,
                cursor: 'pointer'
            }}>
                <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                    style={{
                        width: isMobile ? '45px' : '55px',
                        height: isMobile ? '45px' : '55px',
                        background: 'var(--bg-card)',
                        borderRadius: '15px',
                        border: '1px solid var(--glass-border)',
                        overflow: 'hidden',
                        padding: '5px'
                    }}
                >
                    <img src={logo} alt="logo" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </motion.div>
            </Link>

            {/* Desktop Side Nav (Visible labels) - Bottom Left */}
            {!isMobile && (
                <motion.div
                    style={{
                        position: 'fixed',
                        left: '40px',
                        bottom: '40px',
                        zIndex: 100,
                        display: 'flex',
                        flexDirection: 'column-reverse',
                        alignItems: 'center',
                        gap: '25px'
                    }}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1 }}
                >
                    <div style={{ width: '1px', height: '60px', background: 'var(--glass-border)', marginBottom: '10px' }}></div>
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            smooth={true}
                            duration={700}
                            style={{
                                color: 'var(--text-primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '2.5px',
                                fontSize: '0.65rem',
                                fontWeight: '600',
                                cursor: 'pointer',
                                writingMode: 'vertical-rl',
                                textOrientation: 'mixed',
                                opacity: 0.5,
                                transform: 'rotate(180deg)', // Standard reading direction from bottom to top
                                transition: 'all 0.3s ease'
                            }}
                            className="nav-link-v"
                        >
                            {link.name}
                        </Link>
                    ))}
                </motion.div>
            )}

            {/* Desktop Social Links - Bottom Right */}
            {!isMobile && (
                <motion.div
                    style={{
                        position: 'fixed',
                        right: '40px',
                        bottom: '40px',
                        zIndex: 100,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '20px'
                    }}
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.2 }}
                >
                    {socialLinks.map((social, i) => (
                        <motion.a
                            key={i}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, color: 'var(--accent)' }}
                            style={{
                                color: 'var(--text-primary)',
                                opacity: 0.5,
                                transition: 'color 0.3s ease'
                            }}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                    <div style={{ width: '1px', height: '60px', background: 'var(--glass-border)', marginTop: '10px' }}></div>
                </motion.div>
            )}

            {/* Theme Toggle & Mobile Menu Toggle */}
            <div style={{
                position: 'fixed',
                top: '30px',
                right: '30px',
                zIndex: 101,
                display: 'flex',
                gap: '15px',
                alignItems: 'center'
            }}>
                {/* Theme Toggle Button */}
                <motion.button
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{
                        background: 'var(--bg-card)',
                        border: '1px solid var(--glass-border)',
                        width: '45px',
                        height: '45px',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        cursor: 'pointer',
                        color: 'var(--text-primary)',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                    }}
                >
                    {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                </motion.button>

                {isMobile && (
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        style={{
                            background: 'var(--bg-card)',
                            border: '1px solid var(--glass-border)',
                            width: '45px',
                            height: '45px',
                            borderRadius: '50%',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '4px',
                            cursor: 'pointer',
                            color: 'var(--text-primary)'
                        }}
                    >
                        {isOpen ? (
                            <X size={20} />
                        ) : (
                            <>
                                <div style={{ width: '4px', height: '4px', background: 'var(--text-primary)', borderRadius: '50%' }}></div>
                                <div style={{ width: '4px', height: '4px', background: 'var(--text-primary)', borderRadius: '50%' }}></div>
                                <div style={{ width: '4px', height: '4px', background: 'var(--text-primary)', borderRadius: '50%' }}></div>
                            </>
                        )}
                    </button>
                )}
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && isMobile && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: 'fixed',
                            inset: 0,
                            background: 'var(--bg-dark)',
                            backdropFilter: 'blur(20px)',
                            zIndex: 100,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '20px'
                        }}
                    >
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                to={link.to}
                                smooth={true}
                                duration={700}
                                onClick={() => setIsOpen(false)}
                                style={{
                                    color: 'var(--text-primary)',
                                    fontSize: '2.5rem',
                                    fontFamily: 'Anton',
                                    textTransform: 'uppercase',
                                    cursor: 'pointer',
                                    letterSpacing: '2px'
                                }}
                            >
                                <motion.span
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {link.name}
                                </motion.span>
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                .nav-link-v:hover { opacity: 1 !important; color: var(--accent) !important; transform: rotate(180deg) translateX(5px) !important; }
            `}</style>
        </>
    );
};

export default Navbar;
