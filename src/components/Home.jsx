import React from 'react' ;
import {Layout, Menu} from 'antd';
import {Link, NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

// import BreadcrumbComponent from './common/breadcrumb.component' ;
import Router from './Router' ;


const {Header, Content, Footer} = Layout;

const HomeComponent = (props) => {
    return (
        <Layout className="layout">
            <Header style={{position: 'fixed', width: '100%', backgroundColor: '#fff'}}>
                <div className="container">
                    <Link to='/'>
                        <div className="logo">
                            <img src="http://iosd.tech/img/IOSD-logo.png" alt=""/>
                        </div>
                    </Link>
                    <div className="pull-left">
                        <Menu
                            mode="horizontal"
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="1"><NavLink to='/courses'>Courses</NavLink></Menu.Item>
                            <Menu.Item key="2"><NavLink to='/library'>Library</NavLink></Menu.Item>
                            <Menu.Item key="3"><NavLink to='/blog'>Blog</NavLink></Menu.Item>
                            <Menu.Item key="4"><NavLink to='/events'>Events</NavLink></Menu.Item>


                        </Menu>
                    </div>
                    <div className="pull-right">
                        <Menu
                            mode="horizontal"
                            style={{lineHeight: '64px'}}
                        >
                            {props.isAdmin && <Menu.Item key="1"><Link to={'/admin'}>Admin Panel</Link></Menu.Item> }
                            <Menu.Item key="3">Classroom</Menu.Item>
                            <Menu.Item key="4"><Link to={'/logout'}> Logout</Link></Menu.Item>
                        </Menu>
                    </div>

                </div>

            </Header>
            <Content style={{padding: '0 50px', marginTop: 64}}>

                <div className='' style={{padding: 24, minHeight: '100vh'}}>
                    {/*<BreadcrumbComponent/>*/}
                    <Router/>
                </div>
            </Content>
            <Footer style={{textAlign: 'center'}}>
                IOSD ©2018 Created by Ant UED
            </Footer>
        </Layout>
    );
};

function mapStateToProps(state){
    return {
        isAdmin : state.auth.isAdmin
    }
}

export default connect(mapStateToProps , {})(HomeComponent);