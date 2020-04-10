import {FETCH_NEWS, HIDE_LOADER, SHOW_LOADER} from "./types";
import {AppStateType} from "../reducers/rootReducer";
import {ThunkAction} from "redux-thunk";
import {NewsType} from "../reducers/newsReducer";

export type NewsActionsType = ShowLoaderType | HideLoaderType | FetchNewsType;

// Упрощаем жизнь, пишем type typov:

// type DispatchType = Dispatch<ActionsType>
// type GetStateType = () => AppStateType


// Лучше типизировать thunkCreator.
export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, NewsActionsType>
//thunkCreator:

export function fetchNews(count: number): ThunkType {
    return async (dispatch) => {
        try {
            dispatch(showLoader())
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${count}`);
            const json = await response.json()
            setTimeout(()=> {
                dispatch(fetchNewsAC(json))
                dispatch(hideLoader())
            },500)
        } catch(e) {
            console.log(e);
        }

    }
}

type ShowLoaderType = { type: typeof  SHOW_LOADER}

type HideLoaderType = {
    type: typeof HIDE_LOADER
}

type FetchNewsType = {
    type: typeof FETCH_NEWS
    payload: Array<NewsType>
}

export function showLoader(): ShowLoaderType {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader(): HideLoaderType {
    return {
        type: HIDE_LOADER
    }
}

export function fetchNewsAC(response: NewsType[]): FetchNewsType {
    return {
        type: FETCH_NEWS,
        payload: response
    }
}