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

    if(isLoading){
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
                                <div className="card card-side bg-base-100 h-full">
                                    <figure className="w-1/3">
                                        <img
                                            src={medicine?.itemImage}
                                            alt={medicine?.itemName}
                                            className="h-full w-full object-cover"
                                        />
                                    </figure>
                                    <div className="card-body font-lijeva rounded-r-xl bg-slate-200">
                                        <h2 className="card-title">{medicine?.itemName}</h2>
                                        <div className='w-[100px] h-[2px] bg-blue-500'></div>
                                        <p className='font-bold'>Generic Name : {medicine?.itemGenericName}</p>
                                        <p>Description : {medicine?.shortDescription}</p>
                                        <p>Category : {medicine?.category}</p>
                                        <p>Company : {medicine?.company}</p>
                                        <p>Price : ${medicine?.perUnitPrice}</p>
                                        <p>Discount: {medicine?.discount}%</p>
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
