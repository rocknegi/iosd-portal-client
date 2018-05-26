import React, {Component} from 'react' ;
import {Card, Avatar, Row, Col} from 'antd' ;

class ContributeCard extends Component {
    state = {
        loading: true,
    };


    renderRepos() {
        return (
            <div className='repo-list'>
                <p>
                    PROJECT TO WORK ON
                </p>
                <div className="repo">
                    <div className='repo-icon'>
                        <Avatar size="large" icon="user"/>
                    </div>
                    <div className='repo-desc'>
                        <strong>Benefit</strong>
                        <p>A Health Management App help users</p>
                    </div>
                </div>
                <div className="repo">
                    <div className='repo-icon'>
                        <Avatar size="large" icon="user"/>
                    </div>
                    <div className='repo-desc'>
                        <strong>Benefit</strong>
                        <p>A Health Management App help users</p>
                    </div>
                </div>
                <div className="repo">
                    <div className='repo-icon'>
                        <Avatar size="large" icon="user"/>
                    </div>
                    <div className='repo-desc'>
                        <strong>Benefit</strong>
                        <p>A Health Management App help users</p>
                    </div>
                </div>
                <div className="repo">
                    <div className='repo-icon'>
                        <Avatar size="large" icon="user"/>
                    </div>
                    <div className='repo-desc'>
                        <strong>Benefit</strong>
                        <p>A Health Management App help users</p>
                    </div>
                </div>

            </div>
        )
    }

    render() {

        let f = (

            <Row className='summary'>
                <Col span={8} className='bulb'>
                    <img height="68px" src="http://danajfrank.com/assets/img/sidewalks/project_roles_icon.png" width="68px"/>
                </Col>
                <Col span={16} className='header'>
                    Projects
                    <p>
                        Learn by doing.
                        Works on open source projects of IOSD
                    </p>
                </Col>
            </Row>


        )

        return (
            <div>
                <Card loading={this.state.loading} title={f}>
                    {this.renderRepos()}
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

export default ContributeCard;