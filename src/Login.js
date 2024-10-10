import React, {useState} from 'react'
const SERVER_URL = process.env.REACT_APP_SERVER_URL || 'http://localhost:3001';

export default function Login(props) {

    const [loginMessage, setLoginMessage] = useState("")
    
    //handle user input
    const [input, setInput] = useState({
        email: '',
        password: ''
    })

    //handle server response
    const [userData, setUserData] = useState(null)

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(SERVER_URL);
        try {
            const response = await fetch(`${SERVER_URL}/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })

            if(response.ok) {
                const result = await response.json();
                setUserData(result);
                setLoginMessage(`Welcome, ${result.username}!`)
            } else {
                setUserData(null);
                setLoginMessage('Invalid email or password.');
            }
        } catch (err) {
            console.log('Error submitting form: ' + err)
        }
    }


    return (
        <form id="formHeader" onSubmit={handleSubmit}>
            <h1>Log in to a <b>{props.userType}</b> Account</h1>
            {userData ? loginMessage : loginMessage}
            <div className="formBody">
                <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                
                <p>or <span onClick={props.toggle} cursor="pointer"><i className="link">Sign up</i></span></p>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}
