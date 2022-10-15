import React from 'react';
import { AppHeader } from 'components/layout/AppHeader';
import { formatNumber } from 'utils/formatNumber';
import { Product } from './interfaces';
import { Container } from './style';
import { CardProduct } from './components/CardProduct';

const Task2: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Smartphone',
      price: 'R$ 2000',
      colors: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      name: 'Notebook',
      price: 'R$ 3000',
      colors: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      name: 'Tablet',
      price: 'R$ 1500',
      colors: ['#365069', '#47c1c8', '#f95786'],
    },
  ];

  const isExpensive = (value: string): boolean => {
    return formatNumber(value) > 1500;
  };

  return (
    <React.Fragment>
      <AppHeader title="Task2" description="Está é a task 2"></AppHeader>
      <Container>
        <div className="items" role="items">
          {products.map(
            ({ id, name, price, colors }) =>
              isExpensive(price) && (
                <div className="item" key={id}>
                  <CardProduct name={name} price={price} colors={colors}></CardProduct>
                </div>
              ),
          )}
        </div>
      </Container>
    </React.Fragment>
  );
};

export default Task2;
