import React from 'react';
import useAxiosCommon from '../../../Hooks/useAxiosCommon/useAxiosCommon';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import useAuth from '../../../Hooks/useAuth/useAuth';

export default function AddToCartModal({ isOpen, setIsOpen, medicine, reFetch }) {
    const {user} = useAuth()
    const { itemName, itemGenericName, shortDescription, itemImage, itemMassUnit, category, company, perUnitPrice, discount, email } = medicine;
    const seletedForCartMedicine = {
        itemName, itemGenericName, shortDescription, itemImage, itemMassUnit, category, company, perUnitPrice, discount, buyerEmail : user?.email, sellerEmail : email
    }
    const axiosCommon = useAxiosCommon()
    const {mutateAsync} = useMutation({
        mutationFn : async() => {
            const {data} = await axiosCommon.post('/cart', seletedForCartMedicine);
            return data
        },

        onSuccess : () => {
            toast.success('Your Item added to cart successfully');
            setIsOpen(false)
            reFetch()
        }
    })

    const handleAddToCart = async () => {
        try{
            await mutateAsync();
        }catch(error){
            console.log(error.message);
            toast.error(error.message)
        }
    }

    if(!medicine){
        return <div className='mt-10 flex items-center justify-center'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

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
                            className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right dark:bg-gray-900 sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
                            style={{
                                transform: isOpen
                                    ? 'translateY(0) scale(1)'
                                    : 'translateY(4rem) scale(0.95)',
                                opacity: isOpen ? 1 : 0,
                                transition: 'opacity 300ms ease-out, transform 300ms ease-out',
                            }}
                        >
                            <div>
                                <div className="flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        className="w-6 h-6"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 3h2l.401 2M7 13h10l4-8H5.401M7 13L5.401 7M7 13L5 21m0-8h14a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zM16 21a2 2 0 100-4 2 2 0 000 4zM6 21a2 2 0 100-4 2 2 0 000 4z"
                                        />
                                    </svg>

                                </div>

                                <div className="mt-2 text-center">
                                    <h3
                                        className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                        id="modal-title"
                                    >
                                        Do you want to save this item to cart?
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                        Add medicines to your cart by selecting the items and quantities you need. Review your cart before checking out to ensure everything is correct.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-5 sm:flex sm:items-center flex justify-center ">
                                <button onClick={() => setIsOpen(false)} className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:mt-0 sm:w-auto sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40">
                                    Cancel
                                </button>

                                <button onClick={handleAddToCart} className="w-full px-4 py-2 mt-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:w-auto sm:mt-0 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40">
                                    ADD
                                </button>
                            </div>

                        </div>
                    </div>
                </div>
            )
            }
        </div >
    );
}
