import React from 'react';

const HeroSection = () => {
    return (
        <div className="relative flex items-center justify-center min-h-screen px-6 pt-14 lg:px-8 z-20">
            <div className="mx-auto max-w-2xl text-center text-white">
                <div>
                    <h1 className="text-4xl sm:text-6xl text-primary-400 font-bold tracking-tight uppercase leading-tight mb-4">
                        Employment Agency
                    </h1>
                    <p className="text-lg text-semibold text-primary-secondary-800 leading-8 mb-6">
                        PT. SENTOSAKARYA ADITAMA adalah perusahaan yang berfokus pada Penempatan Pekerja Migran Indonesia ke Luar Negeri. Kami berdedikasi untuk memberikan layanan terbaik dan memastikan kesejahteraan tenaga kerja kami.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a
                            href="/registrasi"
                            className="rounded-md bg-primary-secondary-800 px-4 py-3 text-sm font-semibold shadow-lg hover:bg-primary-secondary-900 focus:outline-none focus:ring-4 focus:ring-primary-secondary-600 mb-3 sm:mb-0 sm:mr-3"
                        >
                            Daftar Diri Kamu
                        </a>
                        <a href="/kontak" className="text-sm font-semibold text-primary-secondary-800">
                            Temui Kami <span className="ml-1" aria-hidden="true">→</span>
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
        </div>
    );
}

export default HeroSection;
