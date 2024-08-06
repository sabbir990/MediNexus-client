import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosCommon from '../../Hooks/useAxiosCommon/useAxiosCommon';

export default function ItemModal({isOpen, setIsOpen, _id}) {
    const axiosCommon = useAxiosCommon()
    const {data : medicine, isLoading} = useQuery({
        queryKey : ['medicine', _id],
        queryFn : async() => {
            const {data} = await axiosCommon.get(`/medicine/${_id}`);
            return data
        }
    })

    return (
        <div className="relative flex justify-center">
            {isOpen && (
                <div
                    className="fixed inset-0 z-10 overflow-y-auto"
                    aria-labelledby="modal-title"
                    role="dialog"
                    aria-modal="true"
                >
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <span
                            className="hidden sm:inline-block sm:align-middle sm:h-screen"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>

                        <div
                            className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-md sm:w-full sm:p-6"
                            style={{
                                transform: isOpen
                                    ? 'translateY(0) scale(1)'
                                    : 'translateY(4rem) scale(0.95)',
                                opacity: isOpen ? 1 : 0,
                                transition: 'opacity 300ms ease-out, transform 300ms ease-out',
                            }}
                        >
                            <div>
                                <img
                                    className="object-cover bg-center bg-cover w-full rounded-md"
                                    src={medicine?.itemImage}
                                    alt=""
                                />

                                <div className="mt-4 text-center">
                                    <h3
                                        className="font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                        id="modal-title"
                                    >
                                        {medicine?.itemName}
                                    </h3>
                                    <h3
                                        className="font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                        id="modal-title"
                                    >
                                        Generic Name : {medicine?.itemGenericName}
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        {medicine?.shortDescription}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        Category : {medicine?.category}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        Company : {medicine?.company}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        Price : ${medicine?.perUnitPrice}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        Discount : {medicine?.discount}%
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 flex items-center justify-center sm:flex sm:items-center sm:-mx-2">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
