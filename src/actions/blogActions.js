import axios from 'axios' ;
import {SET_BLOG_POSTS} from './types';
import serverConfig from './server.config';

export function setBlogPosts({feed}){
    return {
        type : SET_BLOG_POSTS,
        feed
    }
}


export function fetchBlogPosts(){
    console.log('Fetching Blog Posts');
    return dispatch => {
        return axios.get(`${serverConfig.base_url}/api/v1/blog/posts`).then(res => {
            console.log(res.data);
            if(res.data.success){
                dispatch(setBlogPosts(res.data))
            } else {

            }
        })
    }
}