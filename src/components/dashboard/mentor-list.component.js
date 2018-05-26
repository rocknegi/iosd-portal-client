import React, {Component} from 'react' ;
import {Card, Avatar, Row, Col} from 'antd' ;

class MentorList extends Component {
    state = {
        loading: true,
    };


    renderMentors() {
        return (
            <div className='repo-list'>
                <p>
                    Mentors
                </p>
                <div className="repo">
                    <div className='repo-icon'>
                        <Avatar size="large" icon="user"/>
                    </div>
                    <div className='repo-desc'>
                        <strong>Dhruv Ramdev</strong>
                        <p>Web Developer</p>
                    </div>
                </div>
                <div className="repo">
                    <div className='repo-icon'>
                        <Avatar size="large" icon="user"/>
                    </div>
                    <div className='repo-desc'>
                        <strong>Krishna Rai</strong>
                        <p>Android App Developer</p>
                    </div>
                </div>
                <div className="repo">
                    <div className='repo-icon'>
                        <Avatar size="large" icon="user"/>
                    </div>
                    <div className='repo-desc'>
                        <strong>Nikhil Pandey</strong>
                        <p>Data Scientist</p>
                    </div>
                </div>

            </div>
        )
    }

    render() {

        let f = (

            <Row className='summary'>
                <Col span={8} className='bulb'>
                    <img height="68px" src="https://cdn0.iconfinder.com/data/icons/business-situations-flat-1/64/leadership-boss-mentor-help-team-512.png" width="68px"/>
                </Col>
                <Col span={16} className='header'>
                    Mentors
                    <p>
                        Any Doubts ?
                        Ping Mentors
                    </p>
                </Col>
            </Row>


        )

        return (
            <div>
                <Card loading={this.state.loading} title={f}>
                    {this.renderMentors()}
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

export default MentorList;