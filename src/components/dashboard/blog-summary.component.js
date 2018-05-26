import React, {Component} from 'react' ;
import {Card, Avatar, Row, Col} from 'antd' ;


class BlogSummary extends Component {
    state = {
        loading: true,
    }


    renderPosts() {
        return (
            <div className='blog-list'>
                <p>
                    LATEST POSTS
                </p>
                <div className="post">
                    <div className='post-avatar'>
                        <Avatar size="large" icon="user"/>
                    </div>
                    <div className='post-desc'>
                        <strong>Programming Languages 2018</strong>
                        <p>kannumittal</p>
                    </div>
                </div>
                <div className="post">
                    <div className='post-avatar'>
                        <Avatar size="large" icon="user"/>
                    </div>
                    <div className='post-desc'>
                        <strong>Programming Languages 2018</strong>
                        <p>kannumittal</p>
                    </div>
                </div>
                <div className="post">
                    <div className='post-avatar'>
                        <Avatar size="large" icon="user"/>
                    </div>
                    <div className='post-desc'>
                        <strong>Programming Languages 2018</strong>
                        <p>kannumittal</p>
                    </div>
                </div>
                <div className="post">
                    <div className='post-avatar'>
                        <Avatar size="large" icon="user"/>
                    </div>
                    <div className='post-desc'>
                        <strong>Programming Languages 2018</strong>
                        <p>kannumittal</p>
                    </div>
                </div>
            </div>
        )
    }

    render() {

        let f = (

            <Row className='summary'>
                <Col span={8} className='bulb'>
                    <img height="68px" src="https://www.codingninjas.in/assets/images/glasses.png"/>

                </Col>
                <Col span={16} className='header'>
                    Blog
                    <p>
                        Want to know some more? Go Through our awesome blogs. <br/>
                        <a>Know More</a>
                    </p>
                </Col>
            </Row>


        )

        return (
            <div>
                <Card loading={this.state.loading} title={f}>
                    {this.renderPosts()}
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

export default BlogSummary;