import React, {Component} from 'react' ;
import {Card, Avatar, Modal, Button, Row, Col} from 'antd' ;
import {connect} from 'react-redux' ;
import isEmpty from 'lodash/isEmpty' ;
import {fetchProjects} from "../../actions/projectActions";

class ContributeCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            project: {
                prerequisites: []
            },
            visible: false
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }


    handleClick(project) {
        console.log(project, "Project");
        this.setState({
            visible: true,
            project
        });
    }

    handleCancel() {
        this.setState({
            visible: false
        });
    }

    componentWillMount() {
        console.log(this.props.projects);
        if (isEmpty(this.props.projects)) {
            console.log("Fetching Projects");
            this.props.fetchProjects().then(() => {
                console.log("Fetch Completed for Projects");
                this.setState({loading: false});
            });
        } else {
            this.setState({loading: false});
        }
    }

    renderRepos() {
        return (
            <div className='repo-list'>
                <p>
                    PROJECT TO WORK ON
                </p>
                {
                    this.props.projects.map(project => {
                        return (


                            <div className="repo" onClick={() => {
                                this.handleClick(project);
                            }}>
                                <div className='repo-icon'>
                                    <Avatar size="large" icon="user" src={project.image}/>
                                </div>
                                <div className='repo-desc'>
                                    <strong>{project.name}</strong>
                                    <p>{project.caption}</p>
                                </div>
                            </div>
                        );

                    })
                }
            </div>
        );
    }

    render() {

        let f = (

            <Row className='summary'>
                <Col span={8} className='bulb'>
                    <img alt={'Random Text'} height="68px"
                         src="http://danajfrank.com/assets/img/sidewalks/project_roles_icon.png" width="68px"/>
                </Col>
                <Col span={16} className='header'>
                    Projects
                    <p>
                        Learn by doing.
                        Works on open source projects of IOSD
                    </p>
                </Col>
            </Row>


        );

        let selectedProject = this.state.project;

        return (
            <div>
                <Card loading={this.state.loading} title={f}>
                    {this.renderRepos()}
                </Card>
                <Modal
                    visible={this.state.visible}
                    onCancel={this.handleCancel}
                    footer={null}
                    width={'1000 shitty pixels'}
                    style={{
                        display: 'table'
                    }}
                    wrapClassName="vertical-center-modal"
                >
                    <article className="item-pane" style={{alignItems: "flex-start"}}>
                        <div className="item-preview">
                            <img className='img-responsive' src={selectedProject.image} alt=""/>
                        </div>
                        <div className="item-details">
                            <h1>{selectedProject.name}</h1><span className="subtitle">{selectedProject.caption}</span>
                            <div className="pane__section">
                                <p>
                                    {selectedProject.description}
                                </p>
                                <h3>Pre-Requisities</h3>
                                <ul>

                                    {
                                        selectedProject.prerequisites.map(item => <li>{item}</li>)
                                    }
                                </ul>
                            </div>
                            <div className="pane__section clearfix">

                                <Button size='large' className='button-solid'>
                                    Visit Github
                                </Button>
                            </div>
                        </div>
                    </article>

                </Modal>
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        projects: state.projects
    };
};

export default connect(mapStateToProps, {
    fetchProjects
})(ContributeCard);