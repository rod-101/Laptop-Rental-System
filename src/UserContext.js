import React, { createContext, useState, useEffect} from 'react';

export const UserContext = createContext();

export default function UserProvider({ children }){
    const [userData, setUserData] = useState(() => {
        // Retrieve userData from local storage if available
        const savedUserData = localStorage.getItem('userData');
        return savedUserData ? JSON.parse(savedUserData) : null;
    });

    

    useEffect(() => {
        if (userData) {
        // Save userData to local storage when it changes
        localStorage.setItem('userData', JSON.stringify(userData));
    }
    }, [userData]);

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
        {children}
        </UserContext.Provider>
    );
};
