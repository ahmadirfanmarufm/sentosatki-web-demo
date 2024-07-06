import React from 'react';
import Navbar from '../components/Navbar';
import passengerGettingAirplaneVideo from '../assets/video-penerbangan-welder-koreaselatan.mp4';
import HeroSection from '../components/Home/HeroSection';
import AdvantageSection from '../components/Home/AdvantageSection';
import SupervisedBy from '../components/Home/SupervisedBy';
import LatestNews from '../components/Home/LatestNews';
import TestimonialSection from '../components/Home/TestimonialSection';
import Footer from '../components/Footer';
import CategorySection from '../components/Home/CategorySection';
import JobListSection from '../components/Home/JobListSection';

const Home = () => {

    return (
        <div className="App">
            {/* Video Background */}
            <video
                src={passengerGettingAirplaneVideo}
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                style={{ objectFit: 'cover' }}
            />

            {/* Semi Transparent White Background untuk Hero Section */}
            <div className="absolute inset-0 bg-white opacity-70 z-10" /> 

            {/* Navbar */}
            <header className="absolute inset-x-0 top-0 z-50">
                <Navbar/>
            </header>

            {/* Hero Section */}
            <HeroSection/>

            {/* Section Diawasi Oleh */}
            <SupervisedBy/>

            {/* Keunggulan Section */}
            <AdvantageSection/>

            {/* Section Category Job */}
            <CategorySection/>

            {/* Job List Section */}
            <JobListSection/>

            {/* Berita Terbaru Section */}
            <LatestNews/>

            {/* Testimonial Section */}
            <TestimonialSection/>

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
        </div>
    );
}

export default Home;
