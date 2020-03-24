import {LOG_IN, LOG_OUT} from "../actions/types";
import {checkCredentials} from "../helpers/checkCredentials";

const initialState = {
    isAuth: false
}

export default (state = initialState, action)  => {
    switch(action.type) {
        case LOG_IN:
            if(checkCredentials(action.payload)) {
                return {...state, isAuth: true}
            }
            return state;
        case LOG_OUT:
            return {...state, isAuth: false}
        default: return state
    }
}

