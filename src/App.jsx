import { useState, useEffect } from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import MulberryMenu from './components/MulberryMenu';
import SectionContainer from './components/SectionContainer';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';

// ... ScrollToTop component ... 
// (Assume I keep ScrollToTop code or just targeting where to insert footer in main app function)

// Let's target the App component's return statement specifically
// I'll reuse the existing logic but just adding Footer.

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'var(--color-primary)',
        color: 'white',
        border: 'none',
        fontSize: '1.5rem',
        cursor: 'pointer',
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0)',
        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        zIndex: 1000,
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      title="Back to Top"
    >
      ↑
    </button>
  );
};

function App() {
  const sections = ['haqq', 'aflam', 'l3b', 'tanzim', 'bidah', 'contact'];

  // Simple "Admin" routing check
  const isAdmin = window.location.pathname === '/admin';

  if (isAdmin) {
    return <AdminPanel />;
  }

  return (
    <LanguageProvider>
      <div className="app-container">

        {/* Fixed Background for Parallax Effect */}
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 50% 50%, var(--color-bg-teal) 0%, #76c7b7 100%)',
          zIndex: -2
        }}></div>

        {/* Floating Background Shapes */}
        <div className="parallax-shape shape-1"></div>
        <div className="parallax-shape shape-2"></div>

        <Header />

        <main>
          {/* Hero Section */}
          <div style={{ height: '100vh', width: '100%' }}>
            <MulberryMenu />
            {/* Scroll hint could go here with a bouncy down arrow */}
          </div>

          {/* Sections */}
          {sections.map(id => (
            <SectionContainer key={id} id={id} />
          ))}
        </main>

        <Footer />
        <ScrollToTop />

        <style>{`
          html {
            scroll-behavior: smooth;
          }
          
          .parallax-shape {
             position: fixed;
             background: rgba(128, 0, 128, 0.05); /* very faint purple */
             border-radius: 50%;
             z-index: -1;
             pointer-events: none;
             filter: blur(40px);
          }
          .shape-1 {
             width: 50vw;
             height: 50vw;
             top: -10%;
             left: -10%;
             animation: drift 20s infinite alternate;
          }
          .shape-2 {
             width: 40vw;
             height: 40vw;
             bottom: -10%;
             right: -10%;
             background: rgba(0, 255, 255, 0.05);
             animation: drift 25s infinite alternate-reverse;
          }
          @keyframes drift {
            from { transform: translate(0, 0); }
            to { transform: translate(50px, 30px); }
          }
        `}</style>
      </div>
    </LanguageProvider>
  );
}

export default App;
