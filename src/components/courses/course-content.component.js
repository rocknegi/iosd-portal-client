import React, {Component} from 'react';

import {Collapse, List, Avatar, Icon} from 'antd' ;

const {Panel} = Collapse;

const text = (
    <List>
        <List.Item>
            <List.Item.Meta
                avatar={<Avatar src="https://online.codingblocks.com//images/video-green-dark-23c7a6e7f9fbe82c99efb12d3daed5f2.png"/>}
                title={<a href="https://ant.design">Some Video</a>}
            />
            <div style={{marginRight : 50}}><Icon type="check" /></div>
        </List.Item>
        <List.Item>
            <List.Item.Meta
                avatar={<Avatar src="https://online.codingblocks.com//images/video-green-dark-23c7a6e7f9fbe82c99efb12d3daed5f2.png"/>}
                title={<a href="https://ant.design">Some Video</a>}
            />
            <div style={{marginRight : 50}}><Icon type="check" /></div>
        </List.Item>
        <List.Item>
            <List.Item.Meta
                avatar={<Avatar src="https://online.codingblocks.com//images/video-green-dark-23c7a6e7f9fbe82c99efb12d3daed5f2.png"/>}
                title={<a href="https://ant.design">Some Video</a>}
            />
            <div style={{marginRight : 50}}><Icon type="check" /></div>
        </List.Item>
    </List>

);

const customPanelStyle = {
    background: '#fff',
    paddingTop: 15,
    paddingBottom: 15,
    // borderRadius: 4,
    marginBottom: 24,
    border: 0,
    fontWeight : 400 ,
    fontSize : '1.1rem' ,
    overflow: 'hidden',
};

class CourseContent extends Component {
    render() {
        return (
            <div style={{padding : '50px 10px 50px 10px' }}>
                <Collapse bordered={false} style={{background : '#F0F2F5'}}>
                    <Panel header={
                        <div>
                            Mathematics 1.0
                            <div className="pull-right" style={{marginRight : 50}}>3/3</div>
                        </div>
                    } key="1" style={customPanelStyle}>
                        <p>{text}</p>
                    </Panel>
                    <Panel header={
                        <div>
                            Mathematics 1.0
                            <div className="pull-right" style={{marginRight : 50}}>3/3</div>
                        </div>
                    } key="2" style={customPanelStyle}>
                        <p>{text}</p>
                    </Panel>
                    <Panel header="This is panel 3.0" key="3" style={customPanelStyle}>
                        <p>{text}</p>
                    </Panel>
                </Collapse>
            </div>
        );
    }
}

export default CourseContent;
