import { useState } from 'react';
import './index.css';
import CyberpunkOS from './components/CyberpunkOS';
import ProTerminal from './components/ProTerminal';
import BootSequence from './components/BootSequence';
import { translations } from './i18n';

function App() {
  const [theme, setTheme] = useState('cyberpunk'); // 'cyberpunk' or 'pro'
  const [lang, setLang] = useState('es'); // 'es' or 'en'
  const [booting, setBooting] = useState(true);

  const t = translations[lang];

  return (
    <div className={`app-container ${theme === 'pro' ? 'pro-mode' : 'cyber-mode'}`}>
      {!booting && (
        <div className="top-controls" style={{ position: 'absolute', top: '20px', right: '20px', zIndex: 10000, display: 'flex', gap: '15px' }}>
          
          <div className="theme-switch-container" style={{ position: 'relative', top: '0', right: '0' }}>
            <span style={{ cursor: 'pointer', opacity: lang === 'es' ? 1 : 0.5 }} onClick={() => setLang('es')}>ES</span>
            <span style={{ color: 'var(--neon-magenta)' }}>/</span>
            <span style={{ cursor: 'pointer', opacity: lang === 'en' ? 1 : 0.5 }} onClick={() => setLang('en')}>EN</span>
          </div>

          <div className={`theme-switch-container ${theme === 'pro' ? 'pro-theme' : ''}`} style={{ position: 'relative', top: '0', right: '0' }}>
            <span>{theme === 'cyberpunk' ? t.app.hologramUI : t.app.terminalUI}</span>
            <label className="switch">
              <input 
                type="checkbox" 
                checked={theme === 'pro'} 
                onChange={() => setTheme(theme === 'cyberpunk' ? 'pro' : 'cyberpunk')} 
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      )}

      {theme === 'pro' && <div className="crt-overlay crt-flicker"></div>}
      {booting && <div className="crt-overlay crt-flicker"></div>}
      
      {booting ? (
        <BootSequence onComplete={() => setBooting(false)} theme={theme} lang={lang} t={t} />
      ) : theme === 'cyberpunk' ? (
        <CyberpunkOS lang={lang} t={t} />
      ) : (
        <ProTerminal lang={lang} t={t} />
      )}
    </div>
  );
}

export default App;
