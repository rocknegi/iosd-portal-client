import React, {Component} from 'react';
import {Row, Col, Card, Button, Icon} from 'antd' ;
import {Link} from 'react-router-dom' ;

class CoursesSummary extends Component {

    render() {

        let f = (
            <Row className='card-header2'>
                <Col span={8} className='bulb'>
                    <img height="68px" src="https://www.codingninjas.in/assets/images/Courses.png" width="68px"
                         alt={'Random Text'}/>

                </Col>
                <Col span={16} className='header'>
                    Courses
                    <p>
                        Add, Delete, Update Courses
                    </p>
                </Col>
            </Row>
        )


        return (
            <div>
                <Card title={f}>
                    <Row className='text-center'>
                        <Col span={12}>
                            <Link to='/courses'>
                                <Button type={'primary'}>
                                    View Courses
                                </Button>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to='/admin/courses/new' className={'pull-right'}>
                                <Button type={'primary'}>
                                    <Icon type="plus"/> Add Courses
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default CoursesSummary;
