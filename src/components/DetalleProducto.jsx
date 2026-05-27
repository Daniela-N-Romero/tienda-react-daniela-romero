import React from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';


export default function ProductDetail() {
  const { id } = useParams(); 

  return (
    <div className="detail-container">
      <h2>Detalle del Producto #{id}</h2>
      <p>Acá se mouestra la información específica del producto seleccionado.</p>
    </div>
  );
}