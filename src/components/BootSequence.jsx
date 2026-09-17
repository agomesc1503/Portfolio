import { useState, useEffect } from 'react';

export default function BootSequence({ onComplete, theme, lang, t }) {
  const [lines, setLines] = useState([]);
  const bootText = t.boot;

  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootText.length) {
        const textToPush = bootText[currentLine];
        setLines(prev => [...prev, textToPush]);
        currentLine++;
      }
      
      if (currentLine >= bootText.length) {
        clearInterval(interval);
        setTimeout(onComplete, 1200);
      }
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete, bootText]);

  return (
    <div className="pro-terminal" style={{ zIndex: 100, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{ padding: '40px', fontFamily: 'var(--term-font)', fontSize: '18px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        {lines.map((line, i) => (
          <div key={i} className="terminal-line" style={{ color: (line?.includes('Evadiendo') || line?.includes('Bypassing')) ? 'var(--neon-magenta)' : 'var(--neon-cyan)' }}>
            {line}
          </div>
        ))}
        {lines.length < bootText.length && <div className="caret"></div>}
      </div>
    </div>
  );
}
