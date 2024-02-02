import React from 'react';
import { render } from '@testing-library/react';
import Posts from '../../pages/Posts';

jest.mock('../../hooks/useFetch', () => ({
  useFetch: (url) => ({
    data: null,
    setData: jest.fn(),
    loading: true,
    error: null,
    handleRequest: jest.fn((method, id, data) => {
      if (method === 'GET') {
        return Promise.resolve([
          { id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
          { id: 2, title: 'qui est esse', body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla' },
         ]);
      }
    }),
  }),
}));

describe('Posts component', () => {
  test('renders loading indicator while fetching data', () => {
    const { getByText } = render(<Posts />);
    const loadingIndicator = getByText('Cargando...');
    expect(loadingIndicator).toBeTruthy();
  });

});
