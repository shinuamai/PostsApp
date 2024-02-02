import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DeleteModal from '../../components/DeleteModal';

describe('DeleteModal component', () => {
  const deletingPost = {
    id: 1,
    title: 'Test Title',
    body: 'Test Body',
  };

  const handleDeletePost = jest.fn();
  const closeDeleteModal = jest.fn();

  test('renders correctly when deletingPost is provided', () => {
    const { getByText } = render(
      <DeleteModal
        deletingPost={deletingPost}
        handleDeletePost={handleDeletePost}
        closeDeleteModal={closeDeleteModal}
      />
    );

    expect(getByText('Eliminar Post')).toBeInTheDocument();
    expect(getByText('¿Está seguro de que desea eliminar este post?')).toBeInTheDocument();
  });

  test('calls handleDeletePost with post id when "Eliminar" button is clicked', () => {
    const { getByText } = render(
      <DeleteModal
        deletingPost={deletingPost}
        handleDeletePost={handleDeletePost}
        closeDeleteModal={closeDeleteModal}
      />
    );

    fireEvent.click(getByText('Eliminar'));

    expect(handleDeletePost).toHaveBeenCalledWith(1);
  });

  test('calls closeDeleteModal when "Cancelar" button is clicked', () => {
    const { getByText } = render(
      <DeleteModal
        deletingPost={deletingPost}
        handleDeletePost={handleDeletePost}
        closeDeleteModal={closeDeleteModal}
      />
    );

    fireEvent.click(getByText('Cancelar'));

    expect(closeDeleteModal).toHaveBeenCalled();
  });
});
