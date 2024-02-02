import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EditModal from '../../components/EditModal';
import '@testing-library/jest-dom/extend-expect';

describe('EditModal component', () => {
  const editingPost = {
    id: 1,
    title: 'Test Title',
    body: 'Test Body',
  };

  const handleUpdatePost = jest.fn();
  const closeEditModal = jest.fn();

  test('renders correctly when editingPost is provided', () => {
    const { getByText, getByLabelText } = render(
      <EditModal
        editingPost={editingPost}
        handleUpdatePost={handleUpdatePost}
        closeEditModal={closeEditModal}
      />
    );

    expect(getByText('Editar Post')).toBeInTheDocument();
    expect(getByLabelText('Título:').value).toBe('Test Title');
    expect(getByLabelText('Contenido:').value).toBe('Test Body');
  });

  test('calls handleUpdatePost with updated post data when "Guardar Cambios" button is clicked', () => {
    const { getByText, getByLabelText } = render(
      <EditModal
        editingPost={editingPost}
        handleUpdatePost={handleUpdatePost}
        closeEditModal={closeEditModal}
      />
    );

    fireEvent.change(getByLabelText('Título:'), { target: { value: 'Updated Title' } });
    fireEvent.change(getByLabelText('Contenido:'), { target: { value: 'Updated Body' } });
    fireEvent.click(getByText('Guardar Cambios'));

    expect(handleUpdatePost).toHaveBeenCalledWith(1, {
      title: 'Updated Title',
      body: 'Updated Body',
    });
  });

  test('calls closeEditModal when "Cancelar" button is clicked', () => {
    const { getByText } = render(
      <EditModal
        editingPost={editingPost}
        handleUpdatePost={handleUpdatePost}
        closeEditModal={closeEditModal}
      />
    );

    fireEvent.click(getByText('Cancelar'));

    expect(closeEditModal).toHaveBeenCalled();
  });
});
