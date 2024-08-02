import React, { useState } from 'react';

export default function AddMedicineModal({ isOpen, setIsOpen }) {
    //   const [isOpen, setIsOpen] = useState(true);

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

                            <form className="mt-4" action="#">
                                <div className="relative flex items-center mt-8">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>

                                    <input type="text" name='name' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Item Name" />
                                </div>
                                <div className="relative flex items-center mt-8">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>

                                    <input type="text" name='name' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Item Generic Name" />
                                </div>
                                <div className="flex items-center mt-8">

                                    <textarea name="" className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-4 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder='Short Description' id="" cols="30" rows="10"></textarea>
                                </div>
                                <div className="relative mt-8">
                                    <p className='font-bold font-roboto'>Upload Image</p>
                                    <div className="relative flex items-center mt-2">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>

                                    <input type="file" name='name' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Upload Image" />
                                    </div>
                                </div>
                                <div className="relative flex items-center mt-8">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
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
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>

                                    <input type="number" name='name' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Item Mass Unit(MG)" />
                                </div>
                                <div className="relative flex items-center mt-8">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>

                                    <input type="number" name='name' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Per Unit Price" />
                                </div>
                                <div className="relative flex items-center mt-8">
                                    <span className="absolute">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </span>

                                    <input type="number" name='name' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Discount(%)" />
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
                                        type="button"
                                        className="w-full px-4 py-2 mt-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-md sm:mt-0 sm:w-1/2 sm:mx-2 hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
                                    >
                                        Add Medicine
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
