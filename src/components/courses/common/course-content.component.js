import React, {Component} from 'react';

import {Collapse, List, Avatar, Spin, Icon} from 'antd' ;
import {Link} from 'react-router-dom'
import {connect} from 'react-redux' ;
import isEmpty from 'lodash/isEmpty' ;

const {Panel} = Collapse;


const renderVideo = (vlist , progress  ,courseId) => {
    return (
        <List>
            {
                vlist.map(video => {
                    return (
                        <List.Item key={video._id}>
                            <List.Item.Meta
                                avatar={<Avatar
                                    src="https://online.codingblocks.com//images/video-green-dark-23c7a6e7f9fbe82c99efb12d3daed5f2.png"/>}
                                title={
                                    <Link to={`/player/course/${courseId}/video/${video._id}`}> {video.title} </Link>
                                }
                            />
                            <span style={{marginRight: 50}}>
                                {  (progress[video._id] == true) ? <Icon type="check"/> : <div/>  }
                            </span>
                        </List.Item>
                    )

                })
            }

        </List>
    )
}

const customPanelStyle = {
    background: '#fff',
    paddingTop: 15,
    paddingBottom: 15,
    // borderRadius: 4,
    marginBottom: 24,
    border: 0,
    fontWeight: 400,
    fontSize: '1.1rem',
    overflow: 'hidden',
};

class CourseContent extends Component {
    render() {
        let courseId = this.props.match.params.id;
        let course = this.props.courses[courseId] || {};
        console.log(course);
        if (isEmpty(course)) {
            return (
                <Spin spinning={isEmpty(course)}>

                </Spin>
            )
        }

        let progress = this.props.progress[courseId];
        let section_categories = {}

        course.videos.forEach(video => {

            if (video.section in section_categories) {
                section_categories[video.section].push(video);
            }
            else {
                section_categories[video.section] = [video];
            }
        })

        console.log(section_categories);
        let key = 1;

        return (
            <div style={{padding: '50px 10px 50px 10px'}}>
                <Collapse bordered={false} style={{background: '#F0F2F5'}}>
                    {

                        Object.keys(section_categories).map((section) => {

                            let vlist = section_categories[section]
                            let section_length = vlist.length ;

                            let section_done = vlist.filter(video => {
                                return (progress[video] == true)
                            }).length ;

                            return (
                                <Panel header={
                                    <div>
                                        {section}
                                        <div className="pull-right" style={{marginRight: 50}}> {section_done}/{section_length}</div>
                                    </div>
                                } key={key++} style={customPanelStyle}>
                                     {renderVideo( vlist , progress , courseId)}
                                </Panel>
                            )
                        })

                    }

                </Collapse>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        courses: state.courses.map ,
        progress : state.progress
    }
}


export default connect(mapStateToProps, {})(CourseContent);
