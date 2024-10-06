import React, {useState} from 'react';
import Access from './Access.js'

export default function Welcome() {
    const [userType, setUser] = useState(null);
    
    const buttonLender = user => {
        setUser('Lender')
    }
    const buttonRenter = user => setUser('Renter')

    return (
        <div>
            {
                userType ? (<Access userType={userType} />) : (
                    <div>
                        <h1>Welcome to Lappify!</h1>
                        <p>Lending and renting a laptop made easy.</p><br></br>
                        
                        <p>Choose what you want to do.</p>
                        <button value="lender" onClick={buttonLender}>Lend</button> <span>or </span>  
                        <button value="renter" onClick={buttonRenter}>Rent</button>
                    </div>
                )
            }
        </div>
    );
   
    
    
}