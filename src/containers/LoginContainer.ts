import React from 'react'
import {connect} from "react-redux"
import Login from "../components/Login/Login";
import {hideAlert, logIn} from "../actions/sessionActions";
import {AppStateType} from "../reducers/rootReducer";
import {Dispatch} from "redux";
import {logInACType,loginFailureActionType,hideAlertActionType} from "../actions/sessionActions"

type mapStateToPropsType = {
    isAuth: boolean
    error: string
}

// type ownProps = {
//     phone: number
// }
// type PropsType =  ownProps & mapStateToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    isAuth: state.session.isAuth,
    error: state.session.errorMsg
})


type mapDispatchToPropsType = {
    logIn: (p: object) => void
    hideAlert: () => void
}

type LoginActions = hideAlertActionType | loginFailureActionType | logInACType


const mapDispatchToProps = (dispatch: Dispatch<LoginActions>): mapDispatchToPropsType => ({
    logIn: (params) => dispatch(logIn(params)),
    hideAlert: () => dispatch(hideAlert())
})


export default connect(mapStateToProps,mapDispatchToProps)(Login);