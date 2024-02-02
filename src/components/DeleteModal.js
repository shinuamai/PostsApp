import React from 'react';
import PropTypes from 'prop-types';

const DeleteModal = ({ deletingPost, handleDeletePost, closeDeleteModal }) => {
  
  return (
    <>
      {deletingPost && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-lg font-bold mb-3">Eliminar Post</h2>
            <p className="mb-3">
              ¿Está seguro de que desea eliminar este post?
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => handleDeletePost(deletingPost.id)}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
              >
                Eliminar
              </button>
              <button
                onClick={closeDeleteModal}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

DeleteModal.propTypes = {
  deletingPost: PropTypes.object,
  handleDeletePost: PropTypes.func.isRequired,
  closeDeleteModal: PropTypes.func.isRequired,
};

export default DeleteModal;
