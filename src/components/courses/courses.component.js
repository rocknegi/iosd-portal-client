import React, {Component} from 'react' ;
import {Row, Col, Spin, Icon} from 'antd' ;
import CourseCardComponent from "./common/course-card.component";
import {connect} from 'react-redux';
import {fetchAllCourses} from "../../actions/courseAction";
import isEmpty from 'lodash/isEmpty' ;

class Courses extends Component {

    componentWillMount() {
        console.log("Courses :", this.props.courses);
        console.log("Empty", isEmpty(this.props.courses));
        if (isEmpty(this.props.courses)) {
            this.props.fetchAllCourses().then(() => {
                console.log("Courses Fetch Completed");
                console.log("Courses Fetched : ", this.props.courses);
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
                                <CourseCardComponent course={course}/>
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
        courses: state.courses.list
    }
}

export default connect(mapStateToProps, {
    fetchAllCourses
})(Courses);