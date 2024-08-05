import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'
import useAxiosCommon from '../../../Hooks/useAxiosCommon/useAxiosCommon'

export default function CategoryBox({ label, icon: Icon }) {
  const axiosCommon = useAxiosCommon()
  const {data : medicineNumber, isLoading} = useQuery({
    queryKey : ['messageNumber'],
    queryFn : async() => {
      const {data} = await axiosCommon.get(`/medicine-number`);
      return data;
    }
  })

  const handleFilterCategory = () => {

  }
  return (
    <Link to={`/category-items/${label}`}>
      <div
        onClick={handleFilterCategory}
        className={`flex 
  flex-col 
  text-center
  rounded-lg
  items-center 
  justify-center 
  gap-2
  p-3
  border-2
  hover:text-neutral-800
  transition
  cursor-pointer`}
      >
        <Icon size={26} />
        <div className='text-sm font-medium'>{label}</div>
        <div className='text-sm font-medium'>Number of item : {medicineNumber?.length ? medicineNumber.filter(medicines => medicines.category === label).length : 0} </div>
      </div>
    </Link>
  )
}
