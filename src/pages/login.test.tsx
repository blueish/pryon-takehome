
import { render, screen } from '@testing-library/react';
import Login from './login';

import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom';

test('renders login page', async () => {
  render(<BrowserRouter><Login /></BrowserRouter>);

  const userLabel = await screen.findByText(/Username/);
  expect(userLabel).toBeInTheDocument();

  const passLabel = await screen.findByText(/Password/);
  expect(userLabel).toBeInTheDocument();
});
