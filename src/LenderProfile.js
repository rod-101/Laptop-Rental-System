// import React, {useState} from 'react'
// import ProductCard from './ProductCard'
import React, { useState } from "react"
import AddDevicePage from './AddDevicePage';
import Navbar from "./Navbar";
import ProfileComponent from "./ProfileComponent";

export default function LenderProfile() {
    const profile = 'LenderProfile'
    const addDevice = 'AddDevicePage'

    const [page, setPage] = useState('LenderProfile');
    

    const handleClick = () => {
        setPage('AddDevicePage')
    }
    
    if(page === addDevice) {
        return(
            <AddDevicePage/>
        )
    } else if(page === profile) {
        return (
            <>
                <Navbar/>
                <ProfileComponent/> 
            </>
        )
    }
    
}