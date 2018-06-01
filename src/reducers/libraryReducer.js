import { SET_LIBRARY_BOOKS } from '../actions/types';
import isEmpty from 'lodash/isEmpty';

const initialState = {
    books : [] ,
    categories : []
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_LIBRARY_BOOKS :
            return {
                books : action.books,
                categories: action.categories
            };
        default: return state;
    }
}
