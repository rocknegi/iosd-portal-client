import React, {Component} from 'react' ;
import {Card} from 'antd' ;
// const { Meta } = Card;

class ProfileCard extends Component {
    state = {
        loading: true,
    }


    render() {

        // let f = (
        //
        //     <Row className='summary'>
        //         <Col span={8} className='bulb'>
        //             <img height="68px" src="https://www.codingninjas.in/assets/images/events.png" width="68px"/>
        //
        //         </Col>
        //         <Col span={16} className='header'>
        //             Events
        //             <p>
        //                 Checkout the latest happenings and events
        //             </p>
        //         </Col>
        //     </Row>
        // )

        return (
            <div>
                <Card
                    className = 'profile-card'
                    hoverable
                    cover={<img src="https://graph.facebook.com/2059498937671379/picture?type=large" alt={'Random Text'} />}
                >
                    <div className='card-meta'>
                        <h4 className='name'>Dhruv Ramdev</h4>
                        <h4>DTU</h4>
                    </div>
                    <div className='card-meta'>
                        <p>Skills :</p>
                        <ul className='profile-skills'>
                            <li>React</li>
                            <li>Angular</li>
                        </ul>
                    </div>
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

export default ProfileCard;