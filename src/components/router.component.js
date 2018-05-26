import React from 'react' ;
import {Route} from 'react-router-dom' ;

import DashboardComponent from './common/dashboard.component' ;

const RouterComponent = () => {
    return (
        <div >
            <Route exact path='/' component={DashboardComponent}/>
        </div>
    )
} ;

export default RouterComponent ;