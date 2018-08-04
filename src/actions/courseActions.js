import axios from 'axios' ;
import {ADD_COURSE, EDIT_COURSE, SET_COURSES, SET_PROGRESS, SAVE_COURSE_VIDEOS} from './types';
import serverConfig from './server.config';

export function setAllCourses({courses}) {
    return {
        type: SET_COURSES,
        courses
    };
}


export function fetchAllCourses() {
    console.log('Fetching CoursesSummary');
    return dispatch => {
        return axios.get(`${serverConfig.base_url}/api/v1/courses`).then(res => {
            // console.log(res.data);
            if (res.data.success) {
                dispatch(setAllCourses(res.data));
            } else {

            }
        });
    };
}

export function setProgress({progress}) {
    return {
        type: SET_PROGRESS,
        progress
    };
}

export function createProgress(_id) {
    console.log('Creating New Progress');
    console.log(_id);
    return dispatch => {
        return axios.post(`${serverConfig.base_url}/api/v1/progress/course/new`, {course: _id}).then(res => {
            console.log("Created New Progress");
            if (res.data.success) {
                dispatch(setProgress(res.data))
            }
        });
    };
}

export function fetchProgress(_id) {
    console.log('Fetching Progress');
    return dispatch => {
        return axios.get(`${serverConfig.base_url}/api/v1/progress/course/${_id}`).then(res => {
            console.log("Progres Request" , res.data);
            if (res.data.success) {
                dispatch(setProgress(res.data));
            } else {
                throw new Error('Progress Not Found');
            }
        });
    };
}

export const addCourse = (course) => ({
    type: ADD_COURSE,
    course
});


export const editCourse = (course) => ({
    type: EDIT_COURSE,
    course
});


export const startAddCourse = (courseData) => {
    return dispatch => {
        return axios.post(`${serverConfig.base_url}/api/v1/courses/new`, courseData).then(res => {
            if (res.data.success) {
                dispatch(addCourse(res.data.course));
            }

        });
    };
};

export const startEditCourse = (id, courseData) => {
    return dispatch => {
        return axios.post(`${serverConfig.base_url}/api/v1/course/${id}`, courseData).then(res => {
            if (res.data.success) {
                console.log(res.data, "Course Edit Action");
                dispatch(editCourse(res.data.course));
            }

        });
    };
};


export const startSaveVideos = (id, videosList) => {
    return dispatch => {
        return axios.post(`${serverConfig.base_url}/api/v1/course/${id}/videos`, {videos: videosList}).then(res => {
            if (res.data.success) {
                console.log(res.data, "Course Video Action");
                dispatch(editCourse(res.data.course));
            }
        });
    };
};


