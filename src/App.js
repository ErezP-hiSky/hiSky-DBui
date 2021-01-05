import React from 'react';
import {
  BrowserRouter as Router, Switch,
  Route
} from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import Management from './components/Management';
import Technician from './components/Technician';
import Footer from './components/Footer';
import logo from './logo.svg';
import './App.css';
import * as Realm from "realm-web";

const REALM_APP_ID = "<Your App ID>"; // e.g. myapp-abcde
//The app object represents your Realm app. 
const app = new Realm.App({ id: REALM_APP_ID });


const App = () => {
  
  return (
    <Router>
      <div className="App">
      <Header/>
      <Nav />
        <div className="App-header">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path="/management" component={Management} />
            <Route path="/technician" component={Technician} />
          </Switch>
        </div>
        <Footer/>
      </div>
    </Router>
    
  );
}



export default App;
