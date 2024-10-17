import React, {useState, useRef} from 'react'
import { useEffect } from 'react'
const SERVER_URL = 'http://localhost:3001' || process.env.REACT_APP_SERVER_URL

export default function Signup(props) {
    const user_type = props.userType
    const [signupMessage, setSignupMessage] = useState(null) //informs the user on the state of form submission 
    const usernameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    
    useEffect(() => {
        if(signupMessage) {
            console.log(signupMessage)
        }
    }, [signupMessage])


    //handle user input
    const [input, setInput] = useState({
        username: null,
        email: null,
        password: null,
        user_type: user_type
    })


    //handle server response
    const [userData, setUserData] = useState(null) //userData holds user_id

    //tracks changes in input
    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }



    const emailIsAvailable = async (e) => {
        try {
            const email = input.email;
            const response = await fetch(`${SERVER_URL}/emailIsAvailable?email=${email}`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            })

            if(response.ok) {
                const message = await response.text();
                setSignupMessage(message);
                return true;
            } else {
                const message = await response.text();
                setSignupMessage(message);
                return false;
            }
        } catch(err) {
            console.log('Error' + err)
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        setSignupMessage('Loading...')

        const isAvailable = await emailIsAvailable();
        if(isAvailable === false) {
            return
        }

        try {
            const response = await fetch(`${SERVER_URL}/signup`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })

            if(response.ok) {
                const result = await response.json(); //string to json
                setUserData(result);
                setSignupMessage(`Account created. Please log in.`)
                setInput({
                    username: "",
                    email: "",
                    password: "",
                    user_type: user_type
                })
                usernameRef.current.value = ""
                emailRef.current.value = ""
                passwordRef.current.value = ""
            } else {
                setUserData(null);
                setSignupMessage(response.statusText);
            }
        } catch (err) {
            const errMessage = `${err}. Check if server is running.`
            console.log(errMessage)
        }
    }



    return (
        <form id="formHeader" onSubmit={handleSubmit}>
            <h1>Create a <b>{props.userType}</b> Account</h1>
            {userData ? signupMessage : signupMessage}
            <div className="formBody" onSubmit={props.handleSubmit}>
                <input type="text" ref={usernameRef} name="username" placeholder="Username" onChange={handleInputChange} />
                <input type="email" ref={emailRef} name="email" placeholder="Email" onChange={handleInputChange} />
                <input type="password" ref={passwordRef} name="password" placeholder="Password" onChange={handleInputChange} />
                
                <p>or <span onClick={props.toggle}><i className="link">Log in</i></span></p>
                <input type="submit" value="SIGN UP" />
            </div>
        </form>
    )
    
}
