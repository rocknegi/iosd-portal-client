import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, } from 'react-router-dom' ;

import HomeComponent from "./home.component";
import LoginComponent from './auth/login.component'

import './App.css';
import requireAuth from "../utils/requireAuth";



class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/login' component ={LoginComponent}/>
                        <Route path='/' component={requireAuth(HomeComponent)}/>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
