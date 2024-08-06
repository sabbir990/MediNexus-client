import React from 'react'
import ReasonCards from './ReasonCards'
import { FaSquarePlus } from "react-icons/fa6";
import { FaNewspaper } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { GiOnTarget } from "react-icons/gi";
import { MdOutlineModelTraining } from "react-icons/md";


export default function WhyChooseUs() {
  return (
    <div>
        <h1 className='text-3xl font-poppins mt-28 mb-4 font-bold'>WhyChooseUs</h1>
        <div className='w-[300px] h-[3px] bg-blue-500 mb-10'>

        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-4'>
            <ReasonCards icon={FaSquarePlus} heading={"High quality and affordable"} description={"We ensure that patients in need have access to high quality, effective and affordable medicine"} color={"bg-pink-100"}/>
            <ReasonCards icon={FaNewspaper} heading={"New Age Product"} description={"We formulate, develop and deliver new age medicines that satisfy the urgent medical needs"} color={"bg-gray-100"}/>
            <ReasonCards icon={FaHandshake} heading={"Trustworthy"} description={"We have been trusted by healthcare professions and patients across all over the world"} color={"bg-pink-50"} />
            <ReasonCards icon={FaEye} heading={"Vision"} description={"To capitalize the market expansion and deliver better products"} color={"bg-blue-100"} />
            <ReasonCards icon={GiOnTarget} heading={"Mission"} description={"To uphold our social responsibilities of delivering highest standard healthcare service"} color={"bg-orange-100"}/>
            <ReasonCards icon={MdOutlineModelTraining} heading={"Hybrid Model"} description={"Online and offline modes are available on your need"} color={"bg-blue-200"}/>
        </div>
    </div>
  )
}
