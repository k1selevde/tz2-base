import React from 'react'
import {connect} from "react-redux"
import Login from "../components/Login/Login";
import {hideAlert, logIn} from "../actions/sessionActions";


const mapStateToProps = state => ({
    isAuth: state.session.isAuth,
    error: state.session.errorMsg
})

const mapDispatchToProps = dispatch => ({
    logIn: (params) => dispatch(logIn(params)),
    hideAlert: () => dispatch(hideAlert())
})


export default connect(mapStateToProps,mapDispatchToProps)(Login);