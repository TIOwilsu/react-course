import React from 'react';
import '@testing-library/jest-dom';
import { Product } from 'pages/Task3/interfaces';
import { render, screen } from '@testing-library/react';
import { CardProduct } from './index';

const mock: Product = {
  name: 'Notebook',
  proprieties: ['16gb ram', '512gb'],
};

test('default value tab product', () => {
  render(<CardProduct title={mock.name} proprieties={mock.proprieties} />);
  const title: Element = screen.getByRole('title');
  const proprieties: Element = screen.getByRole('proprieties');
  const elementsPropriety: Element[] = [...proprieties.querySelectorAll('.card-product__propriety')];

  expect(title.textContent).toBe('Notebook');
  elementsPropriety.forEach(({ textContent }: Element, index) => expect(textContent).toBe(mock.proprieties[index]));
});
