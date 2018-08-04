import React , {Component} from 'react' ;
import { Row, Col } from 'antd';

import CoursesSummary from "./CoursesSummary";
import EventSummary from "./EventSummary";
import ProfileCard from "./ProfileCard";
import BlogSummary from "./BlogSummary";
import ContributeCard from "./ContributeCard";
import MentorList from "./MentorList";

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