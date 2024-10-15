import React, { useContext, useState, useEffect } from "react";
import { UserDataContext } from "./Login";
import LenderProfile from "./LenderProfile";
import RenterProfile from "./RenterProfile";

export default function Profile() {
    const userDataRaw = useContext(UserDataContext);    
    const [userData, setUserData] = useState(null);
    // Effect to set userData only once when userDataRaw changes
    useEffect(() => {
        if (userDataRaw) {
            setUserData(userDataRaw);
        }
    }, [userDataRaw]);

    // If userData isn't loaded yet, don't render profiles
    if (!userData) {
        return <div>Loading...</div>;
    }

    const userType = userData.user_type; // Now this should work

    // Conditional rendering based on userType
    if (userType === "Lender") {
        return <LenderProfile />;
    } else if (userType === "Renter") {
        return <RenterProfile />;
    } else {
        return <div>Invalid user type</div>;
    }
}
