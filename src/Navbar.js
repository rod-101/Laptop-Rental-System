// import React, { useContext } from "react"
// import { UserDataContext } from "./Login"
import { Link } from "react-router-dom"

export default function Navbar() {
    // const userData = useContext(UserDataContext)

    return (
        <>
            <div id="navbar">
                <Link to="/profile">
                    <div>Profile</div>
                </Link>
                <Link to="/requests">
                    <div>Requests</div>
                </Link>
                <Link to="/devices">
                    <div>Devices</div>
                </Link>
            </div>
        </>
    )
}