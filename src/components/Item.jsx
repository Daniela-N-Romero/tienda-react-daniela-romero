import React from 'react';
import { Link } from 'react-router-dom'; // Importamos Link

export default function Item({ producto }) {
  return (
    <div className="product-card">
      <h3>{producto.title}</h3>
      <p className="product-price"><strong>Precio:</strong> ${producto.price}</p>
      <p className="product-description">{producto.description}</p>
      
      <Link to={`/producto/${producto.id}`}>
        <button className="btn-detail">Ver Detalle</button>
      </Link>
    </div>
  );
}