import React from 'react';
import {connect} from 'react-redux';
import {message, Row, Col} from 'antd';
import {startEditCourse, startSaveVideos} from '../../../actions/courseActions';

import CourseNewForm from './CourseNewForm';

class CourseEdit extends React.Component {

    onSubmit = (updates) => {
        // console.log("Updates on Save :", updates);
        this.props.startEditCourse(this.props.course._id, updates).then(() => {
            this.props.history.push('/admin/courses/');
            message.success(`Course ${updates.title} successfully edited`, 3);
        });
    };

    onSaveVideos = (videosList) => {
        console.log("Updates on Videos Save :", videosList);
        this.props.startSaveVideos( this.props.course._id ,videosList).then(() => {
            message.success(`Videos successfully Updated`, 3);
        })
    };

    render() {
        // console.log("Course Edit");
        // console.log(this.props.course);
        return (
            <div>
                <CourseNewForm course={this.props.course} onSaveVideos={this.onSaveVideos} onSubmit={this.onSubmit}/>
            </div>
        );
    };
};

const mapStateToProps = ({courses}, props) => {
    // console.log(courses, props.match.params.id);
    return {
        course: courses.list.find(course => course._id === props.match.params.id)
    };
};

export default connect(mapStateToProps, {
    startEditCourse ,
    startSaveVideos
})(CourseEdit);

