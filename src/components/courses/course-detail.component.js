import React, {Component} from 'react' ;
import {Card, Button, Row, Col, Icon, Progress} from 'antd' ;
import {NavLink, Switch, Route, Redirect} from 'react-router-dom' ;
import CourseOverview from "./common/course-overview.component";
import CourseContent from "./common/course-content.component";
import {connect} from 'react-redux';
import {fetchAllCourses} from "../../actions/courseAction";
import isEmpty from 'lodash/isEmpty' ;


class CoursesDetail extends Component {

    componentWillMount() {
        if (isEmpty(this.props.courses)) {
            this.props.fetchAllCourses().then(() => {
                console.log("Courses Fetch Completed");
            })
        }
    }

    renderRating(){
        return (
            <div className="rating">
                <div>
                    <div>
                        Rate this course:
                    </div>
                    <Icon type="star" style={{fontSize: 30, color: '#fce298'}}/>
                    <Icon type="star" style={{fontSize: 30, color: '#fce298'}}/>
                    <Icon type="star" style={{fontSize: 30, color: '#fce298'}}/>
                    <Icon type="star" style={{fontSize: 30, color: '#fce298'}}/>
                    <Icon type="star" style={{fontSize: 30, color: '#eeeeee'}}/>

                </div>
            </div>
        )
    }
    renderTabs(course) {

        return (
            <div>
                <div className='course-tabs'>
                    <NavLink to={`/course/${course._id}/overview`}>
                        <div className='tab'>
                            Overview
                        </div>
                    </NavLink>
                    <NavLink to={`/course/${course._id}/content`}>
                        <div className='tab'>
                            Course Content
                        </div>
                    </NavLink>
                    <NavLink to={`/course/${course._id}/announcements`}>
                        <div className='tab'>
                            Announcements
                        </div>
                    </NavLink>
                    <NavLink to={`/course/${course._id}/announcements`}>
                        <div className='tab'>
                            Doubts
                        </div>
                    </NavLink>
                </div>

                <div>
                    <Switch>
                        <Route path='/course/:id/overview' component={CourseOverview}/>
                        <Route path='/course/:id/content' component={CourseContent}/>
                        <Route path='/course/:id/announcements' component={CourseOverview}/>
                        <Route path='/course/:id/doubts' component={CourseOverview}/>
                        <Route exact path="/course/:id" render={({match}) => (
                            <Redirect to={`/course/${match.params.id}/overview`}/>
                        )}/>
                    </Switch>
                </div>
            </div>
        )

    }


    render() {

        let courseId = this.props.match.params.id;
        let course = this.props.courses[courseId] || {};
        console.log(course);

        return (
            <div>
                <Card style={{marginTop: 0, marginBottom: 0}}>

                    <Row className='classroom-container'>
                        <Col span={12}>
                            <div className="classroom-header-box">
                                <div className="classroom-header">
                                    <Row>
                                        <Col className='classroom-image' span={4}>
                                            <img
                                                alt=''
                                                className='img-responsive'
                                                src={course.image}/>
                                        </Col>
                                        <Col className='classroom-text' span={20}>
                                            <h1>{course.title}</h1>
                                        </Col>
                                    </Row>
                                </div>
                                <p className="classroom-para">
                                    {course.description}
                                </p>
                                {this.renderRating()}
                            </div>
                        </Col>
                        <Col span={12}>
                            <div className="course-progress-box">
                                <div className="course-progress-heading ">
                                    <h3 className="heading align-self-center">Course Progress</h3>
                                </div>

                                <Row className="progress">
                                    <Col span={6}>
                                        <Progress type="dashboard" percent={75}/>
                                    </Col>
                                    <Col span={18} className='course-progress-detail'>
                                        <p className="heading-mob">Course Progress</p>
                                        <p className="lectures-completed">18 of 24 Content completed</p>
                                        <p className="reset-progress pointer" data-ember-action=""
                                           data-ember-action-747="747">Reset
                                            Progress</p>
                                    </Col>
                                </Row>
                                <div className="learning-button">
                                    <Button size='large' className="button-solid"> Resume Learning</Button>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </Card>

                {this.renderTabs(course)}

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        courses: state.courses.map
    }
}


export default connect(mapStateToProps, {
    fetchAllCourses
})(CoursesDetail);