import React, {useState} from 'react'
const SERVER_URL = process.env.REACT_APP_SERVER_URL; 

export default function Signup(props) {
    //use when showing users the error when form is submitted
    const [signupMessage, setSignupMessage] = useState(null) 
    
    //handle user input
    const [input, setInput] = useState({
        username: null,
        email: null,
        password: null,
        user_type: props.userType
    })

    //handle server response
    const [userData, setUserData] = useState(null)

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
            } else {
                setUserData(null);
                console.log(response)
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
                <input type="text" name="username" placeholder="Username" onChange={handleInputChange} />
                <input type="email" name="email" placeholder="Email" onChange={handleInputChange} />
                <input type="password" name="password" placeholder="Password" onChange={handleInputChange} />
                
                <p>or <span onClick={props.toggle}><i className="link">Log in</i></span></p>
                <input type="submit" value="SIGN UP" />
            </div>
        </form>
    )
    
}
