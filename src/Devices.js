import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";

export default function Devices() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/devices')
    }, [navigate])

    return (
        <>
            <Navbar/>
            <h1>Devices Page</h1>
            <div className="container-lender">Data goes here.</div>
        </>
    )
}