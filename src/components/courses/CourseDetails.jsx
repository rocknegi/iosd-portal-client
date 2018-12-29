import React, { Component } from 'react';
import { Card, Button, Row, Col, Icon, Progress, Spin } from 'antd';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import CourseOverview from "./common/CourseOverview";
import CourseContent from "./common/CourseContent";
import { connect } from 'react-redux';
import { fetchAllCourses, fetchProgress, createProgress } from "../../actions/courseActions";
import isEmpty from 'lodash/isEmpty';
import ComingSoon from "./common/coming-soon.component";


class CoursesDetail extends Component {

    componentWillMount() {
        if (isEmpty(this.props.courses)) {
            this.props.fetchAllCourses().then(() => {
                console.log("CoursesSummary Fetch Completed");
            });
        }
        console.log("Progress Object : ", this.props.progress);
        let courseId = this.props.match.params.id;
        if (isEmpty(this.props.progress[courseId])) {
            this.props.fetchProgress(courseId).then(() => {
                console.log("Progress Fetch Completed");
            }).catch(err => {
                if (err.message === 'Progress Not Found') {
                    this.props.createProgress(courseId).then(() => {
                        console.log("Progress Created Successfully New for Course");
                    });
                }
            });
        }


    }

    renderRating() {
        return (
            <div className="rating">
                <div>
                    <div>
                        Rate this course:
                    </div>
                    <Icon type="star" style={{ fontSize: 30, color: '#fce298' }} />
                    <Icon type="star" style={{ fontSize: 30, color: '#fce298' }} />
                    <Icon type="star" style={{ fontSize: 30, color: '#fce298' }} />
                    <Icon type="star" style={{ fontSize: 30, color: '#fce298' }} />
                    <Icon type="star" style={{ fontSize: 30, color: '#eeeeee' }} />

                </div>
            </div>
        );
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
                        <Route path='/course/:id/overview' component={CourseOverview} />
                        <Route path='/course/:id/content' component={CourseContent} />
                        <Route path='/course/:id/announcements' component={ComingSoon} />
                        <Route path='/course/:id/doubts' component={ComingSoon} />
                        <Route exact path="/course/:id" render={({ match }) => (
                            <Redirect to={`/course/${match.params.id}/overview`} />
                        )} />
                    </Switch>
                </div>
            </div>
        );

    }


    render() {

        let courseId = this.props.match.params.id;
        let course = this.props.courses[courseId] || {};
        // console.log(course);
        let progress = 0;
        console.log("Progress : ", this.props.progress);

        if (this.props.progress[courseId]) {
            console.log("tirgered if");
            progress = this.props.progress[courseId];
            console.log(this.props.progress[courseId])
        }

        return (
            <div>
                <Card style={{ marginTop: 0, marginBottom: 0 }}>

                    <Row className='classroom-container'>
                        <Col span={12}>
                            <div className="classroom-header-box">
                                <div className="classroom-header">
                                    <Row>
                                        <Col className='classroom-image' span={4}>
                                            <img
                                                alt=''
                                                className='img-responsive'
                                                src={course.image} />
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
                            {progress ? (
                                <div className="course-progress-box">
                                    <div className="course-progress-heading ">
                                        <h3 className="heading align-self-center">Course Progress</h3>
                                    </div>

                                    <Row className="progress">
                                        <Col span={6}>
                                            <Progress type="dashboard"
                                                percent={Object.keys(progress).length / course.total_videos} />
                                        </Col>
                                        <Col span={18} className='course-progress-detail'>
                                            <p className="heading-mob">Course Progress</p>
                                            <p className="lectures-completed">{Object.keys(progress).length} of {course.total_videos} Content
                                                completed</p>
                                            <p className="reset-progress pointer" data-ember-action=""
                                                data-ember-action-747="747">Reset
                                                Progress</p>
                                        </Col>
                                    </Row>
                                    <div className="learning-button">
                                        <Button size='large' className="button-solid"> Resume Learning</Button>
                                    </div>

                                </div>
                            ) : (
                                    <div className="course-progress-box">
                                        <div className="course-progress-heading ">
                                            <h3 className="heading align-self-center">Course Progress</h3>
                                        </div>

                                        <Row className="progress">
                                            <Col span={6}>
                                                <Spin></Spin>
                                            </Col>
                                            {/*<Col span={18} className='course-progress-detail'>*/}
                                            {/*<p className="heading-mob">Course Progress</p>*/}
                                            {/*<p className="lectures-completed">18 of 24 Content completed</p>*/}
                                            {/*<p className="reset-progress pointer" data-ember-action=""*/}
                                            {/*data-ember-action-747="747">Reset*/}
                                            {/*Progress</p>*/}
                                            {/*</Col>*/}
                                        </Row>
                                        <div className="learning-button">
                                            <Button size='large' className="button-solid"> Resume Learning</Button>
                                        </div>

                                    </div>
                                )}

                        </Col>
                    </Row>
                </Card>

                {this.renderTabs(course)}

            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        courses: state.courses.map,
        progress: state.progress
    };
};


export default connect(mapStateToProps, {
    fetchAllCourses,
    fetchProgress,
    createProgress
})(CoursesDetail);