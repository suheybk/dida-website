import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            background: '#4A148C', // Deep Purple
            color: 'white',
            padding: '4rem 2rem 2rem',
            marginTop: 'auto',
            position: 'relative',
            zIndex: 10
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '3rem'
            }}>
                {/* Column 1: DIDA */}
                <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>DIDA</h3>
                    <p style={{ opacity: 0.8, lineHeight: '1.6', marginBottom: '1rem' }}>
                        Dut Interdisciplinary Design Agency
                    </p>
                    <p style={{ opacity: 0.8, lineHeight: '1.6' }}>
                        Creating innovative design solutions since 2018.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li>About Us</li>
                        <li>Aflam</li>
                        <li>Bidah Innovations</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Column 3: Services */}
                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Services</h4>
                    <ul style={{ listStyle: 'none', padding: 0, opacity: 0.8, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li>Digital Design</li>
                        <li>Brand Identity</li>
                        <li>Media Production</li>
                        <li>Innovation Consulting</li>
                    </ul>
                </div>

                {/* Column 4: Newsletter */}
                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>Newsletter</h4>
                    <p style={{ opacity: 0.8, marginBottom: '1rem' }}>
                        Subscribe to our newsletter for the latest updates.
                    </p>
                    <div style={{ display: 'flex', background: 'white', borderRadius: '4px', overflow: 'hidden' }}>
                        <input
                            type="email"
                            placeholder="Your email"
                            style={{
                                border: 'none',
                                padding: '0.8rem',
                                flex: 1,
                                outline: 'none'
                            }}
                        />
                        <button style={{
                            background: '#9C27B0',
                            border: 'none',
                            padding: '0 1rem',
                            cursor: 'pointer',
                            color: 'white',
                            fontSize: '1.2rem'
                        }}>
                            →
                        </button>
                    </div>
                </div>
            </div>

            <div style={{
                borderTop: '1px solid rgba(255,255,255,0.1)',
                marginTop: '3rem',
                paddingTop: '2rem',
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                opacity: 0.6,
                fontSize: '0.9rem'
            }}>
                <div>© 2023 DIDA. All rights reserved.</div>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <span>Privacy Policy</span>
                    <span>Terms of Service</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
