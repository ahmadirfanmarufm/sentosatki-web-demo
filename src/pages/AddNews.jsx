import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LoginModal from '../components/LoginModal';
import Footer from '../components/Footer';
import AddNewsSection from '../components/AddNews/AddNewsSection';

const AddNews = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return(
        <div className="App">
            {/* Navbar */}
            <header className="absolute inset-x-0 top-0 z-50">
                <Navbar openModal={openModal}/>
            </header>

            {/* Tambah Berita Section */}
            <AddNewsSection/>

            {/* Footer */}
            <div className='absolute inset-x-0 z-50'>
                <Footer/>
            </div>

            {isModalOpen && <LoginModal closeModal={closeModal} isOpen={isModalOpen} />}
        </div>
    )
}

export default AddNews;