import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../../context/CartContext';
import ThemeToggle from './ThemeToggle/ThemeToggle';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [tema, setTema] = useState(localStorage.getItem('theme') || 'claro');

  // Cada vez que el "tema" cambie, actualizamos el HTML y guardamos en localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('theme', tema);
  }, [tema]);

  const alternarTema = () => {
    setTema(tema === 'claro' ? 'oscuro' : 'claro');
  };

  //Lógica de carrito
  const { getCartQuantity } = useCart();
  const totalItems = getCartQuantity();


  return (
    <div className="navbar-container">
      <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
        ☰
      </button>

      <nav className={`nav-links ${isOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-item" onClick={() => setIsOpen(false)}>Inicio</Link>
        <Link to="/productos" className="nav-item" onClick={() => setIsOpen(false)}>Productos</Link>
        <Link to="/carrito" className="nav-item" onClick={() => setIsOpen(false)}>
          <span>Carrito</span>
          <div className="cart-icon-wrapper">
            <span className="cart-icon">🛒</span>
            {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
          </div>
        </Link>
        <ThemeToggle />
      </nav>
    </div>
  );
}