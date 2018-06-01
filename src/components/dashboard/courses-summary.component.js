import React, {Component} from 'react' ;
import {Card, Row, Col} from 'antd' ;


class CoursesSummary extends Component {
    state = {
        loading: true,
    }


    renderCourses() {
        return (
            <div className='courses-list'>
                <p>
                    COURSES WE PROVIDE
                </p>
                <div className="problem">
                    <a>Eminence</a>
                    <p>Competitive Programming Course</p>
                </div>
                <div className="problem">
                    <a>Eminence</a>
                    <p>Competitive Programming Course</p>
                </div>
                <div className="problem">
                    <a>Eminence</a>
                    <p>Competitive Programming Course</p>
                </div>
                <div className="problem">
                    <a>Eminence</a>
                    <p>Competitive Programming Course</p>
                </div>
                <div className="problem">
                    <a>Eminence</a>
                    <p>Competitive Programming Course</p>
                </div>
            </div>
        )
    }

    render() {

        let f = (

            <Row className='summary'>
                <Col span={8} className='bulb'>
                    <img height="68px" src="https://www.codingninjas.in/assets/images/Courses.png" width="68px" alt={'Random Text'}/>

                </Col>
                <Col span={16} className='header'>
                    Courses
                    <p>
                        Learning was never this easy.
                        Checkout the courses we provide
                    </p>
                </Col>
            </Row>


        )

        return (
            <div>
                <Card loading={this.state.loading} title={f}>
                    {this.renderCourses()}
                </Card>
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: !this.state.loading});
        }, 1000)
    }
}

export default CoursesSummary;