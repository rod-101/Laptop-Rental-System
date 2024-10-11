import React, {useState} from 'react'
import LenderProfile from './LenderProfile'
import RenterProfile from './RenterProfile'
const SERVER_URL = process.env.REACT_APP_SERVER_URL;


export default function Login(props) {

    const [loginMessage, setLoginMessage] = useState("")
    const [profile, setProfile] = useState(null);
    const [userData, setUserData] = useState({}) //handle server response
    
    //handle user input
    const [input, setInput] = useState({
        email: null,
        password: null,
        user_type: props.userType
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${SERVER_URL}/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })

            if(response.ok) {
                const result = await response.json(); //extract the actual body of response and convers to js object
                setLoginMessage(`Login successful!`)
                setUserData(result)
                setProfile(result.user_type) //set profile to lender or renter
            } else {
                setUserData(null);
                setLoginMessage("Email or password is incorrect.");
                
            }
        } catch (err) {
            setLoginMessage('Something went wrong. Please check console for more info.')
            console.log('Error submitting form: ' + err)
        }
    }


    if(profile) {
        if(profile === 'Renter'){
            return (
                <RenterProfile username={userData.username} user_id={userData.user_id} user_type={userData.user_type} />
            )
        }
        return <LenderProfile username={userData.username} user_id={userData.user_id} user_type={userData.user_type}/>
    } else {
        return (
            <form id="formHeader" onSubmit={handleSubmit}>
                <h1>Log in to a <b>{props.userType}</b> Account</h1>
                {loginMessage}
                <div className="formBody">
                    <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
                    <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                    
                    <p>or <span onClick={props.toggle} cursor="pointer"><i className="link">Sign up</i></span></p>
                    <input type="submit" value="LOGIN" />
                </div>
            </form>
        )
    }
    
}
