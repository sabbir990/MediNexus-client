import axios from 'axios'
import useAuth from '../useAuth/useAuth';
import { useNavigate } from 'react-router-dom';

const axiosSecure = axios.create({
  baseURL: 'https://medinexusserver.vercel.app'
})

export default function useAxiosSecure() {

  const {logOut, setLoading} = useAuth();
  const navigate = useNavigate();

  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    config.headers.authorization = `Bearer ${token}`
    return config;
  }, (error) => {
    return Promise.reject(error);
  })

  axiosSecure.interceptors.response.use((response) => {
    return response
  }, async (error) => {

    const status = error.response.status;
    console.log(status)

    if(status === 401 || status === 403){
      await logOut();
      navigate('/login')
      setLoading(false)
    }
    return Promise.reject(error);
  })
  return axiosSecure
}
