import React from 'react';
import { useCart } from '../../../context/CartContext';
import './ItemDetail.css';

export default function ItemDetail({ producto }) {
  const { addToCart } = useCart();

  return (
    <div className="product-detail-card">
      
      {/* Columna Izquierda: Imagen y Tags */}
      <div className="detail-img-wrapper">
        <div className="detail-img-placeholder">
          <span>📷 Espacio para foto de {producto.title}</span>
        </div>
        {producto.tieneDescuento && (
          <span className="detail-discount-tag">{producto.porcentajeOff}% OFF</span>
        )}
      </div>

      {/* Columna Derecha: Información y Compra */}
      <div className="detail-info-wrapper">
        <span className="detail-category">{producto.category.toUpperCase()}</span>
        <h1 className="detail-title">{producto.title}</h1>
        
        <div className="detail-price-container">
          {producto.tieneDescuento ? (
            <>
              <span className="detail-price-old">${producto.price}</span>
              <span className="detail-price-current">${producto.precioFinal}</span>
            </>
          ) : (
            <span className="detail-price-current">${producto.price}</span>
          )}
        </div>

        <p className="detail-description">{producto.description}</p>

        <div className="purchase-actions">
          <button className="btn-add-to-cart" onClick={() => addToCart(producto)}>
            Añadir al Carrito
          </button>
        </div>
      </div>

    </div>
  );
}