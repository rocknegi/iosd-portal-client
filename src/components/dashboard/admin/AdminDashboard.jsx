import React, {Component} from 'react' ;
import {Row, Col, Card} from 'antd';
import LibrarySummary from "./LibrarySummary";
import BlogSummary from "./BlogSummary";
import CoursesSummary from "./CoursesSummary";
import EventsSummary from "../../events/admin/EventsSummary";
import MentorSummary from "../../mentors/admin/MentorSummary";
import ProjectSummary from "../../projects/admin/ProjectSummary";
import TotalUserSummary from "../../TotalUsers/TotalUserSummary";

class AdminDashboard extends Component {
    render() {
        return (
            <div className='container dashboard'>
                <Row gutter={16}>
                    <Col span={8}>
                        <LibrarySummary/>
                    </Col>
                    <Col span={8}>
                        <BlogSummary/>
                    </Col>
                    <Col span={8}>
                        <CoursesSummary/>
                    </Col>
                    <Col span={8}>
                        <EventsSummary/>
                    </Col>
                    <Col span={8}>
                        <MentorSummary/>
                    </Col>
                    <Col span={8}>
                        <ProjectSummary/>
                    </Col>
                    <Col span={8}>
                        <TotalUserSummary/>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AdminDashboard;