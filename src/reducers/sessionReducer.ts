import {HIDE_ALERT, LOG_IN, LOG_IN_FAILURE, LOG_OUT} from "../actions/types";
import {SessionActionsType} from "../actions/sessionActions";

const initialState = {
    errorMsg: '',
    isAuth: false
}

type InitialStateType = typeof initialState

export default (state = initialState, action: SessionActionsType): InitialStateType  => {
    switch(action.type) {
        case LOG_IN:
            return {...state, isAuth: true, errorMsg: ''}
        case LOG_OUT:
            return {...state, isAuth: false}
        case LOG_IN_FAILURE:
            return {...state, errorMsg: action.payload.errorMsg}
        case HIDE_ALERT:
            return {...state, errorMsg: ''}
        default: return state
    }
}

