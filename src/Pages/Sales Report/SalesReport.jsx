import React from 'react'
import Logo from '../../Components/Logo/Logo'
import { Helmet } from 'react-helmet-async'
import useAxiosSecure from '../../Hooks/useAxiosSecure/useAxiosSecure'
import { useQuery } from '@tanstack/react-query';
import SalesReportRow from './SalesReportRow';
import { LuPrinter } from "react-icons/lu";
import toast from 'react-hot-toast';
import downloadPDF from '../Invoice/DownloadPDF';


export default function SalesReport() {
    const axiosSecure = useAxiosSecure();

    const {data : payments = []} = useQuery({
        queryKey : ['medicines'],
        queryFn : async() => {
            const {data} = await axiosSecure.get('/payments');
            return data;
        }
    })

    const handleSalesReportPrint = async () => {
        try{
            downloadPDF("SalesReport.pdf")
        }catch(error){
            console.log(error);
            toast.error(error.message)
        }
    }

    return (
        <div id='invoice'>
            <div className='flex flex-col items-center mt-8'>
                <Logo />
                <div className='text-center mt-4 font-poppins'>
                    <h1 className='font-bold text-2xl'>Sales Report</h1>
                    <p className='text-gray-500'>Analyze and track your sales performance with detailed reports and insights.</p>
                </div>
            </div>
            <Helmet>
                <title>Sales Report</title>
            </Helmet>

            <div className='flex items-center justify-end mr-8 mt-4'>
                <button onClick={handleSalesReportPrint} className='btn btn-accent hover:btn-outline text-white'>Print Report <LuPrinter /> </button>
            </div>

            <div className='container mx-auto px-4 sm:px-8 font-poppins'>
                <div className='py-8'>
                    <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
                        <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
                            <table className='min-w-full leading-normal'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Medicine Name
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Seller Email
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Buyer Email
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Total Price
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Quantity
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                                        >
                                            Purchase Date
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>{/* Table row data */}
                                    {
                                        payments?.map((payment, index) => {
                                            return <SalesReportRow key={index} payment={payment} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
