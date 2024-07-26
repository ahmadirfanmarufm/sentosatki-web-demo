import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import ModalEditNews from './ModalEditNews';
import ModalDeleteNews from './ModalDeleteNews';

const NewsList = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [posts, setPosts] = useState([]);
    const [selectedNewsId, setSelectedNewsId] = useState('');
    const itemsPerPage = 10;
    const postsListRef = useRef(null);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [showEditModal, setShowEditModal] = useState(false);
    const [filterCategory, setFilterCategory] = useState('');
    const [searchKeyword, setSearchKeyword] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const apiDatabaseUrl = import.meta.env.VITE_API_DATABASE;

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            axios.get(`${apiDatabaseUrl}/verify`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => {
                const data = response.data;
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data));
                setUser(data);
            })
            .catch(error => console.error('Error:', error));
        }
    }, []);

    useEffect(() => {
        axios.get(`${apiDatabaseUrl}/berita`)
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching news:', error));
    }, []);

    const stripHtmlTags = (html) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    const formatDate = (dateString) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', options);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const selectNews = (newsId) => {
        setSelectedNewsId(newsId);
    };

    const deleteSelectedNews = () => {
        setShowDeleteModal(true);
    };

    const editSelectedNews = () => {
        setShowEditModal(true);
    };

    const categories = [...new Set(posts.map(posts => posts.category))];

    const filteredPosts = posts.filter((post) => {
        if (filterCategory && post.category !== filterCategory) {
            return false;
        }
        if (searchKeyword &&
            !post.title.toLowerCase().includes(searchKeyword.toLowerCase()) &&
            !stripHtmlTags(post.content).toLowerCase().includes(searchKeyword.toLowerCase())) {
            return false;
        }
        return true;
    });

    const totalPages = Math.ceil(filteredPosts.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        if (postsListRef.current) {
            postsListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [currentPage]);

    return (
        <div ref={postsListRef} className="bg-white py-20 sm:py-18 relative z-10">
            <div className="mx-auto max-w-7xl items-center justify-center">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-5 text-3xl font-bold tracking-tight text-primary-400 sm:text-4xl uppercase">
                        Daftar Berita dari Kami
                    </p>
                </div>
                <div className="mt-10 flex flex-wrap sm:flex-wrap gap-4 items-center justify-center">
                    <input
                        type="text"
                        placeholder="Keyword"
                        value={searchKeyword}
                        onChange={(e) => setSearchKeyword(e.target.value)}
                        className="px-4 py-2 border rounded-md w-full md:w-1/5"
                    />
                    <select
                        value={filterCategory}
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className="px-4 py-2 border rounded-md w-full md:w-1/5"
                    >
                        <option value="">Kategori (Semua)</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>{category}</option>
                        ))}
                    </select>
                </div>
                {currentPosts.map((item) => (
                    <div key={item.id} className="max-w-md mx-auto bg-white mt-5 rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-4 transition duration-300 ease-in-out transform hover:scale-105">
                            {user && user.jabatan.includes("Writter") && (
                                <div className="flex justify-between items-center p-4 bg-gray-100">
                                    <div className="flex items-center space-x-4">
                                        <input
                                            type="radio"
                                            onChange={() => selectNews(item.id)}
                                            checked={selectedNewsId === item.id}
                                        />
                                        <span className="uppercase tracking-wide text-sm text-primary-400 font-semibold">{item.title}</span>
                                    </div>
                                    <div>
                                        {selectedNewsId === item.id && (
                                            <>
                                                <button
                                                    onClick={editSelectedNews}
                                                    className="bg-primary-secondary-800 hover:bg-primary-secondary-900 text-white px-3 py-1 rounded-md ml-2 mb-1"
                                                >
                                                    EDIT
                                                </button>
                                                <button
                                                    onClick={deleteSelectedNews}
                                                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md ml-2"
                                                >
                                                    DELETE
                                                </button>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}  
                        <a href={`/berita/${item.id}`} className="md:flex">
                            <div className="md:flex-shrink-0">
                                <img className="h-full w-full object-cover md:w-48 rounded-md" src={`${apiDatabaseUrl}/uploads/${item.image}`} alt={item.title} />
                            </div>
                            <div className="p-8">
                                <div className="uppercase tracking-wide text-sm text-primary-400 font-semibold text-left">{item.category} - {formatDate(item.date)}</div>
                                <p className="block mt-1 text-lg leading-tight font-medium text-primary-secondary-800 text-left">{item.title}</p>
                                <p className="mt-2 text-gray-500 line-clamp-3 text-left">{stripHtmlTags(item.content)}</p>
                            </div>
                        </a>
                    </div>
                ))}
            </div>

            <nav className="flex justify-center mt-4">
                <div className="flex rounded-md">
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        className={`relative inline-flex items-center px-2 py-2 rounded-l-md border text-sm font-medium ${currentPage === 1 ? 'text-gray-400 bg-gray-200 cursor-not-allowed' : 'text-gray-700 bg-white hover:bg-gray-50'}`}
                        disabled={currentPage === 1}
                    >
                        <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                        <span className="ml-2">Previous</span>
                    </button>
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === index + 1 ? 'text-white bg-primary-secondary-800 focus:z-20 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-600' : 'text-gray-700 bg-white hover:bg-gray-50'}`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => handlePageChange(currentPage + 1)}
                        className={`relative inline-flex items-center px-2 py-2 rounded-r-md border text-sm font-medium ${currentPage === totalPages ? 'text-gray-400 bg-gray-200 cursor-not-allowed' : 'text-gray-700 bg-white hover:bg-gray-50'}`}
                        disabled={currentPage === totalPages}
                    >
                        <span className="mr-2">Next</span>
                        <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                    </button>
                </div>
            </nav>

            
            {showDeleteModal && (
                <ModalDeleteNews 
                    setPosts={setPosts} 
                    selectedNewsId={selectedNewsId} 
                    setOpen={setShowDeleteModal} 
                    open={showDeleteModal}
                />
            )}

            {showEditModal && (
                <ModalEditNews
                    selectedNewsId={selectedNewsId}
                    isOpen={showEditModal}
                    setOpen={setShowEditModal}
                    onClose={() => setShowEditModal(false)}
                    refreshNews={() => {
                        axios.get(`${apiDatabaseUrl}/berita`)
                            .then(response => response.json())
                            .then(data => setPosts(data))
                            .catch(error => console.error('Error fetching news:', error));
                    }}
                />
            )}
        </div>
    );
};

export default NewsList;