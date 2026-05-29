import React, { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

export default function ItemListContainer({ title, filtros = {}, limite = null }) {
  const [productos, setProductos] = useState([]);
  const { categoria } = useParams();


  useEffect(() => {
    fetch('/data/productos.json')
      .then((response) => response.json())
      .then((data) => setProductos(data))
      .catch((error) => console.error("Error cargando el catálogo:", error));
  }, []);

  let productosFiltrados = [...productos];


  if (categoria) {
    productosFiltrados = productosFiltrados.filter(prod => prod.category === categoria);
  } else {
    Object.keys(filtros).forEach((key) => {
      if (key === 'discount' && filtros[key] === true) {
        productosFiltrados = productosFiltrados.filter(prod => prod.discount > 0);
      }
      else {
        productosFiltrados = productosFiltrados.filter(prod => prod[key] === filtros[key]);
      }

    })
  };

  if (limite) {
    productosFiltrados = productosFiltrados.slice(0, limite);
  }

  const productosListos= productosFiltrados.map(prod => {
  const tieneDesc = prod.discount && prod.discount > 0;
  return {
    ...prod,
    tieneDescuento: tieneDesc,
    porcentajeOff: tieneDesc ? Math.round(prod.discount * 100) : 0,
    precioFinal: tieneDesc ? (prod.price * (1 - prod.discount)).toFixed(2) : prod.price
  };
});

  const tittleSeccion = title || (categoria ? `Todos los ${categoria}` : "Catálogo");

  return (
    <div className="catalog-container">
      <h2>{tittleSeccion}</h2>
      {productosFiltrados.length === 0 ? (
        <p className="no-products">No se encontraron productos con estos criterios.</p>
      ) : (
        <ItemList productos={productosListos} />
      )}
    </div>
  );
}