import React from 'react';
import { render } from '@testing-library/react';
import Post from '../../components/Post';

describe('Post component', () => {
  const posts = [
    { id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto' },
    { id: 2, title: 'qui est esse', body: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla' },
  ];

  const mockOpenEditModal = jest.fn();
  const mockOpenDeleteModal = jest.fn();

  test('renders the correct number of posts', () => {
    const { getAllByRole } = render(
      <Post
        posts={posts}
        onOpenEditModal={mockOpenEditModal}
        onOpenDeleteModal={mockOpenDeleteModal}
      />
    );
    const postRows = getAllByRole('row');
    // Each post should render as a table row, so we expect the number of rows to be equal to the number of posts
    expect(postRows.length).toBe(posts.length);
  });

});
