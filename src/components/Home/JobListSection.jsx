import React, { useState, useEffect } from "react";
import axios from 'axios';
import { FaCalendarAlt, FaMapMarkerAlt, FaMoneyBillAlt, FaClock } from 'react-icons/fa';
import { GrSettingsOption, GrUserWorker } from "react-icons/gr";

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
    const [loadingJobs, setLoadingJobs] = useState(true);
    const [loadingExchangeRates, setLoadingExchangeRates] = useState(true);
    const apiDatabaseUrl = import.meta.env.VITE_API_DATABASE;
    const apiCurrencyConvertUrl = import.meta.env.VITE_API_CURRENCYCONVERT;

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
                const response = await axios.get(apiCurrencyConvertUrl);
                setExchangeRates(response.data.rates);
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            } finally {
                setLoadingExchangeRates(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
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

    return (
        <div className="bg-white py-20 sm:py-18 relative z-10">
            <div className="mx-auto max-w-7xl items-center justify-center ">
                <div className="container mx-auto p-4">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <p className="mt-5 text-3xl font-bold tracking-tight text-primary-400 sm:text-4xl">
                            DAFTAR JOB YANG TERBUKA
                        </p>
                    </div>

                    {loadingJobs || loadingExchangeRates ? (
                        <div className="mt-6 flex flex-wrap sm:flex-wrap gap-4 items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-secondary-800"></div>
                            <div className="ml-4 text-primary-secondary-800 font-semibold">Loading...</div>
                        </div>
                    ) : (
                        <>
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
                                {filteredJobs.slice(0, 5).map(job => (
                                    <div key={job.id} className="p-4 border rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center md:items-start transition duration-300 ease-in-out transform hover:scale-105">
                                        <a href={`/job-detail/${job.id}`} className="w-full md:w-3/4 flex items-start space-x-4 text-left cursor-pointer">
                                            <img src={job.image} alt={`${job.position} image`} className="w-20 h-20 object-cover rounded-md" />
                                            <div>
                                                <h2 className="text-xl font-semibold mt-1">{job.position}</h2>
                                                <div className="flex flex-col md:flex-row md:space-x-4 md:mt-5 lg:mt-5">
                                                    <p className="grid grid-cols-[auto,1fr] gap-1 items-center text-left text-gray-600"><FaMapMarkerAlt className="mr-2 text-primary-secondary-800"/>{job.location}</p>
                                                    <p className="grid grid-cols-[auto,1fr] gap-1 items-center text-left text-gray-600"><FaClock className="mr-2 text-primary-secondary-800"/>{job.contractPeriod}</p>
                                                    <p className="grid grid-cols-[auto,1fr] gap-1 items-center text-left text-gray-600"><GrSettingsOption className="mr-2 text-primary-secondary-800"/>{job.category}</p>
                                                    <p className="grid grid-cols-[auto,1fr] gap-1 items-center text-left text-gray-600"><GrUserWorker className="mr-2 text-primary-secondary-800"/>{job.worker}</p>
                                                    {exchangeRates && exchangeRates[currencyMap[job.salary.split(' ')[0]]] && (
                                                        <p className="grid grid-cols-[auto,1fr] gap-1 items-center mr-3 items-center text-gray-600">
                                                            <FaMoneyBillAlt className="mr-2 text-primary-secondary-800"/>{job.salary} ≈ {formatCurrency(parseFloat(job.salary.split(' ')[1].replace(/\D/g,'')) / exchangeRates[currencyMap[job.salary.split(' ')[0]]])}
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </a>
                                        <div className="w-full md:w-1/4 flex flex-col items-start md:items-end mt-4 md:mt-0">
                                            <button onClick={(e) => {
                                                e.stopPropagation();
                                                e.preventDefault();
                                                window.location.href = '/registrasi';
                                            }} className="bg-primary-secondary-800 text-white px-4 py-2 rounded mb-2 hover:bg-primary-secondary-900 transition duration-300 ease-in-out transform hover:scale-105 ">Daftar Sekarang</button>
                                            <p className="mt-1 flex items-center text-sm text-gray-600"><FaCalendarAlt className="mr-2 text-primary-secondary-800" />Upload {formatDate(job.dateUpload)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {filteredJobs.length > 5 && (
                                <div className="flex justify-center mt-4">
                                    <a href="/job-list" className="bg-primary-secondary-800 text-white px-4 py-2 rounded hover:bg-primary-secondary-900">Lihat selangkapnya</a>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default JobListSection;
