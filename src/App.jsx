import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Welcome from './components/Welcome/Welcome';
import ItemListContainer from './components/Catalogo/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Catalogo/ItemDetailContainer/ItemDetailContainer';
import Carrito from './components/Carrito/Carrito';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >

        <Route index element={<Welcome />} />

        {/* Catálogo completo sin filtros */}
        <Route path="/productos" element={<ItemListContainer title="Todos los productos" />} />

        {/* Catálogo filtrado (Ej: /productos/joyas o /productos/bolsos) */}
        <Route path="/productos/:categoria" element={<ItemListContainer />} />

        {/* Ruta de detalle de un único producto */}
        <Route path="/producto/:id" element={<ItemDetailContainer/>} />

        {/* Ruta de la vista del carrito */}
        <Route path="/carrito" element={<Carrito />} />

      </Route>
    </Routes>
  );
}