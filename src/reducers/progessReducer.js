import { SET_PROGRESS } from '../actions/types';

const initialState = {};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_PROGRESS:
            let a = action.progress.Course;
            return {
                ...state ,
                [a] : action.progress.watched
            }

        default: return state;
    }
}
