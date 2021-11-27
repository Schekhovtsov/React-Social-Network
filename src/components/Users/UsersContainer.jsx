import {connect} from 'react-redux';
import {
    addFriend,
    deleteFriend, requestUsers,
    setCurrentPage,toggleFollowingProgress,
} from '../../redux/users-reducer';
import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader';
import {compose} from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from '../../redux/usersSelectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        let {currentPage, pageSize} = this.props;
        this.props.requestUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        let {pageSize} = this.props;
        this.props.requestUsers(pageNumber, pageSize);
    }

    render() {

        return <>
            {this.props.isFetching ?
                <Preloader /> : null }
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   users={this.props.users}
                   addFriend={this.props.addFriend}
                   deleteFriend={this.props.deleteFriend}
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}

            />
        </>

    }

}

let mapStateToProps = (state) => {

    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        totalUsersCount: getTotalUsersCount(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    };

};

export default compose(
    connect(mapStateToProps, { addFriend, deleteFriend, setCurrentPage,
        toggleFollowingProgress, requestUsers })
)(UsersContainer);