import {usersAPI} from '../api/api';
import {updateObjectInArray} from '../utils/objects-helpers';

const ADD_FRIEND = 'rsn/users/ADD_FRIEND';
const DELETE_FRIEND = 'rsn/users/DELETE_FRIEND';
const SET_USERS = 'rsn/users/SET_USERS';
const SET_USERS_TOTAL_COUNT = 'rsn/users/SET_USERS_TOTAL_COUNT';
const SET_CURRENT_PAGE = 'rsn/users/SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'rsn/users/TOGGLE_IS_FETCHING';
const TOOGLE_IS_FOLLOWING_IN_PROGRESS = 'rsn/users/TOOGLE_IS_FOLLOWING_IN_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    currentPage: 1,
    totalUsersCount: 0,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_FRIEND:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    "id",
                    action.userId,
                    {followed: true}
                ),
            };

        case DELETE_FRIEND:
            return {
                ...state,
                users: updateObjectInArray(
                    state.users,
                    'id',
                    action.userId,
                    {followed: false}
                ),
            };

        case SET_USERS:
            return {
                ...state,
                users: [...action.users],
            }

        case SET_USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount,
            }

        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage,
            }

        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching,
            }

        case TOOGLE_IS_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId] :
                    state.followingInProgress.filter(id => id != action.userId),


            }

        default:
            return state;

    }

}


export const addFriendSuccess = (userId) => ({type: ADD_FRIEND, userId});
export const deleteFriendSuccess = (userId) => ({type: DELETE_FRIEND, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_USERS_TOTAL_COUNT, totalUsersCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOOGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
});

export const requestUsers = (page, pageSize) => async (dispatch) => {

    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(page));
    let response = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false));
    dispatch(setUsers(response.items));
    dispatch(setUsersTotalCount(response.totalCount));

}

const addOrDeleteFriend = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId)

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }

    dispatch(toggleFollowingProgress(false, userId));
}

export const addFriend = (userId) => (dispatch) => {

    addOrDeleteFriend(dispatch, userId,
        usersAPI.addFriend.bind(usersAPI),
        addFriendSuccess);

}

export const deleteFriend = (userId) => (dispatch) => {

    addOrDeleteFriend(dispatch, userId,
        usersAPI.deleteFriend.bind(usersAPI),
        deleteFriendSuccess);

}

export default usersReducer;