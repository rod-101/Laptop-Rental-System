import React, { useState } from 'react';
import Login from './Login.js'
import Signup from './Signup.js'

export default function Auth(props) {
    const [state, setState] = useState('Login');
    const userType = props.userType;
    
    const toggleAuth = () => {
        if(state === 'Login') {
            setState('Signup')
        } else {
            setState('Login')
        }
    }

    if(state === 'Login') {
        return <Login toggle={toggleAuth} userType={userType} />
    } else if(state === 'Signup') {
        return <Signup toggle={toggleAuth} userType={userType} />
    }

    
}