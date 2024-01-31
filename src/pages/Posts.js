import React, { useState } from 'react';
import { useFetch } from '../hooks/useFetch';

const Posts = () => {
    const { data, loading, error, handleRequest } = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

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


    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = data?.slice(indexOfFirstPost, indexOfLastPost);

    return (
        <div className="sm:px-10 lg:px-36 xl:px-40 mt-3 px-4">
            <h1 className="text-3xl font-bold  text-customColor text-center">
                Posts
            </h1>
            <table className="mt-3 table-auto border-collapse">
                <tbody className="divide-y divide-white">
                    {currentPosts?.map((post) => (
                        <tr key={post.id} className="space-y-4">
                          <td className="bg-customBlue text-center border-customBlue rounded-l-lg w-1/12">
                            <button className="text-white">
                                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                  </svg>
                              </button>
                          </td>
                          <td className="text-center  shadow-left-right w-1/12 font-semibold text-3xl text-customBlue">{post.id}</td>
                          <td className="bg-customBlue border-customBlue  text-left w-2/3 px-5">
                            <h1 className="font-medium text-xl py-1">{post.title}</h1>
                            <h2 className="font-thin text-base">{post.body}</h2>
                          </td>
                          <td className="text-center bg-customBlue border-customBlue rounded-r-lg w-1/12">
                            <button className="text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                              </svg>
                            </button>
                          </td>
                        </tr>
                    ))}
                    
                </tbody>
            </table>
            <div className="flex justify-between mt-3">
              <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className={`p-2 rounded-lg text-white ${currentPage === 1 ? 'bg-gray-300' : 'bg-customColor hover:bg-[#89D8B8]'}`}>Anterior
              </button>
              <button onClick={() => handlePageChange(currentPage + 1)} disabled={data === null || currentPage === Math.ceil(data.length / postsPerPage)} className={`p-2 rounded-lg text-white ${data === null || currentPage === Math.ceil(data.length / postsPerPage) ? 'bg-gray-300' : 'bg-customColor hover:bg-[#89D8B8]'}`}>Siguiente
              </button>

            </div>
        </div>
    );
};

export default Posts;
