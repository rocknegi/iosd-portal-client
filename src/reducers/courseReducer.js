import {SET_COURSES, ADD_COURSE, EDIT_COURSE} from '../actions/types';

const initialState = {
    list: [],
    map: {}
};

let map;

export default (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_COURSES:
            map = {};
            action.courses.forEach(course => {
                map[course._id] = course;
            });
            // console.log(map);
            return {
                map,
                list: action.courses
            };

        case ADD_COURSE:
            map = state.map;
            map[action.course._id] = action.course;
            return {
                map,
                list: [...state.list, action.course]
            };
        case EDIT_COURSE:
            map = state.map;
            map[action.course._id] = action.course;

            let list = state.list;
            let index = -1;
            list.forEach((course, i) => {
                if (course._id === action.course._id) {
                    index = i;
                }
            });
            console.log(list, action.course);
            if (index !== -1) {
                list[index] = action.course;
                console.log("Updated List");
            }
            return {
                map,
                list
            };

        default:
            return state;
    }
}
