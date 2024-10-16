import Navbar from './Navbar'
import React, {  useContext, useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import { UserContext } from "./UserContext"
import ProfileComponent from './ProfileComponent'

export default function LenderProfile() {
    const {userData} = useContext(UserContext)
    const navigate = useNavigate()
    
    useEffect(() => {
        // Only navigate if a condition is met, e.g., userData is not loaded
        if (!userData) {
            navigate('/profile');  // Navigate somewhere if necessary
        }
    }, [navigate, userData]);
        
    return (
        <>
            <Navbar/>
            <ProfileComponent/>
        </>
    )
    
}