import React, { useState } from 'react';
import { dictionary as initialDictionary } from '../locales/dictionary';

const AdminPanel = () => {
    const [content, setContent] = useState(initialDictionary);
    const [copied, setCopied] = useState(false);

    // Flatten logic could go here but let's just iterate deeply for simplicity or specific sections
    const languages = Object.keys(content);
    const sections = Object.keys(content.en.sections);

    const handleChange = (lang, section, field, value) => {
        setContent(prev => ({
            ...prev,
            [lang]: {
                ...prev[lang],
                sections: {
                    ...prev[lang].sections,
                    [section]: {
                        ...prev[lang].sections[section],
                        [field]: value
                    }
                }
            }
        }));
    };

    const handleCopy = () => {
        const text = `export const dictionary = ${JSON.stringify(content, null, 2)};`;
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div style={{ padding: '2rem', background: '#f5f5f5', minHeight: '100vh', color: '#333', fontFamily: 'monospace' }}>
            <h1>🛠️ DIDA İçerik Yönetim Paneli (Admin)</h1>
            <p style={{ marginBottom: '2rem', background: '#e0e0e0', padding: '1rem', borderRadius: '8px' }}>
                <strong>Nasıl Kullanılır:</strong> Aşağıdaki alanları doldurun. İşiniz bitince en alttaki "Kopyala" butonuna basın.
                Kopyalanan kodu projedeki <code>src/locales/dictionary.js</code> dosyasına yapıştırın.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {languages.map(lang => (
                    <div key={lang} style={{ background: 'white', padding: '1rem', borderRadius: '8px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                        <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '0.5rem' }}>
                            {lang.toUpperCase()} Dil Seçenekleri
                        </h2>

                        <div style={{ marginTop: '1rem' }}>
                            <label style={{ display: 'block', fontWeight: 'bold' }}>Ajans İsmi (Başlık):</label>
                            <input
                                type="text"
                                value={content[lang].agencyName || ''}
                                onChange={(e) => setContent(prev => ({
                                    ...prev,
                                    [lang]: {
                                        ...prev[lang],
                                        agencyName: e.target.value
                                    }
                                }))}
                                style={{ padding: '0.5rem', border: '1px solid #ddd', width: '100%', marginTop: '0.5rem' }}
                            />
                        </div>

                        {sections.map(section => (
                            <div key={section} style={{ marginTop: '1.5rem' }}>
                                <h3 style={{ color: '#666' }}>{section.toUpperCase()}</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label>Başlık:</label>
                                    <input
                                        type="text"
                                        value={content[lang].sections[section].title}
                                        onChange={(e) => handleChange(lang, section, 'title', e.target.value)}
                                        style={{ padding: '0.5rem', border: '1px solid #ddd', width: '100%' }}
                                    />
                                    <label>Açıklama:</label>
                                    <textarea
                                        rows={4}
                                        value={content[lang].sections[section].description}
                                        onChange={(e) => handleChange(lang, section, 'description', e.target.value)}
                                        style={{ padding: '0.5rem', border: '1px solid #ddd', width: '100%' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>

            <div style={{ position: 'sticky', bottom: '2rem', textAlign: 'center', marginTop: '3rem' }}>
                <button
                    onClick={handleCopy}
                    style={{
                        padding: '1rem 3rem',
                        fontSize: '1.5rem',
                        background: copied ? '#4CAF50' : '#2196F3',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        cursor: 'pointer',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
                    }}
                >
                    {copied ? 'Kopyalandı! ✅' : 'Ayarları Kopyala 📋'}
                </button>
            </div>
        </div>
    );
};

export default AdminPanel;
