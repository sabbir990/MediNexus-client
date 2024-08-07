import React from 'react'
import { AiFillPlusCircle } from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";



export default function CartRows({ medicine }) {
    const { itemName, itemGenericName, shortDescription, itemImage, itemMassUnit, category, company, perUnitPrice, discount } = medicine;
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
                10
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                <button className='btn btn-error text-white text-xl'><AiFillPlusCircle /></button>
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                <button className='btn btn-warning text-white text-xl'><AiFillMinusCircle /></button>
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
