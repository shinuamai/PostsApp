const DeleteModal = ({ deletingPost, handleDeletePost, closeDeleteModal }) => {
  return (
    <>
      {deletingPost && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="text-lg font-bold mb-3">Eliminar Post</h2>
            <p className="mb-3">
              ¿Estás seguro de que deseas eliminar este post?
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

export default DeleteModal;
