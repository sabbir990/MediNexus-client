import React from 'react'

export default function CategoryRows({ medicine, reFetch }) {
    const { _id, itemName, itemGenericName, shortDescription, itemImage, category, company, itemMassUnit, perUnitPrice, discount } = medicine;

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
        </tr>

    )
}
