import React, {useState} from 'react'

export default function Login(props) {
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

        try {
            const response = await fetch('/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(input)
            })

            const result = await response.json();
            console.log('Form submitted: ' + result);

            setUserData(result);
        } catch (err) {
            console.error("Error submitting form: " + err);
        }
    }

    return (
        <form id="formHeader" onSubmit={handleSubmit}>
            <h1>Log in to a <b>{props.userType}</b> Account</h1>
            {userData && <p>Welcome, {userData.email}!</p>}
            <div className="formBody">
                <input type="text" name="email" placeholder="Email" onChange={handleChange}/>
                <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
                
                <p>or <span onClick={props.toggle} cursor="pointer"><i className="link">Sign up</i></span></p>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
    )
}
