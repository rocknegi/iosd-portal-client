import React, {Component} from 'react' ;
import {Card, Row, Col} from 'antd' ;


class EventSummary extends Component {
    state = {
        loading: true,
    };


    renderEvents() {
        return (
            <div className='courses-list'>
                <p>
                    LATEST EVENTS
                </p>
                <div>
                    <p className="date">Apr 8, 2018, 12:02:00 PM</p>
                    <p className="name">
                        <a>Summer of code @ Coding Ninjas</a>
                    </p>
                </div>
            </div>
        );
    }

    render() {

        let f = (

            <Row className='summary'>
                <Col span={8} className='bulb'>
                    <img height="68px" src="https://www.codingninjas.in/assets/images/events.png" alt={'Random Text'}
                         width="68px"/>

                </Col>
                <Col span={16} className='header'>
                    Events
                    <p>
                        Checkout the latest happenings and events
                    </p>
                </Col>
            </Row>


        );

        return (
            <div>
                <Card loading={this.state.loading} title={f}>
                    {this.renderEvents()}
                </Card>
            </div>
        );
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({loading: !this.state.loading});
        }, 1000);
    }
}

export default EventSummary;