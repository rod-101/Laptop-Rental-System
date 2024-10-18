import { Link } from "react-router-dom"

export default function Navbar() {

    return (
        <>
            this is "Navbar"
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

export function NavbarRenter() {
    return (
        <>
            <div id="navbar-renter">
                <Link to="/profile">
                    <div>Profile</div>
                </Link>
                <Link to="/feed">
                    <div>Feed</div>
                </Link>
                <Link to="/pending">
                    <div>Pending</div>
                </Link>
            </div>
        </>
    )
}