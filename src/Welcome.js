import React, {useState} from 'react';
import Auth from './Auth.js'

export default function Welcome() {
    console.log(process.env.REACT_APP_SSL_CERT)
    const [userType, setUser] = useState(null);
    
    const buttonLender = user => setUser('Lender')
    const buttonRenter = user => setUser('Renter')

    return (
        <div>
            {
                userType ? (<Auth userType={userType} />) : (
                    <div id="welcomeContainer">
                        <h2 id="welcomeHeader"><span id='welcomeTo'>Welcome to</span> Lappify!</h2>
                        
                        <p id="welcomeCaption">Lending and renting a laptop made easy.</p>
                        
                        <div id="welcomeBody">
                            <p>Choose what you want to do.</p>
                            <button className="welcomeButtons" value="lender" onClick={buttonLender}>Lend</button>
                            <span id='or'>or</span>
                            <button className="welcomeButtons" value="renter" onClick={buttonRenter}>Rent</button>
                        </div>
                    </div>
                )
            }
        </div>
    );
   
    
    
}