import React from 'react'
import {Redirect} from 'react-router-dom'


type PropsType = {
    isAuth: boolean
    logOut: () => void
}

class Profile extends React.Component<PropsType> {

    exitHandler: (e: any) => void = e => {
        e.preventDefault();
        // dispatch
        this.props.logOut();
    }

    render() {
        return (
            <div>
                {this.props.isAuth ? <div>
                        <p className="text-reset">ВЫ ВОШЛИ КАК АДМИН, ПОЗДРАВЛЯЮ</p>
                        <button className="btn btn-secondary" onClick={this.exitHandler}>ВЫЙТИ</button>
                    </div>
                    : <Redirect  to="/Login"/>}
            </div>
        )
    }

}

export default Profile;
