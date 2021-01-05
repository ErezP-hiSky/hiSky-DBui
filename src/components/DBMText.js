import React from 'react';
import '../styles.css';
import logo from '../images/hiskyLogo.PNG';


function DBMText() {
    return (
        <div class="db-text">
            <img src={logo} alt="hisky-logo" />
            <h1>DBM - Data Base Management</h1>
            <p>
                hiSky is testing all of its products. 
                This is a system that manages the results in real time, 
                show to the user what is the current status and what should they pay attention to. 
            </p>
            <br/>
            <p>
                This is a very important system also for the technicians because 
                they need to observe what are the main fails a terminal or terminals are having.
            </p>
        </div>
        
    );
}

export default DBMText;
