import {combineReducers} from 'redux' ;

import authReducer from './authReducer' ;
import blogReducer from './blogReducer' ;
import libraryReducer from './libraryReducer' ;

const rootReducer = combineReducers({
    auth : authReducer,
    blog : blogReducer,
    library : libraryReducer
});

export default rootReducer ;
