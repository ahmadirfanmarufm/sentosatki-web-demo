const HeroSection = () => {
    return (
        <div className="relative px-6 pt-14 lg:px-8 z-20 flex items-center justify-center h-screen">
            <div className="mx-auto max-w-2xl text-center text-white">
                <div>
                    <h1 className="text-4xl text-primary-400 font-bold tracking-tight sm:text-6xl uppercase">
                        Employment Agency
                    </h1>
                    <p className="mt-6 text-lg text-semibold text-primary-secondary-800 leading-8">
                        PT. SENTOSAKARYA ADITAMA adalah perusahaan yang berfokus pada penempatan tenaga kerja migran Indonesia di luar negeri. Kami berdedikasi untuk memberikan layanan terbaik dan memastikan kesejahteraan tenaga kerja kami.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <a
                            href="/registrasi"
                            className="rounded-md bg-primary-secondary-800 px-3.5 py-2.5 text-sm font-semibold shadow-lg hover:bg-primary-secondary-900 focus:outline-none focus:ring-4 focus:ring-primary-secondary-600"
                        >
                            Daftar Diri Kamu
                        </a>
                        <a href="/contact" className="text-sm font-semibold text-primary-secondary-800">
                            Temui Kami <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    <div className="hidden sm:mt-8 sm:flex sm:justify-center">
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
