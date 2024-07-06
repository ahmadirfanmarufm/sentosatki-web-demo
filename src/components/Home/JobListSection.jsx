import React, { useState, useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaDollarSign, FaClock } from 'react-icons/fa';
import axios from 'axios';
import { polyfillCountryFlagEmojis } from "country-flag-emoji-polyfill";
import { jobs } from '../../data/JobList';

const currencyMap = {
    'SG$': 'SGD',
    'RM': 'MYR',
    'HK$': 'HKD',
    'KRW': 'KRW',
    'NT$': 'TWD',
    'YEN': 'YEN',
};

const JobListSection = () => {
    const [keyword, setKeyword] = useState('');
    const [category, setCategory] = useState('All');
    const [location, setLocation] = useState('All');
    const [salaryFilter, setSalaryFilter] = useState('');
    const [exchangeRates, setExchangeRates] = useState({});
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.exchangerate-api.com/v4/latest/IDR');
                setExchangeRates(response.data.rates);
            } catch (error) {
                console.error('Error fetching exchange rates:', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filtered = jobs.filter(job => {
            const matchesKeyword = job.title.toLowerCase().includes(keyword.toLowerCase()) || job.category.toLowerCase().includes(keyword.toLowerCase()) || job.location.toLowerCase().includes(keyword.toLowerCase());
            const matchesCategory = category === 'All' || job.category.toLowerCase() === category.toLowerCase();
            const matchesLocation = location === 'All' || job.location.toLowerCase() === location.toLowerCase();
            const matchesSalary = !salaryFilter || isSalaryInRange(job.salary, salaryFilter);

            return matchesKeyword && matchesCategory && matchesLocation && matchesSalary;
        });

        setFilteredJobs(filtered);
    }, [keyword, category, location, salaryFilter, exchangeRates]);

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const handleSalaryFilterChange = (event) => {
        const value = event.target.value;
        setSalaryFilter(value);

        const filtered = jobs.filter(job => {
            const matchesKeyword = job.title.toLowerCase().includes(keyword.toLowerCase()) || job.category.toLowerCase().includes(keyword.toLowerCase()) || job.location.toLowerCase().includes(keyword.toLowerCase());
            const matchesCategory = category === 'All' || job.category.toLowerCase() === category.toLowerCase();
            const matchesLocation = location === 'All' || job.location.toLowerCase() === location.toLowerCase();
            const matchesSalary = !value || isSalaryInRange(job.salary, value);

            return matchesKeyword && matchesCategory && matchesLocation && matchesSalary;
        });

        setFilteredJobs(filtered);
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
        <div className="bg-white py-10 sm:py-18 relative z-10">
            <div className="mx-auto max-w-7xl items-center justify-center ">
                <div className="container mx-auto p-4">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-bold leading-7 text-primary-secondary-800">JOB LIST</h2>
                        <p className="mt-5 text-3xl font-bold tracking-tight text-primary-400 sm:text-4xl">
                            DAFTAR JOB YANG TERBUKA
                        </p>
                        <p className="mt-4 text-lg leading-8 text-gray-600">
                            Temukan peluang karir terbaik yang sesuai dengan bakat Kamu di berbagai bidang industri. Jelajahi berbagai posisi menarik dan kirim lamaran Kamu dengan mudah untuk menggapai karir impianmu.
                        </p>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-4 items-center justify-center">
                        <input
                            type="text"
                            placeholder="Keyword"
                            value={keyword}
                            onChange={handleKeywordChange}
                            className="px-4 py-2 border rounded-md w-full md:w-1/5"
                        />

                        <select
                            value={category}
                            onChange={handleCategoryChange}
                            className="px-4 py-2 border rounded-md w-full md:w-1/5"
                        >
                            <option value="All">Kategori (Semua)</option>
                            <option value="Argiculture">Argiculture</option>
                            <option value="Aquaculture">Aquaculture</option>
                            <option value="BabySitter">BabySitter</option>
                            <option value="Elderly">Elderly</option>
                            <option value="Caregiver">Caregiver</option>
                            <option value="Construction">Construction</option>
                            <option value="Domestic Worker">Domestic Worker</option>
                            <option value="Family Cook">Family Cook</option>
                            <option value="Fisherman">Fisherman</option>
                            <option value="Forestry">Forestry</option>
                            <option value="Housekeeper">Housekeeper</option>
                            <option value="House Maid">House Maid</option>
                            <option value="Livestock">Livestock</option>
                            <option value="Nursing Home">Nursing Home</option>
                            <option value="Operator Worker">Operator Worker</option>
                        </select>

                        <select
                            value={location}
                            onChange={handleLocationChange}
                            className="px-4 py-2 border rounded-md w-full md:w-1/5"
                        >
                            <option value="All">Lokasi (Semua)</option>
                            <option value="Hongkong">Hongkong</option>
                            <option value="Jepang">Jepang</option>
                            <option value="Korea Selatan">Korea Selatan</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Taiwan">Taiwan</option>
                            <option value="Singapura">Singapura</option>
                        </select>

                        <select
                            value={salaryFilter}
                            onChange={handleSalaryFilterChange}
                            className="px-4 py-2 border rounded-md w-full md:w-1/5"
                        >
                            <option value="">Gaji (Semua)</option>
                            <option value="Rp. 5-9jt">Rp. 5-10jt</option>
                            <option value="Rp. 11-14jt">Rp. 11-20jt</option>
                            <option value="Rp. 21-30jt">Rp. 21-30jt</option>
                            <option value="Rp. 31-40jt">Rp. 31-40jt</option>
                            <option value="Rp. 41-50jt">Rp. 41-50jt</option>
                        </select>
                    </div>

                    <div className="mt-10 grid gap-4">
                        {filteredJobs.slice(0, 5).map(job => (
                            <div key={job.id} className="p-4 border rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center md:items-start">
                                <div className="flex items-start space-x-4 w-full md:w-3/4 text-left">
                                    <img src={job.image} alt={`${job.title} logo`} className="w-20 h-20 object-cover rounded-md" />
                                    <div>
                                        <h2 className="text-xl font-semibold mt-1">{job.title}</h2>
                                        <div className="flex flex-col md:flex-row md:space-x-4 md:mt-5 lg:mt-5">
                                            <p className="flex items-center text-gray-600"><FaMapMarkerAlt className="mr-2 text-primary-secondary-800"/>{job.location}</p>
                                            <p className="flex items-center text-gray-600"><FaClock className="mr-2 text-primary-secondary-800"/>{job.type}</p>
                                            {exchangeRates && exchangeRates[currencyMap[job.salary.split(' ')[0]]] && (
                                                <p className="flex items-center text-gray-600">
                                                    <FaDollarSign className="mr-2 text-primary-secondary-800"/>{job.salary} ≈ {formatCurrency(parseFloat(job.salary.split(' ')[1].replace(/\D/g,'')) / exchangeRates[currencyMap[job.salary.split(' ')[0]]])}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full md:w-1/4 flex flex-col items-start md:items-end mt-4 md:mt-0">
                                    <button className="bg-primary-secondary-800 text-white px-4 py-2 rounded mb-2 hover:bg-primary-secondary-900">Apply Now</button>
                                    <p className="mt-1 flex items-center text-sm text-gray-600"><FaCalendarAlt className="mr-2 text-primary-secondary-800" />{job.deadline}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {filteredJobs.length > 5 && (
                        <div className="flex justify-center mt-4">
                            <button className="bg-primary-secondary-800 text-white px-4 py-2 rounded hover:bg-primary-secondary-900">Browse More Jobs</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

polyfillCountryFlagEmojis();
export default JobListSection;
