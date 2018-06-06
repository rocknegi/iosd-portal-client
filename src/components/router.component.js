import React from 'react' ;
import {Route} from 'react-router-dom' ;

import DashboardComponent from './common/dashboard.component' ;
import Courses from "./courses/courses.component";
import CoursesDetail from "./courses/course-detail.component";
import LibraryComponent from "./library/library.component";
import BlogComponent from "./blog/blog.component";
import EventsComponent from "./events/events.component";
import ProfileComponent from './profile/profile.component'
// import PlayerComponent from './courses/player.component'

const RouterComponent = () => {
    return (
        <div>
            <Route exact path='/' component={DashboardComponent}/>
            <Route exact path='/library' component={LibraryComponent}/>
            <Route exact path='/blog' component={BlogComponent}/>
            <Route exact path='/events' component={EventsComponent}/>
            <Route exact path='/profile' component={ProfileComponent}/>
            <Route exact path='/courses' component={Courses}/>
            <Route path='/course/:id' component={CoursesDetail}/>
            {/* <Route path='/player' component={PlayerComponent}/> */}
        </div>
    )
} ;

export default RouterComponent ;