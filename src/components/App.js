import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, } from 'react-router-dom' ;

import HomeComponent from "./home.component";
import LoginComponent from './auth/login.component'
import PlayerComponent from './courses/common/player.component';

import './App.css';

import requireAuth from "../utils/requireAuth";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/login' component ={LoginComponent}/>
                        <Route exact path='/player' component={requireAuth(PlayerComponent)}/>
                        <Route path='/' component={requireAuth(HomeComponent)}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
