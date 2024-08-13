import axios from 'axios'
import React from 'react'


const axiosCommon = axios.create({
    baseURL : 'https://medinexusserver.vercel.app'
})
export default function useAxiosCommon() {
  return axiosCommon
}
