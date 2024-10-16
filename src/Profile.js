import React, { useContext, useEffect} from "react";
import { UserContext } from "./UserContext";
import LenderProfile from "./LenderProfile";
import RenterProfile from "./RenterProfile";
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    console.log("youre on profile component")
    const { userData } = useContext(UserContext);    
    const navigate = useNavigate()
    
    useEffect(() => {
        navigate('/profile')
    }, [navigate])
    
    // If userData isn't loaded yet, don't render profiles
    if (!userData) {
        return <div>Loading... from profile</div>;
    }
    console.log('user is: ' + userData.user_type)
    
    // Conditional rendering based on userType
    if (userData.user_type === "Lender") {
        return <LenderProfile />
    } else if (userData.user_type === "Renter") {
        return <RenterProfile />;
    }
}