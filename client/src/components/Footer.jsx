import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Link } from 'react-scroll';
import { useMobile } from '../hooks/useMobile';

const Footer = () => {
    const isMobile = useMobile();

    return (
        <footer style={{
            position: 'relative',
            paddingTop: '100px',
            overflow: 'hidden'
        }}>
            {/* Wave Decoration */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                lineHeight: 0,
                zIndex: 0
            }}>
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{
                    width: '100%',
                    height: isMobile ? '60px' : '120px',
                    transform: 'rotate(180deg)'
                }}>
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5,73.84-4.38,147.54,16.88,218.2,52.43,56.6,28.46,119.31,61.37,188.24,51.21,67.86-10,132.54-40.49,200.6-56.24,98-22.68,206.51-12.06,228.16,35V0Z"
                        fill="var(--glass-bg)" opacity="0.3"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
                        fill="var(--accent)" opacity="0.2"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.41,52.93,23.12,106.65,42.5,163,44.59,54,2,108.06-12.27,159.26-30.84,28.52-10.34,56.54-21.36,88.74-25.31V0Z"
                        fill="var(--bg-card)" opacity="0.5"></path>
                </svg>
            </div>

            <div className="container" style={{
                position: 'relative',
                zIndex: 1,
                maxWidth: '1200px',
                padding: isMobile ? '40px 20px' : '80px 40px'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: isMobile ? 'center' : 'flex-start',
                    gap: isMobile ? '60px' : '40px',
                    marginBottom: '100px'
                }}>
                    <div style={{ textAlign: isMobile ? 'center' : 'left' }}>
                        <h2 style={{
                            fontFamily: 'Anton',
                            fontSize: 'clamp(2rem, 5vw, 4rem)',
                            textTransform: 'uppercase',
                            color: 'var(--text-primary)',
                            lineHeight: 1,
                            marginBottom: '20px'
                        }}>
                            Let's Make <br /> Magic Together
                        </h2>
                        <a href="mailto:sampritapatra123@gmail.com" style={{
                            fontSize: isMobile ? '1rem' : '1.4rem',
                            color: 'var(--accent)',
                            textDecoration: 'none',
                            fontWeight: '600',
                            borderBottom: '2px solid transparent',
                            transition: 'all 0.3s ease'
                        }}
                            onMouseOver={(e) => e.target.style.borderBottomColor = 'var(--accent)'}
                            onMouseOut={(e) => e.target.style.borderBottomColor = 'transparent'}
                        >
                            sampritapatra123@gmail.com
                        </a>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '30px',
                        alignItems: isMobile ? 'center' : 'flex-end'
                    }}>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            {[
                                { icon: <Linkedin size={22} />, url: 'https://www.linkedin.com/in/sampritapatra123' },
                                { icon: <Github size={22} />, url: 'https://github.com/samprita123' },
                                { icon: <Mail size={22} />, url: 'mailto:sampritapatra123@gmail.com' }
                            ].map((social, i) => (
                                <a key={i} href={social.url} target="_blank" rel="noreferrer" style={{
                                    width: '50px',
                                    height: '50px',
                                    borderRadius: '50%',
                                    border: '1px solid var(--glass-border)',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: 'var(--text-primary)',
                                    background: 'var(--bg-card)',
                                    transition: 'all 0.3s ease'
                                }}
                                    onMouseOver={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--accent)';
                                        e.currentTarget.style.color = '#000';
                                    }}
                                    onMouseOut={(e) => {
                                        e.currentTarget.style.backgroundColor = 'var(--bg-card)';
                                        e.currentTarget.style.color = 'var(--text-primary)';
                                    }}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>

                        <Link to="hero" smooth={true} duration={1000} style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontSize: '0.8rem',
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            cursor: 'pointer'
                        }}>
                            Back to top <ArrowUp size={16} />
                        </Link>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid var(--glass-border)',
                    paddingTop: '30px',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '20px',
                    color: 'var(--text-secondary)',
                    fontSize: '0.8rem'
                }}>
                    <p>&copy; 2026 SAMPRITA PATRA. ALL RIGHTS RESERVED.</p>
                    <p style={{ letterSpacing: '2px' }}>DESIGNED BY Sam with ❤️</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
