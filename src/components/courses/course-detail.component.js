import React, {Component} from 'react' ;
import {Card, Button, Row, Col, Icon, Progress , Tabs} from 'antd' ;
const { TabPane } = Tabs;


class CoursesDetail extends Component {

    render() {
        return (
            <div>
                <Card>
                    <Row className='classroom-container'>
                        <Col span={12}>
                            <div className="classroom-header-box">
                                <div className="classroom-header">
                                    <Row>
                                        <Col className='classroom-image' span={4}>
                                            <img
                                                className='img-responsive'
                                                src="https://minio.cb.lk/amoeba/ca0c9d05-931b-4fad-b6c7-9314740c89e9.compprog2png"/>
                                        </Col>
                                        <Col className='classroom-text' span={20}>
                                            <h1>LaunchPad LIVE June'17</h1>
                                        </Col>
                                    </Row>
                                </div>
                                <p className="classroom-para">
                                    This course will comprise more than 100 recorded videos and 6 live webinars, along
                                    with 24x7 doubt clearing support. It will start with the very basics such as logic
                                    building and then go on to cover topics such as functions, pointers, arrays,
                                    recursion, OOPs, DS and Algo. In a matter of weeks, the student will become an
                                    expert in DS-Algo using C++ through this course. Students having little or no prior
                                    knowledge of programming, will find it particularly easy to understand the concepts
                                    after this course.
                                </p>
                                <div className="rating">
                                    <div id="ember746" className="ember-view">
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
                <Card>
                    <Tabs defaultActiveKey="1" size='large'>
                        <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
                        <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
                        <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
                    </Tabs>
                </Card>
            </div>
        )
    }
}

export default CoursesDetail;