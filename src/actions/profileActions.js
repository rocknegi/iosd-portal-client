import axios from 'axios';
import {SET_USER_PROFILE} from './types'
import serverConfig from './server.config';

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
        return axios.get(`${serverConfig.base_url}/api/v1/profile/`).then(res => {
            console.log(res.data);
            if (res.data.success) {
                dispatch(setUserProfile(res.data.user))
            } else {

            }
        })
    }
}