import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Menu from '../../components/Menu';

describe('Menu component', () => {
  test('renders menu items correctly', () => {
    const { getByText } = render(
      <MemoryRouter>
        <Menu />
      </MemoryRouter>
    );
    const homeMenuItem = getByText('HOME');
    const postsMenuItem = getByText('POSTS');

    expect(homeMenuItem).toBeInTheDocument();
    expect(postsMenuItem).toBeInTheDocument();
  });
});
