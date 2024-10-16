// import React, {useState} from 'react'
// import ProductCard from './ProductCard'
import React, {useEffect} from "react"
import Navbar from "./Navbar";
import ProfileComponent from "./ProfileComponent";
import { useNavigate } from 'react-router-dom'


export default function LenderProfile() {
    const navigate = useNavigate()
    

    useEffect(() => {
        navigate('/profile/lender')
    }, [navigate])

    // const handleClick = () => {
    //     setPage('AddDevicePage')
    // }
    
        
    return (
        <>
            <Navbar/>
            <ProfileComponent />
        </>
    )
    
}