import {LOG_IN, LOG_OUT} from "./types";


export function logIn(data) {
    return {
        type: LOG_IN,
        payload: data
    }
}



export function logOut() {
    return {
        type: LOG_OUT,
    }
}