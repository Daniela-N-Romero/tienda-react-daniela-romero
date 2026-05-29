import React, { useState, useContext, createContext } from 'react';
import Swal from 'sweetalert2';

export const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const itemInCart = cart.find(item => item.id === product.id);
        if (itemInCart) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, { ...product, quantity: 1 }]);
        }
        Swal.fire({
            icon: 'success',
            title: '¡Producto añadido al carrito!',
            text: `${product.title} se agrego a tu carrito.`,
            timer: 1500,
            showConfirmButton: false
        })
    };

    const clearCart = () => {
        setCart([]);
    };

    const getCartQuantity = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0);
    };

    const getCartTotal = () => {
        return cart.reduce((acc, item) => acc + item.price * item.quantity,
            0);
    };

    // ➕ Función para sumar 1 unidad desde el carrito
    const incrementarCantidad = (productId) => {
        setCart(cart.map(item =>
            item.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };

    // ➖ Función para restar 1 unidad (y si llega a 0, no hace nada)
    const decrementarCantidad = (productId) => {
        const productoExistente = cart.find(item => item.id === productId);

        if (productoExistente.quantity === 1) {
            return
        } else {
            setCart(cart.map(item =>
                item.id === productId
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            ));
        }
    };

    return (
        <CartContext.Provider value={{
            cart, addToCart, clearCart,
            getCartQuantity, getCartTotal,
            incrementarCantidad, decrementarCantidad
        }}>
            {children}
        </CartContext.Provider>
    );
};