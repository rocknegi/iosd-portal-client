import React, {Component} from 'react' ;
import {Row, Col, Spin, Icon} from 'antd' ;
import CourseCard from "./common/CourseCard";
import {connect} from 'react-redux';
import {fetchAllCourses} from "../../actions/courseActions";
import isEmpty from 'lodash/isEmpty' ;

class Courses extends Component {

    componentWillMount() {
        console.log("CoursesSummary :", this.props.courses);
        console.log("Empty", isEmpty(this.props.courses));
        if (isEmpty(this.props.courses)) {
            this.props.fetchAllCourses().then(() => {
                console.log("CoursesSummary Fetch Completed");
                console.log("CoursesSummary Fetched : ", this.props.courses);
            })
        }
    }

    renderLogic() {

        return (
            <Row gutter={8}>
                {
                    this.props.courses.map(course => {
                        return (
                            <Col key={course._id} span={8}>
                                <CourseCard course={course} isAdmin={this.props.isAdmin}/>
                            </Col>
                        )
                    })
                }

            </Row>
        )
    }

    render() {


        return (
            <div className='courses'>
                <h2>Courses</h2>
                <Spin spinning={isEmpty(this.props.courses)} delay={500}>
                    {this.renderLogic()}
                </Spin>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        courses: state.courses.list ,
        isAdmin : state.auth.isAdmin
    }
}

export default connect(mapStateToProps, {
    fetchAllCourses
})(Courses);