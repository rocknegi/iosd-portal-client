import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom' ;
import {fetchAllCourses} from '../../../actions/courseActions';
// import CoursesList from "./CoursesList";
import CourseAdd from "./CourseAdd";
import CourseEdit from './CourseEdit';

class Courses extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    };

    componentWillMount() {
        if (this.props.courses.list.length === 0) {
            console.log("Fetching Courses");
            this.props.fetchAllCourses()
                .then(() => this.setState({loading: false}));
        } else {
            this.setState({loading: false});
        }
    };

    render() {
        if (this.state.loading) {
            return <h1>Loading</h1>;
        }

        return (
            <div className='container'>
                <Switch>
                    <Route path='/admin/courses/new' component={CourseAdd}/>
                    <Route path='/admin/courses/:id' component={CourseEdit}/>
                    <Route path='/admin/courses' component={() => <Redirect to='/courses'/>}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({courses}) => ({
    courses
});

export default connect(mapStateToProps , {
    fetchAllCourses
})(Courses);
