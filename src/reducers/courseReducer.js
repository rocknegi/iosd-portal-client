import { SET_COURSES } from '../actions/types';

const initialState = {
    list : [] ,
    map : {}
};

export default (state = initialState, action = {}) => {
    switch(action.type) {
        case SET_COURSES:
            let map = {};
            action.courses.forEach(course => {
                map[course._id] = course
            });
            console.log(map);
            return {
                map,
                list : action.courses
            }
        default: return state;
    }
}
