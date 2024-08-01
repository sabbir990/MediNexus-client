import React from 'react'
import Logo from '../../Components/Logo/Logo'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../Hooks/useAuth/useAuth'
import toast from 'react-hot-toast'
import { FaSpinner } from 'react-icons/fa'

export default function Login() {
    const {signIn, googleSignIn, githubSignIn, loading, setLoading, saveUser} = useAuth();
    const location = useLocation()
    const navigate = useNavigate()
    const handleLoginSubmit = async(event) => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try{
            setLoading(true)
            await signIn(email, password);
            toast.success("Login successful")
            if(location.state !== null){
                navigate(location.state)
            }else{
                navigate('/')
            }

            saveUser()

        }catch(error){
                
            console.log(error.message);
            toast.error(error.message)
            setLoading(false)

        }
    }

    const handleGoogleLogin = async() => {
        try{
            setLoading(true)
            await googleSignIn()
            toast.success("Login successful!")
            if(location.state !== null){
                navigate(location.state)
            }else{
                navigate("/")
            }
        }catch(error){
            console.log(error.message)
            toast.error(error.message)
            setLoading(false)
        }
    }

    const handleGitHubSignIn = async() => {
        try{
            setLoading(true)
            await githubSignIn();
            toast.success("Login Successful!")
            if(location.state){
                navigate(location.state)
            }else{
                navigate("/")
            }

        }catch(error){
            console.log(error.message)
            toast.error(error.message)
            setLoading(false)
        }
    }
    return (
        <div className='py-12 flex items-center justify-center'>

            <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
                <div className="flex justify-center mx-auto">
                    <Logo />
                </div>

                <p className="mt-3 text-xl text-center text-gray-600 dark:text-gray-200">
                    Welcome back!
                </p>

                <button onClick={handleGoogleLogin} className="flex w-full items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <div className="px-4 py-2">
                        <svg className="w-6 h-6" viewBox="0 0 40 40">
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#FFC107" />
                            <path d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z" fill="#FF3D00" />
                            <path d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z" fill="#4CAF50" />
                            <path d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z" fill="#1976D2" />
                        </svg>
                    </div>

                    <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with Google</span>
                </button>

                <button onClick={handleGitHubSignIn} className="flex w-full items-center justify-center mt-4 text-gray-600 transition-colors duration-300 transform border rounded-lg dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <div className="px-4 py-2">
                        <svg className="w-6 h-6" viewBox="0 0 16 16" version="1.1" aria-hidden="true">
                            <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.02.08-2.13 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.11.16 1.93.08 2.13.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </div>

                    <span className="w-5/6 px-4 py-3 font-bold text-center">Sign in with GitHub</span>
                </button>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                    <a href="#" className="text-xs text-center text-gray-500 uppercase dark:text-gray-400 hover:underline">or login
                        with email</a>

                    <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
                </div>

                <form className='' onSubmit={handleLoginSubmit}>
                    <div className="mt-4">
                        <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="LoggingEmailAddress">Email Address</label>
                        <input id="LoggingEmailAddress" name='email' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="email" />
                    </div>

                    <div className="mt-4">
                        <div className="flex justify-between">
                            <label className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200" htmlFor="loggingPassword">Password</label>
                            <a href="#" className="text-xs text-gray-500 dark:text-gray-300 hover:underline">Forget Password?</a>
                        </div>

                        <input id="loggingPassword" name='password' className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300" type="password" />
                    </div>

                    <div className="mt-6">
                        <button className=" form-control flex items-center justify-center w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50">
                    
                            {loading && loading ? <FaSpinner className='animate-spin' /> : "Sign In"}
                        </button>
                    </div>
                </form>

                <div className="flex items-center justify-between mt-4">
                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>

                    <Link to={'/register'} className="text-xs text-gray-500 uppercase dark:text-gray-400 hover:underline">or sign up</Link>

                    <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4"></span>
                </div>
            </div>
        </div>
    )
}
