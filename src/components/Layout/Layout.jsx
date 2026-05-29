import React from 'react';
import Header from './Header/Header';

import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Layout.css';

export default function Layout({ children }) {
  return (
    <>
    <div className="app-viewport">
      <Header/>

      <main className="main-content">
        <Outlet />
      </main>
      
      <Footer />
      </div>
    </>
  );
}