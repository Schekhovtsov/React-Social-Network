import React from 'react';
import Profile from './Profile';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus, saveAvatar}
    from '../../redux/profile-reducer';
import {compose} from 'redux';
import {useParams} from 'react-router-dom';

const withRouter = WrappedComponent => (props) => {
    const params = useParams();
    return <WrappedComponent {...props} params={params} />;
};

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.params.userId; // Тянем URL

        if (!userId) { // Если в адресе нет userId
            userId = this.props.authUserId; // Наш профиль
            if (!userId) { // Если авторизованного не оказалось
                //this.props.history.push('/login');
                alert('Тут должен быть редирект на /login');
            }
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() { this.refreshProfile(); }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.props.params.userId != prevProps.params.userId) {
            this.refreshProfile();
        }

    }

    render() {
        return(
            <Profile {...this.props}
                     profile={this.props.profile}
                     isOwner={!this.props.params.userId}
                     status={this.props.status}
                     updateStatus={this.props.updateUserStatus}
                     saveAvatar={this.props.saveAvatar}
            />
        );
    }

}

let mapStateToProps = (state) => {

    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authUserId: state.auth.id,
    });

}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateUserStatus, saveAvatar}),
    withRouter,
    //withAuthRedirect
)(ProfileContainer);