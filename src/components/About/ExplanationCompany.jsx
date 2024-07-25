import React from 'react';
import aboutImage from "../../assets/about-image.jpg";

const ExplanationCompany = () => {
    return (
        <div className="flex flex-col items-center justify-center py-1 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                    <img src={aboutImage} alt="Background" className="object-cover object-center w-full h-full" />
                </div>
                <div className="space-y-5">
                    <h2 className="text-3xl font-bold text-primary-secondary-800">PT. SENTOSAKARYA ADITAMA</h2>
                    <p className="text-gray-600">
                        Penempatan Pekerja Migran Indonesia dengan fokus pada kesejahteraan dan keamanan, didukung oleh KEMNAKER dan BP2MI.
                        Kami memberikan penempatan kerja yang aman dan berkualitas, membangun jembatan antara pekerja migran dengan peluang internasional.
                        Hubungi kami sekarang untuk memulai perjalanan Kamu ke luar negeri dengan kesempatan kerja yang menjanjikan.
                    </p>
                    <div className="mt-7 sm:flex sm:justify-center">
                        <a
                            href="/registrasi"
                            className="rounded-md text-white bg-primary-secondary-800 px-4 py-3 text-sm font-semibold shadow-lg hover:bg-primary-secondary-900 focus:outline-none focus:ring-4 focus:ring-primary-secondary-600"
                        >
                            Daftar Diri Kamu
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ExplanationCompany;
