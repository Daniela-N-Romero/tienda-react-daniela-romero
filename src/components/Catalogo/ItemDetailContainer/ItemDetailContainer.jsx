// src/components/ItemDetailContainer/ItemDetailContainer.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);
  
  // 🔮 Capturamos el ":id" que declaramos en la ruta de App.jsx
  const { id } = useParams();

  useEffect(() => {
    setCargando(true);
    fetch('/data/productos.json')
      .then((res) => res.json())
      .then((data) => {
        // Buscamos el producto que coincida con el ID de la URL
        const encontrado = data.find((prod) => prod.id === Number(id));
        
        if (encontrado) {
          const tieneDesc = encontrado.discount && encontrado.discount > 0;
          setProducto({
            ...encontrado,
            tieneDescuento: tieneDesc,
            porcentajeOff: tieneDesc ? Math.round(encontrado.discount * 100) : 0,
            precioFinal: tieneDesc ? (encontrado.price * (1 - encontrado.discount)).toFixed(2) : encontrado.price
          });
        }
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error cargando el producto:", err);
        setCargando(false);
      });
  }, [id]);

  if (cargando) return <div className="loading">Cargando detalles de la pieza...</div>;
  if (!producto) return <div className="error-msg">Lo sentimos, el producto no existe.</div>;

  return (
    <div className="detail-container">
      {/* Le pasamos el producto listo al componente visual */}
      <ItemDetail producto={producto} /> 
    </div>
  );
}