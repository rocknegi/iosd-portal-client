import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {SET_CURRENT_USER , REMOVE_CURRENT_USER} from "./types";
import setAuthHeader from "../utils/setAuthHeader";
import serverConfig from './server.config';

export function setCurrentUser(user) {
    return {
        type: SET_CURRENT_USER,
        user
    };
}


export function removeCurrentUser() {
    return {
        type: REMOVE_CURRENT_USER
    };
}

export function logout() {
    return (dispatch => {
        dispatch(removeCurrentUser());
    });

}

export function login(data) {
    console.log(data);
    return (dispatch) => {
        return axios.post(`${serverConfig.base_url}/api/v1/auth/login`, data).then(res => {
            // console.log(res.data);
            if (res.data.success) {
                const token = res.data.token;
                localStorage.setItem('token', token);
                setAuthHeader(token);
                dispatch(setCurrentUser(jwtDecode(token)));
            } else {

            }

        });
    };
}
