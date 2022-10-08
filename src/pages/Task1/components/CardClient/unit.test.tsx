import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CardClient } from './index';

const mock = [
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
    client: 'Roberto',
    age: 30,
    purchases: [
      { name: 'Notebook', price: 'R$ 2500' },
      { name: 'Geladeira', price: 'R$ 3000' },
      { name: 'Smartphone', price: 'R$ 1500' },
      { name: 'Guitarra', price: 'R$ 3500' },
    ],
    status: false,
  },
];

test('renders client, age, status and total', () => {
  const [user] = mock;
  render(<CardClient client={user.client} age={user.age} purchases={user.purchases} status={user.status} />);
  const client = screen.getByRole('client');
  const age = screen.getByRole('age');
  const status = screen.getByRole('status');
  const total = screen.getByRole('total');

  const sum = user.purchases.reduce((all, purchase) => {
    const price = +purchase.price.replace('R$ ', '');
    all += price;
    return all;
  }, 0);

  expect(client.textContent).toBe(`Nome: ${user.client}`);
  expect(age.textContent).toBe(`Idade: ${user.age}`);
  expect(status.textContent).toBe('Situação: Ativo');
  expect(total.textContent).toBe(`Total gasto: R$ ${sum}`);
});

test('if status is inactive', () => {
  const user = mock[1];
  render(<CardClient client={user.client} age={user.age} purchases={user.purchases} status={user.status} />);
  const status = screen.getByRole('status');
  const expensive = screen.getByRole('expensive');

  expect(status.textContent).toBe('Situação: Inativa');
  expect(expensive).toBeInTheDocument();
});
