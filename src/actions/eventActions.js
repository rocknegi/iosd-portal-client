import axios from 'axios' ;
import {SET_EVENTS} from './types'
import serverConfig from './server.config';

export function setEvents(events){
    return {
        type : SET_EVENTS,
        events
    }
}


export function fetchEvents(){
    console.log('Fetching Events');
    return dispatch => {
        return axios.get(`${serverConfig.base_url}/api/v1/events`).then(res => {
            console.log(res.data);
            if(res.data.success){
                dispatch(setEvents(res.data.data))
            } else {

            }
        })
    }
}