import React, { useState } from 'react';
import video1 from '../../assets/video-penerbangan-welder-koreaselatan.mp4';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const GaleryVideoSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const videosPerPage = 10;

    const data = [
        { "url": `${video1}`, "title": "Penerbangan Penerbangan Welder Korea Selatan", "type": "video", "category": "Penerbangan" },
        { "url": "https://www.tiktok.com/embed/7351309298703633670", "title": "Ramadhan Berbagi", "type": "iframe", "category": "Kegiatan" },
        { "url": "https://www.tiktok.com/embed/7390571665157000453", "title": "PMI PT. SENTOSAKARYA ADITAMA Bersama Agency Korea Selatan, bersiap untuk bekerja sebagai Tenaga Ahli Pengelasan", "type": "iframe", "category": "Penerbangan" },
        { "url": "https://www.youtube.com/embed/T8q12U7WQ0A", "title": "Contoh Video YouTube", "type": "iframe", "category": "Kegiatan" },
    ];

    const filteredVideos = selectedCategory === 'all' ? data : data.filter(video => video.category === selectedCategory);

    const indexOfLastVideo = currentPage * videosPerPage;
    const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
    const currentVideos = filteredVideos.slice(indexOfFirstVideo, indexOfLastVideo);

    const totalPages = Math.ceil(filteredVideos.length / videosPerPage);

    const openModal = (video) => {
        setSelectedVideo(video);
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedVideo(null);
        setIsOpen(false);
    };

    return (
        <div className="bg-white py-20 sm:py-18 relative z-10">
            <div className="mx-auto max-w-7xl px-4">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-5 text-3xl font-bold tracking-tight text-primary-400 sm:text-4xl uppercase">
                        Galeri - Galeri Video Kami
                    </p>
                </div>
                <div className='py-10'>
                    <div className="mb-4">
                        <select
                            onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
                            value={selectedCategory}
                            className="p-2 border rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        >
                            <option value="all">Semua</option>
                            <option value="Kegiatan">Kegiatan</option>
                            <option value="Penerbangan">Penerbangan</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {currentVideos.map((video, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
                                onClick={() => openModal(video)}
                            >
                                {video.type === 'iframe' ? (
                                    <iframe
                                        src={video.url}
                                        title={video.title}
                                        className="w-full h-60 sm:h-80 lg:h-96 object-cover"
                                        allowFullScreen
                                        frameBorder="0"
                                    ></iframe>
                                ) : (
                                    <video
                                        src={video.url}
                                        controls
                                        className="w-full h-60 sm:h-80 lg:h-96 object-cover"
                                    ></video>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center mt-4">
                        <div className="flex rounded-md">
                            <button
                                onClick={() => setCurrentPage(currentPage - 1)}
                                className={`relative inline-flex items-center px-2 py-2 rounded-l-md border text-sm font-medium ${currentPage === 1 ? 'text-gray-400 bg-gray-200 cursor-not-allowed' : 'text-gray-700 bg-white hover:bg-gray-50'}`}
                                disabled={currentPage === 1}
                            >
                                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                                <span className="ml-2">Previous</span>
                            </button>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentPage(index + 1)}
                                    className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${currentPage === index + 1 ? 'text-white bg-primary-secondary-800 focus:z-20 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-primary-600' : 'text-gray-700 bg-white hover:bg-gray-50'}`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                            <button
                                onClick={() => setCurrentPage(currentPage + 1)}
                                className={`relative inline-flex items-center px-2 py-2 rounded-r-md border text-sm font-medium ${currentPage === totalPages ? 'text-gray-400 bg-gray-200 cursor-not-allowed' : 'text-gray-700 bg-white hover:bg-gray-50'}`}
                                disabled={currentPage === totalPages}
                            >
                                <span className="mr-2">Next</span>
                                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Dialog open={isOpen} onClose={closeModal} className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-transform duration-300 ease-in-out transform">
                <DialogBackdrop className="fixed inset-0 bg-black opacity-50" />
                <DialogPanel className="relative bg-white rounded-lg shadow-lg max-w-3xl mx-auto p-4 transition-transform duration-300 ease-in-out transform">
                    {selectedVideo && (
                        <>
                            <DialogTitle className="text-2xl font-bold mb-4">{selectedVideo.title}</DialogTitle>
                            <iframe
                                src={selectedVideo.url}
                                title={selectedVideo.title}
                                className="w-full h-[60vh] sm:h-[80vh] lg:h-[90vh] object-cover"
                                allowFullScreen
                                frameBorder="0"
                            ></iframe>
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none transition-colors duration-300 ease-in-out"
                            >
                                <span className="sr-only">Tutup</span>✕
                            </button>
                        </>
                    )}
                </DialogPanel>
            </Dialog>
        </div>
    );
};

export default GaleryVideoSection;
