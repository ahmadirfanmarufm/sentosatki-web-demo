import React, { useState, useEffect, useRef } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillAlt, FaClock } from 'react-icons/fa';
import { GrSettingsOption, GrUserWorker } from "react-icons/gr";
import axios from 'axios';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const currencyMap = {
    'SG$': 'SGD',
    'RM': 'MYR',
    'HK$': 'HKD',
    'KRW': 'KRW',
    'NT$': 'TWD',
    'YEN': 'YEN',
};

const JobListSection = () => {
    const [jobs, setJobs] = useState([]);
    const [keyword, setKeyword] = useState('');
    const [categoryPosition, setCategoryPosition] = useState('All');
    const [categorySector, setCategorySector] = useState('All');
    const [location, setLocation] = useState('All');
    const [salaryFilter, setSalaryFilter] = useState('');
    const [exchangeRates, setExchangeRates] = useState({});
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;
    const jobListRef = useRef(null);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('/database/api/jobs');
                setJobs(response.data);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('id-ID', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/currencyconvert');
                setExchangeRates(response.data.rates);
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        setCurrentPage(1);
        const filtered = jobs.filter(job => {
            const matchesKeyword = job.position.toLowerCase().includes(keyword.toLowerCase());
            const matchesCategoryPosition = categoryPosition === 'All' || job.position.toLowerCase().includes(categoryPosition.toLowerCase());
            const matchesCategorySector = categorySector === 'All' || job.sector.toLowerCase() === categorySector.toLowerCase();
            const matchesLocation = location === 'All' || job.location.toLowerCase().includes(location.toLowerCase());
            const matchesSalary = !salaryFilter || isSalaryInRange(job.salary, salaryFilter);
        
            return matchesKeyword && matchesCategoryPosition && matchesCategorySector && matchesLocation && matchesSalary;
        });

        setFilteredJobs(filtered);
    }, [keyword, categoryPosition, categorySector, location, salaryFilter, jobs, exchangeRates]);

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleCategoryPositionChange = (event) => {
        setCategoryPosition(event.target.value);
    };

    const handleCategorySectorChange = (event) => {
        setCategorySector(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSalaryFilterChange = (event) => {
        const value = event.target.value;
        setSalaryFilter(value);
    };

    const isSalaryInRange = (salaryString, filter) => {
        const [currency, amount] = salaryString.split(' ');
        const currencyCode = currencyMap[currency];
        const salaryAmount = parseFloat(amount.replace(/\D/g,''));
        const exchangeRate = exchangeRates[currencyCode];

        if (!exchangeRate) return false;

        const convertedSalary = salaryAmount / exchangeRate;

        const [min, max] = parseSalaryFilter(filter);

        return convertedSalary >= min && convertedSalary <= max;
    };

    const parseSalaryFilter = (filter) => {
        const regex = /Rp\. (\d+)-(\d+)jt/;
        const match = filter.match(regex);

        if (!match || match.length < 3) {
            return [0, 0];
        }

        const min = parseInt(match[1]) * 1000000;
        const max = parseInt(match[2]) * 1000000;

        return [min, max];
    };

    const formatCurrency = (number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(number);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentJobs = filteredJobs.slice(indexOfFirstItem, indexOfLastItem);

    useEffect(() => {
        if (jobListRef.current) {
            jobListRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [currentPage]);

    return (
        <div className="bg-white py-20 sm:py-18 relative z-10">
            <div className="mx-auto max-w-7xl items-center justify-center ">
                <div className="container mx-auto p-4" ref={jobListRef}>
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-5 text-3xl font-bold tracking-tight text-primary-400 sm:text-4xl uppercase">
                            Daftar Pekerjaan yang Terbuka
                        </p>
                    </div>

                    <div className="mt-6 flex flex-wrap sm:flex-wrap gap-4 items-center justify-center">
                        <select
                            value={categoryPosition}
                            onChange={handleCategoryPositionChange}
                            className="px-4 py-2 border rounded-md w-full md:w-1/5"
                        >
                            <option value="All">Jabatan (Semua)</option>
                            {jobs.map((jobs, index) => (
                                <option key={index} value={jobs.position}>{jobs.position}</option>
                            ))}
                        </select>

                        <select
                            value={categorySector}
                            onChange={handleCategorySectorChange}
                            className="px-4 py-2 border rounded-md w-full md:w-1/5"
                        >
                            <option value="All">Sektor (Semua)</option>
                            <option value="Formal">Formal</option>
                            <option value="Informal">Informal</option>
                        </select>

                        <select
                            value={location}
                            onChange={handleLocationChange}
                            className="px-4 py-2 border rounded-md w-full md:w-1/5"
                        >
                            <option value="All">Lokasi (Semua)</option>
                            {Array.from(new Set(jobs.map(job => job.location))).map((location, index) => (
                                <option key={index} value={location}>{location}</option>
                            ))}
                        </select>

                        <select
                            value={salaryFilter}
                            onChange={handleSalaryFilterChange}
                            className="px-4 py-2 border rounded-md w-full md:w-1/5"
                        >
                            <option value="">Gaji (Semua)</option>
                            <option value="Rp. 5-10jt">Rp. 5-10jt</option>
                            <option value="Rp. 11-20jt">Rp. 11-20jt</option>
                            <option value="Rp. 21-30jt">Rp. 21-30jt</option>
                            <option value="Rp. 31-40jt">Rp. 31-40jt</option>
                            <option value="Rp. 41-50jt">Rp. 41-50jt</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Keyword"
                            value={keyword}
                            onChange={handleKeywordChange}
                            className="px-4 py-2 border rounded-md w-full md:w-1/5"
                        />
                    </div>

                    <div className="mt-10 grid gap-4">
                        {currentJobs.map(job => (
                            <a key={job.id} href={`/job-detail/${job.id}`} className="p-4 border rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center md:items-start transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer">
                                <div className="flex items-start space-x-4 w-full md:w-3/4 text-left">
                                    <img src={job.image} alt={`${job.position} image`} className="w-20 h-20 object-cover rounded-md" />
                                    <div>
                                        <h2 className="text-xl font-semibold mt-1">{job.position}</h2>
                                        <div className="flex flex-col md:flex-row md:space-x-4 md:mt-5 lg:mt-5">
                                            <p className="grid grid-cols-[auto,1fr] gap-1 items-center text-left text-gray-600"><FaMapMarkerAlt className="mr-2 text-primary-secondary-800"/>{job.location}</p>
                                            <p className="grid grid-cols-[auto,1fr] gap-1 items-center text-left text-gray-600"><FaClock className="mr-2 text-primary-secondary-800"/>{job.contractPeriod}</p>
                                            <p className="grid grid-cols-[auto,1fr] gap-1 items-center text-left text-gray-600"><GrSettingsOption className="mr-2 text-primary-secondary-800"/>{job.sector}</p>
                                            <p className="grid grid-cols-[auto,1fr] gap-1 items-center text-left text-gray-600"><GrUserWorker className="mr-2 text-primary-secondary-800"/>{job.worker}</p>
                                            {exchangeRates && exchangeRates[currencyMap[job.salary.split(' ')[0]]] && (
                                                <p className="grid grid-cols-[auto,1fr] gap-1 items-center mr-3 items-center text-gray-600">
                                                    <FaMoneyBillAlt className="mr-2 text-primary-secondary-800"/>{job.salary} ≈ {formatCurrency(parseFloat(job.salary.split(' ')[1].replace(/\D/g,'')) / exchangeRates[currencyMap[job.salary.split(' ')[0]]])}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/4 flex flex-col items-start md:items-end mt-4 md:mt-0">
                                    <button onClick={(e) => {
                                        e.stopPropagation();
                                        e.preventDefault();
                                        window.location.href = '/registrasi';
                                    }} className="bg-primary-secondary-800 text-white px-4 py-2 rounded mb-2 hover:bg-primary-secondary-900 transition duration-300 ease-in-out transform hover:scale-105">Daftar Sekarang</button>
                                    <p className="mt-1 flex items-center text-sm text-gray-600"><FaCalendarAlt className="mr-2 text-primary-secondary-800" />Upload {formatDate(job.dateUpload)}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="flex justify-center mt-4">
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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JobListSection;
