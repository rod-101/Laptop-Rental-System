import React, {useState} from 'react'

export default function Signup(props) {
    const {input, setInput} = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = () => {

    }

    return (
        <form id="formHeader" onSubmit={handleSubmit}>
            <h1>Create a <b>{props.userType}</b> Account</h1>

            <div className="formBody" onSubmit={props.handleSubmit}>
                <input type="text" name="username" placeholder="Username" onChange={handleChange} />
                <input type="text" name="email" placeholder="Email" onChange={handleChange} />
                <input type="text" name="password" placeholder="Password" onChange={handleChange} />
                
                <p>or <span onClick={props.toggle}><i className="link">Log in</i></span></p>
                <input type="submit" value="SIGN UP" />
            </div>
        </form>
    )
    
}