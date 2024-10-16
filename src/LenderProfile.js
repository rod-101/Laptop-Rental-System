// import React, {useState} from 'react'
// import ProductCard from './ProductCard'
import React, { useState, useContext, useEffect} from "react"
import AddDevicePage from './AddDevicePage';
import Navbar from "./Navbar";
import ProfileComponent from "./ProfileComponent";
import { Outlet, useNavigate } from 'react-router-dom'
import { UserContext } from './UserContext'


export default function LenderProfile() {
    const profile = 'LenderProfile'
    const addDevice = 'AddDevicePage'
    const navigate = useNavigate()
    const { userData } = useContext(UserContext)

    const [page, setPage] = useState('LenderProfile');
    

    useEffect(() => {
        navigate('/profile/lender')
    }, [userData])

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
                <ProfileComponent />
            </>
        )
    }
    
}