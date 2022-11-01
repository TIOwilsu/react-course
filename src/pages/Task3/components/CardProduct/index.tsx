import React from 'react';
import { Container } from './style';

interface CardProductProps {
  title: string;
  proprieties: string[];
}
export const CardProduct: React.FC<CardProductProps> = ({ title, proprieties }) => {
  return (
    <Container style={{ marginBottom: '16px' }}>
      <h5 className="card-product__title" role="title">
        {title}
      </h5>
      <ul className="card-product__proprieties" role="proprieties">
        {proprieties.map((propriety: string, index) => (
          <li className="card-product__propriety" key={index}>
            {propriety}
          </li>
        ))}
      </ul>
    </Container>
  );
};
