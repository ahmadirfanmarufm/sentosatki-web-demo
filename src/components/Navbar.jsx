import React, { useState, useEffect, Fragment } from 'react';
import Logo from '../assets/logo-pt-sentosakarya-aditama.svg';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Transition
} from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
    PhotoIcon,
    VideoCameraIcon,
    ArrowDownTrayIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';


const galeri = [
    { name: 'Foto', description: 'Koleksi gambar kegiatan dan acara kami', href: '/galeri-foto', icon: PhotoIcon },
    { name: 'Video', description: 'Koleksi video kegiatan dan layanan kami', href: '/galeri-video', icon: VideoCameraIcon },
    { name: 'Download', description: 'Dokumen yang dapat diunduh', href: '/download', icon: ArrowDownTrayIcon },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
};

const Navbar = ({ openModal }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredPopover, setHoveredPopover] = useState(null);
    const [activePage, setActivePage] = useState('/');
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || null);
    const [isOpen, setIsOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 80) {
            setIsTransparent(false);
            setIsScrolled(true);
        } else {
            setIsTransparent(true);
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetch('/database/verify', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(response => response.json())
            .then(data => {
                localStorage.setItem('token', data.token);
                localStorage.setItem('user', JSON.stringify(data));
                setUser(data);
            })
            .catch(error => console.error('Error:', error));
        }
    }, []);

    const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        setUser(null);
        setTimeout(() => {
            window.location.href = '/';
        }, 0);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setActivePage(window.location.pathname);
    }, [user, window.location.pathname]);

    return(
        <header className={`fixed inset-x-0 top-0 z-50 ${isTransparent ? 'bg-transparent' : 'bg-blur backdrop-blur-lg bg-opacity-65'} ${isScrolled ? 'bg-white shadow-md' : ''}`}>
            <nav className="mx-auto flex items-center justify-between p-4 lg:p-6 lg:px-8" aria-label="Global">
                <div className="flex items-center justify-center lg:justify-start lg:flex-1">
                    <a href="/" className="-m-1.5 p-1.5">
                        <img className="h-14 w-auto" src={Logo} alt="Logo" />
                    </a>
                </div>
                <div className="hidden lg:flex lg:order-3 lg:ml-4 mr-8">
                    <PopoverGroup className="flex gap-x-12">
                        <a href="/" className={`text-sm font-semibold leading-6 ${activePage === '/' ? 'text-primary-400' : 'text-gray-900'} hover:text-primary-400 transition duration-400 ease-in-out`}>
                            Home
                        </a>
                        <a href="/tentang-kami" className={`text-sm font-semibold leading-6 ${activePage === '/tentang-kami' ? 'text-primary-400' : 'text-gray-900'} hover:text-primary-400 transition duration-400 ease-in-out`}>
                            Tentang Kami
                        </a>
                        <Popover className="relative" onMouseEnter={() => setHoveredPopover('galeri')} onMouseLeave={() => setHoveredPopover(null)}>
                            <PopoverButton className={`flex items-center gap-x-1 text-sm font-semibold leading-6 ${activePage.startsWith('/galeri') ? 'text-primary-400' : 'text-gray-900'} hover:text-primary-400 transition duration-400 ease-in-out`}>
                                Galeri
                                <ChevronDownIcon className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-200 ${hoveredPopover === 'galeri' ? 'rotate-180' : ''}`} aria-hidden="true" />
                            </PopoverButton>
                            <Transition
                                as={Fragment}
                                show={hoveredPopover === 'galeri'}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4">
                                        {galeri.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50 transition duration-400 ease-in-out"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-primary-400 transition duration-400 ease-in-out" aria-hidden="true" />
                                                </div>
                                                <div className="flex-auto">
                                                    <a href={item.href} className="block font-semibold text-gray-900">
                                                        {item.name}
                                                        <span className="absolute inset-0" />
                                                    </a>
                                                    <p className="mt-1 text-gray-600">{item.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </PopoverPanel>
                            </Transition>
                        </Popover>
                        <a href="/berita" className={`text-sm font-semibold leading-6 ${activePage.startsWith('/berita') ? 'text-primary-400' : 'text-gray-900'} hover:text-primary-400 transition duration-400 ease-in-out`}>
                            Berita
                        </a>
                        <a href="/job-list" className={`text-sm font-semibold leading-6 ${activePage === '/job-list' || activePage.startsWith('/job-detail') ? 'text-primary-400' : 'text-gray-900'} hover:text-primary-400 transition duration-400 ease-in-out`}>
                            Job List
                        </a>
                        <a href="/kontak" className={`text-sm font-semibold leading-6 ${activePage === '/kontak' ? 'text-primary-400' : 'text-gray-900'} hover:text-primary-400 transition duration-400 ease-in-out`}>
                            Kontak
                        </a>
                        <a href="/registrasi" className={`text-sm font-semibold leading-6 ${activePage === '/registrasi' ? 'text-primary-400' : 'text-gray-900'} hover:text-primary-400 transition duration-400 ease-in-out`}>
                            Registrasi
                        </a>
                    </PopoverGroup>
                </div>
                <div className="hidden lg:flex lg:order-3 lg:ml-4">
                    {user ? (
                        <Popover className="relative">
                            {({ open }) => {
                                useEffect(() => {
                                    setIsOpen(open);
                                }, [open]);
                                return(
                                    <>
                                        <Popover.Button className="flex items-center text-sm font-medium text-black font-semibold rounded-full hover:text-primary-400">
                                            <img
                                                className="w-8 h-8 me-2 rounded-full"
                                                src={user.image}
                                                alt={`${user.nama_staff} photo`}
                                            />
                                            {user.nama_staff}
                                            <span className={`text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                                                <ChevronDownIcon className="w-5 h-5 ms-2" />
                                            </span>
                                        </Popover.Button>
                                        <Transition
                                            as={Fragment}
                                            enter="transition ease-out duration-100"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="transition ease-in duration-75"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <Popover.Panel className="absolute right-0 z-10 mt-2 w-48 bg-white divide-y divide-gray-100 rounded-lg shadow-lg ring-1 ring-opacity-5">
                                                <div className="px-4 py-3 text-sm text-gray-800 text-left">
                                                    <div className="truncate font-semibold">{user.nama_staff}</div>
                                                    <div className="font-semibold text-primary-400">{user.jabatan}</div>
                                                </div>
                                                <ul className="py-2 text-sm text-gray-800 text-left">
                                                    {user.jabatan === 'Writter' && (
                                                        <li>
                                                            <a href="/tambah-berita" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary-400">
                                                                Tambahkan Berita
                                                            </a>
                                                        </li>
                                                    )}
                                                    {['Staff', 'Admin'].includes(user.jabatan) && (
                                                        <li>
                                                            <a href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 hover:text-primary-400">
                                                                Dashboard
                                                            </a>
                                                        </li>
                                                    )}
                                                    <li>
                                                        <button
                                                            onClick={logout}
                                                            className="block w-full text-left px-4 py-2 hover:bg-gray-100 hover:text-primary-400"
                                                        >
                                                            Logout
                                                        </button>
                                                    </li>
                                                </ul>
                                            </Popover.Panel>
                                        </Transition>
                                    </>
                                )
                            }}
                        </Popover>
                    ) : (
                    <button
                        onClick={openModal}
                        className="text-white bg-primary-secondary-800 hover:bg-primary-400 focus:ring-4 focus:outline-none focus:ring-primary-secondary-200 font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-400 ease-in-out"
                    >
                        Login<span aria-hidden="true"> &rarr;</span>
                    </button>
                    )}
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="text-gray-700 inline-flex items-center justify-center rounded-md p-2.5"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>

            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="lg:hidden" onClose={setMobileMenuOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 z-50" />
                    </Transition.Child>

                    <Transition.Child
                        as={Fragment}
                        enter="transition ease-in-out duration-300 transform"
                        enterFrom="-translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="-translate-x-full"
                    >
                        <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full max-w-xs overflow-y-auto bg-white shadow-lg ring-1 ring-black ring-opacity-5 px-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between mt-5">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <img className="h-14 w-auto" src={Logo} alt="Logo" />
                                </a>
                                <button
                                    type="button"
                                    className="text-gray-700 inline-flex items-center justify-center rounded-md"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <a
                                            href="/"
                                            className={`block -mx-3 rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${activePage === '/' ? 'text-primary-400' : 'text-gray-900 hover:bg-primary-400 hover:text-white'} transition duration-400 ease-in-out`}
                                        >
                                            Home
                                        </a>
                                        <a
                                            href="/tentang-kami"
                                            className={`block -mx-3 rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${activePage === '/tentang-kami' ? 'text-primary-400' : 'text-gray-900 hover:bg-primary-400 hover:text-white'} transition duration-400 ease-in-out`}
                                        >
                                            Tentang Kami
                                        </a>
                                        <Disclosure as="div" className="-mx-3">
                                            {({ open }) => (
                                                <>
                                                    <DisclosureButton className={`flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${activePage.startsWith('/galeri') ? 'text-primary-400' : 'text-gray-900 hover:bg-primary-400 hover:text-white'} transition duration-400 ease-in-out`}>
                                                        Galeri
                                                        <ChevronDownIcon
                                                            className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                            aria-hidden="true"
                                                        />
                                                    </DisclosureButton>
                                                    <DisclosurePanel className="mt-2 space-y-2">
                                                        {galeri.map((item) => (
                                                            <Disclosure.Button
                                                                key={item.name}
                                                                as="a"
                                                                href={item.href}
                                                                className={`block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 ${activePage === item.href ? 'text-primary-400' : 'text-gray-900 hover:bg-primary-400 hover:text-white'} transition duration-400 ease-in-out`}
                                                            >
                                                                {item.name}
                                                            </Disclosure.Button>
                                                        ))}
                                                    </DisclosurePanel>
                                                </>
                                            )}
                                        </Disclosure>
                                        <a
                                            href="/berita"
                                            className={`block -mx-3 rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${activePage.startsWith('/berita') ? 'text-primary-400' : 'text-gray-900 hover:bg-primary-400 hover:text-white'} transition duration-400 ease-in-out`}
                                        >
                                            Berita
                                        </a>
                                        <a
                                            href="/job-list"
                                            className={`block -mx-3 rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${activePage === "/job-list" || activePage.startsWith('/job-detail') ? 'text-primary-400' : 'text-gray-900 hover:bg-primary-400 hover:text-white'} transition duration-400 ease-in-out`}
                                        >
                                            Job List
                                        </a>
                                        <a
                                            href="/kontak"
                                            className={`block -mx-3 rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${activePage === "/kontak" ? 'text-primary-400' : 'text-gray-900 hover:bg-primary-400 hover:text-white'} transition duration-400 ease-in-out`}
                                        >
                                            Kontak
                                        </a>
                                        <a
                                            href="/registrasi"
                                            className={`block -mx-3 rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 ${activePage === "/registrasi" ? 'text-primary-400' : 'text-gray-900 hover:bg-primary-400 hover:text-white'} transition duration-400 ease-in-out`}
                                        >
                                            Registrasi
                                        </a>
                                    </div>
                                    <div>
                                        {user ? (
                                            <Popover className='relative'>
                                                {({ open }) => {
                                                    setIsOpen(open);
                                                    return(
                                                        <>
                                                            <Popover.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-primary-400 hover:text-white transition duration-400 ease-in-out">
                                                                <img
                                                                    className="w-8 h-8 me-2 rounded-full"
                                                                    src={user.image}
                                                                    alt={`${user.nama_staff} photo`}
                                                                />
                                                                {user.nama_staff}
                                                                <ChevronDownIcon
                                                                    className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                                    aria-hidden="true"
                                                                />
                                                            </Popover.Button>
                                                                <Transition
                                                                as={Fragment}
                                                                enter="transition ease-out duration-100"
                                                                enterFrom="opacity-0 scale-95"
                                                                enterTo="opacity-100 scale-100"
                                                                leave="transition ease-in duration-75"
                                                                leaveFrom="opacity-100 scale-100"
                                                                leaveTo="opacity-0 scale-95"
                                                            >
                                                                <Popover.Panel className="mt-2 space-y-2 bg-gray-100 rounded-lg">
                                                                    {user.jabatan === 'Writter' && (
                                                                        <a
                                                                            href="/tambah-berita"
                                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-primary-400 hover:text-white transition duration-400 ease-in-out"
                                                                        >
                                                                            Tambahkan Berita Terbaru
                                                                        </a>
                                                                    )}
                                                                    {['Staff', 'Admin'].includes(user.jabatan) && (
                                                                        <a
                                                                            href="/dashboard"
                                                                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-primary-400 hover:text-white transition duration-400 ease-in-out"
                                                                        >
                                                                            Dashboard
                                                                        </a>
                                                                    )}
                                                                    <button
                                                                        onClick={logout}
                                                                        className="block w-full text-left rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-primary-400 hover:text-white transition duration-400 ease-in-out"
                                                                    >
                                                                        Logout
                                                                    </button>
                                                                </Popover.Panel>
                                                            </Transition>
                                                        </>
                                                    )
                                                }}
                                            </Popover>
                                        ) : (
                                            <button
                                                onClick={() => {
                                                    setMobileMenuOpen(false);
                                                    openModal()
                                                }}
                                                className="block w-full py-2.5 text-center text-sm font-medium text-white bg-primary-secondary-800 rounded-lg hover:bg-primary-400 transition duration-400 ease-in-out"
                                            >
                                                Login <span aria-hidden="true"> &rarr;</span>
                            
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </DialogPanel>
                    </Transition.Child>
                </Dialog>
            </Transition.Root>
        </header>
    );
}

export default Navbar;
