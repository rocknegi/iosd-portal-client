import { SET_USER_PROFILE } from '../actions/types';

const initialState = {} ;


export default (state = initialState, action = {}) => {
    console.log(action)
    switch(action.type) {
        case SET_USER_PROFILE:
            return action.profile;
        default: return state;
    }
}
