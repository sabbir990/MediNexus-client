import React from 'react'
import useAxiosCommon from '../../../Hooks/useAxiosCommon/useAxiosCommon'
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export default function IncreaseItemModal({ isOpen, setIsOpen, medicine, refetch }) {

    const axiosCommon = useAxiosCommon();
    const {mutateAsync} = useMutation({
        mutationFn : async() => {
            const {data} = await axiosCommon.post('/cart', medicine);
            return data;
        },

        onSuccess : () => {
            toast.success("Quantity successfully increased!");
            setIsOpen(false)
            refetch()
        }
    })

    const handleIncrease = async() => {
        await mutateAsync()
    }
    return (
        <div>
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

                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                            <div>
                                <div className="flex items-center bg-red-500 py-2 rounded-lg justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>

                                </div>

                                <div className="mt-2 text-center">
                                    <h3
                                        className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                        id="modal-title"
                                    >
                                        Increase Item Quantity
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        Effortlessly manage your cart by adjusting item quantities for a personalized shopping experience.
                                    </p>
                                </div>
                            </div>


                            <div className="sm:flex sm:items-center flex items-center justify-center mt-5">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                >
                                    Cancel
                                </button>

                                <button onClick={handleIncrease} className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                    Increase
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
