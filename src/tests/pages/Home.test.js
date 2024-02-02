import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; 
import { fireEvent, render, waitFor } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Home component', () => {
  test('adds slide-up animation on button click', async () => {
    const { getByText } = render(      
    <Router>
        <Home />
    </Router>);
    const button = getByText('Ir a Posts');

    fireEvent.click(button);

    await waitFor(() => {
      const homeElement = document.getElementById('home');
      expect(homeElement).toHaveClass('slide-up');
    });
  });
});
