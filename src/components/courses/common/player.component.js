import videoData from '../videos.data.js';
import React, {Component} from 'react';
import {Layout, Menu, Divider, Collapse, List, Avatar, Icon, Button, Badge, Breadcrumb} from 'antd' ;

const {Header, Footer, Sider, Content} = Layout;
const SubMenu = Menu.SubMenu;


const {Panel} = Collapse;

const text = (
    <List>
        <List.Item>
            <List.Item.Meta
                avatar={<Avatar
                    src="https://online.codingblocks.com//images/video-green-dark-23c7a6e7f9fbe82c99efb12d3daed5f2.png"/>}
                title={<a href="https://ant.design">Some Video</a>}
            />
            <div style={{marginRight: 50}}><Icon type="check"/></div>
        </List.Item>
        <List.Item>
            <List.Item.Meta
                avatar={<Avatar
                    src="https://online.codingblocks.com//images/video-green-dark-23c7a6e7f9fbe82c99efb12d3daed5f2.png"/>}
                title={<a href="https://ant.design">Some Video</a>}
            />
            <div style={{marginRight: 50}}><Icon type="check"/></div>
        </List.Item>
        <List.Item>
            <List.Item.Meta
                avatar={<Avatar
                    src="https://online.codingblocks.com//images/video-green-dark-23c7a6e7f9fbe82c99efb12d3daed5f2.png"/>}
                title={<a href="https://ant.design">Some Video</a>}
            />
            <div style={{marginRight: 50}}><Icon type="check"/></div>
        </List.Item>
    </List>

);

const customPanelStyle = {
    background: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    overflow: 'hidden',
};

// TODO: CHANGE VIDEO IN IFRAME ON SELECTING DIFFERENT VIDEO
// TODO: CHANGE THE CHECK ICON IF THE VIDEO IS WATCHED

class PlayerComponent extends Component {
    constructor() {
        super();
        this.state = {
            collapsed: false,
            currently_playing: '',
            videos: [],
            selectedVideo: 1,
            playerTitle: ''
        }
    }

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    componentWillMount() {
        // FAKE DATA FETCHING FROM THE SERVER-------
        let videos = videoData.data;

        // SETTING THE INITIAL STATE
        this.setState({
            videos: videos,
            currently_playing: 'https://www.youtube.com/embed/t27W1yUrYmM',
            playerTitle: 'SOME TITLE'
        });
    }

    // FIRED WHEN A VIDEO FROM MENU IS SELECTED
    /**
     *
     * @param {item} MenuItem returns the react class of the selected video
     */
    onSelectVideo({item, key, selectedKey}) {

        this.setState({
            selectedVideo: key,
            playerTitle: item.props.videoTitle
        })
    }


    // Load videos --------
    getVideosList() {
        return (
            <Collapse bordered={false} style={{background: '#F0F2F5'}}>
                {
                    this.state.videos.map((section, index) => (
                            <Panel key={`sub${index + 1}`} header={
                                <div>
                                    <span>{section.section_title}</span>
                                    <div className="pull-right" style={{marginRight: 20}}>
                                    <span>
                                        <span style={{color:'#66ff66'}}>{section.videos.filter((video) => video.watched).length}</span>
                                        /{section.videos.length}
                                    </span>
                                    </div>
                                </div>
                            } style={customPanelStyle}>
                                <p>
                                    {
                                        section.videos.map((video, i) => (
                                                <List.Item key={video._id} url={video.url} videoTitle={video.title}>
                                                    <List.Item.Meta
                                                        avatar={<Avatar
                                                            src="https://online.codingblocks.com//images/video-green-dark-23c7a6e7f9fbe82c99efb12d3daed5f2.png"/>}
                                                        title={video.title}
                                                    />
                                                    <div style={{marginRight: 10}}>
                                                        {video.watched ? <Icon type="check" style={{color: '#66ff66'}}/> : ''}
                                                    </div>
                                                </List.Item>
                                            )
                                        )

                                    }
                                </p>
                            </Panel>
                        )
                    )
                }
            </Collapse>
        )
    }

    render() {
        return (
            <Layout className='custom-player-layout'>
                <Sider
                    trigger={null}
                    collapsible
                    collapsed={this.state.collapsed}
                    collapsedWidth={0}
                    width={'20rem'}
                    style={{overflow: 'auto', height: '100vh', position: 'fixed'}}
                >
                    <div className="logo">
                        <img className='img-responsive' src="http://iosd.tech/img/IOSD-logo.png" alt=""/>
                    </div>
                    <Divider/>
                    <div>
                        {this.getVideosList()}
                    </div>
                    {/* ---------VIDEOS LIST GOES HERE ---------- */}
                    {/*<Menu*/}
                    {/*theme="light"*/}
                    {/*mode="inline"*/}
                    {/*defaultSelectedKeys={['1']}*/}
                    {/*onSelect={this.onSelectVideo.bind(this)}*/}
                    {/*>*/}
                    {/*{this.getVideosList()}*/}
                    {/*</Menu>*/}
                    {/* ----------------------------------------- */}
                </Sider>
                <Layout style={{marginLeft: (this.state.collapsed ? 0 : '20rem')}}>
                    <Header>
                        <Icon
                            className="trigger"
                            style={{fontSize: 20}}
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <span style={{margin: '0 20px'}}>
                {this.state.playerTitle}
                </span>
                        <div className='go-dashboard'>
                            <Button className='button-solid' type="primary"> Go to Dashboard </Button>
                        </div>

                    </Header>
                    <Content>
                        <div className="video-wrapper">
                            <iframe className='responsive-embed' src={this.state.currently_playing}
                                    frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
                            </iframe>
                        </div>

                    </Content>
                </Layout>
            </Layout>
        )

    }
}

export default PlayerComponent;
