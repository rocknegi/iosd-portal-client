import React from 'react' ;
import {Route} from 'react-router-dom' ;

import DashboardComponent from './common/dashboard.component' ;
import Courses from "./courses/courses.component";
import CoursesDetail from "./courses/course-detail.component";

const RouterComponent = () => {
    return (
        <div>
            <Route exact path='/' component={DashboardComponent}/>
            <Route exact path='/courses' component={Courses}/>
            <Route path='/course/:id' component={CoursesDetail}/>
        </div>
    )
} ;

export default RouterComponent ;