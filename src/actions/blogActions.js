import axios from 'axios' ;
import {SET_BLOG_POSTS} from './types'

export function setBlogPosts({feed}){
    return {
        type : SET_BLOG_POSTS,
        feed
    }
}


export function fetchBlogPosts(){
    console.log('Fetching Blog Posts');
    return dispatch => {
        return axios.get('http://18.222.7.88:5000/api/v1/blog/posts').then(res => {
            console.log(res.data);
            if(res.data.success){
                dispatch(setBlogPosts(res.data))
            } else {

            }
        })
    }
}