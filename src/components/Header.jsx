import React from 'react';

export default function Header({ children }) {
  return (
    <header className="site-header">
      <div className="header-content">
      <div className="site-logo">Logo</div>
      {children}
      </div>
    </header>
  );
}