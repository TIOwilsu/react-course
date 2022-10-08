import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { AppHeader } from './index';

test('renders title and description', () => {
  const props = { title: 'Titulo', description: 'Descrição' };

  render(<AppHeader title={props.title} description={props.description} />);

  const title = screen.getByRole('title');
  const description = screen.getByRole('description');

  expect(title.textContent).toBe(props.title);
  expect(description.textContent).toBe(props.description);
});
