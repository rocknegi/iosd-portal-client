import React, {Component} from 'react';
import {Row, Col, Card, Button, Icon} from 'antd' ;
import {Link} from 'react-router-dom' ;

class MentorSummary extends Component {

    render() {

        let f = (
            <Row className='card-header'>
                <Col span={8} className='bulb'>
                    <img height="68px" src="https://cdn0.iconfinder.com/data/icons/business-situations-flat-1/64/leadership-boss-mentor-help-team-512.png" width="68px"
                         alt={'Random Text'}/>

                </Col>
                <Col span={16} className='header'>
                    Mentors
                    <p>
                        Add, Delete or update New Mentors
                    </p>
                </Col>
            </Row>
        )


        return (
            <div>
                <Card title={f}>
                    <Row className='text-center'>
                        <Col span={12}>
                            <Link to='/admin/mentors/list'>
                                <Button type='primary'>
                                    View Mentors
                                </Button>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to='/admin/mentors/new'>
                                <Button  type='primary'>
                                    <Icon type="plus"/> Add Mentors
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default MentorSummary;
