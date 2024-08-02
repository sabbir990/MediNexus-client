import React from 'react'
import MenuItem from '../Menu Item/MenuItem'
import { BsGraphUp } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BiCategory } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { TbReportSearch } from "react-icons/tb";
import { RiAdvertisementLine } from "react-icons/ri";


export default function AdminMenu() {
  return (
    <div>
        <MenuItem label={"Admin Homepage"} icon={BsGraphUp} address={"admin-homepage"}/>
        <MenuItem label={"Manage Users"} icon={FiUsers} address={"manage-users"}/>
        <MenuItem label={"Manage Category"} icon={BiCategory} address={"manage-category"}/>
        <MenuItem label={"payment Management"} icon={MdPayment} address={"payment-management"}/>
        <MenuItem label={"Sales Report"} icon={TbReportSearch} address={"sales-report"}/>
        <MenuItem label={"Manage Banner Advertisement"} icon={RiAdvertisementLine} address={"manage-banner-advertisement"}/>
    </div>
  )
}
