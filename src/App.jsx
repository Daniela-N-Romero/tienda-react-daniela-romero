import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ItemListContainer from './components/ItemListContainer';
import DetalleProducto from './components/DetalleProducto';
import Carrito from './components/Carrito';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* Ruta principal o de bienvenida */}
          <Route path="/" element={
            <div className="main-container">
              <h2>Bienvenido a nuestra tienda</h2>
              <p>Explora nuestros productos.</p>
            </div>
          } />

          {/* Ruta del catálogo de productos */}
          <Route path="/productos" element={<ItemListContainer />} />

          {/* Ruta de detalle de un único producto */}
          <Route path="/producto/:id" element={<DetalleProducto />} />

          {/* Ruta de la vista del carrito */}
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}