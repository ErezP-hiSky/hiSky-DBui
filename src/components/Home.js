import React from 'react';
import DBMText from './DBMText';
import ShapedBtns from './shapedBtns';
import '../styles.css';


function Home() {
   return (
        <div>
            <h1>Home Page</h1>
            <h1>Hello</h1>
            <div class="home-page" >
                <DBMText />
                <ShapedBtns />
            </div>
        </div>
    );
}


export default Home;
