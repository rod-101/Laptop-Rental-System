import Navbar from "./Navbar";
import { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

export default function Requests() {
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/requests')
    }, [navigate])
    
    return(
        <>
            <Navbar/>
            <div className="container-lender">{}</div>
        </>
    )
}