import React from 'react';
import { Container } from './style';

interface CardProductProps {
  name: string;
  price: string;
  colors: string[];
}

export const CardProduct: React.FC<CardProductProps> = ({ name, price, colors }) => {
  return (
    <Container>
      <h4 className="card-product__name" role="name">
        {name}
      </h4>
      <p className="card-product__price" role="price">
        {price}
      </p>
      <ul className="card-product__colors" role="colors">
        {colors.map((color: string, index: number) => (
          <li key={index} className="card-product__color" style={{ backgroundColor: color }}>
            {color}
          </li>
        ))}
      </ul>
    </Container>
  );
};
