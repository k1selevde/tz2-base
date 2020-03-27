import {HIDE_ALERT, LOG_IN, LOG_IN_FAILURE, LOG_OUT} from "./types";
import {checkCredentials} from "../helpers/checkCredentials";


export function logIn(data) {
    if(checkCredentials(data)) {
        return {
            type: LOG_IN
        }
    }
    else
        return {
        type: LOG_IN_FAILURE,
        payload: {
            errorMsg: 'Имя пользователя или пароль введены не верно',
            }
        }
  }


export function logOut() {
    return {
        type: LOG_OUT,
    }
}

export function loginFailure(error) {
    return {
        type: LOG_IN_FAILURE,
        errorMsg: error
    }
}

// =====

export function hideAlert() {
    return {
        type: HIDE_ALERT
    }
}


