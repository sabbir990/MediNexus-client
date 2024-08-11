import React from 'react'
import MenuItem from '../Menu Item/MenuItem'
import { FaHistory } from "react-icons/fa";


export default function UserMenu() {
  return (
    <div>
        <MenuItem label={"Payment History"} icon={FaHistory} address={"user-homepage"}/>
    </div>
  )
}
