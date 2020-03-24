import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'



const ProfileContainer = ({isAuth}) => {
    return (
        <div>
            {isAuth ? <div>ВЫ ВОШЛИ КАК АДМИН</div> : <Redirect  to="/Login"/>}
        </div>
    )
}

const mapStateToProps = state => ({
    isAuth: state.session.isAuth
});

export default connect(mapStateToProps,null)(ProfileContainer);
