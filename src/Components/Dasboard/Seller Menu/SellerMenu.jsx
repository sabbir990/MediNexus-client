import React from 'react'
import MenuItem from '../Menu Item/MenuItem'
import { FaChartLine } from "react-icons/fa6";
import { RiMedicineBottleLine } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";
import { RiAdvertisementFill } from "react-icons/ri";


export default function SellerMenu() {
  return (
    <div>
        <MenuItem label={"Seller Homepage"} icon={FaChartLine} address={"seller-homepage"}/>
        <MenuItem label={"Manage Medicines"} icon={RiMedicineBottleLine} address={"manage-medicines"}/>
        <MenuItem label={"Payment History"} icon={MdOutlinePayments} address={"payment-history"}/>
        <MenuItem label={"Ask For Advertisement"} icon={RiAdvertisementFill} address={"ask-for-advertisement"}/>
    </div>
  )
}
