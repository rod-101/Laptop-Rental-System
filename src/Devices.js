import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";

export default function Devices() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/profile/devices')
    })

    return (
        <>
            <Navbar/>
            <h2>Devices</h2>

        </>
    )
}