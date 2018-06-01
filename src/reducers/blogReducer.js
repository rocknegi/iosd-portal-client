import { SET_BLOG_POSTS } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    posts: [],
    blog : {}
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_BLOG_POSTS:
            return {
                posts : action.feed.items ,
                blog : action.feed.feed
            };
        default: return state;
    }
}
