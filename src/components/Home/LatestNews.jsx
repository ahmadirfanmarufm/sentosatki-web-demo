import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LatestNews = () => {
    const [posts, setPosts] = useState([]);
    const [loadingNews, setLoadingNews] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/database/berita');
                setPosts(response.data);
            } catch (error) {
                console.error('Error fetching news:', error);
            } finally {
                setLoadingNews(false);
            }

        }
        fetchData();
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

    return(
        <div className="bg-white py-10 sm:py-18 relative z-10">
            <div className="mx-auto max-w-7xl px-6 items-center justify-center lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-bold leading-7 text-primary-secondary-800">BERITA TERBARU</h2>
                    <p className="mt-5 text-3xl font-bold tracking-tight text-primary-400 sm:text-4xl">
                        BERITA TERBARU KAMI
                    </p>
                </div>
                {loadingNews ? (
                    <div className="mt-6 flex flex-wrap sm:flex-wrap gap-4 items-center justify-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-secondary-800"></div>
                        <div className="ml-4 text-primary-secondary-800 font-semibold">Loading...</div>
                    </div>
                ) : (
                    <>
                        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                            {posts.slice(0, 3).map((post) => (
                                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                                    <div className="flex items-center gap-x-4">
                                        <img src={`/database/uploads/${post.image}`} className="rounded-xl mb-4 aspect-video object-cover shadow-lg w-full h-auto" alt="Post Image"/>
                                    </div>
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <p className="text-gray-500">
                                            {formatDate(post.date)}
                                        </p>
                                        <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-primary-400 text-left hover:bg-gray-100">
                                            {post.category}
                                        </p>
                                    </div>
                                    <div className="group relative">
                                        <h3 className="mt-3 text-lg text-left font-semibold leading-6 text-gray-900 group-hover:text-primary-secondary-800">
                                            <a href={`/berita/${post.id}`}>
                                                <span className="absolute inset-0" />
                                                {post.title}
                                            </a>
                                        </h3>
                                        <p className="mt-5 line-clamp-3 text-left text-sm leading-6 text-gray-600">{stripHtmlTags(post.content)}</p>
                                    </div>
                                    <div className="relative mt-8 flex items-center gap-x-4">
                                        <img src={post.author_image_url} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                                        <div className="text-sm leading-6">
                                            <p className="font-semibold text-gray-900">
                                                {post.author_name}
                                            </p>
                                            <p className="text-gray-600 text-left">{post.author_role}</p>
                                        </div> 
                                    </div>
                                </article>
                            ))}
                            {posts.length > 2 && (
                                <div className="flex max-w-xl flex-col items-start justify-between">
                                    <a href="/berita" className="group flex items-center gap-2 text-sm text-primary-secondary-800 font-semibold hover:-translate-x-1 transition duration-300 md:w-auto">
                                        Baca selengkapnya <span className="group-hover:translate-x-2 transition duration-300" aria-hidden="true">→</span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default LatestNews;