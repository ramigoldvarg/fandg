import {AVAILABLE_DATA} from '../actions/index.js';

export default function(state = null, action) {
    switch(action.type) {
        case (AVAILABLE_DATA):
            return action.payload;
    }

    return state;
}