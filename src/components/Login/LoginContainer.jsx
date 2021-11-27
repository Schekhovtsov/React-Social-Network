import React from 'react';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import Login from './Login';
import {compose} from 'redux';

class LoginContainer extends React.Component {

    render() {
        return <Login {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {login}),
)(LoginContainer);