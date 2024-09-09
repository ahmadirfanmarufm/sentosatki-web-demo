import { useEffect, Fragment, useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { Dialog, Transition, DialogTitle, DialogPanel } from '@headlessui/react';
import { FaExclamationTriangle } from 'react-icons/fa';

const ModalDeleteConfirmationMultiple = ({ 
    isOpen, 
    closeModal, 
    totalSelectedPhoto, 
    selectedPhotos,  
    toast, 
    setPhotos,
    setSelectedPhotos,
    setIsDeleteMode,
    setIsDeleteConfirmationOpenMultiple,
}) => {
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const apiDatabaseUrl = import.meta.env.VITE_API_DATABASE;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    const handleDeleteMultiplePhotosSubmit = async () => {
        if (totalSelectedPhoto === 0) {
            toast.warning('Mohon pilih foto terlebih dahulu');
            return;
        }
        
        setLoadingSubmit(true);

        const idsToDelete = selectedPhotos.map(photo => photo.id);
        try {
            const response = await axios.delete(`${apiDatabaseUrl}/delete/gallery-photos/multiple-photos`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                data: {
                    ids: idsToDelete
                }
            });

            if (response.status === 200) {
                setPhotos(prevPhotos => prevPhotos.filter(photo => !selectedPhotos.some(selected => selected.id === photo.id)));
                setSelectedPhotos([]);
                setIsDeleteMode(false);
                setIsDeleteConfirmationOpenMultiple(false);
                toast.success('Foto berhasil dihapus');
            }
        } catch (err) {
            console.error('Error deleting photo', err);
            setIsDeleteConfirmationOpenMultiple(false);
            toast.error('Terjadi kesalahan saat menghapus foto');
        } finally {
            setLoadingSubmit(false);
        }
    };

    return(
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-50" onClose={closeModal}>
            <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <div className="fixed inset-0 bg-gray-500 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-center justify-center min-h-full p-4 text-center">
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    <DialogPanel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl transition-all">
                    <div className="flex items-center justify-center">
                        <FaExclamationTriangle className="text-red-500 text-4xl mb-4" />
                    </div>
                    <DialogTitle
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                    >
                        Konfirmasi Hapus
                    </DialogTitle>
                    <div className="mt-2">
                        <p className="text-sm text-gray-500">
                        Apakah Kamu yakin ingin menghapus {totalSelectedPhoto} foto yang dipilih?
                        </p>
                    </div>

                    <div className="flex justify-center space-x-2 mt-4">
                        <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
                            onClick={handleDeleteMultiplePhotosSubmit}
                        >
                            {loadingSubmit ? (
                                <div className="flex flex-col justify-center items-center">
                                    <svg
                                        className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"
                                        viewBox="0 0 24 24"
                                    ></svg>
                                </div>
                            ) : (
                                'Iya'
                            )}
                        </button>
                        <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-300"
                            onClick={closeModal}
                        >
                        Tidak
                        </button>
                    </div>
                    </DialogPanel>
                </Transition.Child>
                </div>
            </div>
            </Dialog>
        </Transition>
    )
}

ModalDeleteConfirmationMultiple.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    totalSelectedPhoto: PropTypes.number.isRequired,
    selectedPhotos: PropTypes.array.isRequired,
    toast: PropTypes.func.isRequired,
    setPhotos: PropTypes.func.isRequired,
    setSelectedPhotos: PropTypes.func.isRequired,
    setIsDeleteMode: PropTypes.func.isRequired,
    setIsDeleteConfirmationOpenMultiple: PropTypes.func.isRequired,
};

export default ModalDeleteConfirmationMultiple;