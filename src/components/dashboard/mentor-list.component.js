import React, {Component} from 'react' ;
import {Card, Popover, Icon, Avatar, Row, Col} from 'antd' ;
import {connect} from "react-redux";
import {fetchMentors} from "../../actions/mentorAction";
import isEmpty from 'lodash/isEmpty' ;

class MentorItem extends Component {
    state = {
        visible: false
    };
    hide = () => {
        this.setState({
            visible: false,
        });
    };
    handleVisibleChange = (visible) => {
        this.setState({visible});
    };

    render() {
        let mentor = this.props.mentor;
        return (
            <Popover
                content={
                    <div style={{padding: 10}}>
                        <Icon style={{fontSize: 18, color: '#08c'}} type="facebook"/> {mentor.facebook} <br/>
                        <Icon style={{fontSize: 18, color: '#08c'}} type="linkedin"/> {mentor.linkedIn} <br/>
                        <Icon style={{fontSize: 18, color: '#08c'}} type="contacts"/> {mentor.mobile} <br/>
                        <br/>
                        <a onClick={this.hide}>Close</a>
                    </div>
                }
                // title="Title"
                trigger="click"
                visible={this.state.visible}
                onVisibleChange={this.handleVisibleChange}
            >

                <div className="repo" style={{cursor: "pointer"}}>
                    <div className='repo-icon'>
                        <Avatar size="large" icon="user" src={mentor.image}/>
                    </div>
                    <div className='repo-desc'>
                        <strong>{mentor.name}</strong>
                        <p>{mentor.specialization}r</p>
                    </div>
                </div>
            </Popover>
        );
    }

}

class MentorList extends Component {
    state = {
        loading: true
    };

    componentWillMount() {
        if (isEmpty(this.props.mentors)) {
            console.log("Fetching Mentors");
            this.props.fetchMentors().then(() => {
                console.log("Fetch Completed for Mentors");
                this.setState({loading: false});
            });
        } else {
            this.setState({loading: false});
        }
    }

    renderMentors() {
        return (
            <div className='repo-list'>
                <p>
                    Mentors
                </p>
                {
                    this.props.mentors.map(mentor => {
                        return (
                            <MentorItem key={mentor._id} mentor={mentor}/>
                        );
                    })
                }
            </div>
        );
    }

    render() {

        let f = (

            <Row className='summary'>
                <Col span={8} className='bulb'>
                    <img alt={'Random Text'} height="68px"
                         src="https://cdn0.iconfinder.com/data/icons/business-situations-flat-1/64/leadership-boss-mentor-help-team-512.png"
                         width="68px"/>
                </Col>
                <Col span={16} className='header'>
                    Mentors
                    <p>
                        Any Doubts ?
                        Ping Mentors
                    </p>
                </Col>
            </Row>


        );

        return (
            <div>
                <Card loading={this.state.loading} title={f}>
                    {this.renderMentors()}
                </Card>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({
    mentors: state.mentors
});

export default connect(mapStateToProps, {
    fetchMentors
})(MentorList);
