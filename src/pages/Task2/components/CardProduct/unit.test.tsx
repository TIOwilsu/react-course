import React from 'react';
import '@testing-library/jest-dom';
import { Product } from 'pages/Task2/interfaces';
import { render, screen } from '@testing-library/react';
import { CardProduct } from './index';

const mock: Product = {
  id: 1,
  name: 'Smartphone',
  price: 'R$ 2000',
  colors: ['#29d8d5', '#252a34', '#fc3766'],
};

test('render Product card when price value is expensive', () => {
  render(<CardProduct name={mock.name} price={mock.price} colors={mock.colors} />);
  const name: Element = screen.getByRole('name');
  const price: Element = screen.getByRole('price');
  const colors: Element[] = [...screen.getByRole('colors').querySelectorAll('.card-product__color')];

  const hexs: (string | null)[] = colors.map((color: Element) => color.textContent);
  const allColorsEqual: boolean = hexs.every((hex: string | null, index: number) => hex === mock.colors[index]);

  expect(name.textContent).toBe('Smartphone');
  expect(price.textContent).toBe('R$ 2000');
  expect(allColorsEqual).toBeTruthy();
});
