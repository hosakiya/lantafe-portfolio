import React, { useState, useRef, useEffect } from 'react';

export const MiniTerminal = () => {
  const [history, setHistory] = useState([
    { type: 'output', text: 'Welcome to Mikaela OS v1.0.0' },
    { type: 'output', text: 'Type "help" to see available commands.' }
  ]);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  const commands = {
    help: 'Available commands: about, projects, skills, contact, clear',
    about: 'Mikaela Ysabel Lantafe is a BSIT student specializing in UI/UX & Web Dev.',
    projects: 'Featured: iskoMats, Tsong-Mex Taqueria, CSJ Pet Grooming.',
    skills: 'UI/UX Design, Front-End React/Vite, IT Support & Troubleshooting.',
    contact: 'Email: mikyla0888@gmail.com | LinkedIn: /in/mikaela-ysabel-lantafe-159163352/',
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let output = '';
      
      if (cmd === 'clear') {
        setHistory([]);
        setInput('');
        return;
      } else if (commands[cmd]) {
        output = commands[cmd];
      } else if (cmd !== '') {
        output = `Command not found: ${cmd}. Type "help" for a list of commands.`;
      }

      if (cmd !== '') {
        setHistory(prev => [
          ...prev, 
          { type: 'input', text: `guest@portfolio:~$ ${cmd}` },
          { type: 'output', text: output }
        ]);
      }
      setInput('');
    }
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="w-full max-w-lg mx-auto bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800 shadow-2xl font-mono text-xs sm:text-sm text-left">
      <div className="bg-neutral-900 px-4 py-2 flex items-center gap-2 border-b border-neutral-800 shrink-0">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
        <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
        <span className="text-neutral-500 ml-2 text-[10px] sm:text-xs">bash — terminal</span>
      </div>
      <div className="p-3 sm:p-4 h-48 sm:h-48 overflow-y-auto text-emerald-400">
        {history.map((line, i) => (
          <div key={i} className={`mb-1.5 break-words ${line.type === 'input' ? 'text-white' : 'text-emerald-400'}`}>
            {line.text}
          </div>
        ))}
        <div className="flex items-center">
          <span className="text-white mr-2 shrink-0 text-[10px] sm:text-xs">
            <span className="hidden sm:inline">guest@portfolio:~$</span>
            <span className="sm:hidden">~$</span>
          </span>
          <input 
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="flex-1 bg-transparent outline-none border-none text-emerald-400 placeholder:text-emerald-800 focus:ring-0 p-0 min-w-0"
            placeholder="type a command..."
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
          />
        </div>
        <div ref={endRef} />
      </div>
    </div>
  );
};
