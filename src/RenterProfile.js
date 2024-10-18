import {NavbarRenter} from './Navbar'
import React, {  useContext, useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import { UserContext } from "./UserContext"
import ProfileComponentRenter from './ProfileComponentRenter'

export default function RenterProfile() {
    const {userData} = useContext(UserContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        navigate('/renter') //test removing this since, /lender doesn't show up in the address bar anyway

        // Only navigate if a condition is met, e.g., userData is not loaded
        if (!userData) {
            navigate('/profile');  // Navigate somewhere if necessary
        }
    }, [navigate, userData]);
        


    return (
        <>
            <div id='renter-profile-page'>
                <NavbarRenter/>
                <ProfileComponentRenter/>
            </div>
        </>
    )
    
}