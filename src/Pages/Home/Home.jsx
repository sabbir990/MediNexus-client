import React from 'react'
import Categories from './Categories/Categories'
import DiscountProducts from '../../Components/Discount Products section/DiscountProducts'
import WhyChooseUs from '../../Components/Why choose us Section/WhyChooseUs'

export default function Home() {
  return (
    <div>
      <div>
        <Categories />
      </div>
      <div>
        <DiscountProducts />
      </div>
      <div>
        <WhyChooseUs />
      </div>
    </div>
  )
}
