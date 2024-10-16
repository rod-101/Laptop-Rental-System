import React, { useState, useContext, useEffect} from "react"
import { UserContext } from "./UserContext"
import { useNavigate } from 'react-router-dom'
const SERVER_URL = 'http://localhost:3001'

export default function ProfileComponent() {
    const { userData } = useContext(UserContext)
    const navigate = useNavigate()

    const [devicesCount, setDevicesCount] = useState(0)
    const [requestsCount, setRequestsCount] = useState(0)
    const username = userData.username;
    const email = userData.email;
    const user_type = userData.user_type;
    const owner = userData.user_id;
    
    const getRequestsCount = async () => {
        try{
            const response = await fetch(`${SERVER_URL}/count-requests/${owner}`, {
                method: "POST"
            })

            if(response.ok) {
                const result = await response.json()
                setRequestsCount(result.rowCount)
            } else {
                console.log(response.statusText)
            }
        } catch(err) {
            console.log(err);
        }    
    }

    
    const getDevicesCount = async () => {
        try{
            const response = await fetch(`${SERVER_URL}/count-devices/${owner}`, {
                method: "POST"
            })

            if(response.ok) {
                const result = await response.json()
                setDevicesCount(result.rowCount)
            } else {
                console.log(response.statusText)
            }
        } catch(err) {
            console.log(err);
        }
    }


    useEffect(() => {
        getDevicesCount()    
        getRequestsCount()
        navigate('profile/lender/me')
    }, [userData])

    return (
        <div id="container-lender">
            <div>
                <img className="profile-photo" src={"./images/me.jpg"} alt="Beth.jpg"/>
            </div>
            <div id="lender-info">
                <h1>{username} {owner} ({user_type})</h1>
                <p>{email}</p>
                <p>{devicesCount} Devices</p>
                <p>{requestsCount} Requests</p>
            </div>
        </div>
    )
}