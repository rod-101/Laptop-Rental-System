import React, { useContext, useState, useEffect} from "react";
import { UserContext } from "./UserContext";
import LenderProfile from "./LenderProfile";
import RenterProfile from "./RenterProfile";
import { useNavigate } from 'react-router-dom'

export default function Profile() {
    const { userData } = useContext(UserContext);    
    const navigate = useNavigate()
    useEffect(() => {
        navigate('/profile')
    }, [userData])
    // If userData isn't loaded yet, don't render profiles
    if (!userData) {
        return <div>Loading... from profile</div>;
    }

    
    // Conditional rendering based on userType
    if (userData.user_type === "Lender") {
        return <LenderProfile />
    } else if (userData.user_type === "Renter") {
        return <RenterProfile />;
    } else {
        return <div>Invalid user type</div>;
    }
}
