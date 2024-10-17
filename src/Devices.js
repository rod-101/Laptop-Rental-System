import { UserContext } from './UserContext'
import { Link, useNavigate } from "react-router-dom";
import { useCallback, useState, useContext, useEffect } from "react";
import Navbar from "./Navbar";
import DeviceCard from "./DeviceCard";
// import AddDeviceComponent from './AddDevicePage';
// import AddDeviceComponent from './AddDevicePage';
const SERVER_URL = 'http://localhost:3001' 

export default function Devices() {
    const { userData } = useContext(UserContext)
    const owner = userData.user_id;
    const navigate = useNavigate();
    const [ devices, setDevices ] = useState([])


    // const addADevice = () => {
    //     navigate('/add-a-device')
    // }


    const getDevices = useCallback(async () => {
        try{
            const response = await fetch(`${SERVER_URL}/my-devices`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({owner})
            })
            if(response.ok) {
                const result = await response.json()
                setDevices(Array.isArray(result.rows) ? result.rows : []);
            } else {
                console.log('something went wrong while fetching devices.')
            }
        } catch(err) {
            console.log('Error fetching devices: ' + err)
        }
    }, [owner])

    useEffect(() => {
        navigate('/devices')
        getDevices()
    }, [navigate, getDevices])

    return (
        <>
            <Navbar/>
            <div className='container-devices'>
                <h1>Your Devices</h1>
                <div className="container-devices-flex">
                    {devices.length > 0 ? (
                        devices.map(device => (
                            <DeviceCard
                                key={device.device_id}
                                model={device.model}
                                device_name={device.device_name}
                            />
                        ))
                    ) : (
                        <span style={{width: "200px", margin: "auto", marginTop: "170px"}}>Wow, such empty!</span>
                    )}
                    
                </div>
                <Link to="/add-a-device"><button className='devices-buttons'>Add</button></Link>
            </div>
        </>
    )
}
