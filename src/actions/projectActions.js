import axios from 'axios';
import {SET_PROJECTS} from './types'

export function setProjects(projects) {
    return {
        type: SET_PROJECTS,
        projects
    }
}

export function fetchProjects() {
    console.log('Fetching Projects');
    return dispatch => {
        return axios.get('http://localhost:5000/api/v1/projects/all').then(res => {
            // console.log(res.data);
            if (res.data.success) {
                dispatch(setProjects(res.data.data))
            } else {

            }
        })
    }
}