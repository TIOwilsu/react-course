import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { TabProduct } from './index';

const mock = [
  { title: 'Titulo 01', content: 'Descrição 01' },
  { title: 'Titulo 02', content: 'Descrição 02' },
];

test('default value tab product', () => {
  render(<TabProduct tabs={mock} />);
  const title: Element = screen.getByRole('title');
  const content: Element = screen.getByRole('content');

  expect(title.textContent).toBe('Titulo 01');
  expect(content.textContent).toBe('Descrição 01');
});

test('select tab product', () => {
  render(<TabProduct tabs={mock} />);
  const title: Element = screen.getByRole('title');
  const content: Element = screen.getByRole('content');
  const buttons: Element = screen.getByRole('buttons');
  const [buttonFirst, buttonLast]: Element[] = [...buttons.querySelectorAll('.tab-product__button')];

  fireEvent.click(buttonLast);

  expect(title.textContent).toBe('Titulo 02');
  expect(content.textContent).toBe('Descrição 02');
});
