import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
    const { setLanguage, language } = useLanguage();
    const [mood, setMood] = useState('fresh'); // fresh, dark

    useEffect(() => {
        const root = document.documentElement;
        // User Feedback: "Pembe fosforlu duruyor, düzeltelim."
        // New Palette: Sophisticated Dark. Deep Plum/Black bg, Lavender text, Gold accents.
        if (mood === 'dark') {
            root.style.setProperty('--color-bg-teal', '#150515'); // Very dark, almost black-purple
            root.style.setProperty('--color-text', '#E6E6FA'); // Lavender glow
            root.style.setProperty('--color-primary', '#9370DB'); // Medium Purple (muted)
            root.style.setProperty('--color-primary-dark', '#D8BFD8'); // Thistle (Light Purple/Gold-ish feel)
        } else {
            // Fresh (Original)
            root.style.setProperty('--color-bg-teal', '#A8E6CF');
            root.style.setProperty('--color-text', '#2C3E50');
            root.style.setProperty('--color-primary', '#800080'); // Original Purple
            root.style.setProperty('--color-primary-dark', '#4B0082');
        }
    }, [mood]);

    const toggleMood = () => {
        setMood(prev => prev === 'fresh' ? 'dark' : 'fresh');
    };

    const styles = {
        header: {
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            padding: '1rem 2rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            zIndex: 2000,
            pointerEvents: 'none',
            boxSizing: 'border-box'
        },
        langContainer: {
            pointerEvents: 'auto',
            display: 'flex',
            gap: '0.5rem',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            padding: '0.4rem',
            borderRadius: '50px',
            border: '1px solid rgba(255,255,255,0.2)'
        },
        button: {
            background: 'transparent',
            border: 'none',
            fontSize: '1.2rem',
            padding: '0.4rem',
            cursor: 'pointer',
            borderRadius: '50%',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--color-text)',
            pointerEvents: 'auto'
        },
        iconButton: {
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(4px)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: mood === 'dark' ? '#E6E6FA' : '#556B2F', // Lavender or Dark Green
            transition: 'all 0.3s ease',
            boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
            pointerEvents: 'auto',
            zIndex: 2001,
            position: 'relative'
        },
        active: {
            background: 'rgba(255,255,255,0.9)',
            color: '#333',
            transform: 'scale(1.1)',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)'
        }
    };

    return (
        <header style={styles.header}>
            {/* Mood Toggle - Minimalist Icons */}
            <div style={{ pointerEvents: 'auto', zIndex: 2001, position: 'relative' }}>
                <button onClick={toggleMood} style={styles.iconButton} title={mood === 'fresh' ? "Karanlık Mod" : "Aydınlık Mod"}>
                    {mood === 'fresh' ? (
                        // Minimal Sun Icon
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="5"></circle>
                            <line x1="12" y1="1" x2="12" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="23"></line>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                            <line x1="1" y1="12" x2="3" y2="12"></line>
                            <line x1="21" y1="12" x2="23" y2="12"></line>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                        </svg>
                    ) : (
                        // Minimal Moon Icon
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                    )}
                </button>
            </div>

            <div style={styles.langContainer}>
                <button
                    style={{ ...styles.button, ...(language === 'tr' ? styles.active : {}) }}
                    onClick={() => setLanguage('tr')}
                    title="Türkçe"
                >
                    🇹🇷
                </button>
                <button
                    style={{ ...styles.button, ...(language === 'ar' ? styles.active : {}) }}
                    onClick={() => setLanguage('ar')}
                    title="العربية"
                >
                    🇸🇦
                </button>
                <button
                    style={{ ...styles.button, ...(language === 'en' ? styles.active : {}) }}
                    onClick={() => setLanguage('en')}
                    title="English"
                >
                    🇺🇸
                </button>
            </div>
        </header>
    );
};

export default Header;
