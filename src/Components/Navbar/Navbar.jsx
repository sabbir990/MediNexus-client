import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import Logo from "../Logo/Logo";
import toast from "react-hot-toast";
import useAuth from '../../Hooks/useAuth/useAuth'

const NavBar = () => {
    const {user, logOut, setUser, setLoading} = useAuth()
    const [isOpen, setIsOpen] = useState(true);

    const logOutUser = async() => {
        try{
            setLoading(true)
            await logOut()
            toast.success("Logging out successful!");
            setUser(null)
        }catch(error){
            console.log(error.message)
            toast.error(error.message)
            setLoading(false)
        }
    }

    return (
        <nav x-data="{ isOpen: false }" className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto">
                <div className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex items-center justify-between">
                        <Logo />
                        {/* Mobile menu button */}
                        <div className="flex lg:hidden font-poppins">
                            <button


                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                <svg
                                    x-show={isOpen ? 'true' : 'false'}
                                    xmlns={!isOpen ? 'http://www.w3.org/2000/svg' : ""}
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
                                    x-show={isOpen ? "false" : "true"}
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
                            <select name="language" className="rounded-md p-5 outline-none">
                                <option value="english">English</option>
                                <option value="bangla">Bangla</option>
                            </select>
                            {user === null && <NavLink
                                to={'/login'}
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                Join US
                            </NavLink>}
                            <NavLink
                                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                                <FaCartShopping />
                            </NavLink>
                        </div>

                        {user && <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt="Tailwind CSS Navbar component"
                                        src={user && user.photoURL && user.photoURL} />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                <li><p className="text-center font-bold">{user && user.displayName && user.displayName}</p></li>
                                <li>
                                    <a className="justify-between">
                                        Update Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><NavLink to={'/dashboard'}>Dashboard</NavLink></li>
                                <li><button onClick={ logOutUser}>Logout</button></li>
                            </ul>
                        </div>}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
