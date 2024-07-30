import React from 'react'
import Logo from '../../Components/Logo/Logo'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth/useAuth'
import toast from 'react-hot-toast';
import useHostImage from '../../Hooks/useHostImage/useHostImage';
import { FaSpinner } from "react-icons/fa";


export default function Register() {
    const { user, loading, setLoading, createUser, updateUserProfile } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    console.log(user)

    const handleRegisterUser = async (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const image = form.image.files[0];
        const role = form.role.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;


        if (password !== confirmPassword) {
            setLoading(true)
            toast.error('Password and confirm password should be same!')
            return setLoading(false)
        }

        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.{6,})/.test(password)) {
            setLoading(true)
            toast.error("Your password must have at least one uppercase, one lowercase and one special character!")
            return setLoading(false)
        }

        if(!image) {
            setLoading(true)
            toast.error("Select an image first")
            return  setLoading(false)
        }

        try {
            setLoading(true)

            const image_url = await useHostImage(image);
            const registration = await createUser(email, password);
            if (registration.user) {
                await updateUserProfile(name, image_url);
            }

            toast.success('Registration successful!')
            navigate('/')

        } catch (error) {

            console.log(error.message)
            toast.error(error.message)
            setLoading(false)

        }
    }

    const handleImageInputChange = () => {
        toast.success("Image selection successful!")
    }

    return (
        <div className='py-12 flex items-center justify-center'>
            <section className="bg-white dark:bg-gray-900">
                <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
                    <form className="w-full max-w-md" onSubmit={handleRegisterUser}>
                        <div className="flex justify-center mx-auto">
                            <Logo />
                        </div>

                        <div className="flex flex-col items-center justify-center mt-6">

                            <h2 className="w-1/3 pb-4 font-ubuntu text-2xl font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500 dark:border-blue-400 dark:text-white">
                                sign up
                            </h2>
                        </div>

                        <div className="relative flex items-center mt-8">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>

                            <input type="text" name='name' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Username" />
                        </div>

                        <label htmlFor="dropzone-file" className="flex items-center px-3 py-3 mx-auto mt-6 text-center bg-white border-2 border-dashed rounded-lg cursor-pointer dark:border-gray-600 dark:bg-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                            </svg>

                            <h2 className="mx-3 text-gray-400">Update Profile</h2>

                            <input id="dropzone-file" type="file" onChange={handleImageInputChange} className="hidden" name='image' />

                        </label>

                        <div className="relative flex items-center mt-6 border-2 border-gray-300 rounded-lg p-3 text-black">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                width="24"
                                height="24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5.121 17.804A6.968 6.968 0 0112 15a6.968 6.968 0 016.879 2.804M9 11a3 3 0 116 0 3 3 0 01-6 0zM3 20a9 9 0 1118 0v1H3v-1z"
                                />
                            </svg>

                            <select name="role" className='w-full outline-none'>
                                <option value="">Select a role</option>
                                <option value="user" className='text-black font-ubuntu'>User</option>
                                <option value="seller" className='text-black font-ubuntu'>Seller</option>
                            </select>
                        </div>

                        <div className="relative flex items-center mt-6">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </span>

                            <input type="email" name='email' className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Email address" />
                        </div>

                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input type="password" name='password' className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Password" />
                        </div>

                        <div className="relative flex items-center mt-4">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 mx-3 text-gray-300 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                            </span>

                            <input type="password" name='confirmPassword' className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Confirm Password" />
                        </div>

                        <div className="mt-6">
                            <button className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                {loading ? <FaSpinner className='animate-spin flex items-center justify-center' /> : 'Sign Up'}
                            </button>

                            <div className="mt-6 text-center ">
                                <Link to={'/login'} href="#" className="text-sm text-blue-500 hover:underline dark:text-blue-400">
                                    Already have an account?
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
