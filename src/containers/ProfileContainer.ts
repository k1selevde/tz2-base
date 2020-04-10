import {connect} from 'react-redux'
import {logOut} from "../actions/sessionActions";
import Profile from "../components/Profile";
import {AppStateType} from "../reducers/rootReducer";
import {logOutActionType} from "../actions/sessionActions"
import {Dispatch} from "redux";

const mapStateToProps = (state : AppStateType) => ({
    isAuth: state.session.isAuth
});

const mapDispatchToProps = (dispatch: Dispatch<logOutActionType>)  => ({
    logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
