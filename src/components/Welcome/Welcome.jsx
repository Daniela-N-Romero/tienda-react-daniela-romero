// src/components/Welcome.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import productosData from '../../../public/data/productos.json';
import ItemListContainer from '../Catalogo/ItemListContainer/ItemListContainer';
import './Welcome.css';

export default function Welcome() {
    // Filtramos solo los productos destacados
    return (
        <div className="landing-container">
            {/* Sección Hero / Bienvenida */}
            <header className="hero-section">
                <h1>Bienvenidos a Pink Velvet</h1>
                <p>Descubrí nuestra exclusiva colección de joyería fina, bolsos icónicos y accesorios diseñados para destacar tu elegancia natural.</p>
                <Link to="/productos" className="btn-shop-now">Ver Colección Completa</Link>
            </header>

            {/* Sección de Categorías Rápidas */}
            <section className="categories-section">
                <h2>Explora nuestras categorías</h2>
                <div className="categories-grid">
                    <Link to="/productos/joyas" className="category-card">
                        <h3>Joyería</h3>
                    </Link>
                    <Link to="/productos/bolsos" className="category-card">
                        <h3>Bolsos</h3>
                    </Link>
                    <Link to="/productos/accesorios" className="category-card">
                        <h3>Accesorios</h3>
                    </Link>
                    <Link to="/productos/indumentaria" className="category-card">
                        <h3>Indumentaria</h3>
                    </Link>
                </div>
            </section>

            {/* Sección de Productos Destacados */}
            <ItemListContainer
                title="Productos Destacados"
                filtros={{ featured: true }}
                limite={4}
            />
            {/* Sección de Ofertas Especiales */}
            <ItemListContainer
                title="¡Descuentos Imperdibles!"
                filtros={{ discount: true }}
                limite={8}
            />
        </div>
    );
}