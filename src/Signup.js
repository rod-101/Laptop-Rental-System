import React, {useState} from 'react'
const SERVER_URL =  process.env.REACT_APP_SERVER_URL; //'http://localhost:3001' //push first before changing to localhost:3001

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

    const handleSubmit = async (e) => {
        e.preventDefault();
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
                setSignupMessage(`Data posted.`)
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