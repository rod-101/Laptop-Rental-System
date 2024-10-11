// import React, {useState} from 'react'
import ProductCard from './ProductCard'

export default function LenderProfile(props) {
    const user_id = props.user_id
    const username = props.username
    const user_type = props.user_type

    return (
        <>
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