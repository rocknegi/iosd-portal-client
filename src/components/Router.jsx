import React from 'react' ;
import {Route} from 'react-router-dom' ;

import Dashboard from './dashboard/Dashboard' ;
import Courses from "./courses/Courses";
import CoursesDetail from "./courses/CourseDetails";
import LibraryComponent from "./library/LibraryBookList";
import BlogComponent from "./blog/BlogList";
import EventsComponent from "./events/Events";
import ProfileComponent from './profile/profile.component'
import requireAuthAdmin from "../utils/requireAuthAdmin";

import AdminRouter from './AdminRouter'


const RouterComponent = () => {
    return (
        <div>
            <Route exact path='/' component={Dashboard}/>
            <Route exact path='/library' component={LibraryComponent}/>
            <Route exact path='/blog' component={BlogComponent}/>
            <Route exact path='/events' component={EventsComponent}/>
            <Route exact path='/profile' component={ProfileComponent}/>
            <Route exact path='/courses' component={Courses}/>
            <Route path='/course/:id' component={CoursesDetail}/>
            <Route path='/admin' component={requireAuthAdmin(AdminRouter)}/>
        </div>
    )
} ;

export default RouterComponent ;