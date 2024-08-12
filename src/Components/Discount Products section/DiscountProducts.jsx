import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Import Swiper styles
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { useQuery } from '@tanstack/react-query';
import useAxiosCommon from '../../Hooks/useAxiosCommon/useAxiosCommon';

export default function DiscountProducts() {
    const axiosCommon = useAxiosCommon();
    const { data: medicines = [], isLoading, refetch } = useQuery({
        queryKey: ['medicine-number'],
        queryFn: async () => {
            const { data } = await axiosCommon.get('/medicine-number');
            return data;
        }
    });

    const discountedMedicines = medicines.filter(medicine => medicine.discount > 0);

    if (isLoading) {
        return <div className='flex items-center justify-center mt-28'>
            <span className="loading loading-spinner loading-lg"></span>
        </div>
    }

    return (
        <div className='mt-28'>
            <div>
                <h1 className='text-center font-bold font-roboto text-3xl mb-6'>Discounted Products</h1>
                <p className='font-bold font-lijeva text-center mb-2'>Discover unbeatable discounts on top-quality medicines at Medinexus! Our special offers bring you the best deals on trusted healthcare products. Shop now and save on the essentials you need for a healthier life.</p>
                <div className='w-[300px] h-[3px] bg-blue-500 mx-auto mb-8'>

                </div>
            </div>
            <div>
                {discountedMedicines.length > 0 ? (
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        {discountedMedicines.map((medicine, index) => (
                            <SwiperSlide key={index}>
                                <div className="flex bg-white shadow-lg rounded-lg overflow-hidden h-full">
                                    <figure className="w-1/3">
                                        <img
                                            src={medicine?.itemImage}
                                            alt={medicine?.itemName}
                                            className="h-full w-full object-cover"
                                        />
                                    </figure>

                                    <div className="flex flex-col justify-between p-6 w-2/3 bg-gradient-to-r from-blue-100 to-blue-50">
                                        <div>
                                            <h2 className="text-3xl font-bold text-gray-800">{medicine?.itemName}</h2>
                                            <div className='w-16 h-[3px] bg-blue-500 mt-2 mb-4'></div>
                                            <p className="text-lg text-gray-600 italic">Generic Name: {medicine?.itemGenericName}</p>
                                        </div>

                                        <div className="text-gray-700 mt-4">
                                            <p className="mb-2"><span className="font-semibold">Description:</span> {medicine?.shortDescription}</p>
                                            <p className="mb-2"><span className="font-semibold">Category:</span> {medicine?.category}</p>
                                            <p className="mb-2"><span className="font-semibold">Company:</span> {medicine?.company}</p>
                                        </div>

                                        <div className="mt-4">
                                            <p className="text-xl font-semibold text-blue-600">Price Per Unit ${medicine?.perUnitPrice}</p>
                                            {medicine?.discount > 0 && (
                                                <p className="inline-block mt-2 px-3 py-1 text-sm font-semibold text-red-600 bg-red-100 rounded">
                                                    {medicine?.discount}% OFF
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>

                        ))}
                    </Swiper>
                ) : (
                    <p className='text-center text-gray-500'>No discounted products available.</p>
                )}
            </div>
        </div>
    );
}
