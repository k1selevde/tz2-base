import {HIDE_ALERT, LOG_IN, LOG_IN_FAILURE, LOG_OUT} from "./types";
import {checkCredentials} from "../helpers/checkCredentials";

type PayloadLoginFailureActionType = {
    errorMsg: string
}

export type hideAlertActionType = {
    type: typeof HIDE_ALERT
}
export type loginFailureActionType = {
    type: typeof LOG_IN_FAILURE
    payload: PayloadLoginFailureActionType
}
export type logOutActionType = {
    type: typeof LOG_OUT
}
export type logInACType = {
    type: typeof LOG_IN
}



export type SessionActionsType = hideAlertActionType
    | loginFailureActionType | logOutActionType | logInACType

export function logIn(data: object) {
    if(checkCredentials(data)) {
        return logInAC()
    }
    else
        return loginFailure('Имя пользователя или пароль введены не верно')
  }

export function logOut(): logOutActionType {
    return {
        type: LOG_OUT,
    }
}

export function loginFailure(error: string) : loginFailureActionType {
    return {
        type: LOG_IN_FAILURE,
        payload: {
            errorMsg: error
        }
    }
}

export function hideAlert() : hideAlertActionType {
    return {
        type: HIDE_ALERT
    }
}

function logInAC() : logInACType {
    return {
        type: LOG_IN
    }
}
