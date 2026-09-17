import { useState, useRef, useEffect } from 'react';

export default function ProTerminal({ lang, t }) {
  const [history, setHistory] = useState([
    { type: 'system', content: t.terminal.welcome },
    { type: 'system', content: t.terminal.hint }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);
  const term = t.terminal;

  const asciiArt = `
  ____  _             _          _    _       
 |  _ \\(_)           | |        (_)  | |      
 | |_) |_  ___ _ ____| |__  __ _ _ __| |__    
 |  _ <| |/ _ \\ '__\\ \\ / / / _\` | '__| '_ \\   
 | |_) | |  __/ |   \\ V / | (_| | |  | | | |  
 |____/|_|\\___|_|    \\_/   \\__,_|_|  |_| |_|  
  `;

  // Update welcome message if language changes
  useEffect(() => {
    setHistory(prev => [
      ...prev,
      { type: 'system', content: `[LANG_UPDATE] -> ${lang.toUpperCase()}` },
      { type: 'system', content: term.hint }
    ]);
  }, [lang]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmd) => {
    const trimmed = cmd.trim().toLowerCase();
    let response = [];

    switch(trimmed) {
      case 'help':
        response = term.help;
        break;
      case 'about':
        response = term.about;
        break;
      case 'projects':
        response = term.projects;
        break;
      case 'skills':
        response = term.skills;
        break;
      case 'contact':
        response = term.contact;
        break;
      case 'ascii':
        response = [asciiArt];
        break;
      case 'clear':
        setHistory([]);
        return;
      case '':
        return;
      default:
        response = [term.error.replace('{cmd}', trimmed)];
    }

    setHistory(prev => [
      ...prev,
      { type: 'user', content: `C:\\> ${cmd}` },
      ...response.map(r => ({ type: 'system', content: r }))
    ]);
  };

  const onKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(input);
      setInput('');
    }
  };

  return (
    <div className="pro-terminal crt-flicker" onClick={() => document.getElementById('term-input').focus()}>
      {history.map((entry, i) => (
        <div key={i} className="terminal-line" style={{ whiteSpace: entry.content.includes('____') ? 'pre' : 'pre-wrap', color: entry.content.includes('[LANG_UPDATE]') ? 'var(--neon-magenta)' : 'var(--term-text)' }}>
          {entry.content}
        </div>
      ))}
      <div className="terminal-prompt">
        <span>C:\&gt;&nbsp;</span>
        <input 
          id="term-input"
          type="text" 
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          autoFocus
          autoComplete="off"
          spellCheck="false"
        />
      </div>
      <div ref={endRef} />
    </div>
  );
}
