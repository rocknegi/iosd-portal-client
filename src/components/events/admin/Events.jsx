import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Route , Switch , Redirect } from 'react-router-dom' ;
import { fetchEvents } from '../../../actions/eventActions';
import EventsList from "./EventsList";
import EventAdd from './EventAdd';
import EventEdit from './EventEdit';

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        }
    };

    componentWillMount() {
        if (this.props.events.length === 0 ) {
            this.props.fetchEvents()
            .then(() => this.setState({loading: false}))
        } else {
            this.setState({loading: false});
        }
    };

    render() {
        if(this.state.loading) {
            return <h1>Loading</h1>
        }
        return (
            <div className='container'>
                <Switch>
                    {/*<Route path='/admin/events/list' component={()=><Redirect to='/events'/>}/>*/}
                    <Route exact path='/admin/events/new' component={EventAdd}/>
                    <Route exact path='/admin/events/:id' component={EventEdit}/>
                    <Route path='/admin/events/' component={()=><Redirect to='/events'/>}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = ({ events }) => ({
    events
});

const mapDispatchToProps = (dispatch) => ({
    fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(Events);
