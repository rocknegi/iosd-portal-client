import React, {Component} from 'react';
import {Route , Switch , Redirect} from 'react-router-dom' ;
import UsersList from "./UsersList";
import UsersNewForm from "./UsersNewForm";
import UsersDetails from "./UsersDetails";


class TotalUsers extends Component {
    render() {
        return (
            <div className='container'>
                <Switch>
                    <Route path='/admin/totalusers/list' component={UsersList}/>
                    <Route path='/admin/totalusers/new' component={UsersNewForm}/>
                    <Route path='/admin/totalusers/:id' component={UsersDetails}/>
                    <Route path='/admin/totalusers' component={()=><Redirect to='/totalusers/list'/>}/>
                </Switch>

            </div>
        );
    }
}


export default TotalUsers;
