import { useState } from 'react';
import { motion } from 'framer-motion';

const SamimiyetOlcer = () => {
    const [status, setStatus] = useState('idle'); // idle, scanning, result
    const [score, setScore] = useState(0);

    const handleScan = () => {
        setStatus('scanning');
        // Fake processing time
        setTimeout(() => {
            const randomScore = Math.floor(Math.random() * 20) + 80; // Always high sincerity for our users :)
            setScore(randomScore);
            setStatus('result');
        }, 2000);
    };

    const reset = () => setStatus('idle');

    return (
        <div style={{
            background: 'rgba(0,0,0,0.2)',
            borderRadius: '16px',
            padding: '2rem',
            textAlign: 'center',
            backdropFilter: 'blur(5px)',
            border: '1px solid rgba(255,255,255,0.1)',
            maxWidth: '400px',
            margin: '2rem auto'
        }}>
            <h3 style={{ marginBottom: '1rem', color: '#fff' }}>🤖 Samimiyet-Ölçer v1.0</h3>

            {status === 'idle' && (
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleScan}
                    style={{
                        padding: '1rem 2rem',
                        fontSize: '1.2rem',
                        background: 'linear-gradient(135deg, #FF00FF, #800080)',
                        border: 'none',
                        borderRadius: '30px',
                        color: 'white',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 15px rgba(255, 0, 255, 0.4)',
                        cursor: 'pointer'
                    }}
                >
                    Ölçüm Yap
                </motion.button>
            )}

            {status === 'scanning' && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                        style={{
                            width: '50px',
                            height: '50px',
                            border: '4px solid rgba(255,255,255,0.3)',
                            borderTop: '4px solid #FF00FF',
                            borderRadius: '50%'
                        }}
                    />
                    <p style={{ color: '#eee' }}>Kalp ritmi taranıyor...</p>
                </div>
            )}

            {status === 'result' && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                >
                    <div style={{ fontSize: '4rem', fontWeight: 'bold', color: '#fff' }}>
                        %{score}
                    </div>
                    <p style={{ color: '#eee', marginBottom: '1.5rem' }}>
                        {score > 90 ? 'Mâşallah! Nur yüzlü bir insansınız.' : 'Gayet iyi, ama biraz daha tebessüm!'}
                    </p>
                    <button
                        onClick={reset}
                        style={{ background: 'transparent', border: '1px solid white', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', cursor: 'pointer' }}
                    >
                        Tekrar Dene
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default SamimiyetOlcer;
