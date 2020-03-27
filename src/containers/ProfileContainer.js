import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {logOut} from "../actions/sessionActions";
import Profile from "../components/Profile";

const mapStateToProps = state => ({
    isAuth: state.session.isAuth
});

const mapDispatchToProps = dispatch => ({
    logOut: () => dispatch(logOut())
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
