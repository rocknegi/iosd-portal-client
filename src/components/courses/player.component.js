import videoData from './videos.data.js';
import React, {Component} from 'react';
import { Layout, Menu, Icon, Button, Badge, Breadcrumb } from 'antd' ;
const { Header, Footer, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

// TODO: CHANGE VIDEO IN IFRAME ON SELECTING DIFFERENT VIDEO
// TODO: CHANGE THE CHECK ICON IF THE VIDEO IS WATCHED

class PlayerComponent extends Component {
    constructor(){
        super();
        this.state={
            collapsed: false,
            currently_playing: '',
            videos: [],
            selectedVideo:1,
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
    onSelectVideo({item, key, selectedKey}){
        
        this.setState({
            selectedVideo:key,
            playerTitle: item.props.videoTitle
        })
    }  
    

    // Load videos --------
    getVideosList(){
        
        return this.state.videos.map((section, index) => (
            <SubMenu 
                key={`sub${index+1}`} 
                title={
                    <span>
                        <Icon type="folder" />
                        <span>{section.section_title}</span>
                        <span style={{marginLeft:'20px',color: '#66ff66'}}>
                            {section.videos.filter((video) => video.watched).length}
                            <span style={{color:"#FFFFFF"}}>/{section.videos.length}</span>
                        </span>
                    </span>}
            >
                {section.videos.map((video,i) => (
                    <Menu.Item key={video._id} url={video.url} videoTitle={video.title}>
                        {this.state.selectedVideo == video._id ? <Icon type="play-circle" />: <Icon type="video-camera"/>}
                        <span>{video.title}</span>
                        {video.watched ? <Icon type="check" style={{color:'#66ff66'}} />:''}
                    </Menu.Item>
                ))}
            </SubMenu>
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
                    <Menu 
                        theme="dark" 
                        mode="inline" 
                        defaultSelectedKeys={['1']}
                        onSelect={this.onSelectVideo.bind(this)}
                    >
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
                        <span style={{marginRight: "30px"}}>
                            ----- {this.state.playerTitle} -----
                        </span>
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
