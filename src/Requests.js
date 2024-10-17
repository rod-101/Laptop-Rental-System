import RequestUI from './RequestUI'
import Navbar from "./Navbar";
import { useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";
const SERVER_URL = 'http://localhost:3001'

export default function Requests() {
    const navigate = useNavigate()
    const [requests, setRequests] = useState([])
    const { userData } = useContext(UserContext)
    const owner = userData.user_id

    const getRequests = useCallback(async () => {
        console.log("owner is: " + owner)
        try{
            const response = await fetch(`${SERVER_URL}/requests`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({owner})
            })

            if(response.ok) {
                console.log("response is ok")
                const result = await response.json()
                setRequests(result)
                console.log(result)
            } else {
                console.log('response is not ok')
                console.log('Something wrong with the response.')
                console.log()
            }
        } catch(err) {
            console.log('Error fetching requests: ' + err)
        }
    }, [owner])    


    const formatDate = (timestamp) => {
        const dateObj = new Date(timestamp); // Convert the raw timestamp into a Date object
        const options = { month: 'long', day: 'numeric' }; // Format options for date part
        const datePart = dateObj.toLocaleDateString('en-US', options); // Get month and day
        const timePart = dateObj.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }); // Get time in 12-hour format
        return `${datePart} at ${timePart}`; // Combine the date and time
    }
    
    useEffect(() => {
        navigate('/requests')
        getRequests()
    }, [navigate, getRequests])

    return(
        <>
            <Navbar/>
            <div className="container-requests">
                <h1>Rent Requests</h1>
                <div className="container-requests-flex">
                    {requests.length > 0 ? (
                        requests.map(request => (
                            <RequestUI
                                key={request.request_id}
                                username={request.username}
                                email={request.email}
                                device={request.device_name}
                                on_date={formatDate(request.requested_on)}
                            />
                        ))
                    ) : (
                        <span style={{width: "200px", margin: "auto", marginTop: "170px"}}>You don't have any :(</span>
                    )}
                </div>
            </div>
        </>
    )
}