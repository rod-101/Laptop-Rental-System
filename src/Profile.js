import React, { useContext } from "react"
import { UserDataContext } from "./Login"
import LenderProfile from "./LenderProfile"
import RenterProfile from "./RenterProfile"

export default function Profile() {
    const userData = useContext(UserDataContext)
    const userType = userData.user_type;
    
    if(userType === 'Lender') {
        return <LenderProfile/>
    } else if(userType === 'Renter') {
        return <RenterProfile/>
    }
}