import { SET_EVENTS } from '../actions/types';

const initialState = [] ;
;

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_EVENTS:
            return action.events
        default: return state;
    }
}
