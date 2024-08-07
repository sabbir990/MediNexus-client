import React, { useState } from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
import IncreaseItemModal from '../../Components/Dasboard/Increase Item Modal/IncreaseItemModal';
import DecreaseItemModal from '../../Components/Dasboard/Decrease Item Modal/DecreaseItemModal';


export default function CartRows({ medicine, refetch }) {
    const { itemName, itemGenericName, quantity, shortDescription, itemImage, itemMassUnit, category, company, perUnitPrice, discount } = medicine;
    const [isIncreaseOpen, setIsIncreaseOpen] = useState(false);
    const [isDecreaseOpen, setIsDecreaseOpen] = useState(false);
    return (
        <tr>

            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                <img src={itemImage && itemImage} alt="item" className='h-12 w-12 border border-transparent ' />
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                {itemName && itemName}
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                {category && category}
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                {company && company}
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                {quantity && quantity}
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                <button className='btn btn-error text-white text-xl' onClick={() => setIsIncreaseOpen(true)}><AiFillPlusCircle /></button>

                <IncreaseItemModal isOpen={isIncreaseOpen} setIsOpen={setIsIncreaseOpen} refetch={refetch} medicine={medicine} />
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                <button className='btn btn-warning text-white text-xl' onClick={() => setIsDecreaseOpen(true)}><AiFillMinusCircle /></button>
                <DecreaseItemModal isOpen={isDecreaseOpen} setIsOpen={setIsDecreaseOpen} medicine={medicine} refetch={refetch} />
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                <button className='btn hover:bg-blue-600 text-white bg-blue-500'>Checkout</button>
            </th>
        </tr>
    )
}
