import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar';

export default function Header({ children }) {
  return (
    <header className="site-header">
      <div className="header-content">
      <div className="site-logo"><img src="/images/logos/pink-velvet-logo-row.png" alt="Pink Velvet Logo" /></div>
      <Navbar />
      </div>
    </header>
  );
}