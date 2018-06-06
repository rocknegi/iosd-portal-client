import React, {Component} from 'react';
import { Layout, Menu, Icon, Button } from 'antd' ;
const { Header, Footer, Sider, Content } = Layout;


class PlayerComponent extends Component {
    state = {
        collapsed: false,
        currently_playing: '',
        videos: [],

    };
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    
    componentWillMount() {
        // FAKE DATA FETCHING FROM THE SERVER-------
        let videos = [
            {name: "video1"},
            {name: "video2"},
            {name: "video3"},
            {name: "video4"},
            {name: "video5"},
            {name: "video6"},
        ];

        this.setState({
            videos: videos,
            currently_playing: 'https://www.youtube.com/embed/t27W1yUrYmM'
        });
    }
    

    // Load videos --------
    getVideosList(){
        return this.state.videos.map((video, index) => (
            <Menu.Item key={index+1}>
                <Icon type="video-camera" />
                <span>{video.name}</span>
            </Menu.Item>
        ));
    }

    render() {
        return (
            <Layout className='custom'>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                >
                    <div className="logo" />
                    {/* ---------VIDEOS LIST GOES HERE ---------- */}
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        {this.getVideosList()}
                    </Menu>
                    {/* ----------------------------------------- */}
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <h2 style={{display: 'inline'}}> ----  Title of the video ---- </h2>
                        <Button type="primary"> Go to Dashboard </Button> 

                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                        <iframe width="1343" height="810" src={this.state.currently_playing}
                                frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                        </iframe>
                    </Content>
                </Layout>
            </Layout>
        )

    }
}

export default PlayerComponent;
