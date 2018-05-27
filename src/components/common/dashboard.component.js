import React , {Component} from 'react' ;
import { Row, Col } from 'antd';

import CoursesSummary from "../dashboard/courses-summary.component";
import EventSummary from "../dashboard/events-summary.component";
import ProfileCard from "../dashboard/profile-card.component";
import BlogSummary from "../dashboard/blog-summary.component";
import ContributeCard from "../dashboard/contribute-card.component";
import MentorList from "../dashboard/mentor-list.component";

class DashboardComponent extends Component {
    render(){
        return (
            <div className='container dashboard'>
                <Row gutter={16}>
                    <Col span={8}>
                        <ContributeCard/>
                        <BlogSummary/>
                    </Col>
                    <Col span={8}>
                        <CoursesSummary/>
                        <MentorList/>
                    </Col>
                    <Col span={8}>
                        <ProfileCard/>
                        <EventSummary/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default DashboardComponent;