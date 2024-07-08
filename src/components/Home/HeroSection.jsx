import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative flex flex-col items-center justify-center h-screen px-6 lg:px-8 z-20">
            <div className="mx-auto max-w-2xl text-center text-white">
                <h1 className="text-4xl sm:text-6xl text-primary-400 font-bold tracking-tight uppercase">
                    Employment Agency
                </h1>
                <p className="mt-6 text-lg sm:text-xl text-semibold text-primary-secondary-800 leading-8">
                    PT. SENTOSAKARYA ADITAMA adalah perusahaan yang berfokus pada Penempatan Pekerja Migran Indonesia ke Luar Negeri. Kami berdedikasi untuk memberikan layanan terbaik dan memastikan kesejahteraan tenaga kerja kami.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="/registrasi"
                        className="rounded-md bg-primary-secondary-800 px-4 py-3 text-sm font-semibold shadow-lg hover:bg-primary-secondary-900 focus:outline-none focus:ring-4 focus:ring-primary-secondary-600"
                    >
                        Daftar Diri Kamu
                    </a>
                    <a href="/kontak" className="text-sm font-semibold text-primary-secondary-800">
                        Temui Kami <span aria-hidden="true">→</span>
                    </a>
                </div>
                <div className="hidden sm:mt-7 sm:flex sm:justify-center">
                    <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Ketahui berita - berita dari kami.{' '}
                        <a href="/berita" className="font-semibold text-primary-secondary-800">
                            <span className="absolute inset-0" aria-hidden="true" />
                            Baca selengkapnya <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
