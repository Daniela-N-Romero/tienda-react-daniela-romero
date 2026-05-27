import React from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import '../App.css';

export default function Layout({ children }) {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      
      <main className="main-content">
        {children}
      </main>
      
      <Footer />
    </>
  );
}