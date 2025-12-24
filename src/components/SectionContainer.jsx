import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import SamimiyetOlcer from './SamimiyetOlcer';

const SectionContainer = ({ id }) => {
    const { t } = useLanguage();
    const content = t(`sections.${id}`);

    // Animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    const textVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 0.1, transition: { duration: 1.5 } }
    };

    return (
        <div
            id={id}
            style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem',
                boxSizing: 'border-box',
                position: 'relative',
                perspective: '1000px', // For 3D feel
                overflow: 'hidden' // Contain the watermark
            }}
        >
            {/* Huge Watermark Title - Background */}
            <motion.h1
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
                variants={textVariants}
                style={{
                    position: 'absolute',
                    fontSize: '15vw', // Massive responsive size
                    fontWeight: '900',
                    color: 'var(--color-primary-dark)',
                    zIndex: -1,
                    whiteSpace: 'nowrap',
                    pointerEvents: 'none',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}
            >
                {id.toUpperCase()}
            </motion.h1>

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={cardVariants}
                style={{
                    background: 'rgba(255, 255, 255, 0.6)', // Lighter, more glass
                    backdropFilter: 'blur(20px) saturate(180%)', // Premium blur
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    borderRadius: '24px',
                    padding: '4rem',
                    maxWidth: '1200px',
                    width: '100%',
                    boxShadow: '0 20px 50px rgba(0,0,0,0.1)', // Soft deep shadow
                    border: '1px solid rgba(255,255,255,0.6)', // Shining border
                    borderTop: '1px solid rgba(255,255,255,0.9)', // Top light catch
                    position: 'relative',
                    overflow: 'hidden' // Ensure children don't overflow corners
                }}
            >
                {/* Subtle shine on card */}
                <div style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)'
                }}></div>

                <h2 style={{
                    fontSize: '3.5rem',
                    marginBottom: '1.5rem',
                    color: '#4A148C',
                    textAlign: 'center',
                    fontWeight: '800',
                    letterSpacing: '-1px'
                }}>
                    {content.title}
                </h2>

                <div style={{ fontSize: '1.2rem', lineHeight: '1.6', color: 'var(--color-text)', maxWidth: '1200px', margin: '0 auto' }}>

                    {/* Intro Description */}
                    <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '800px', margin: '0 auto 3rem' }}>
                        {content.description}
                    </div>

                    {/* DYNAMIC CONTENT RENDERING BASED ON DATA EXISTENCE */}

                    {/* 1. Projects Grid (Aflam) */}
                    {content.projects && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                            {content.projects.map((project, i) => (
                                <div key={i} style={{
                                    background: 'white',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'pointer'
                                }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    {/* Card Header / Image Placeholder */}
                                    <div style={{
                                        height: '200px',
                                        background: project.color || '#E6E6FA',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '3rem',
                                        color: '#555'
                                    }}>
                                        {/* Simple Emoji Icons as placeholders for generic icons */}
                                        {project.icon === 'camera' && '🎥'}
                                        {project.icon === 'film' && '🎞️'}
                                        {project.icon === 'play' && '▶️'}
                                    </div>
                                    <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h3 style={{ color: '#4B0082', margin: '0 0 1rem', fontSize: '1.5rem' }}>{project.title}</h3>
                                        <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: 'auto' }}>{project.description}</p>
                                        <div style={{ marginTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.8rem', fontWeight: 'bold' }}>
                                            <span style={{ color: '#9370DB' }}>{project.genre}</span>
                                            <span style={{ color: '#aaa' }}>{project.year}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* 2. Service Card (Haqq, L3B, Aflam) */}
                    {content.service && (
                        <div style={{
                            background: 'white',
                            padding: '3rem',
                            borderRadius: '24px',
                            textAlign: 'center',
                            boxShadow: '0 10px 40px rgba(0,0,0,0.05)',
                            maxWidth: '600px',
                            margin: '0 auto 3rem',
                            borderTop: '5px solid #9370DB'
                        }}>
                            <div style={{
                                width: '80px', height: '80px', background: '#F3E5F5',
                                borderRadius: '50%', margin: '0 auto 1.5rem',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                fontSize: '2.5rem', color: '#8E24AA'
                            }}>
                                {content.service.icon === 'monitor' && '💻'}
                                {content.service.icon === 'palette' && '🎨'}
                                {content.service.icon === 'video' && '📹'}
                            </div>
                            <h3 style={{ color: '#4A148C', fontSize: '1.8rem', marginBottom: '1rem' }}>{content.service.title}</h3>
                            <p style={{ color: '#555', marginBottom: '2rem' }}>{content.service.description}</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', alignItems: 'flex-start', paddingLeft: '20%' }}>
                                {content.service.features && content.service.features.map((f, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <span style={{ color: '#9C27B0' }}>✓</span>
                                        <span style={{ color: '#333', fontWeight: '500' }}>{f}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* 3. Innovation Process & Layout (Bidah) */}
                    {content.process && (
                        <div style={{ marginBottom: '4rem' }}>
                            <h3 style={{ textAlign: 'center', color: '#4A148C', marginBottom: '2rem' }}>Innovation Process</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                                {content.process.map((step, i) => (
                                    <div key={i} style={{
                                        flex: '1 1 200px',
                                        background: '#F8F9FA',
                                        padding: '1.5rem',
                                        borderRadius: '16px',
                                        textAlign: 'center'
                                    }}>
                                        <div style={{ width: '40px', height: '40px', background: '#8E24AA', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontWeight: 'bold' }}>{i + 1}</div>
                                        <strong style={{ display: 'block', color: '#333', marginBottom: '0.5rem' }}>{step.step}</strong>
                                        <p style={{ fontSize: '0.85rem', color: '#666', margin: 0 }}>{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {content.innovations && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            {content.innovations.map((inn, i) => (
                                <div key={i} style={{ background: 'white', padding: '2rem', borderRadius: '20px', boxShadow: '0 5px 20px rgba(0,0,0,0.05)', border: '1px solid #E1BEE7' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                        <div style={{ background: '#F3E5F5', padding: '0.8rem', borderRadius: '12px', fontSize: '1.5rem' }}>
                                            {inn.icon === 'leaf' ? '🌿' : '👁️'}
                                        </div>
                                        <h3 style={{ margin: 0, color: '#4A148C' }}>{inn.title}</h3>
                                    </div>
                                    <p style={{ color: '#666', fontSize: '0.95rem', lineHeight: '1.6' }}>{inn.description}</p>
                                    <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.5rem' }}>
                                        <span style={{ background: '#E1BEE7', color: '#4A148C', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>{inn.tag}</span>
                                        <span style={{ background: '#F1F8E9', color: '#558B2F', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>{inn.subTag}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}


                    {/* 4. Contact Form Layout (Contact) */}
                    {id === 'contact' && content.fields && (
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', background: '#F3E5F5', padding: '3rem', borderRadius: '24px' }}>
                            {/* Form */}
                            <div style={{ background: 'white', padding: '2rem', borderRadius: '16px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ color: '#4A148C', marginBottom: '1.5rem' }}>Get in Touch</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    <input type="text" placeholder={content.fields.name} style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', background: '#FCFCFC' }} />
                                    <input type="email" placeholder={content.fields.email} style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', background: '#FCFCFC' }} />
                                    <input type="text" placeholder={content.fields.subject} style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', background: '#FCFCFC' }} />
                                    <textarea rows={4} placeholder={content.fields.message} style={{ padding: '1rem', borderRadius: '8px', border: '1px solid #ddd', background: '#FCFCFC' }}></textarea>
                                    <button style={{
                                        padding: '1rem', background: '#8E24AA', color: 'white', border: 'none', borderRadius: '8px',
                                        fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer', marginTop: '1rem'
                                    }}>{content.fields.btn}</button>
                                </div>
                            </div>

                            {/* Info */}
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <div style={{ marginBottom: '2rem' }}>
                                    <h4 style={{ color: '#4A148C', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Visit Us</h4>
                                    <p style={{ color: '#555' }}>📍 {content.info?.address}</p>
                                </div>
                                <div style={{ marginBottom: '2rem' }}>
                                    <h4 style={{ color: '#4A148C', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Contact</h4>
                                    <p style={{ color: '#555' }}>📧 {content.info?.email}</p>
                                    <p style={{ color: '#555' }}>📞 {content.info?.phone}</p>
                                </div>
                                <div>
                                    <h4 style={{ color: '#4A148C', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Connect</h4>
                                    <div style={{ display: 'flex', gap: '1rem', fontSize: '1.5rem' }}>
                                        <span>🟣</span> <span>📷</span> <span>🐦</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Specific Components (kept specific to Bid'ah unique widget if any) */}
                    {id === 'bidah' && !content.process && (
                        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '2rem', justifyContent: 'center' }}>
                            <SamimiyetOlcer />
                        </div>
                    )}

                </div>
            </motion.div>
        </div>
    );
};

export default SectionContainer;
