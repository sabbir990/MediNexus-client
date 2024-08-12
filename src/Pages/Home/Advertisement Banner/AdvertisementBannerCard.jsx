import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import useAxiosCommon from '../../../Hooks/useAxiosCommon/useAxiosCommon';
import { useQuery } from '@tanstack/react-query';

export default function AdvertisementBannerCard() {
    const axiosCommon = useAxiosCommon()
    const { data: bannersForAdvertisement = [], isLoading, refetch } = useQuery({
        queryKey: ['bannerForAdvertisement'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/banner-items');
            return data;
        }
    })

    console.log(bannersForAdvertisement);
    return (
        <>
            {bannersForAdvertisement.length > 0 && (
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {bannersForAdvertisement.map((advertisement, index) => {
                        return <SwiperSlide key={index} className="flex justify-center">
                            <div className="w-full p-6 bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
                                <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-4 md:mb-0">
                                    <img src={advertisement?.itemImage} alt={advertisement?.itemName} className="h-48 w-48 object-cover rounded-md" />
                                </div>


                                <div className="w-full md:w-2/3 md:pl-6 text-left flex flex-col justify-center">
                              
                                    <h3 className="text-3xl font-bold text-gray-800">{advertisement?.itemName}</h3>
                                    <p className="text-lg text-gray-600 italic">{advertisement?.itemGenericName}</p>

                       
                                    <p className="text-gray-700 mt-2">
                                        <span className="font-semibold">Company:</span> {advertisement?.company}
                                    </p>
                                    <p className="text-gray-700">
                                        <span className="font-semibold">Category:</span> {advertisement?.category}
                                    </p>

                                    <p className="text-gray-600 mt-4">{advertisement?.shortDescription}</p>

                                    <div className="flex items-center mt-4">
                                        <p className="text-xl font-semibold text-blue-600">${advertisement?.perUnitPrice} per {advertisement?.itemMassUnit}</p>
                                        {advertisement?.discount > 0 && (
                                            <p className="ml-4 px-2 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded">
                                                {advertisement?.discount}% OFF
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>


                    })}

                </Swiper>
            )}
        </>
    )
}
