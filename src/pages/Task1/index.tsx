import React from 'react';
import { AppHeader } from 'components/layout/AppHeader';
import { Container } from './style';
import { CardClient } from './components/CardClient';

const Task1: React.FC = () => {
  const clients = [
    {
      client: 'Luana',
      age: 27,
      purchases: [
        { name: 'Notebook', price: 'R$ 2500' },
        { name: 'Geladeira', price: 'R$ 3000' },
        { name: 'Smartphone', price: 'R$ 1500' },
      ],
      status: true,
    },
    {
      client: 'mario',
      age: 31,
      purchases: [
        { name: 'Notebook', price: 'R$ 2500' },
        { name: 'Geladeira', price: 'R$ 3000' },
        { name: 'Smartphone', price: 'R$ 1500' },
        { name: 'Guitarra', price: 'R$ 3500' },
      ],
      status: false,
    },
  ];

  return (
    <React.Fragment>
      <AppHeader title="Task1" description="Está é a tarefa 1" />
      <Container>
        {clients.map(({ client, age, purchases, status }, index) => (
          <CardClient key={index} client={client} age={age} purchases={purchases} status={status} />
        ))}
      </Container>
    </React.Fragment>
  );
};

export default Task1;
