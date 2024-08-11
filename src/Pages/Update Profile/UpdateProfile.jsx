import React from 'react'
import Logo from '../../Components/Logo/Logo'
import useAuth from '../../Hooks/useAuth/useAuth'
import toast from 'react-hot-toast';
import useHostImage from '../../Hooks/useHostImage/useHostImage';
import { useNavigate } from 'react-router-dom';
import { TbFidgetSpinner } from "react-icons/tb";


export default function UpdateProfile() {
    const { user, updateUserProfile, loading, setLoading } = useAuth();
    const navigate = useNavigate()

    const handleUpdateProfile = async (event) => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const image = form.image.files[0];

        try{
            setLoading(true)
            const image_url = await useHostImage(image);
            await updateUserProfile(name, image_url);
            navigate('/dashboard/profile')
            setLoading(false)
        }catch(error){
            setLoading(false)
            console.log(error.message);
            toast.error(error.message)
        }
    }
    return (
        <div>
            <div className='flex flex-col items-center mt-8'>
                <Logo />
                <div className='text-center mt-4 font-poppins'>
                    <h1 className='font-bold text-2xl'>Update Your Profile</h1>
                    <p className='text-gray-500'>Keep Your Medinexus Account Information Current and Secure</p>
                </div>
            </div>
            <div className="w-full mt-8 max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
                <div className="px-6 py-4">
                    <p className="mt-1 text-center font-poppins text-gray-500 dark:text-gray-400">Update Your Profile</p>

                    <form onSubmit={handleUpdateProfile}>
                        <div className="w-full mt-4">
                            <input name='name' defaultValue={user?.displayName} className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="text" placeholder="Username" aria-label="Username" />
                        </div>

                        <div className="w-full mt-4">
                            <input name='image' className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="file" placeholder="Profile image" aria-label="image" />
                        </div>

                        <p className='font-poppins font-bold mt-3'>Current Image</p>
                        <div className='flex flex-row-reverse items-center justify-center'>

                            <p className='font-poppins'>{(user?.photoURL)?.slice(0, 25)}...</p>
                            <img src={user?.photoURL} alt={user?.displayName} className='w-20 mr-4 rounded-lg shadow-lg' />
                        </div>

                        <div className="flex items-center justify-between mt-4">

                            <button type='submit' disabled={loading === true} className="px-6 mx-auto py-2 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                {loading === true ? <TbFidgetSpinner className='mx-auto animate-spin' /> : 'Update'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
