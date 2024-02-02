import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect'; 
import { fireEvent, render, waitFor } from '@testing-library/react';
import Home from '../../pages/Home';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

describe('Home component', () => {
  test('adds slide-up animation on button click', async () => {
    const navigateMock = jest.fn();
    require('react-router-dom').useNavigate.mockImplementation(() => navigateMock);

    const { getByText } = render(      
    <Router>
        <Home />
    </Router>);
    const button = getByText('Ir a Posts');

    fireEvent.click(button);

    await waitFor(() => {
      const homeElement = document.getElementById('home');
      expect(homeElement).toHaveClass('slide-up');
      expect(navigateMock).toHaveBeenCalledWith('/posts');
    }, { timeout: 2000 });
  });
});
