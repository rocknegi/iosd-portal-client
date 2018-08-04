import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Row,Col  , Divider, Card} from 'antd'
import ProfileCard from "../dashboard/ProfileCard";

class ProfileComponent extends Component {
    render() {
        return (
            <div className='container'>
                <Row gutter={16}>
                    <Col span={8}>
                        <ProfileCard/>
                    </Col>
                    <Col span={16}>
                        <Card
                            className='id-card'
                            cover={<img src={this.props.profile.membershipCard}
                                        alt=''/>}
                        />
                        {/*TODO : Implement this */}
                        <Card>
                            <h2>Projects</h2>
                            <Divider/>
                            <div style={{textAlign : 'center' , padding : 20, fontWeight : 300 , fontSize : '1.6rem' }}>
                                No Projects Uploaded Yet
                            </div>
                        </Card>

                        <Card>
                            <h2>Experiences</h2>
                            <Divider/>

                            <div style={{textAlign : 'center' , padding : 20, fontWeight : 300 , fontSize : '1.6rem' }}>
                                No Experiences Uploaded Yet
                            </div>

                        </Card>

                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user : state.auth.user ,
        profile : state.profile
    };
}

export default connect(
    mapStateToProps,{

    }
)(ProfileComponent);
