import React, { useContext } from 'react'
import { UserDataContext } from './Login'

export default function RenterProfile(props) {
    const userData = useContext(UserDataContext)    
    const username = userData.username
    const user_id = userData.user_id
    const user_type = userData.user_type

    return (
        <>
            <div>This is a renter profile</div>
            <div>Username: {username}</div>
            <div>UserID: {user_id}</div>
            <div>Role: {user_type}</div>
            <h1>Rent a Laptop</h1>
        </>
    )
}