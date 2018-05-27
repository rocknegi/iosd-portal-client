import React, {Component} from 'react' ;
import {Card, Button, Row, Col, Avatar} from 'antd' ;


class Courses extends Component {

    render() {
        return (
            <div className='courses'>
                <h2>Courses</h2>
                <Row gutter={8}>
                    <Col span={8}>
                        <Card>
                            <div className="beginner-level"></div>
                            <div className="beginner-text">Beginner</div>


                            <div className="card-image o-image-card">
                                <img
                                    className='img-responsive'
                                    src="https://minio.cb.lk/amoeba/48704a87-4a16-4930-bc30-b8aae630fb90.SampleCoursepng"/>
                            </div>

                            <h1 className="card-heading">
                                Tech Talks Sample Course
                            </h1>
                            <h4 className="card-text">
                                Sample Course For Demonstration
                            </h4>


                            <div className="card-mentor">
                                <div className="card-mentor-image">
                                    <img src="https://avatars3.githubusercontent.com/u/20574839?s=460&v=4"
                                         className="card-mentors img-responsive"/>
                                </div>
                                <div className="card-mentor-text">
                                    <span>Instructors</span>
                                    <div className="card-mentor-name">
                                        Krishna Rai
                                    </div>
                                </div>
                            </div>
                            <div className="card-mentor-divider"></div>
                            <Row style={{margin : '20px'}}>
                                <Col span={12}>
                                    <div className="card-price-details">
                                        <div className="card-batch-details">
                                            Starting from <br/> <span className="price">Mar 20th 2018</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="price-button">
                                        <Button size='large' className="button-solid">View</Button>
                                    </div>
                                </Col>
                            </Row>

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <div className="beginner-level"></div>
                            <div className="beginner-text">Beginner</div>


                            <div className="card-image o-image-card">
                                <img
                                    className='img-responsive'
                                    src="https://minio.cb.lk/amoeba/48704a87-4a16-4930-bc30-b8aae630fb90.SampleCoursepng"/>
                            </div>

                            <h1 className="card-heading">
                                Tech Talks Sample Course
                            </h1>
                            <h4 className="card-text">
                                Sample Course For Demonstration
                            </h4>


                            <div className="card-mentor">
                                <div className="card-mentor-image">
                                    <img src="https://avatars3.githubusercontent.com/u/20574839?s=460&v=4"
                                         className="card-mentors img-responsive"/>
                                </div>
                                <div className="card-mentor-text">
                                    <span>Instructors</span>
                                    <div className="card-mentor-name">
                                        Krishna Rai
                                    </div>
                                </div>
                            </div>
                            <div className="card-mentor-divider"></div>
                            <Row style={{margin : '20px'}}>
                                <Col span={12}>
                                    <div className="card-price-details">
                                        <div className="card-batch-details">
                                            Starting from <br/> <span className="price">Mar 20th 2018</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="button-solid">
                                        <Button size='large' className="price-button">View</Button>
                                    </div>
                                </Col>
                            </Row>

                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card>
                            <div className="beginner-level"></div>
                            <div className="beginner-text">Beginner</div>


                            <div className="card-image o-image-card">
                                <img
                                    className='img-responsive'
                                    src="https://minio.cb.lk/amoeba/48704a87-4a16-4930-bc30-b8aae630fb90.SampleCoursepng"/>
                            </div>

                            <h1 className="card-heading">
                                Tech Talks Sample Course
                            </h1>
                            <h4 className="card-text">
                                Sample Course For Demonstration
                            </h4>


                            <div className="card-mentor">
                                <div className="card-mentor-image">
                                    <img src="https://avatars3.githubusercontent.com/u/20574839?s=460&v=4"
                                         className="card-mentors img-responsive"/>
                                </div>
                                <div className="card-mentor-text">
                                    <span>Instructors</span>
                                    <div className="card-mentor-name">
                                        Krishna Rai
                                    </div>
                                </div>
                            </div>
                            <div className="card-mentor-divider"></div>
                            <Row style={{margin : '20px'}}>
                                <Col span={12}>
                                    <div className="card-price-details">
                                        <div className="card-batch-details">
                                            Starting from <br/> <span className="price">Mar 20th 2018</span>
                                        </div>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="button-solid">
                                        <Button size='large' className="price-button">View</Button>
                                    </div>
                                </Col>
                            </Row>

                        </Card>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default Courses;