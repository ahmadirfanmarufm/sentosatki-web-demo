import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Blank from './Blank';
import Loading from '../Loading';
import ModalDeleteNews from '../News/ModalDeleteNews';
import ModalEditNews from '../News/ModalEditNews';

const NewsDetailsSection = () => {
    const { id } = useParams();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const apiDatabaseUrl = import.meta.env.VITE_API_DATABASE;

    const deleteSelectedNews = () => {
        setShowDeleteModal(true);
    };

    const editSelectedNews = () => {
        setShowEditModal(true);
    };


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
        const fetchArticle = async () => {
            try {
                const response = await axios.get(`${apiDatabaseUrl}/berita/${id}`);
                setArticle(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching the article:", error);
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    if (loading) {
        return <Loading/>;
    }

    if (!article) {
        return <Blank />; 
    }

    const formatDate = (inputDate) => {
        const date = new Date(inputDate);

        const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
        const months = [
            'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
            'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
        ];

        const dayName = days[date.getDay()];
        const day = date.getDate().toString().padStart(2, '0');
        const monthName = months[date.getMonth()];
        const year = date.getFullYear();

        return `${dayName}, ${day} ${monthName} ${year}`;
    };

    const formattedDate = formatDate(article.date);

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden my-8 p-4 md:p-8">
            <img className="w-full h-64 object-cover rounded-md mb-4" src={`${apiDatabaseUrl}/uploads/${article.image}`} alt={`${article.title} image`} />
            <div className="px-4 md:px-8">
                <div className="uppercase tracking-wide text-sm text-primary-400 font-semibold mb-2">{formattedDate} - {article.category}</div>
                <h1 className="text-2xl md:text-4xl leading-tight font-bold text-black mb-4">{article.title}</h1>
                <p className="text-gray-600 text-left leading-relaxed" dangerouslySetInnerHTML={{ __html: article.content }}></p>
            </div>
            {user && user.jabatan.includes("Writter") && (
                <div className='py-5'>
                    <button className='bg-primary-secondary-800 hover:bg-primary-secondary-900 text-white px-3 py-1 rounded-md ml-2 mb-1' onClick={editSelectedNews}>
                        EDIT
                    </button>
                    <button className='bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded-md ml-2 mb-1' onClick={deleteSelectedNews}>
                        DELETE
                    </button>
                </div>
            )}

            {showDeleteModal && (
                <ModalDeleteNews 
                    setPosts={setArticle} 
                    selectedNewsId={id} 
                    setOpen={setShowDeleteModal} 
                    open={showDeleteModal}
                />
            )}

            {showEditModal && (
                <ModalEditNews
                    selectedNewsId={id}
                    isOpen={showEditModal}
                    setOpen={setShowEditModal}
                    onClose={() => setShowEditModal(false)}
                    refreshNews={() => {
                        axios.get(`${apiDatabaseUrl}/berita/${id}`)
                            .then(response => setArticle(response.data))
                            .catch(error => console.error('Error fetching news:', error));
                    }}
                />
            )}
        </div>
    );
}

export default NewsDetailsSection;
