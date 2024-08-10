import { useMutation } from '@tanstack/react-query';
import React from 'react'
import useAxiosSecure from '../../../../Hooks/useAxiosSecure/useAxiosSecure';
import toast from 'react-hot-toast';

const AddCategoryModal = ({ handleClose, isOpen, refetch }) => {

    const axiosSecure = useAxiosSecure()
    const {mutateAsync} = useMutation({
        mutationFn : async(category) => {
            const {data} = await axiosSecure.post('/category', category);
            return data
        },

        onSuccess : () => {
            toast.success("Category Added Successfully!");
            refetch()
            handleClose()
        }
    })

    const handleSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const label = form?.label?.value;
        const icon = form?.icon?.value;

        const category = {
            label, icon
        }

        try{
            await mutateAsync(category)
        }catch(error){
            console.log(error);
            toast.error(error.message)
        }
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
                        <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">&#8203;</span>

                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                            <h3 className="text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white" id="modal-title">
                                Organize Your Inventory Efficiently


                            </h3>
                            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                                Easily add new categories to streamline your product organization. Categorize your medicines to enhance searchability and improve the overall user experience. Simply enter the category name, select an appropriate icon, and add it to your inventory.
                            </p>

                            <form className="mt-4" onSubmit={handleSubmit}>
                                <label htmlFor="emails-list" className="text-sm text-gray-700 dark:text-gray-200">
                                    Category Informations
                                </label>

                                <div className="block mt-3">
                                    <input
                                        type="text"
                                        name="label"
                                        id="email1"
                                        placeholder="Category Name"
                                        className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                    />
                                </div>

                                <div className="block mt-3">
                                    <input
                                        type="text"
                                        name="icon"
                                        id="email2"
                                        disabled={true}
                                        placeholder={"GiMedicines"}
                                        className="block w-full px-4 py-3 text-sm text-gray-700 bg-white border border-gray-200 rounded-md focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-300"
                                    />
                                </div>


                                <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                    <button
                                        type="button"
                                        onClick={handleClose}
                                        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                    >
                                        Save Category
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddCategoryModal;
