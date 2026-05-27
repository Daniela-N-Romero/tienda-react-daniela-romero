import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Importamos Link

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar-container">
      <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
        ☰
      </button>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>Inicio</Link>
        <Link to="/productos" className="nav-item" onClick={() => setIsOpen(false)}>Productos</Link>
        <Link to="/carrito" className="nav-item" onClick={() => setIsOpen(false)}>Carrito</Link>
      </nav>
    </div>
  );
}