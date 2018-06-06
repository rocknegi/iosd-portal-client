import axios from 'axios';
import {SET_MENTORS} from './types'

export function setMentors(mentors) {
    return {
        type: SET_MENTORS,
        mentors
    }
}

export function fetchMentors() {
    console.log('Fetching Events');
    return dispatch => {
        return axios.get('http://18.222.7.88:5000/api/v1/mentors/all').then(res => {
            // console.log(res.data);
            if (res.data.success) {
                dispatch(setMentors(res.data.data))
            } else {

            }
        })
    }
}