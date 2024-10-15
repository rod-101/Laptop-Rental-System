// import React, {useState} from 'react'
// import ProductCard from './ProductCard'
import React, { useContext, useState } from "react"
import { UserDataContext } from "./Login"
import AddDevicePage from './AddDevicePage';
import Navbar from "./Navbar";

export default function LenderProfile() {
    const profile = 'LenderProfile'
    const addDevice = 'AddDevicePage'

    const [page, setPage] = useState('LenderProfile');
    const userData = useContext(UserDataContext)
    const username = userData.username;
    const email = userData.email;
    const user_type = userData.user_type;
    const devicesCount = null
    const requestsCount = null

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
                <div id="container-lender">
                    <div>
                        <img className="profile-photo" src={require("./images/me.jpg")} alt="Rodjones.jpg"/>
                    </div>
                    <div id="lender-info">
                        <h2>{username} ({user_type})</h2>
                        <p>{email}</p>
                        <p>{devicesCount} Devices</p>
                        <p>{requestsCount} Requests</p>
                    </div>
                </div>
            </>
        )
    }
    
}