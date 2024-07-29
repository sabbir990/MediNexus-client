import { useState } from "react";
import { GiMedicines } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../Logo/Logo";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <nav x-data="{ isOpen: false }" className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Logo />
                        {/* Mobile menu button */}
                        <div className="flex lg:hidden font-poppins">
                            <button
                                x-cloak
                                //   onClick={() => (setIsOpen(!isOpen))}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                <svg
                                    x-show={isOpen == false}
                                    xmlns={isOpen === false && 'http://www.w3.org/2000/svg'}
                                    className={`w-6 h-6 ${isOpen === true && 'hidden'}`}
                                    onClick={() => setIsOpen(true)}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>

                                <svg
                                    x-show={isOpen == true}
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`w-6 h-6 ${isOpen === false && 'hidden'}`}
                                    onClick={() => setIsOpen(false)}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                    <div
                        x-cloak
                        className={`absolute font-roboto inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8 font-poppins font-bold">
                            <NavLink
                                href="#"
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Home
                            </NavLink>
                            <NavLink
                                href="#"
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Shop
                            </NavLink>
                            <select name="language" className="rounded-md">
                                <option value="english">English</option>
                                <option value="bangla">Bangla</option>
                            </select>
                            <NavLink
                                to={'/login'}
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Join US
                            </NavLink>
                            <NavLink
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <FaCartShopping />
                            </NavLink>
                        </div>

                        <div className="flex items-center mt-4 lg:mt-0">

                            <button type="button" className="flex items-center focus:outline-none" aria-label="toggle profile dropdown">
                                <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                                    <img
                                        src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
                                        className="object-cover w-full h-full"
                                        alt="avatar"
                                    />
                                </div>

                                <h3 className="mx-2 text-gray-700 dark:text-gray-200 lg:hidden">Khatab wedaa</h3>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
