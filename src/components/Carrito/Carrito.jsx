import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './Carrito.css'; 


const Cart = () => {

  const { cart, clearCart, getCartTotal } = useCart();

  if (cart.length === 0) {
  return (
      <div className="cart-empty-container">
        <h2>Tu carrito está vacío</h2>
        <p>Explora nuestras exclusivas colecciones y encuentra tu pieza ideal.</p>
        <Link to="/productos" className="btn-return-shop">
          Ir a la Tienda
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page-container">
      <h1 className="cart-title">Carrito de Compras</h1>
      
      <div className="cart-content-layout">
        
        {/* Columna Izquierda: Lista de Productos */}
        <div className="cart-items-list">
          {cart.map(item => {
            // Usamos el precio final calculado (por si tenía descuento) o el base
            const precioItem = item.precioFinal || item.price;
            
            return (
              <div key={item.id} className="cart-item-card">
                <div className="cart-item-img-placeholder">📷</div>
                
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p className="item-unit-price">Precio unitario: ${precioItem}</p>
                </div>

                <div className="cart-item-quantity">
                  <span className="qty-label">Cantidad</span>
                  <span className="qty-value">{item.quantity}</span>
                </div>

                <div className="cart-item-subtotal">
                  <span className="subtotal-label">Subtotal</span>
                  <span className="subtotal-value">${(precioItem * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            );
          })}
          
          <button onClick={clearCart} className="btn-clear-cart">
            🗑️ Vaciar Carrito
          </button>
        </div>

        {/* Columna Derecha: Resumen de Compra */}
        <div className="cart-summary-card">
          <h3>Resumen del Pedido</h3>
          <hr />
          <div className="summary-row">
            <span>Productos ({cart.reduce((acc, item) => acc + item.quantity, 0)}):</span>
            <span>${getCartTotal().toFixed(2)}</span>
          </div>
          <div className="summary-row total-row">
            <span>Total a pagar:</span>
            <span className="total-price">${getCartTotal().toFixed(2)}</span>
          </div>
          
          <button className="btn-checkout" onClick={() => alert('¡Próximamente checkout!')}>
            Iniciar Compra
          </button>
        </div>

      </div>
    </div>
  );
};

export default Cart;