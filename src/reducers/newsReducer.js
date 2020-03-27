import {FETCH_NEWS, HIDE_LOADER, SHOW_LOADER} from "../actions/types";

const initialState = {
    isLoading: true,
    newsList: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case FETCH_NEWS:
            return {...state, newsList: [...action.payload]}
        case SHOW_LOADER:
            return {...state, isLoading: true}
        case HIDE_LOADER:
            return {...state, isLoading: false};
        default:
            return state;
    }
    return state;
}



