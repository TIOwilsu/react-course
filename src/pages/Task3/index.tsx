import React from 'react';
import { AppHeader } from 'components/layout/AppHeader';
import { Container } from './style';
import { Product } from './interfaces';
import { TabProduct } from './components/TabProduct';
import { CardProduct } from './components/CardProduct';

const Cards: React.FC = () => {
  const products: Product[] = [
    {
      name: 'Notebook',
      proprieties: ['16gb ram', '512gb'],
    },
    {
      name: 'Smartphone',
      proprieties: ['2gb ram', '128gb'],
    },
  ];

  return (
    <React.Fragment>
      {products.map((product: Product, index) => (
        <CardProduct title={product.name} proprieties={product.proprieties} key={index} />
      ))}
    </React.Fragment>
  );
};

const Task3: React.FC = () => {
  const tabs = [
    {
      title: 'Home',
      content: 'Está é a home do site',
    },
    {
      title: 'Produtos',
      content: <Cards />,
    },
  ];

  return (
    <Container>
      <AppHeader title="Task3" description="Está é a task 3" />
      <TabProduct tabs={tabs} />
    </Container>
  );
};

export default Task3;
