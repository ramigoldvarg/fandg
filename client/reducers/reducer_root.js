import { combineReducers } from 'redux';
import NavbarReducer from './reducer_navbar.js';

const rootReducer = combineReducers({
    navbarOptions: NavbarReducer
});

export default rootReducer;