import axios from 'axios' ;
import {SET_LIBRARY_BOOKS} from './types'
import serverConfig from './server.config';

export function setLibraryBooks({books , category}){
    return {
        type : SET_LIBRARY_BOOKS,
        books,
        categories : category
    }
}


export function fetchLibraryBooks(){
    return dispatch => {
        return axios.get(`${serverConfig.base_url}/api/v1/library/books`).then(res => {
            console.log(res.data);
            if(res.data.success){
                dispatch(setLibraryBooks(res.data))
            } else {

            }
        })
    }
}