import axios from 'axios';
import {SET_USER_PROFILE} from './types'

export function setUserProfile(profile) {
    console.log("Action" , profile)
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

export function fetchUserProfile() {
    console.log('Fetching User Profile');
    return dispatch => {
        return axios.get('http://localhost:5000/api/v1/profile/').then(res => {
            console.log(res.data);
            if (res.data.success) {
                dispatch(setUserProfile(res.data.user))
            } else {

            }
        })
    }
}