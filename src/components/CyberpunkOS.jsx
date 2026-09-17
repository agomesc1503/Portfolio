import { useState } from 'react';
import { User, Folder, Cpu, Mail, TerminalSquare } from 'lucide-react';

export default function CyberpunkOS({ lang, t }) {
  const [activePanel, setActivePanel] = useState('about');
  const c = t.cyber;

  const menuItems = [
    { id: 'about', label: c.menu.about, icon: <User size={28} /> },
    { id: 'projects', label: c.menu.projects, icon: <Folder size={28} /> },
    { id: 'skills', label: c.menu.skills, icon: <Cpu size={28} /> },
    { id: 'contact', label: c.menu.contact, icon: <Mail size={28} /> },
  ];

  const renderContent = () => {
    switch (activePanel) {
      case 'about':
        return (
          <div className="hologram-content">
            <h3>{c.about.title}</h3>
            <p>{c.about.scanning}</p>
            <p>{c.about.granted}</p>
            <br />
            
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
              <div style={{ 
                width: '150px', 
                height: '150px', 
                border: '2px solid var(--neon-cyan)', 
                boxShadow: '0 0 15px rgba(0, 243, 255, 0.3)',
                position: 'relative',
                flexShrink: 0,
                background: 'rgba(0,0,0,0.5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <span style={{ fontSize: '10px', color: 'var(--neon-cyan)', position: 'absolute', textAlign: 'center', padding: '10px' }}>
                  Añade tu foto como 'profile.jpg' en la carpeta public/
                </span>
                <img 
                  src="/profile.jpg" 
                  alt="Profile" 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'relative', zIndex: 10 }}
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              
              <div style={{ flex: 1, minWidth: '250px' }}>
                <p style={{ lineHeight: '1.6' }}>{c.about.desc}</p>
                <div style={{ marginTop: '20px', padding: '15px', borderLeft: '4px solid var(--neon-magenta)', background: 'rgba(255, 0, 234, 0.05)' }}>
                  {c.about.quote}
                </div>
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div className="hologram-content">
            <h3>{c.projects.title}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
              <div style={{ padding: '15px', border: '1px solid rgba(0,243,255,0.3)', background: 'rgba(0,0,0,0.5)' }}>
                <h4 style={{ color: 'var(--neon-cyan)', marginBottom: '5px' }}>{c.projects.p1.title}</h4>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>{c.projects.p1.sub}</p>
                <p style={{ marginTop: '10px' }}>{c.projects.p1.desc}</p>
              </div>
              <div style={{ padding: '15px', border: '1px solid rgba(0,243,255,0.3)', background: 'rgba(0,0,0,0.5)' }}>
                <h4 style={{ color: 'var(--neon-cyan)', marginBottom: '5px' }}>{c.projects.p2.title}</h4>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.7)' }}>{c.projects.p2.sub}</p>
                <p style={{ marginTop: '10px' }}>{c.projects.p2.desc}</p>
              </div>
            </div>
          </div>
        );
      case 'skills':
        return (
          <div className="hologram-content">
            <h3>{c.skills.title}</h3>
            <p style={{ marginBottom: '20px' }}>{c.skills.desc}</p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <span className="cyber-button">JavaScript ES6+</span>
              <span className="cyber-button">React.js</span>
              <span className="cyber-button magenta">Node.js</span>
              <span className="cyber-button">CSS3 / HTML5</span>
              <span className="cyber-button magenta">SQL / NoSQL</span>
              <span className="cyber-button">Git</span>
            </div>
          </div>
        );
      case 'contact':
        return (
          <div className="hologram-content">
            <h3>{c.contact.title}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginTop: '30px' }}>
              
              <div style={{ padding: '15px', borderLeft: '2px solid var(--neon-cyan)', background: 'rgba(0,243,255,0.05)' }}>
                <div style={{ color: 'var(--neon-magenta)', fontSize: '14px', marginBottom: '5px' }}>
                  {c.contact.emailLabel}
                </div>
                <div style={{ fontSize: '20px', color: '#fff', marginBottom: '15px' }}>
                  {c.contact.emailValue}
                </div>
                <button className="cyber-button" onClick={() => window.location.href = `mailto:${c.contact.emailValue}`}>
                  {c.contact.connect}
                </button>
              </div>

              <div style={{ padding: '15px', borderLeft: '2px solid var(--neon-cyan)', background: 'rgba(0,243,255,0.05)' }}>
                <div style={{ color: 'var(--neon-magenta)', fontSize: '14px', marginBottom: '5px' }}>
                  {c.contact.linkLabel}
                </div>
                <div style={{ fontSize: '20px', color: '#fff', marginBottom: '15px' }}>
                  {c.contact.linkValue}
                </div>
                <button className="cyber-button" onClick={() => window.open(`https://${c.contact.linkValue}`, '_blank')}>
                  {c.contact.connect}
                </button>
              </div>

            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const activeItem = menuItems.find(m => m.id === activePanel);

  return (
    <div className="cyber-desktop">
      <div className="cyber-grid"></div>

      <div className="cyber-sidebar">
        {menuItems.map(item => (
          <div 
            key={item.id}
            className={`cyber-icon ${activePanel === item.id ? 'active' : ''}`}
            onClick={() => setActivePanel(item.id)}
          >
            {item.icon}
            <span style={{ marginTop: '8px' }}>{item.label}</span>
          </div>
        ))}
      </div>

      <div className="hologram-panel-container">
        <div key={activePanel + lang} className="hologram-panel">
          <div className="hologram-header">
            <div className="hologram-title">
              <TerminalSquare size={24} />
              {activeItem?.label}
            </div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontFamily: 'monospace' }}>
              SECURE_LINK // {activePanel.toUpperCase()}
            </div>
          </div>
          
          {renderContent()}
        </div>
      </div>
    </div>
  );
}
