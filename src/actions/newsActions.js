import {FETCH_NEWS, HIDE_LOADER, SHOW_LOADER} from "./types";

export function fetchNews(count) {
    return async (dispatch) => {
        try {
            dispatch(showLoader())
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${count}`);
            const json = await response.json()
            setTimeout(()=> {
                dispatch({type: FETCH_NEWS, payload: json})
                dispatch(hideLoader())
            },500)
        } catch(e) {
            console.log(e);
        }

    }
}

export function showLoader() {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader() {
    return {
        type: HIDE_LOADER
    }
}