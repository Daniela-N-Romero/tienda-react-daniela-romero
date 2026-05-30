import React, {useState} from 'react';
import { useCart } from '../../../context/CartContext';
import { Link } from 'react-router-dom';
import './Item.css';

export default function Item({ producto }) {
    const { addToCart } = useCart();
  
  const [cantidad, setCantidad] = useState(0);

  return (
    <div key={producto.id} className="product-card">
      <div className="product-img-container">
          <img className="product-img" src={producto.img} alt={producto.title} />
        {producto.tieneDescuento && (
          <span className="discount-tag">{producto.porcentajeOff}% OFF</span>
        )}
      </div>
      <div className="product-info">
        <h3 className="product-name">{producto.title}</h3>
        <div className="product-price-container">
          {producto.tieneDescuento ? (
            <>
              <span className="price-old">${producto.price}</span>
              <span className="price-current">${producto.precioFinal}</span>
            </>
          ) : (
            <span className="price-current">${producto.price}</span>
          )}
        </div>
        <p className="product-desc">{producto.description}</p>
        <div className="product-card-buttons">
          <Link to={`/producto/${producto.id}`} className="btn-detail">
            Ver Detalle
          </Link>
          <button className="btn-quick-add" onClick={() => addToCart(producto)} title="Añadir rápido al carrito">
            🛒
          </button>
        </div>
      </div>
    </div>

  );
}