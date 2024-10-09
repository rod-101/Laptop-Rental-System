import React, { useState } from 'react';

export default function Access(props) {
    const [state, setState] = useState('Login');
    const userType = props.userType;
    
    const toggleAccess = () => {
        if(state === 'Login') {
            setState('Signup')
        } else {
            setState('Login')
        }
    }

    if(state === 'Login') {
        return (
            <form id="formHeader">
                <h1>Log in to a <b>{userType}</b> Account</h1>
    
                <div className="formBody">
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    
                    <p>or <span onClick={toggleAccess} cursor="pointer"><i className="link">Sign up</i></span></p>
                    <input type="submit" value="SIGN UP" />
                </div>
            </form>
        );
    } else if(state === 'Signup') {
        return (
            <form id="formHeader">
                <h1>Create a <b>{userType}</b> Account</h1>
    
                <div className="formBody">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    
                    <p>or <span onClick={toggleAccess}><i className="link">Log in</i></span></p>
                    <input type="submit" value="LOGIN" />
                </div>
            </form>
        );
    }

    
}