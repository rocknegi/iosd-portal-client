import axios from 'axios' ;
import {SET_EVENTS} from './types'

export function setEvents(events){
    return {
        type : SET_EVENTS,
        events
    }
}


export function fetchEvents(){
    console.log('Fetching Events');
    return dispatch => {
        return axios.get('http://localhost:5000/api/v1/events').then(res => {
            console.log(res.data);
            if(res.data.success){
                dispatch(setEvents(res.data.data))
            } else {

            }
        })
    }
}