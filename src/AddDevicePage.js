import React, { useContext, useEffect, useRef, useState } from 'react'
import { UserContext } from './UserContext'
const SERVER_URL = 'http://localhost:3001' 

export default function AddDeviceComponent() {
    const { userData } = useContext(UserContext)
    const [pageMessage, setPageMessage] = useState(null)
    const [resetInput, setResetInput] = useState(false)
    const [input, setInput] = useState({
        owner: userData.user_id,
        device_name: null,
        model: null,
        specs: null,
        condition: null,
        availability: null,
        apps: null,
        issues: null,
        terms_conditions: null
    })

    const device_nameRef = useRef(null)
    const modelRef = useRef(null)
    const specsRef = useRef(null)
    const conditionRef = useRef(null)
    const availabilityRef = useRef(null)
    const appsRef = useRef(null)
    const issuesRef = useRef(null)
    const terms_conditionsRef = useRef(null)

    useEffect(() => {
        if(resetInput) {
            setInput({
                owner: userData.user_id,
                device_name: null,
                model: null,
                specs: null,
                condition: null,
                availability: null,
                apps: null,
                issues: null,
                terms_conditions: null
            })
        }
        setResetInput(false)
        device_nameRef.current.value = ""
        modelRef.current.value = ""
        specsRef.current.value = ""
        conditionRef.current.value = ""
        availabilityRef.current.value = ""
        appsRef.current.value = ""
        issuesRef.current.value = ""    
        terms_conditionsRef.current.value = ""    
    }, [resetInput, userData.user_id]) 

    useEffect(() => {
        if (pageMessage) {
            const timer = setTimeout(() => {
                setPageMessage(null);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [pageMessage]);

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        setPageMessage ('Adding...')
        console.log(pageMessage)
        try {
            console.log("here!!!" + input)
            const response = await fetch(`${SERVER_URL}/add-device`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })

            if(response.ok) {
                setPageMessage('Device added.')
                console.log(pageMessage)
                setResetInput(true)
                //code to autmatically go back to profile page here
            } else {
                setPageMessage('Failed to add device.')
                console.log(response.statusText)
            }
        } catch(err) {
            const errMessage = `${err}. Check if server is running.`
            console.log(errMessage)
        }
    }



    return (
        <>
            {pageMessage ? <h1 id='message'>{pageMessage}</h1> : null}
            <form id="addDevice-form" onSubmit={handleSubmit}>
                <div id="div-left">

                    <label><h3>Device name:</h3></label>
                    <input type='text' ref={device_nameRef} name='device_name' placeholder='e.g. Rod-Laptop' onChange={handleInputChange} required/>
                    <label><h3>Model:</h3></label>
                    <input type='text' ref={modelRef} name='model' placeholder='e.g. Lenovo V15 Gen4' onChange={handleInputChange} required/>
                    <label htmlFor="device-specs">
                        <h3>Enter Laptop Specifications:</h3>
                        Please include: OS, processor, storage and RAM
                    </label>
                    <textarea id="specs" ref={specsRef} name="specs" placeholder="Put them in a comma-separated list." onChange={handleInputChange} required />

                    <div id="condition">
                        <h3>Condition:</h3>
                        <input type="radio" ref={conditionRef} id="excellent" name="condition" value="Excellent" onChange={handleInputChange} required checked={input.condition === "Excellent"}/>
                        <label htmlFor="excellent">Excellent</label>
                        <input type="radio" ref={conditionRef} id="good" name="condition" value="Good" onChange={handleInputChange} required checked={input.condition === "Good"}/>
                        <label htmlFor="good">Good</label>
                        <input type="radio" ref={conditionRef} id="minor-damages" name="condition" value="Minor damages" onChange={handleInputChange} required checked={input.condition === "Minor damages"}/>
                        <label htmlFor="minor-damages">Minor damages</label>
                        <input type="radio" ref={conditionRef} id="major-damages" name="condition" value="Major damages" onChange={handleInputChange} required checked={input.condition === "Major damages"}/>
                        <label htmlFor="major-damages">Major damages</label>
                    </div>

                    <div id="availability">
                        <h3>Availability:</h3>
                        <input type="radio" ref={availabilityRef} id="available" name="availability" value="Available" onChange={handleInputChange} required checked={input.availability === 'Available'}/>
                        <label htmlFor="available">Available</label>
                        <input type="radio" ref={availabilityRef} id="unavailable" name="availability" value="Unavailable" onChange={handleInputChange} required checked={input.availability === 'Unavailable'}/>
                        <label htmlFor="unavailable">Unavailable</label>
                    </div>
                   

                </div>

                <div id="div-right">
                    <label htmlFor="installed-apps"><h3>Installed Applications:</h3></label>
                    <textarea id="installed-apps" ref={appsRef} name="apps" placeholder=" e.g. VS Code, Sublime, pgAdmin 4, PowerPoint, Word..." onChange={handleInputChange} required/>

                    <label htmlFor="issues"><h3>Issues</h3></label>
                    <textarea id="issues" ref={issuesRef} name="issues" placeholder="e.g. Minor lcd damage, short battery life... Type 'None' if there are no issues." onChange={handleInputChange} required/>
                    
                    <label htmlFor="terms-conditions"><h3>Terms and Conditions</h3></label>
                    <textarea id="terms-conditions" ref={terms_conditionsRef} name="terms_conditions" placeholder="Set your terms and conditions for lending a laptop." onChange={handleInputChange} required/>
                </div>
                
            </form>
            <button type="submit" id="addDevice-btn" form="addDevice-form">Add Device</button>
        </>
    )
}
