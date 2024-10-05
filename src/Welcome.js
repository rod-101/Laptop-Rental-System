import React, {useState} from 'react';

export default function Welcome() {
   
    return (
        <div>
            <h1>Welcome to Lappify!</h1>
            <p>Lending and renting a laptop made easy.</p><br></br>
            
            <p>Choose what you want to do.</p>
            <button value="lender">Lend</button> <span>or </span>  
            <button value="renter">Rent</button>
        </div>
    );
}