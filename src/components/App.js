import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, } from 'react-router-dom' ;

import HomeComponent from "./home.component";
import LoginComponent from './auth/login.component'
import PlayerComponent from './courses/player.component';

import './App.css';
import requireAuth from "../utils/requireAuth";



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>   
                        <Route exact path='/login' component ={LoginComponent}/>
                        <Route exact path='/' component={requireAuth(HomeComponent)}/>
                        <Route exact path='/player' component={requireAuth(PlayerComponent)}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
