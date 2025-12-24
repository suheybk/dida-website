import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

const Grain = ({ item, onClick, isFunctional }) => (
    <motion.button
        className={`mulberry-grain ${isFunctional ? 'functional' : 'decorative'}`}
        layoutId={isFunctional ? `grain-${item.id}` : undefined}
        variants={{
            hidden: { scale: 0, opacity: 0, rotate: -180 },
            visible: { scale: 1, opacity: isFunctional ? 1 : 0.6, rotate: 0 }
        }}
        style={{
            backgroundColor: item.color,
            cursor: isFunctional ? 'pointer' : 'default',
        }}
        onClick={isFunctional ? onClick : undefined}
        aria-label={item.label || 'Decorative Grain'}
        disabled={!isFunctional}
        whileHover={isFunctional ? { scale: 1.2, rotate: 5, zIndex: 10 } : { scale: 1.05 }}
        whileTap={isFunctional ? { scale: 0.9 } : {}}
    >
        {isFunctional && (
            <span className="grain-label">
                {item.label}
            </span>
        )}

        {/* Shine effect */}
        <div style={{
            position: 'absolute',
            top: '15%',
            left: '15%',
            width: '25%',
            height: '25%',
            background: 'rgba(255,255,255,0.3)',
            borderRadius: '50%',
            pointerEvents: 'none'
        }}></div>
    </motion.button>
);

const MulberryMenu = () => {
    const { t } = useLanguage();

    // 13 Grains Total
    // 6 Functional items map
    const functionalItems = {
        haqq: { id: 'haqq', label: t('nav.haqq'), color: '#800080' },
        aflam: { id: 'aflam', label: t('nav.aflam'), color: '#8B008B' },
        l3b: { id: 'l3b', label: t('nav.l3b'), color: '#9932CC' },
        tanzim: { id: 'tanzim', label: t('nav.tanzim'), color: '#9400D3' },
        bidah: { id: 'bidah', label: t('nav.bidah'), color: '#BA55D3' },
        contact: { id: 'contact', label: t('nav.contact'), color: '#DA70D6' },
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Layout Mapping (User Requested):
    // R1: [Dec, Dec]
    // R2: [Dec, Dec, Haqq]
    // R3: [Aflam, Tanzim, L3B]
    // R4: [Dec, Bid'ah, Dec]
    // R5: [Contact, Dec]

    // Updating colors to be consistent purple/pink tones
    // Decorative items will just have opacity applied via CSS
    const grains = [
        // Row 1 (2 items)
        { type: 'dec', color: '#6A006A' },
        { type: 'dec', color: '#750075' },

        // Row 2 (3 items)
        { type: 'dec', color: '#660D66' },
        { type: 'dec', color: '#601060' },
        { type: 'func', ref: functionalItems.haqq },

        // Row 3 (3 items)
        { type: 'func', ref: functionalItems.aflam },
        { type: 'func', ref: functionalItems.tanzim },
        { type: 'func', ref: functionalItems.l3b },

        // Row 4 (3 items)
        { type: 'dec', color: '#700570' },
        { type: 'func', ref: functionalItems.bidah },
        { type: 'dec', color: '#851085' },

        // Row 5 (2 items)
        { type: 'func', ref: functionalItems.contact },
        { type: 'dec', color: '#550A55' },
    ];

    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            width: '100%',
            // No relative positioning here for elements inside, correct context is below
        },
        cluster: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '4px',
            position: 'relative', // Stem connects to this
            paddingTop: '10px' // Slight breathing room
        },
        row: {
            display: 'flex',
            gap: '4px',
            justifyContent: 'center'
        },
        stem: {
            width: '10px',
            height: '100px', // Doubled from 50px
            background: '#556B2F',
            borderRadius: '5px',
            position: 'absolute',
            // Adjusted top to maintain connection: 100px length - 15px overlap = 85px sticking out
            top: '-85px',
            left: '50%',
            marginLeft: '-5px',
            zIndex: -1,
            transform: 'rotate(15deg)',
            transformOrigin: 'bottom center'
        }
    };

    const renderGrain = (g, i) => {
        const item = g.type === 'func' ? g.ref : { color: g.color || '#800080', label: '' };
        return (
            <Grain
                key={i}
                item={item}
                isFunctional={g.type === 'func'}
                onClick={() => g.type === 'func' && scrollToSection(item.id)}
            />
        );
    };

    return (
        <div style={styles.container} className="mulberry-container">
            {/* Styles injected via index.css usually better but keeping here for scope */}
            <style>{`
        .mulberry-grain {
            width: 80px;
            height: 80px;
            border-radius: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            border: none;
            overflow: hidden;
            font-size: 0.9rem;
            font-weight: bold;
            text-shadow: 0 1px 2px rgba(0,0,0,0.5);
            padding: 2px;
            text-align: center;
            color: white;
            z-index: 1;
        }
        
        /* Floating logic handled by framer motion variants largely now, 
           or we can keep CSS float for idle state if we mix them 
        */
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(0.5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        .grain-label {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.3s, transform 0.3s;
        }
        .mulberry-grain:hover .grain-label {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 768px) {
           .mulberry-grain { width: 60px; height: 60px; border-radius: 18px; }
           .grain-label { opacity: 1; font-size: 0.65em; transform: none; }
        }
      `}</style>

            <motion.div
                style={styles.cluster}
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0 },
                    visible: {
                        opacity: 1,
                        transition: {
                            staggerChildren: 0.1,
                            delayChildren: 0.3
                        }
                    }
                }}
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    style={{
                        position: 'absolute',
                        top: '-160px', // Detailed positioning above the tall stem
                        width: '300px',
                        textAlign: 'center',
                        color: 'var(--color-primary-dark)',
                        fontSize: '1.2rem',
                        fontWeight: '300',
                        letterSpacing: '1px',
                        zIndex: 0,
                        textTransform: 'uppercase',
                        pointerEvents: 'none'
                    }}
                >
                    {t('agencyName')}
                </motion.h1>

                <motion.div
                    style={styles.stem}
                    initial={{ height: 0 }}
                    animate={{ height: 100 }}
                    transition={{ duration: 1, delay: 0.5, type: "spring" }}
                ></motion.div>

                {/* Row 1 */}
                <div style={styles.row}> {grains.slice(0, 2).map((g, i) => renderGrain(g, i))} </div>
                {/* Row 2 */}
                <div style={styles.row}> {grains.slice(2, 5).map((g, i) => renderGrain(g, i))} </div>
                {/* Row 3 */}
                <div style={styles.row}> {grains.slice(5, 8).map((g, i) => renderGrain(g, i))} </div>
                {/* Row 4 */}
                <div style={styles.row}> {grains.slice(8, 11).map((g, i) => renderGrain(g, i))} </div>
                {/* Row 5 */}
                <div style={styles.row}> {grains.slice(11, 13).map((g, i) => renderGrain(g, i))} </div>
            </motion.div>

        </div>
    );
};

export default MulberryMenu;
