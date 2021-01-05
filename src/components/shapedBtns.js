import React from 'react';
import {Link} from 'react-router-dom';
import '../styles.css';
import './shapedBtns.css';
import man from '../images/man1.PNG';


function ShapedBtns() {
    
    return (
        <div>
            <div class="btn-m-container">
                <span class="linkm-text">MANAGEMENT</span>
            </div>
            <div class="btn-t-container">
                <span class="linkt-text">TECHNICIANS</span>
            </div>
            <div class="register-container">
                <span class="register-text">REGISTER</span>
            </div>
            <div class="image-container">
                <img src={man} alt="man-logo" class="image-man" />
            </div>
        </div>
        
        
    );
}

export default ShapedBtns;