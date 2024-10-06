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
                <h1>Log in to a {userType} Account</h1>
    
                <div id="formBody">
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    
                    <p>or <span onClick={toggleAccess}>Sign up</span></p>
                    <input type="submit" value={state} />
                </div>
            </form>
        );
    } else if(state === 'Signup') {
        return (
            <form id="formHeader">
                <h1>Create a {userType} Account</h1>
    
                <div id="formBody">
                    <input type="text" placeholder="Username" />
                    <input type="text" placeholder="Email" />
                    <input type="text" placeholder="Password" />
                    
                    <p>or <span onClick={toggleAccess}>Login</span></p>
                    <input type="submit" value={state} />
                </div>
            </form>
        );
    }

    
}