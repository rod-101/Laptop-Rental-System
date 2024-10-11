// import React, {useState} from 'react'

export default function RenterProfile(props) {
    const user_id = props.user_id
    const username = props.username
    const user_type = props.user_type

    return (
        <>
            <div>Username: {username}</div>
            <div>UserID: {user_id}</div>
            <div>Role: {user_type}</div>
            <h1>Your Devices</h1>
        </>
    )
}