import { 
    ShieldCheckIcon,
    GlobeAsiaAustraliaIcon, 
    HandThumbUpIcon, 
    LockClosedIcon 
} from '@heroicons/react/24/outline';

const features = [
    {
        name: 'Penempatan Luas',
        description:
            'Kami memiliki jaringan yang luas di beberapa negara tujuan populer seperti Taiwan, Jepang, Hongkong, Korea Selatan, Malaysia, dan Singapura, memungkinkan kami untuk menawarkan berbagai pilihan pekerjaan sesuai dengan keterampilan dan kebutuhan Pekerja Migran Indonesia.',
        icon: GlobeAsiaAustraliaIcon,
    },
    {
        name: 'Terlindungi',
        description:
            'Sebagai mitra KEMNAKER dan BP2MI, kami memberikan perlindungan hukum yang komprehensif bagi Pekerja Migran Indonesia, memastikan hak-hak mereka terlindungi secara adil dan sesuai dengan regulasi yang berlaku.',
        icon: ShieldCheckIcon,
    },
    {
        name: 'Terpercaya',
        description:
            'Di terpercaya berdiri sejak tahun 1999 dengan gaya manajemen moderen sesuai perkembangan jaman. Kami merupakan partner yang dapat dipercaya dalam memenuhi kebutuhan Penempatan Pekerja Migran.',
        icon: HandThumbUpIcon,
    },
    {
        name: 'Keamanan',
        description:
            'Kami memastikan bahwa setiap proses penempatan kerja dilakukan dengan mematuhi standar keamanan tertinggi, menjaga kesejahteraan dan keselamatan Pekerja Migran Indonesia.',
        icon: LockClosedIcon,
    }
];

const AdvantageSection = () => {
    return (
        <div className="bg-white py-20 sm:py-28 relative z-10">
            <div className="mx-auto max-w-7xl px-6 items-center justify-center lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-bold leading-7 text-primary-secondary-800">KEUNGGULAN KAMI</h2>
                    <p className="mt-5 text-3xl font-bold tracking-tight text-primary-400 sm:text-4xl">
                        KENAPA HARUS MEMILIH KAMI
                    </p>
                    <p className="mt-4 text-lg leading-8 text-gray-600">
                        PT. SENTOSAKARYA ADITAMA merupakan pilihan terbaik untuk layanan Penempatan Pekerja Migran Indonesia ke Luar Negeri.
                    </p>
                </div>
                <div className="mx-auto mt-10 max-w-2xl border-t border-gray-200 pt-10 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature, index) => (
                            <div key={index} className="relative">
                                <dt className="flex items-center text-base font-semibold leading-7 text-gray-900">
                                    <div className="flex items-center justify-center h-10 w-10 bg-primary-secondary-800 rounded-lg mr-4">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    <span className='uppercase text-primary-secondary-500 font-bold'>{feature.name}</span>
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600 text-left">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default AdvantageSection;
