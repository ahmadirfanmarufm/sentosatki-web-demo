import React, { useState, useEffect } from 'react';
import axios from 'axios';
import bendera_jepang from "../../assets/bendera_jepang.svg";
import bendera_korea_selatan from "../../assets/bendera_korea_selatan.svg";
import bendera_malaysia from "../../assets/bendera_malaysia.svg";
import bendera_singapura from "../../assets/bendera_singapura.svg";
import bendera_taiwan from "../../assets/bendera_taiwan.svg";

const bendera_hongkong = new URL('../../assets/bendera_hongkong.svg', import.meta.url).href;

const locations = [
    {
        name: 'Hongkong',
        image: bendera_hongkong,
    },
    {
        name: 'Jepang',
        image: bendera_jepang,
    },
    {
        name: 'Korea Selatan',
        image: bendera_korea_selatan,
    },
    {
        name: 'Malaysia',
        image: bendera_malaysia,
    },
    {
        name: 'Singapura',
        image: bendera_singapura,
    },
    {
        name: 'Taiwan',
        image: bendera_taiwan,
    },
];

const CategorySection = () => {
    const [activeFilter, setActiveFilter] = useState('Jobs');
    const [jobs, setJobs] = useState([]);
    const [loadingJobs, setLoadingJobs] = useState(true);
    const apiDatabaseUrl = import.meta.env.VITE_API_DATABASE;

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get(`${apiDatabaseUrl}/api/jobs`);
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            } finally {
                setLoadingJobs(false);
            }
        };

        fetchJobs();
    }, []);

    const handleFilterChange = (filter) => {
        setActiveFilter(filter);
    };

    const jobsCategories = jobs.map(job => ({
        name: job.position,
        image: job.image
    }));

    const filteredCategories = activeFilter === 'Jobs' ? jobsCategories : locations.map(loc => ({ name: loc.name, image: loc.image }));

    return (
        <div className="bg-white py-10 sm:py-18 relative z-10">
            <div className="mx-auto max-w-7xl px-6 items-center justify-center lg:px-8">
                <div className="container mx-auto py-5">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-bold leading-7 text-primary-secondary-800">CATEGORY</h2>
                        <p className="mt-5 text-3xl font-bold tracking-tight text-primary-400 sm:text-4xl">
                            KATEGORI JOB YANG DIMILIKI
                        </p>
                    </div>
                    <div className="mt-10 flex justify-center mb-6 space-x-2">
                        <button
                            onClick={() => handleFilterChange('Jobs')}
                            className={`px-4 py-2 rounded ${activeFilter === 'Jobs' ? 'bg-primary-secondary-800 text-white' : 'bg-gray-200 text-gray-700'} transition duration-300 ease-in-out transform hover:scale-105`}
                        >
                            Pekerjaan
                        </button>
                        <button
                            onClick={() => handleFilterChange('Country')}
                            className={`px-4 py-2 rounded ${activeFilter === 'Country' ? 'bg-primary-secondary-800 text-white' : 'bg-gray-200 text-gray-700'} transition duration-300 ease-in-out transform hover:scale-105`}
                        >
                            Negara
                        </button>
                    </div>
                    {loadingJobs ? (
                        <div className="mt-10 flex justify-center mb-6 space-x-2">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-secondary-800"></div>
                            <div className="ml-4 text-primary-secondary-800 font-semibold">Loading...</div>
                        </div>
                    ) : (
                        <div className={`mt-10 gap-4 grid ${activeFilter === 'Jobs' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : activeFilter === 'Country' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'}`}>
                            {filteredCategories.map((category, index) => (
                                <div
                                    key={index}
                                    className="cat-item rounded p-4 flex flex-col items-center bg-white shadow-md hover:bg-gray-100 transition duration-300 ease-in-out transform hover:scale-105"
                                >
                                    {activeFilter === 'Jobs' && (
                                        <>
                                            <img src={category.image} alt={`${category.name}`} className='h-20 rounded-md w-auto mb-4'/>
                                            <h6 className="mb-3 text-gray-700 text-l">{category.name}</h6>
                                        </>
                                    )}
                                    {activeFilter === 'Country' && (
                                        <>
                                            <img src={category.image} alt={category.name} className="h-12 mb-4" />
                                            <h6 className="mb-3 text-gray-700 text-l">{category.name}</h6>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CategorySection;
