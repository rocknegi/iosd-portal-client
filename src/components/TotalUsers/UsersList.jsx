import React, {Component} from 'react';
import {Link} from 'react-router-dom' ;
import {Row, Col, Card,Button} from 'antd' ;

class UsersList extends Component {
    render() {
        return (
            <div>
                Users List
                <Row>
                    <Col span={6}>
                        <Card>
                        <h6>Users from Mumbai</h6>
                        <p>User ID:61</p>
                        <hr />
                            <Link to='/totalusers/26'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Users from Mumbai</h6>
                        <p>User ID:62</p>
                        <hr />

                            <Link to='/totalusers/27'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Users from Kolkata</h6>
                        <p>User ID:63</p>
                        <hr />

                            <Link to='/totalusers/28'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                        <Card>
                        <h6>Users from Chennai</h6>
                        <p>User ID:64</p>
                        <hr />

                            <Link to='/totalusers/29'>
                            <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                            </Link>
                        </Card>
                    </Col>
                    <Col span={6}>
                    <Card>
                    <h6>Users from Hyderabad</h6>
                        <p>User ID:65</p>
                        <hr />

                        <Link to='/totalusers/30'>
                        <Button className='btn btn-sm btn-outline-primary'>View detail</Button>
                        </Link>
                    </Card>
                </Col>

                </Row>
            </div>
        );
    }
}


export default UsersList;
