import React, { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import Menu from '../components/Menu';
import Post from '../components/Post';
import EditModal from '../components/EditModal';
import DeleteModal from '../components/DeleteModal';

const Posts = () => {
    const { data, setData, loading, error, handleRequest } = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [currentPage, setCurrentPage] = useState(1);
    const [editingPost, setEditingPost] = useState(null);
    const [deletingPost, setDeletingPost] = useState(null);
    const postsPerPage = 5;

    useEffect(() => {
        setCurrentPage(1);
    }, [data]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };
    // pendiente por editar
    if (loading) {
        return <div>Cargando...</div>;
    }
    // pendiente por editar
    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const openEditModal = (post) => {
        setEditingPost(post);
    };

    const closeEditModal = () => {
        setEditingPost(null);
    };

    const openDeleteModal = (post) => {
        setDeletingPost(post);
    };

    const closeDeleteModal = () => {
        setDeletingPost(null);
    };

    const handleUpdatePost = async (id, updatedPost) => {
        try {
            // Envía una solicitud PUT al servidor para actualizar el post
            await handleRequest("PUT", id, updatedPost);

            // Actualiza el estado local con los datos del post editado
            const updatedPosts = data.map(post => (post.id === id ? { ...post, ...updatedPost } : post));
            setData(updatedPosts);
            // Asigna los nuevos datos actualizados
            handleRequest('GET', '');

            // Cierra el modal de edición
            closeEditModal();
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };

    const handleDeletePost = async (id) => {
        try {
            // Envía una solicitud DELETE al servidor para eliminar el post
            await handleRequest("DELETE", id);

            // Actualiza el estado local eliminando el post de la lista
            const updatedPosts = data.filter(post => post.id !== id);
            setData(updatedPosts);
            // Asigna los nuevos datos actualizados
            handleRequest('GET', '');

            // Cierra el modal de eliminación
            closeDeleteModal();
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <>
            <Menu />
            <div className="sm:px-10 lg:px-36 xl:px-40 mt-3 px-4">
                <h1 className="text-3xl font-bold  text-customColor text-center">
                    Posts
                </h1>
                <Post
                    posts={currentPosts}
                    onOpenEditModal={openEditModal}
                    onOpenDeleteModal={openDeleteModal}
                />
                <div className="flex justify-between mt-3">
                    <button 
                    onClick={() => handlePageChange(currentPage - 1)} 
                    disabled={currentPage === 1} 
                    className={`p-2 rounded-lg text-white ${currentPage === 1 ? 'bg-gray-300' : 'bg-customColor hover:bg-[#89D8B8] transition duration-300'}`}>
                        Anterior
                    </button>
                    <button 
                    onClick={() => handlePageChange(currentPage + 1)} 
                    disabled={data === null || currentPage === Math.ceil(data.length / postsPerPage)} 
                    className={`p-2 rounded-lg text-white ${data === null || currentPage === Math.ceil(data.length / postsPerPage) ? 'bg-gray-300' : 'bg-customColor hover:bg-[#89D8B8]transition duration-300'}`}
                    >Siguiente
                    </button>
                </div>
                <EditModal 
                    editingPost={editingPost}
                    handleUpdatePost={handleUpdatePost}
                    closeEditModal={closeEditModal}
                />
                <DeleteModal
                    deletingPost={deletingPost}
                    handleDeletePost={handleDeletePost}
                    closeDeleteModal={closeDeleteModal}
                />

            </div>
        </>

    );
};

export default Posts;
