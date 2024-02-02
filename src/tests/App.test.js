import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; 
import App from '../App';


test('renders Home component when "/" path is matched', () => {
  render(<App />);
  const homeElement = screen.getByText(/Bienvenido a la página de inicio/i);
  expect(homeElement).toBeInTheDocument();
});
