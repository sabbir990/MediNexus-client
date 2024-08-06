import React from 'react'
import Categories from './Categories/Categories'
import DiscountProducts from '../../Components/Discount Products section/DiscountProducts'

export default function Home() {
  return (
    <div>
      <div>
        <Categories />
      </div>
      <div>
        <DiscountProducts />
      </div>
    </div>
  )
}
