import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {
  FaMapMarkerAlt,
  FaClock,
  FaMoneyBillAlt,
  FaAngleRight,
  FaCalendarAlt,
} from 'react-icons/fa';
import { GrUserWorker } from 'react-icons/gr';
import Blank from './Blank';
import SkeletonLoading from './SkeletonLoading';
import DataNotComplete from './DataNotComplete';

const currencyMap = {
  SG$: 'SGD',
  RM: 'MYR',
  HK$: 'HKD',
  KRW: 'KRW',
  NT$: 'TWD',
  YEN: 'YEN',
};

const JobDetail = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [exchangeRates, setExchangeRates] = useState({});
  const [loadingJobs, setLoadingJobs] = useState(true);
  const [loadingExchangeRates, setLoadingExchangeRates] = useState(true);
  const [errorFetching, setErrorFetching] = useState(null);
  const [isDataIncomplete, setIsDataIncomplete] = useState(false);
  const apiDatabaseUrl = import.meta.env.VITE_API_DATABASE;
  const apiCurrencyConvertUrl = import.meta.env.VITE_API_CURRENCYCONVERT;

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
  }, [apiCurrencyConvertUrl]);

  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await axios.get(`${apiDatabaseUrl}/api/jobs/${id}`);
        if (response.status === 404) {
          setErrorFetching('Job Not Found');
          setLoadingJobs(false);
        } else {
          const jobData = await response.data;
          if (jobData && jobData.name) {
            setJob(jobData);
            const isIncomplete =
              !jobData.tasks.length ||
              !jobData.documentRequirements.length ||
              !jobData.requirements ||
              !jobData.workingConditions;

            setIsDataIncomplete(isIncomplete);
            document.title = `${jobData.name.toUpperCase()} - PT. SENTOSAKARYA ADITAMA`;
            setLoadingJobs(false);
          }
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
        setErrorFetching('Error fetching job details');
        setLoadingJobs(false);
      }
    };

    fetchJobDetails();
  }, [apiDatabaseUrl, id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const formatCurrency = (number, currency) => {
    const exchangeRate = exchangeRates[currencyMap[currency]];
    if (exchangeRate) {
      const convertedAmount =
        parseFloat(number.split(' ')[1].replace(/\D/g, '')) / exchangeRate;
      return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
      }).format(convertedAmount);
    } else {
      return number;
    }
  };

  if (errorFetching) {
    return <Blank />;
  }

  if (isDataIncomplete) {
    return <DataNotComplete />;
  }

  if (loadingJobs || loadingExchangeRates) {
    return <SkeletonLoading />;
  }

  return (
    <div className="bg-white py-20 sm:py-18 relative z-10">
      <div className="mx-auto max-w-7xl items-center justify-center lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl lg:text-center">
          <p className="mt-5 text-3xl font-extrabold tracking-tight text-gray-800 sm:text-4xl uppercase">
            Detail Pekerjaan
          </p>
        </div>
        <div className="container mx-auto p-5">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/3 px-4 mb-5 lg:mb-0">
              <div className="flex items-center mb-5">
                <img
                  className="w-20 h-20 object-cover rounded-md"
                  src={job.image}
                  alt={`${job.name} image`}
                />
                <div className="ml-4">
                  <h3 className="text-2xl text-left text-gray-900 font-bold mb-2">
                    {job.name}
                  </h3>
                  <div className="text-gray-600 flex flex-wrap">
                    <span className="grid grid-cols-[auto,1fr] gap-1 items-center text-left mr-3">
                      <FaMapMarkerAlt className="text-primary-secondary-800 mr-2" />
                      {job.country}
                    </span>
                    <span className="grid grid-cols-[auto,1fr] gap-1 items-center text-left mr-3">
                      <FaCalendarAlt className="text-primary-secondary-800 mr-2" />
                      Diposting {formatDate(job.dateUpload)}
                    </span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col sm:flex-col sm:items-end space-y-6 sm:space-y-0 sm:space-x-6 w-full">
                  <div className="text-left hidden lg:block">
                    <Link
                      to="/registrasi"
                      className="w-full p-3 bg-primary-secondary-800 text-white rounded-md hover:bg-primary-secondary-900"
                    >
                      Daftar Sekarang
                    </Link>
                  </div>
                </div>
              </div>

              <div className="block lg:hidden w-full mb-5">
                <Link
                  to="/registrasi"
                  className="block w-full p-2 bg-primary-secondary-800 text-white rounded-md hover:bg-primary-secondary-900 text-center"
                >
                  Daftar Sekarang
                </Link>
              </div>

              <div className="text-left grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-5 sm:gap-x-6 sm:gap-y-6">
                <div className="space-y-1">
                  <span className="grid grid-cols-[auto,1fr] gap-1 items-center text-md text-gray-900 font-semibold">
                    <FaClock className="text-primary-secondary-800 mr-1" />
                    Masa Kotrak
                  </span>
                  <span className="text-md text-gray-500">
                    {job.contractPeriod}
                  </span>
                </div>
                <div className="space-y-1">
                  <span className="grid grid-cols-[auto,1fr] gap-1 items-center text-md text-gray-900 font-semibold">
                    <FaMoneyBillAlt className="text-primary-secondary-800 mr-1" />
                    Rentang Gaji
                  </span>
                  {exchangeRates &&
                    exchangeRates[currencyMap[job.salary.split(' ')[0]]] && (
                      <span className="text-md text-gray-500">
                        {job.salary}/bulan ≈{' '}
                        {formatCurrency(job.salary, job.salary.split(' ')[0])}
                        /bulan
                      </span>
                    )}
                </div>
                <div className="space-y-1">
                  <span className="grid grid-cols-[auto,1fr] gap-1 items-center text-md text-gray-900 font-semibold">
                    <GrUserWorker className="text-primary-secondary-800 mr-1" />
                    Jumlah Lowongan
                  </span>
                  <div className="text-gray-500 font-md">
                    <span>
                      {job.totalWorker} untuk Laki-Laki
                      <br />
                    </span>
                    <span>
                      {job.totalWorker} untuk Perempuan
                      <br />
                    </span>
                    <span>{job.totalWorker} untuk Campuran</span>
                  </div>
                </div>
              </div>

              <div className="mb-5 mt-10 text-left">
                <h4 className="text-xl font-semibold text-gray-900 mb-5">
                  Deskripsi Pekerjaan
                </h4>
                <p className="text-md text-gray-600">{job.type}</p>
                <h4 className="text-xl font-semibold mb-5 mt-8">Tugas</h4>
                <ul className="list-none text-gray-600 text-md space-y-2">
                  {job.tasks.map((task, index) => (
                    <li
                      key={index}
                      className="grid grid-cols-[auto,1fr] gap-2 items-start text-left"
                    >
                      <FaAngleRight className="text-primary-secondary-800 mr-2" />
                      {task.task}
                    </li>
                  ))}
                </ul>
                <h4 className="text-xl text-left font-semibold mb-5 mt-8">
                  Kelengkapan Dokumen Proses
                </h4>
                <ul className="list-none text-gray-600 text-md space-y-2">
                  {job.documentRequirements.map((document, index) => (
                    <li
                      key={index}
                      className="grid grid-cols-[auto,1fr] gap-2 items-start text-left"
                    >
                      <FaAngleRight className="text-primary-secondary-800 mr-2" />
                      {document.document}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-1/3 px-4">
              <div className="bg-gray-100 text-left rounded-lg p-5 mb-8">
                <h4 className="text-xl font-semibold mb-4">
                  Persyaratan Lainnya
                </h4>
                <ul className="list-none text-gray-600 text-md space-y-2">
                  <li className="grid grid-cols-[auto,1fr] gap-2 items-start text-left">
                    <FaAngleRight className="text-primary-secondary-800 mr-2" />
                    <span>Jenis Kelamin: {job.requirements.gender}</span>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-2 items-start text-left">
                    <FaAngleRight className="text-primary-secondary-800 mr-2" />
                    <span>Usia: {job.requirements.age}</span>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-2 items-start text-left">
                    <FaAngleRight className="text-primary-secondary-800 mr-2" />
                    <span>Tinggi: {job.requirements.height}</span>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-2 items-start text-left">
                    <FaAngleRight className="text-primary-secondary-800 mr-2" />
                    <span>Berat: {job.requirements.weight}</span>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-2 items-start text-left">
                    <FaAngleRight className="text-primary-secondary-800 mr-2" />
                    <span>Fisik: {job.requirements.physical}</span>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-2 items-start text-left">
                    <FaAngleRight className="text-primary-secondary-800 mr-2" />
                    <span>
                      Pendidikan Terakhir: {job.requirements.lastEducation}
                    </span>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-2 items-start text-left">
                    <FaAngleRight className="text-primary-secondary-800 mr-2" />
                    <span>
                      Status Pernikahan: {job.requirements.marriageStatus}
                    </span>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-2 items-start text-left">
                    <FaAngleRight className="text-primary-secondary-800 mr-2" />
                    <span>
                      Sertifikat Vaksin: {job.requirements.vaccineCertificate}
                    </span>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-2 items-start text-left">
                    <FaAngleRight className="text-primary-secondary-800 mr-2" />
                    <span>
                      Pengalaman Kerja: {job.requirements.workExperience}
                    </span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-100 text-left rounded-lg p-5">
                <h4 className="text-xl font-semibold mb-4">Kondisi Kerja</h4>
                <ul className="list-none text-gray-600 text-md space-y-2">
                  <li className="grid grid-cols-[auto,1fr] gap-2 items-start text-left">
                    <FaAngleRight className="text-primary-secondary-800 mr-2" />
                    <span>
                      Jumlah Kerja: {job.workingConditions.jumlahJamKerja}
                    </span>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-2 items-start text-left">
                    <FaAngleRight className="text-primary-secondary-800 mr-2" />
                    <span>Lembur: {job.workingConditions.overTime}</span>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-2 items-start text-left">
                    <FaAngleRight className="text-primary-secondary-800 mr-2" />
                    <span>
                      Makan dan Akomodasi:{' '}
                      {job.workingConditions.mealsAndAccommodation}
                    </span>
                  </li>
                  <li className="grid grid-cols-[auto,1fr] gap-2 items-start text-left">
                    <FaAngleRight className="text-primary-secondary-800 mr-2" />
                    <span>Asuransi: {job.workingConditions.insurance}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
