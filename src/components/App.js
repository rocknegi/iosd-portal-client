import React, {Component} from 'react';
import {Layout, Menu} from 'antd';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom' ;

import BreadcrumbComponent from './common/breadcrumb.component' ;
import RouterComponent from './router.component' ;

import './App.css';
import PlayerComponent from "./courses/player.component";


const {Header, Content, Footer} = Layout;


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/player/:courseId/video/:videoId' component={PlayerComponent}/>
                        <Route path='/' component={() => {
                            return (
                                <Layout className="layout">
                                    <Header style={{position: 'fixed', width: '100%', backgroundColor: '#fff'}}>
                                        <div className="container">
                                            <div className="logo">
                                                <img src="http://iosd.tech/img/IOSD-logo.png" alt=""/>
                                            </div>
                                            <div className="pull-left">
                                                <Menu
                                                    mode="horizontal"
                                                    defaultSelectedKeys={['1']}
                                                    style={{lineHeight: '64px'}}
                                                >
                                                    <Menu.Item key="1"><Link to='/courses'>Courses</Link></Menu.Item>
                                                    <Menu.Item key="2">nav 2</Menu.Item>
                                                    <Menu.Item key="3">nav 3</Menu.Item>
                                                </Menu>
                                            </div>
                                            <div className="pull-right">
                                                <Menu
                                                    mode="horizontal"
                                                    style={{lineHeight: '64px'}}
                                                >
                                                    <Menu.Item key="1">Refer and Earn</Menu.Item>
                                                    <Menu.Item key="2">Register</Menu.Item>
                                                    <Menu.Item key="3">Classroom</Menu.Item>
                                                    <Menu.Item key="4">Logout</Menu.Item>
                                                </Menu>
                                            </div>

                                        </div>

                                    </Header>
                                    <Content style={{padding: '0 50px', marginTop: 64}}>

                                        <div className='' style={{padding: 24, minHeight: '100vh'}}>
                                            <BreadcrumbComponent/>
                                            <RouterComponent/>
                                        </div>
                                    </Content>
                                    <Footer style={{textAlign: 'center'}}>
                                        IOSD ©2018 Created by Ant UED
                                    </Footer>
                                </Layout>)
                        }
                        }/>

                    </Switch>

                </div>

            </BrowserRouter>
        );
    }
}

export default App;
