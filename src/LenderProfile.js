// import React, {useState} from 'react'
// import ProductCard from './ProductCard'
import React, { useContext, useState } from "react"
import { UserDataContext } from "./Login"
import AddDevicePage from './AddDevicePage';

export default function LenderProfile() {
    const profile = 'LenderProfile'
    const addDevice = 'AddDevicePage'

    const [page, setPage] = useState('LenderProfile');
    const userData = useContext(UserDataContext)
    const username = userData.username;

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
                <div>Username: {username}</div>
                <h1>Your Devices</h1>
                
                <div>
                    {/* product card goes here */}
                </div>
                <button onClick={handleClick}>Add a device</button>
            </>
        )
    }
    
}