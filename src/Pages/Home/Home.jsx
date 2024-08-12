import React from 'react'
import Categories from './Categories/Categories'
import DiscountProducts from '../../Components/Discount Products section/DiscountProducts'
import WhyChooseUs from '../../Components/Why choose us Section/WhyChooseUs'
import NewsLetter from '../../Components/NewsLetter/NewsLetter'
import { Helmet } from 'react-helmet-async'
import AdvertisementBanner from './Advertisement Banner/AdvertisementBanner'

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div>
        <AdvertisementBanner />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <DiscountProducts />
      </div>
      <div>
        <WhyChooseUs />
      </div>
      <div>
        <NewsLetter />
      </div>
    </div>
  )
}
