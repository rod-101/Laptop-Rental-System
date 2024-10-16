import { UserContext } from './UserContext'
import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import DeviceCard from "./DeviceCard";
const SERVER_URL = 'http://localhost:3001' || process.env.REACT_APP_SERVER_URL

export default function Devices() {
    const { userData } = useContext(UserContext)
    const [ devices, setDevices ] = useState([])
    const owner = userData.user_id;
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/devices')
    }, [navigate])

    const getDevices = async () => {
        try{
            const response = await fetch(`${SERVER_URL}/my-devices`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'appliation/json'
                },
                body: JSON.stringify({owner})
            })
            if(response.ok) {
                const result = await response.json()
                setDevices(result)
                console.log('devices set.')
            } else {
                console.log('something went wrong while fetching devices.')
            }
        } catch(err) {
            console.log('Error fetching devices: ' + err)
        }
    }



    return (
        <>
            <Navbar/>
            <div className="container-lender">
                <DeviceCard/>
            </div>
        </>
    )
}