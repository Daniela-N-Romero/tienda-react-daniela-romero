import React, { useState, useEffect } from 'react';
import Item from './Item';
import '../App.css';

export default function ItemListContainer() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('/productos.json')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error cargando el catálogo:", error));
  }, []); 

  return (
    <div className="catalog-container">
      <h2>Nuestro Catálogo de Productos</h2>
      <div className="products-grid">
        {productos.map((prod) => (
          <Item key={prod.id} producto={prod} />
        ))}
      </div>
    </div>
  );
}