import React from 'react' ;
import {Route} from 'react-router-dom' ;

import AdminDashboard from './dashboard/admin/AdminDashboard' ;
import Library from "./library/admin/Library";
import Courses from "./courses/admin/Courses";
import Events from './events/admin/Events'
import Mentors from "./mentors/admin/Mentors";
// import EventsSummary from "./admin/EventsSummary/EventsSummary";
// import BlogSummary from "./admin/BlogSummary/BlogSummary";
import projects from "./projects/admin/Projects";
import TotalUsers from './TotalUsers/TotalUsers';


const RouterComponent = () => {
    return (
        <div>
            <Route exact path='/admin' component={AdminDashboard}/>
            <Route path='/admin/library' component={Library}/>
            <Route path='/admin/courses' component={Courses}/>
            <Route path='/admin/mentors' component={Mentors}/>
            <Route path='/admin/events' component={Events}/>
            {/*<Route path='/admin/blogs' component={BlogSummary}/>*/}
            <Route path='/admin/projects' component={projects}/>
            <Route path='/admin/totalusers' component={TotalUsers}/>
        </div>
    )
} ;

export default RouterComponent ;