import {FETCH_NEWS, HIDE_LOADER, SHOW_LOADER} from "../actions/types";
import {NewsActionsType} from "../actions/newsActions";

export type NewsType = {
    userId: number
    id: number
    title: string
    body: string
}

const initialState = {
    isLoading: true as boolean | null,
    newsList: [] as Array<NewsType>
}

type InitialStateType = typeof initialState


export default (state = initialState, action: NewsActionsType): InitialStateType => {
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
    // return state;
}



