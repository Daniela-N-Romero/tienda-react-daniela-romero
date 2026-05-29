import React, { useState, useEffect } from 'react';
import Item from '../Item/Item';
import './ItemList.css';

export default function ItemList({productos}) {

  return (
      <div className="products-grid">
        {productos.map((prod) => (
          <Item key={prod.id} producto={prod} />
        ))}
      </div>
  );
}