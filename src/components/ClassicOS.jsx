import { useState } from 'react';
import { User, Folder, Briefcase, Mail, X, Minus, Square } from 'lucide-react';

export default function ClassicOS() {
  const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState(null);

  const desktopIcons = [
    { id: 'about', label: 'Sobre Mí', icon: <User size={32} /> },
    { id: 'projects', label: 'Proyectos', icon: <Folder size={32} /> },
    { id: 'skills', label: 'Habilidades', icon: <Briefcase size={32} /> },
    { id: 'contact', label: 'Contacto', icon: <Mail size={32} /> },
  ];

  const windowContent = {
    about: (
      <div>
        <h3>Hola, soy un Desarrollador.</h3>
        <p>Bienvenido a mi portfolio interactivo.</p>
        <p>Tengo experiencia creando aplicaciones web modernas con React, Node.js y mucho más.</p>
        <img src="https://via.placeholder.com/150" alt="Profile" style={{marginTop: '10px'}} />
      </div>
    ),
    projects: (
      <ul>
        <li><strong>App Retro:</strong> Un clon de un sistema operativo antiguo.</li>
        <li><strong>E-commerce:</strong> Tienda virtual con carrito de compras.</li>
        <li><strong>Juego 2D:</strong> Un juego plataformero hecho en HTML5.</li>
      </ul>
    ),
    skills: (
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <span className="retro-button">JavaScript</span>
        <span className="retro-button">React</span>
        <span className="retro-button">CSS/HTML</span>
        <span className="retro-button">Node.js</span>
      </div>
    ),
    contact: (
      <form style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        <label>Email: <input type="text" style={{width: '100%'}} /></label>
        <label>Mensaje: <textarea style={{width: '100%', height: '60px'}}></textarea></label>
        <button type="button" className="retro-button" style={{width: '100px'}}>Enviar</button>
      </form>
    )
  };

  const openWindow = (id) => {
    if (!windows.find(w => w.id === id)) {
      setWindows([...windows, { id, title: desktopIcons.find(i => i.id === id).label, x: 50 + windows.length * 20, y: 50 + windows.length * 20 }]);
    }
    setActiveWindow(id);
  };

  const closeWindow = (id) => {
    setWindows(windows.filter(w => w.id !== id));
    if (activeWindow === id) setActiveWindow(null);
  };

  return (
    <div className="classic-desktop">
      {/* Desktop Icons */}
      <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexWrap: 'wrap', height: 'calc(100% - 30px)' }}>
        {desktopIcons.map(icon => (
          <div 
            key={icon.id} 
            className="desktop-icon"
            onDoubleClick={() => openWindow(icon.id)}
            onTouchEnd={() => openWindow(icon.id)}
          >
            {icon.icon}
            <span>{icon.label}</span>
          </div>
        ))}
      </div>

      {/* Windows */}
      {windows.map(win => (
        <div 
          key={win.id} 
          className="classic-window" 
          style={{ 
            left: win.x, 
            top: win.y, 
            zIndex: activeWindow === win.id ? 100 : 10,
            width: '350px'
          }}
          onClick={() => setActiveWindow(win.id)}
        >
          <div className="window-titlebar">
            <span>{win.title}</span>
            <div style={{ display: 'flex', gap: '2px' }}>
              <div className="window-close"><Minus size={10} /></div>
              <div className="window-close"><Square size={8} /></div>
              <div className="window-close" onClick={(e) => { e.stopPropagation(); closeWindow(win.id); }}><X size={12} /></div>
            </div>
          </div>
          <div className="window-content">
            {windowContent[win.id]}
          </div>
        </div>
      ))}

      {/* Taskbar */}
      <div className="taskbar">
        <div className="start-button">
          <img src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Windows_logo_-_1992.svg" alt="Start" style={{width: '16px', marginRight: '4px'}} />
          Inicio
        </div>
        <div style={{display: 'flex'}}>
          {windows.map(win => (
            <div 
              key={win.id} 
              className={`taskbar-item ${activeWindow === win.id ? 'active' : ''}`}
              onClick={() => setActiveWindow(win.id)}
            >
              {win.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
