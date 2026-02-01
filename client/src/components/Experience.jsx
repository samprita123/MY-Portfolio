import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import zidioLogo from '../assets/zidio_logo.png';
import cttcLogo from '../assets/cttc_logo.png';
import ocacLogo from '../assets/ocac_logo.png';
import drdoLogo from '../assets/drdo.jpg';

import { useMobile } from '../hooks/useMobile';

const Experience = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const isMobile = useMobile();

    const jobs = [
        {
            company: "DRDO",
            role: "Research Intern",
            date: "Oct 2025 – Apr 2026",
            location: "Onsite",
            logo: drdoLogo,
            points: [
                "Developed an interactive firing scheduling webpage for CNSG department.",
                "Applied Operations Research techniques (LP, simulation) to improve efficiency by 30%.",
                "Implemented computer vision-based automation reducing system response time by 18%."
            ]
        },
        {
            company: "Zidio",
            role: "Web Dev Intern",
            date: "Mar 2025 – Jul 2025",
            location: "Remote",
            logo: zidioLogo,
            points: [
                "Built full-stack MERN applications and integrated 10+ REST APIs.",
                "Developed responsive React UI for web and mobile.",
                "Reduced page load time by 20%."
            ]
        },
        {
            company: "CTTC",
            role: "AI/ML Intern",
            date: "Jul 2024 – Aug 2024",
            location: "Onsite",
            logo: cttcLogo,
            points: [
                "Built ML models with optimized preprocessing reducing manual labeling by 60%.",
                "Deployed models via web UI for real-time inference, cutting latency by 30%."
            ]
        },
        {
            company: "OCAC",
            role: "Core Java Intern",
            date: "Jun 2023 – Jul 2023",
            location: "Onsite",
            logo: ocacLogo,
            points: [
                "Built ATM transaction system and CRM system using Java and MySQL.",
                "Managed 1,000+ customer records with CRUD operations."
            ]
        }
    ];

    const renderCompanyLogo = (job) => {
        if (job.logo) {
            return (
                <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '16px',
                    background: '#fff', // White background for logos usually looks cleaner
                    border: '1px solid var(--glass-border)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '8px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    overflow: 'hidden'
                }}>
                    <img src={job.logo} alt={job.company} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
            );
        }
        return (
            <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '16px',
                background: 'var(--bg-card)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: 'var(--accent)',
                fontFamily: 'Anton',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}>
                {job.company.substring(0, 1)}
            </div>
        );
    };

    return (
        <section id="experience" style={{ padding: isMobile ? '60px 0' : '80px 0', background: 'var(--bg-dark)' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <p style={{ color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '4px', fontSize: '0.8rem', marginBottom: '20px', textAlign: 'center' }}>
                    Career Path
                </p>
                <h2 style={{
                    fontFamily: 'Anton',
                    fontSize: 'clamp(40px, 8vw, 100px)',
                    textTransform: 'uppercase',
                    marginBottom: isMobile ? '50px' : '100px',
                    textAlign: 'center',
                    lineHeight: 1
                }}>
                    Professional Journey
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '40px' : '60px' }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: isMobile ? '30px' : '40px',
                        width: '100%'
                    }}>
                        {/* Education Block - Left Column */}
                        <div style={{
                            flex: isMobile ? 'none' : '0 0 250px',
                            marginBottom: isMobile ? '30px' : '0'
                        }}>
                            <div style={{
                                padding: '30px',
                                background: 'linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
                                borderRadius: '24px',
                                border: '1px solid var(--glass-border)',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center'
                            }}>
                                <h4 style={{
                                    color: 'var(--accent)',
                                    fontSize: '0.9rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    marginBottom: '20px',
                                    fontWeight: 'bold',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px'
                                }}>
                                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent)' }}></span>
                                    Education
                                </h4>

                                <div>
                                    <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', fontWeight: 'bold' }}>GIFT Autonomous</h3>
                                    <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '5px' }}>Bhubaneswar</p>
                                    <p style={{ fontSize: '1rem', color: '#fff', marginBottom: '15px' }}>B.Tech in CSE (AI)</p>
                                    <p style={{
                                        fontSize: '0.9rem',
                                        color: 'var(--accent)',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        display: 'inline-block',
                                        padding: '5px 12px',
                                        borderRadius: '12px',
                                        marginBottom: '15px'
                                    }}>
                                        Aug 2022 – Mar 2026
                                    </p>
                                    <div style={{ paddingTop: '15px', borderTop: '1px solid var(--glass-border)' }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>
                                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>CGPA</span>
                                            <span style={{ fontSize: '1rem', fontWeight: 'bold', color: '#fff' }}>9.1/10</span>
                                        </div>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Rank</span>
                                            <span style={{ fontSize: '0.9rem', fontWeight: 'bold', color: 'var(--accent)' }}>2nd in CS Dept.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabs List - Middle Column */}
                        <div style={{
                            flex: isMobile ? 'none' : '0 0 200px',
                            borderLeft: isMobile ? 'none' : '1px solid var(--glass-border)',
                            borderRight: isMobile ? 'none' : '1px solid var(--glass-border)',
                            borderBottom: isMobile ? '1px solid var(--glass-border)' : 'none',
                            display: 'flex',
                            flexDirection: isMobile ? 'row' : 'column',
                            overflowX: isMobile ? 'auto' : 'visible',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            padding: isMobile ? '10px 0' : '0 20px',
                            gap: isMobile ? '20px' : '0',
                            WebkitOverflowScrolling: 'touch',
                            marginRight: isMobile ? '0' : '30px'
                        }}>
                            {jobs.map((job, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedTab(index)}
                                    style={{
                                        display: 'block',
                                        width: isMobile ? 'auto' : '100%',
                                        padding: isMobile ? '12px 25px' : '20px 20px',
                                        background: selectedTab === index ? 'var(--bg-card)' : 'transparent',
                                        border: 'none',
                                        borderRadius: isMobile ? '20px' : '12px',
                                        textAlign: isMobile ? 'center' : 'left',
                                        color: selectedTab === index ? 'var(--text-primary)' : 'var(--text-secondary)',
                                        fontFamily: 'Inter, sans-serif',
                                        fontSize: '0.9rem',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        fontWeight: selectedTab === index ? '600' : '400',
                                        whiteSpace: 'nowrap',
                                        flexShrink: 0,
                                        marginBottom: isMobile ? '0' : '10px',
                                        borderLeft: !isMobile && selectedTab === index ? '3px solid var(--accent)' : '3px solid transparent'
                                    }}
                                >
                                    {job.company}
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div style={{ flex: 1, minHeight: isMobile ? 'auto' : '400px' }}>
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={selectedTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <div style={{ display: 'flex', gap: '25px', alignItems: 'flex-start', marginBottom: '30px' }}>
                                        {renderCompanyLogo(jobs[selectedTab])}
                                        <div>
                                            <h3 style={{ fontSize: isMobile ? '1.8rem' : '2.5rem', marginBottom: '5px', fontWeight: '600', letterSpacing: '-0.02em', color: 'var(--text-primary)', lineHeight: 1.2 }}>
                                                {jobs[selectedTab].role}
                                            </h3>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
                                                <span style={{ color: 'var(--accent)', fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: '500' }}>@ {jobs[selectedTab].company}</span>
                                                <div style={{
                                                    padding: '4px 12px',
                                                    borderRadius: '20px',
                                                    border: '1px solid var(--glass-border)',
                                                    fontSize: '0.75rem',
                                                    textTransform: 'uppercase',
                                                    letterSpacing: '1px',
                                                    color: 'var(--text-secondary)',
                                                    background: 'var(--bg-card)'
                                                }}>
                                                    {jobs[selectedTab].location}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{ marginBottom: '30px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                                        {jobs[selectedTab].date}
                                    </div>

                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {jobs[selectedTab].points.map((point, i) => (
                                            <li key={i} style={{
                                                marginBottom: '20px',
                                                display: 'flex',
                                                gap: '15px',
                                                color: 'var(--text-secondary)',
                                                fontSize: isMobile ? '0.95rem' : '1.1rem',
                                                lineHeight: '1.6'
                                            }}>
                                                <span style={{ color: 'var(--accent)', marginTop: '8px', fontSize: '1rem' }}>▹</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
