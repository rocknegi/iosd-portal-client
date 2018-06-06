import axios from 'axios' ;
import {SET_LIBRARY_BOOKS} from './types'

export function setLibraryBooks({books , category}){
    return {
        type : SET_LIBRARY_BOOKS,
        books,
        categories : category
    }
}


export function fetchLibraryBooks(){
    return dispatch => {
        return axios.get('http://18.222.7.88:5000/api/v1/library/books').then(res => {
            // console.log(res.data);
            if(res.data.success){
                dispatch(setLibraryBooks(res.data))
            } else {

            }
        })
    }
}