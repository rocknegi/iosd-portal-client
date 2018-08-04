import React, {Component} from 'react';
import {Row, Col, Card, Button, Icon} from 'antd' ;
import {Link} from 'react-router-dom' ;

class LibrarySummary extends Component {

    render() {
        let f = (
            <Row className='card-header'>
                <Col span={8} className='bulb'>
                    <img height="68px" src="https://www.codingninjas.in/assets/images/Courses.png" width="68px"
                         alt={'Random Text'}/>

                </Col>
                <Col span={16} className='header'>
                    Library
                    <p>
                        Update, Delete or Insert New Books in Library
                    </p>
                </Col>
            </Row>
        );

        return (
            <div>
                <Card title={f}>
                    <Row className='text-center'>
                        <Col span={12}>
                            <Link to='/library'>
                                <Button type={'primary'} >
                                    View Books
                                </Button>
                            </Link>
                        </Col>
                        <Col span={12}>
                            <Link to='/admin/library/book/new' className={'pull-right'}>
                                <Button type={'primary'}>
                                    <Icon type="plus"/> Add Book
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}

export default LibrarySummary;
