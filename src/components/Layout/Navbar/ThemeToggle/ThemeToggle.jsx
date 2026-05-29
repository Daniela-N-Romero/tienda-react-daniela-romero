// src/components/ThemeToggle.jsx
import React, { useState, useEffect } from 'react';
import './ThemeToggle.css'; 

export default function ThemeToggle() {
  const [tema, setTema] = useState(localStorage.getItem('theme') || 'claro');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('theme', tema);
  }, [tema]);

  const alternarTema = () => {
    setTema(tema === 'claro' ? 'oscuro' : 'claro');
  };

  return (
    <div className="toggle-wrapper">
      <button 
        onClick={alternarTema} 
        className={`theme-toggle-switch ${tema}`}
        aria-label="Cambiar tema"
      >
        <span className="toggle-thumb"></span>
      </button>
      <span className="toggle-icon">{tema == 'claro'? "Modo Oscuro" : "Modo Claro"}</span>
    </div>
  );
}