import { SET_MENTORS } from '../actions/types';

const initialState = [] ;


export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_MENTORS:
            return action.mentors;
        default: return state;
    }
}
