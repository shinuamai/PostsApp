const EditModal = ({ editingPost, handleUpdatePost, closeEditModal}) => {
    
    return (
        <>
        {editingPost && (
                    <div className="modal">
                        <div className="modal-content">
                            <h2 className="text-lg font-bold mb-3">Editar Post</h2>
                            <label htmlFor="title" className="block mb-1">Título:</label>
                            <input
                                type="text"
                                id="title"
                                className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                                defaultValue={editingPost.title}
                            />
                            <label htmlFor="body" className="block mb-1">Contenido:</label>
                            <textarea
                                id="body"
                                className="w-full border border-gray-300 rounded px-3 py-2 mb-3"
                                defaultValue={editingPost.body}
                            ></textarea>
                            <div className="flex justify-end">
                                <button 
                                onClick={() => handleUpdatePost(editingPost.id, { 
                                    title: document.getElementById('title').value, 
                                    body: document.getElementById('body').value })} 
                                className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                                    Guardar Cambios
                                </button>
                                <button 
                                onClick={closeEditModal} 
                                className="bg-gray-500 text-white px-4 py-2 rounded">
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}

export default EditModal;