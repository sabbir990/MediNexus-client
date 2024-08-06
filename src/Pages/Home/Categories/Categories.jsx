import React from 'react'
import CategoryBox from './CategoryBox'
import categories from './CategoryData'

export default function Categories() {
    return (
        <div className='mt-28'>
            <h1 className='text-center font-bold font-roboto text-3xl mb-6'>Medicine Categories</h1>
            <div className='pt-4 gap-4 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 overflow-x-auto'>
                {
                    categories && categories.map((category, index) => {
                        return <CategoryBox key={index} label={category?.label} icon={category?.icon} />
                    })
                }
            </div>
        </div>
    )
}
