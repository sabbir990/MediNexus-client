import React, { useState } from 'react'
import { FaEye } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import ItemModal from '../../Components/Item details modal/itemModal';
import AddToCartModal from '../../Components/Dasboard/AddToCartModal/AddToCartModal';


export default function CategoryRows({ medicine, reFetch }) {
    const { _id, itemName, itemGenericName, shortDescription, itemImage, category, company, itemMassUnit, perUnitPrice, discount } = medicine;
    const [isOpen, setIsOpen] = useState(false)
    const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false)

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
                {itemMassUnit && itemMassUnit}
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                <button className='btn btn-error text-white' onClick={() => setIsOpen(true)}><FaEye /></button>
                <ItemModal isOpen={isOpen} setIsOpen={setIsOpen} _id={_id} />
            </th>
            <th
                scope='col'
                className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
            >
                <button
                    className='btn btn-warning text-white'
                    onClick={() => setIsUpdateModalOpen(true)}
                ><FaShoppingCart /></button>

                <AddToCartModal isOpen={isUpdateModalOpen} setIsOpen={setIsUpdateModalOpen} medicine={medicine} />
            </th>
        </tr>

    )
}
