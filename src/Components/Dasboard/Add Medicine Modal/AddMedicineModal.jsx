import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth/useAuth';
import toast from 'react-hot-toast';
import useHostImage from '../../../Hooks/useHostImage/useHostImage';
import { useMutation } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure/useAxiosSecure';

export default function AddMedicineModal({ isOpen, setIsOpen, refetch }) {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure()

    const {mutateAsync} = useMutation({
        mutationFn : async (product) => {
            const {data} = await axiosSecure.post('/medicines', product);
            return data
        },
        onSuccess : () => {
            setIsOpen(false)
            toast.success("Your Item Added to the shop successfully!")
        }
    })
    
    const handleAddMedicineSubmit = async (event) => {
        event.preventDefault();

        const form = event.target;
        const itemName = form.itemName.value;
        const itemGenericName = form.itemGenericName.value;
        const shortDescription = form.shortDescription.value;
        const itemImage = form.itemImage.files[0];
        const category = form.category.value;
        const company = form.company.value;
        const itemMassUnit = form.itemMassUnit.value;
        const perUnitPrice = form.perUnitPrice.value;
        const discount = form.discount.value;
        const email = user?.email;


        try{
            const hostedImage = await useHostImage(itemImage)

            const product = {
                itemName,
                itemGenericName,
                shortDescription,
                itemImage : hostedImage,
                category,
                company,
                itemMassUnit,
                perUnitPrice,
                discount,
                email
            }

            await mutateAsync(product);

            refetch()
        }catch(error){
            console.log(error.message);
            
            toast.error(error.message)
        }
    }

    return (
        <div className="relative flex justify-center">

            {isOpen && (
                <div
                    className="fixed inset-0 z-10 overflow-y-auto"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="modal-title"
                >
                    <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                        <span
                            className="hidden sm:inline-block sm:h-screen sm:align-middle"
                            aria-hidden="true"
                        >
                            &#8203;
                        </span>

                        <div className="relative inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl dark:bg-gray-900 sm:my-8 sm:w-full sm:max-w-sm sm:p-6 sm:align-middle">
                            <h3
                                className="text-lg text-center font-medium leading-6 text-gray-800 capitalize dark:text-white"
                                id="modal-title"
                            >
                                Add Your Product/Medicine
                            </h3>
                            <p className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">
                                Quickly add new medicine details to your inventory, ensuring accurate and up-to-date information for better management.
                            </p>

                            <form onSubmit={handleAddMedicineSubmit} className="mt-4" action="#">
                                <div className="relative flex items-center mt-8">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.828 2.828a2.828 2.828 0 00-4 4L14.828 12a2.828 2.828 0 004-4L12.828 2.828zM6 18v2.828a2 2 0 001.172 1.828l4.414-4.414L6 18zm15-3a1 1 0 00-1-1h-4a1 1 0 000 2h4a1 1 0 001-1zm-7.586-1L4.172 22.414a2 2 0 002.828 2.828L17.414 17.586a1 1 0 00-1.414-1.414L7 19.586a1 1 0 00-1.414 0 1 1 0 000 1.414L12.828 12z" />
                                        </svg>

                                    </span>

                                    <input type="text" name='itemName' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Item Name" />
                                </div>
                                <div className="relative flex items-center mt-8">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12.828 2.828a2.828 2.828 0 00-4 4L14.828 12a2.828 2.828 0 004-4L12.828 2.828zM6 18v2.828a2 2 0 001.172 1.828l4.414-4.414L6 18zm15-3a1 1 0 00-1-1h-4a1 1 0 000 2h4a1 1 0 001-1zm-7.586-1L4.172 22.414a2 2 0 002.828 2.828L17.414 17.586a1 1 0 00-1.414-1.414L7 19.586a1 1 0 00-1.414 0 1 1 0 000 1.414L12.828 12z" />
                                        </svg>
                                    </span>

                                    <input type="text" name='itemGenericName' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Item Generic Name" />
                                </div>
                                <div className="flex items-center mt-8">

                                    <textarea name="shortDescription" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Short Description' id="" cols="30" rows="10"></textarea>
                                </div>
                                <div className="relative mt-8">
                                    <p className='font-bold font-roboto'>Upload Image</p>
                                    <div className="relative flex items-center mt-2">
                                        <span className="absolute">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7h2l2-2h10l2 2h2a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V9a2 2 0 012-2zM12 17a5 5 0 100-10 5 5 0 000 10z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01" />
                                            </svg>
                                        </span>

                                        <input type="file" required name='itemImage' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Upload Image" />
                                    </div>
                                </div>
                                <div className="relative flex items-center mt-8">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h6v6H3V3zm12 0h6v6h-6V3zM3 15h6v6H3v-6zm12 0h6v6h-6v-6z" />
                                        </svg>

                                    </span>

                                    <select name="category" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                        <option value="No category selected!">Select a category</option>
                                        <option value="Analgastics">Analgastics</option>
                                        <option value="Antibiotics">Antibiotics</option>
                                        <option value="Antivirals">Antivirals</option>
                                        <option value="Antifungals">Antifungals</option>
                                        <option value="Antipyretics">Antipyretics</option>
                                        <option value="Antihistamines">Antihistamines</option>
                                        <option value="Antacids">Antacids</option>
                                        <option value="Anti-inflammatory Drugs">Anti-inflammatory Drugs</option>
                                        <option value="Antipsychotics">Antipsychotics</option>
                                        <option value="Antiemetics">Antiemetics</option>
                                        <option value="Anticoagulants">Anticoagulants</option>
                                        <option value="Antihypertensives">Antihypertensives</option>
                                        <option value="Bronchodilators">Bronchodilators</option>
                                        <option value="Diuretics">Diuretics</option>
                                        <option value="Hormones">Hormones</option>
                                        <option value="Immunosuppressants">Immunosuppressants</option>
                                        <option value="Laxatives">Laxatives</option>
                                        <option value="Vitamins and Supplements">Vitamins and Supplements</option>
                                        <option value="Vaccines">Vaccines</option>

                                    </select>
                                </div>
                                <div className="relative flex items-center mt-8">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 21v-7a2 2 0 012-2h12a2 2 0 012 2v7M16 3h-8a2 2 0 00-2 2v2h12V5a2 2 0 00-2-2zm-6 10v4M10 3v2M14 3v2M10 7v2M14 7v2M16 21h-8" />
                                        </svg>

                                    </span>

                                    <select name="company" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                        <option value="No company selected!">Select a company</option>
                                        <option value="Pfizer">Pfizer</option>
                                        <option value="Johnson & Johnson">Johnson & Johnson</option>
                                        <option value="Roche">Roche</option>
                                        <option value="Novartis">Novartis</option>
                                        <option value="Merck & Co.">Merck & Co.</option>
                                        <option value="GlaxoSmithKline (GSK)">GlaxoSmithKline (GSK)</option>
                                        <option value="Sanofi">Sanofi</option>
                                        <option value="AstraZeneca">AstraZeneca</option>
                                        <option value="AbbVie">AbbVie</option>
                                        <option value="Bristol-Myers Squibb">Bristol-Myers Squibb</option>
                                        <option value="Eli Lilly and Company">Eli Lilly and Company</option>
                                        <option value="Bayer">Bayer</option>
                                        <option value="Amgen">Amgen</option>
                                        <option value="Gilead Sciences">Gilead Sciences</option>
                                        <option value="Takeda">Takeda</option>
                                        <option value="Boehringer Ingelheim">Boehringer Ingelheim</option>
                                        <option value="Novo Nordisk">Novo Nordisk</option>
                                        <option value="Teva Pharmaceutical Industries">Teva Pharmaceutical Industries</option>
                                        <option value="Cipla">Cipla</option>
                                        <option value="Sun Pharmaceutical Industries">Sun Pharmaceutical Industries</option>

                                    </select>
                                </div>
                                <div className="relative flex items-center mt-8">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5v14M8 16l4-4 4 4" />
                                        </svg>

                                    </span>

                                    <select name="itemMassUnit" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                                        <option value="Nothing have selected by the seller">Mg or Ml</option>
                                        <option value="Mg">MG</option>
                                        <option value="Ml">ML</option>
                                    </select>
                                </div>
                                <div className="relative flex items-center mt-8">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-2 0-3.5 1.5-3.5 3.5S10 15 12 15s3.5 1.5 3.5 3.5S14 22 12 22s-3.5-1.5-3.5-3.5M12 8V6m0 16v-2m4-8c0-2.5-2-4.5-4.5-4.5S7 9.5 7 12h4v4h-2m-4 2v2h10v-2h-2m-4 0v-4h4m0 0h-4" />
                                        </svg>

                                    </span>

                                    <input type="number" name='perUnitPrice' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Per Unit Price" />
                                </div>
                                <div className="relative flex items-center mt-8">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 5l-14 14M9 9m0-1a1 1 0 011 1v0a1 1 0 01-1 1v0a1 1 0 01-1-1v0a1 1 0 011-1zm6 6m0-1a1 1 0 011 1v0a1 1 0 01-1 1v0a1 1 0 01-1-1v0a1 1 0 011-1zm-6-6l6 6" />
                                        </svg>

                                    </span>

                                    <input type="number" step={"0.01"} name='discount' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Discount(%)" />
                                </div>

                                <div className="mt-4 sm:flex sm:items-center sm:-mx-2">
                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="w-full px-4 py-2 text-sm font-medium tracking-wide text-gray-700 capitalize transition-colors duration-300 transform border border-gray-200 rounded-md sm:w-1/2 sm:mx-2 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800 hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-40"
                                    >
                                        Cancel
                                    </button>

                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                    >
                                        + Add Medicine
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
