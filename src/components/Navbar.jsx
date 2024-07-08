import { useState, useEffect, Fragment } from 'react';
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
    UserGroupIcon, 
    ArrowDownTrayIcon,
    NewspaperIcon,
    CalendarDaysIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const galeri = [
    { name: 'Foto', description: 'Koleksi gambar kegiatan dan acara kami', href: '/galeri-foto', icon: PhotoIcon },
    { name: 'Video', description: 'Koleksi video kegiatan dan layanan kami', href: '/galeri-video', icon: VideoCameraIcon },
    { name: 'Staff', description: 'Profil tim manajemen dan konsultan kami', href: '/staff', icon: UserGroupIcon },
    { name: 'Download', description: 'Dokumen yang dapat diunduh', href: '/download', icon: ArrowDownTrayIcon },
];

const beritaAgenda = [
    { name: 'Berita', description: 'Informasi terbaru tentang kami', href: '/berita', icon: NewspaperIcon },
    { name: 'Agenda', description: 'Jadwal acara kami', href: '/agenda', icon: CalendarDaysIcon }
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
};

const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isTransparent, setIsTransparent] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredPopover, setHoveredPopover] = useState(null);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setIsTransparent(false);
            setIsScrolled(true);
        } else {
            setIsTransparent(true);
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <header className={`fixed inset-x-0 top-0 z-50 ${isTransparent ? 'bg-transparent' : 'bg-blur backdrop-blur-lg bg-opacity-65'} ${isScrolled ? 'bg-white shadow-md' : ''}`}>
            <nav className="mx-auto flex items-center justify-between p-4 lg:p-6 lg:px-8" aria-label="Global">
                <div className="flex items-center justify-center lg:justify-start lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <img className="h-14 w-auto" src={Logo} alt="Logo" />
                    </a>
                </div>
                <div className="hidden lg:flex lg:order-3 lg:ml-4 mr-8">
                    <PopoverGroup className="flex gap-x-12">
                        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-secondary-800">
                            Home
                        </a>
                        <a href="/tentang-kami" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-secondary-800">
                            Tentang Kami
                        </a>
                        <Popover className="relative" onMouseEnter={() => setHoveredPopover('galeri')} onMouseLeave={() => setHoveredPopover(null)}>
                            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-primary-secondary-800">
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
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-primary-secondary-800" aria-hidden="true" />
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
                        <Popover className="relative" onMouseEnter={() => setHoveredPopover('beritaAgenda')} onMouseLeave={() => setHoveredPopover(null)}>
                            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-primary-secondary-800">
                                Berita/Agenda
                                <ChevronDownIcon className={`h-5 w-5 flex-none text-gray-400 transition-transform duration-200 ${hoveredPopover === 'beritaAgenda' ? 'rotate-180' : ''}`} aria-hidden="true" />
                            </PopoverButton>
                            <Transition
                                as={Fragment}
                                show={hoveredPopover === 'beritaAgenda'}
                                enter="transition ease-out duration-200"
                                enterFrom="opacity-0 translate-y-1"
                                enterTo="opacity-100 translate-y-0"
                                leave="transition ease-in duration-150"
                                leaveFrom="opacity-100 translate-y-0"
                                leaveTo="opacity-0 translate-y-1"
                            >
                                <PopoverPanel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                                    <div className="p-4">
                                        {beritaAgenda.map((item) => (
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                                            >
                                                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                    <item.icon className="h-6 w-6 text-gray-600 group-hover:text-primary-secondary-800" aria-hidden="true" />
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
                        <a href="/kontak" className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-secondary-800">
                            Kontak
                        </a>
                        <a href="/registrasi" className='text-sm font-semibold leading-6 text-gray-900 hover:text-primary-secondary-800'>
                            Registrasi
                        </a>
                    </PopoverGroup>
                </div>
                <div className="hidden lg:flex lg:order-3 lg:ml-4">
                    <a
                        href="/login"
                        className="text-white bg-primary-secondary-800 hover:bg-primary-secondary-900 focus:ring-4 focus:outline-none focus:ring-primary-secondary-200 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-primary-secondary-800 dark:hover:bg-primary-secondary-900 dark:focus:ring-primary-secondary-900"
                    >
                        Login<span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
                <div className="flex items-center gap-x-4 lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
            </nav>
            <Transition.Root show={mobileMenuOpen} as={Fragment}>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50 bg-black bg-opacity-25" />
                    <DialogPanel className="fixed inset-y-0 left-0 z-50 w-full max-w-xs overflow-y-auto bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="flex items-center justify-between p-4">
                            <a href="#" className="-m-1.5 p-1.5">
                                <img className="h-14 w-auto" src={Logo} alt="Logo" />
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="space-y-2 px-4">
                            <Disclosure as="div" className="space-y-1">
                                <a
                                    href="/"
                                    className="flex items-center justify-between w-full py-2 text-sm font-medium text-left text-gray-900 rounded-lg hover:bg-gray-50"
                                >
                                    Home
                                </a>
                            </Disclosure>
                            <Disclosure as="div" className="space-y-1">
                                <a
                                    href="/"
                                    className="flex items-center justify-between w-full py-2 text-sm font-medium text-left text-gray-900 rounded-lg hover:bg-gray-50"
                                >
                                    Tentang Kami
                                </a>
                            </Disclosure>
                            <Disclosure as="div" className="space-y-1">
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex items-center justify-between w-full py-2 text-sm font-medium text-left text-gray-900 rounded-lg hover:bg-gray-50">
                                            <span>Galeri</span>
                                            <ChevronDownIcon
                                                className={classNames(open ? 'rotate-180' : '', 'h-5 w-5')}
                                                aria-hidden="true"
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel className="space-y-1">
                                            {galeri.map((item) => (
                                                <DisclosureButton
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="flex w-full items-center justify-between pl-6 pr-2 text-sm text-gray-600 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </DisclosureButton>
                                            ))}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure as="div" className="space-y-1">
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex items-center justify-between w-full py-2 text-sm font-medium text-left text-gray-900 rounded-lg hover:bg-gray-50">
                                            <span>Berita/Agenda</span>
                                            <ChevronDownIcon
                                                className={classNames(open ? 'rotate-180' : '', 'h-5 w-5')}
                                                aria-hidden="true"
                                            />
                                        </DisclosureButton>
                                        <DisclosurePanel className="space-y-1">
                                            {beritaAgenda.map((item) => (
                                                <DisclosureButton
                                                    key={item.name}
                                                    as="a"
                                                    href={item.href}
                                                    className="flex w-full items-center justify-between pl-6 pr-2 text-sm text-gray-600 hover:bg-gray-50"
                                                >
                                                    {item.name}
                                                </DisclosureButton>
                                            ))}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                            <Disclosure as="div" className="space-y-1">
                                <a
                                    href="/kontak"
                                    className="flex items-center justify-between w-full py-2 text-sm font-medium text-left text-gray-900 rounded-lg hover:bg-gray-50"
                                >
                                    Kontak
                                </a>
                            </Disclosure>
                            <Disclosure as="div" className="space-y-1">
                                <a 
                                    href="/registrasi" 
                                    className='flex items-center justify-between w-full py-2 text-sm font-medium text-left text-gray-900 rounded-lg hover:bg-gray-50'
                                >
                                    Registrasi
                                </a>
                            </Disclosure>
                        </div>
                        <div className="p-4">
                            <a
                                href="/login"
                                className="block w-full py-2.5 text-center text-sm font-medium text-white bg-primary-secondary-800 rounded-lg hover:bg-primary-secondary-900"
                            >
                                Log in <span aria-hidden="true">&rarr;</span>
                            </a>
                        </div>
                    </DialogPanel>
                </Dialog>
            </Transition.Root>
        </header>
    )
}

export default Navbar;
