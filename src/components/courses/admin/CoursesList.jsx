import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;
import {Row, Col, Card,Button} from 'antd' ;

class CoursesList extends Component {
    render() {
        return (
            <div>
               Courses List
                <Row>
                    <Col span={6}>
                        <Card>
                        <h6>Course on AI</h6>
                        <p>Course ID:51</p>
                        <hr />
                            <Link to='/courses/1'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Course on Machine Learning</h6>
                        <p>Course ID:52</p>
                        <hr />
                            <Link to='/courses/2'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Course on Java Application</h6>
                        <p>Course ID:53</p>
                        <hr />
                            <Link to='/courses/3'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Course on Web Development</h6>
                        <p>Course ID:54</p>
                        <hr />
                            <Link to='/courses/4'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                    <Card>
                    <h6>Course on Networks</h6>
                        <p>Course ID:51</p>
                        <hr />
                        <Link to='/courses/5'>
                        <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                        </Link>
                    </Card>
                </Col>

                </Row>
            </div>
        );
    }
}


export default CoursesList;
