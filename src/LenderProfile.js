// import React, {useState} from 'react'
import ProductCard from './ProductCard'
import React, { useContext } from "react"
import { UserDataContext } from "./Login"

export default function LenderProfile() {
    const userData = useContext(UserDataContext)
    const username = userData.username;
    const user_id = userData.user_id;
    const user_type = userData.user_type;

    return (
        <>
            <div>This is a lender profile</div>
            <div>Username: {username}</div>
            <div>UserID: {user_id}</div>
            <div>Role: {user_type}</div>
            <h1>Your Devices</h1>
            
            <div>
                <ProductCard />
            </div>
            <button>Add a device</button>
        </>
    )
}