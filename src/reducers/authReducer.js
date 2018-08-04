import {SET_CURRENT_USER, REMOVE_CURRENT_USER} from '../actions/types';
import isEmpty from 'lodash/isEmpty';
import jwtDecode from 'jwt-decode' ;

const initialState = {
    isAuthenticated: false,
    isAdmin: false,
    user: {}
};

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            console.log("User Found : ", action.user);
            return {
                isAuthenticated: !isEmpty(action.user),
                isAdmin: action.user.isAdmin,
                user: action.user
            };

        case REMOVE_CURRENT_USER :
            console.log("Removing User");
            return {
                isAuthenticated: false
            };

        default:
            return state;
    }
}
