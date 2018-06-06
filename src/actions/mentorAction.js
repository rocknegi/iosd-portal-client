import axios from 'axios';
import {SET_MENTORS} from './types'
import serverConfig from './server.config';

export function setMentors(mentors) {
    return {
        type: SET_MENTORS,
        mentors
    }
}

export function fetchMentors() {
    console.log('Fetching Events');
    return dispatch => {
        return axios.get(`${serverConfig.base_url}/api/v1/mentors/all`).then(res => {
            // console.log(res.data);
            if (res.data.success) {
                dispatch(setMentors(res.data.data))
            } else {

            }
        })
    }
}