import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import LoginModal from '../components/LoginModal';
import Footer from '../components/Footer';
import JobDetails from '../components/JobDetails/JobDetails';

const JobDetail = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="App">
            {/* Navbar */}
            <header className="absolute inset-x-0 top-0 z-50">
                <Navbar openModal={openModal}/>
            </header>

            {/* Job Detail */}
            <JobDetails/>

            {/* Footer */}
            <div className='relative w-full p-5'>
                <div className='mx-auto mb-8 max-w-4xl'>
                    <div className='rounded-2xl bg-primary-secondary-800 px-5 py-6 md:px-8'>
                        <div className='flex flex-col items-center justify-between gap-4 md:flex-row'>
                            <div className='gap flex flex-col'>
                                <p className='text-3xl text-white font-bold'>Tertarik untuk bekerja diluar negeri?</p>
                                <p className='text-xl text-white'>Perusahaan Terbaik Untuk Tenaga Kerja Migran Indonesia</p>
                            </div>
                            <a rel="noopener noreferrer" target="_blank" className="w-full rounded-md bg-white px-6 py-4 text-center text-xl font-semibold text-primary-secondary-800 hover:opacity-90 md:w-auto" href="https://api.whatsapp.com/send?phone=6282298983076">Hubungi Kami</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className='absolute inset-x-0 z-50'>
                <Footer/>
            </div>

            {isModalOpen && <LoginModal closeModal={closeModal} isOpen={isModalOpen} />}
        </div>
    );
};

export default JobDetail;