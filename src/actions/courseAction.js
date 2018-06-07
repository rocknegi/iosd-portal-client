import axios from 'axios' ;
import {SET_COURSES} from './types';
import serverConfig from './server.config';

export function setAllCourses({courses}){
    return {
        type : SET_COURSES,
        courses
    }
}


export function fetchAllCourses(){
    console.log('Fetching Courses');
    return dispatch => {
        return axios.get(`${serverConfig.base_url}/api/v1/courses`).then(res => {
            console.log(res.data);
            if(res.data.success){
                dispatch(setAllCourses(res.data))
            } else {

            }
        })
    }
}