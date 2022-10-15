import React from 'react';
import '@testing-library/jest-dom';
import { formatNumber } from 'utils/formatNumber';
import { render, screen } from '@testing-library/react';
import Task2 from './index';

test('render Product card when price value is expensive', () => {
  render(<Task2 />);
  const items: Element = screen.getByRole('items');
  const prices: Element[] = [...items.querySelectorAll('.card-product > .card-product__price')];

  const isExpensive: boolean = prices.some((price: Element) => formatNumber(price.textContent as string) > 1500);

  expect(!isExpensive).toBeTruthy();
});
