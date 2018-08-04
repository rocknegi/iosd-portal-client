import React, {Component} from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom' ;

import Home from "./Home";
import LoginComponent from './auth/login.component'
import PlayerComponent from './courses/common/Player';
import Logout from './auth/Logout'
import './App.css';

import requireAuth from "../utils/requireAuth";
// import requireAuthAdmin from "../utils/requireAuthAdmin";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/login' component ={LoginComponent}/>
                        <Route exact path='/logout' component ={Logout}/>
                        <Route exact path='/player/course/:cid/video/:vid' component={requireAuth(PlayerComponent)}/>
                        <Route path='/' component={requireAuth(Home)}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
