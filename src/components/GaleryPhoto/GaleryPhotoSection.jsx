import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Welder from '../../assets/about-image.jpg';
import PelepasanPMI from '../../assets/kelebihan-image-1.jpg';

const GaleryPhotoSection = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);
    const photosPerPage = 10;

    const data = [
        { "url": `${Welder}`, "title": "PELATIHAN KERJA WELDER 3G/4G", "category": "Kegiatan" },
        { "url": `${PelepasanPMI}`, "title": "RAPAT PELEPASAN 100 PMI PT. SENTOSAKARYA ADITAMA", "category": "Kegiatan" }
    ]

    const filteredPhotos = selectedCategory === 'all' ? data : data.filter(photo => photo.category === selectedCategory);

    const indexOfLastPhoto = currentPage * photosPerPage;
    const indexOfFirstPhoto = indexOfLastPhoto - photosPerPage;
    const currentPhotos = filteredPhotos.slice(indexOfFirstPhoto, indexOfLastPhoto);

    const totalPages = Math.ceil(filteredPhotos.length / photosPerPage);

    const openModal = (photo) => {
        setSelectedPhoto(photo);
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedPhoto(null);
        setIsOpen(false);
    };

    return(
        <div className="bg-white py-20 sm:py-18 relative z-10">
            <div className="mx-auto max-w-7xl items-center justify-center">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <p className="mt-5 text-3xl font-bold tracking-tight text-primary-400 sm:text-4xl uppercase">
                        Galeri - Galeri Foto Kami
                    </p>
                </div>
                <div className='py-10'>
                    <div className="mb-5">
                        <select
                        onChange={(e) => { setSelectedCategory(e.target.value); setCurrentPage(1); }}
                        value={selectedCategory}
                        className="p-2 border rounded cursor-pointer"
                        >
                        <option value="all">Semua</option>
                        <option value="Kegiatan">Kegiatan</option>
                        <option value="Penerbangan">Penerbangan</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {currentPhotos.map((photo, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg cursor-pointer transition duration-300 ease-in-out transform hover:scale-105" onClick={() => openModal(photo)}>
                            <img src={photo.url} alt={photo.title} className="object-cover w-full h-full" />
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

                    <Dialog open={isOpen} onClose={closeModal} className="fixed z-50 inset-0 overflow-y-auto flex items-center justify-center px-4">
                        <DialogBackdrop className="fixed inset-0 bg-black opacity-50" />
                        <DialogPanel className="relative bg-white rounded-lg max-w-3xl mx-auto p-4 shadow-lg transform transition-all duration-300 ease-in-out">
                        {selectedPhoto && (
                            <>
                                <DialogTitle className="text-xl font-bold text-primary-secondary-800 mb-4">{selectedPhoto.title}</DialogTitle>
                                <img src={selectedPhoto.url} alt={selectedPhoto.title} className="rounded-md object-contain w-full h-auto max-h-[80vh] mb-4" />
                                <button
                                    className="absolute top-3 right-2 p-1 ml-auto bg-transparent border-0 text-gray-800 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={closeModal}
                                >
                                    <span className="bg-transparent text-gray-800 h-6 w-6 text-2xl block outline-none focus:outline-none hover:text-gray-900">
                                        ×
                                    </span>
                                </button>
                            </>
                        )}
                        </DialogPanel>
                    </Dialog>
                </div>
            </div>
        </div>
    )
}

export default GaleryPhotoSection;