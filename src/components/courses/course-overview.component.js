import React, {Component} from 'react';
import {Row, Col, Card} from 'antd' ;

class CourseOverview extends Component {
    render() {
        return (
            <Card style={{marginTop: 0, marginBottom: 0 , padding : '50px 10px 50px 10px'}}>
            <Row className='course-overview'>
                <Col span={12}>
                    <div className='header'>
                        About This Course
                    </div>
                    <div>
                        <Row>
                            <Col span={12}>
                                <Row gutter={8}>
                                    <Col span={6}><img className='img-responsive' src="https://online.codingblocks.com/images/content-2-3ca0cdc013c2195d6fa52a3bcf51ae3c.png" alt=""/></Col>
                                    <Col className='vertical-center' span={18}>
                                        100+ lecture Video Content
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row gutter={8}>
                                    <Col span={6}><img className='img-responsive' src="https://online.codingblocks.com/images/content-2-3ca0cdc013c2195d6fa52a3bcf51ae3c.png" alt=""/></Col>
                                    <Col className='vertical-center' span={18}>
                                        100+ lecture Video Content
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row gutter={8}>
                                    <Col span={6}><img className='img-responsive' src="https://online.codingblocks.com/images/content-2-3ca0cdc013c2195d6fa52a3bcf51ae3c.png" alt=""/></Col>
                                    <Col className='vertical-center' span={18}>
                                        100+ lecture Video Content
                                    </Col>
                                </Row>
                            </Col>
                            <Col span={12}>
                                <Row gutter={8}>
                                    <Col span={6}><img className='img-responsive' src="https://online.codingblocks.com/images/content-2-3ca0cdc013c2195d6fa52a3bcf51ae3c.png" alt=""/></Col>
                                    <Col className='vertical-center' span={18}>
                                        100+ lecture Video Content
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                    </div>
                </Col>
                <Col span={12}>
                    <div className='header'>
                        About Instructors
                    </div>
                    <div>
                        <Row gutter={16}>
                            <Col span={6}>
                                <div>
                                    <img
                                        style={{borderRadius : '50%'}}
                                        className='img-responsive'
                                        src="https://minio.cb.lk/amoeba/13dd336c-1cd8-4076-9cf5-ba94fbb44b1b" alt=""/>
                                </div>
                            </Col>
                            <Col span={18}>
                                <div className="description" style={{paddingTop:10}}>
                                    <div className="heading-d">
                                        <div className="main-h">
                                            Prateek Narang
                                        </div>
                                        <div className="sub-h">
                                            Mentor, Coding Blocks
                                        </div>
                                    </div>
                                    <div className="classroom-para">
                                        Prateek is an ace-programmer, multi-hackathon winner and CS graduate from DTU,
                                        and is very passionate about teaching.
                                    </div>
                                </div>
                            </Col>

                        </Row>
                    </div>
                </Col>
            </Row>
            </Card>
        );
    }
}


export default CourseOverview;
