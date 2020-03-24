import React from 'react'
import {connect} from "react-redux"
import Login from "../components/Login/Login";
import {logIn, logOut} from "../actions/sessionActions";


const mapStateToProps = state => ({
    isAuth: state.session.isAuth
})

const mapDispatchToProps = dispatch => ({
    logIn: (params) => dispatch(logIn(params)),
    logOut: () => dispatch(logOut())
})


export default connect(mapStateToProps,mapDispatchToProps)(Login);