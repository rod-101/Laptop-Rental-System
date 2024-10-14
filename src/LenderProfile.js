// import React, {useState} from 'react'
import ProductCard from './ProductCard'
import React, { useContext } from "react"
import { UserDataContext } from "./Login"

export default function LenderProfile() {
    const userData = useContext(UserDataContext)
    const username = userData.username;

    return (
        <>
            <div>Username: {username}</div>
            <h1>Your Devices</h1>
            
            <div>
                <ProductCard />
            </div>
            <button>Add a device</button>
        </>
    )
}