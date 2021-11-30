import {profileAPI, usersAPI} from '../api/api';
import {setAuthUsersData} from './auth-reducer';
import {stopSubmit} from 'redux-form';

const ADD_POST = 'rsn/profile/ADD_POST';
const DELETE_POST = 'rsn/profile/DELETE_POST';
const SET_USER_PROFILE = 'rsn/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'rsn/profile/SET_USER_STATUS';
const SET_USER_AVATAR = 'rsn/profile/SET_USER_AVATAR';

let initialState = {
    posts: [
        {id: 1, text: 'Первый пост', likes: 2},
        {id: 2, text: 'Второй пост', likes: 43},
        {id: 3, text: 'Третий пост', likes: 3325},
    ],
    newPostText: 'from state POST',
    profile: null,
    status: '',
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST: {

            return {
                ...state,
                posts: [...state.posts,
                    {   id: 6,
                        text: action.text,
                        likes: 10}
                ],
            };

        }

        case DELETE_POST: {

            return {
                ...state,
                posts: state.posts.filter(p => (p.id != action.postId))
            };

        }

        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }

        case SET_USER_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        case SET_USER_AVATAR: {
            debugger
            return {
                ...state,
                profile: {...state.profile, photos: action.photos},
            }
        }

        default:
            return state;


    }


}

export const addPostCreator = (newPostBody) => ({type: ADD_POST, text: newPostBody});
export const deletePostCreator = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});
export const setUserAvatar = (photos) => ({type: SET_USER_AVATAR, photos});

export const getUserProfile = (userId) => async (dispatch) => {
    let response = await usersAPI.getUserProfile(userId);
    dispatch(setUserProfile(response));
}

export const getUserStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getUserStatus(userId);
    dispatch(setUserStatus(response.data));
}

export const updateUserStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateUserStatus(status);
    if (response.data.resultCode === 0 ) {
        dispatch(setUserStatus(status));
    }
}

export const saveAvatar = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
        dispatch(setUserAvatar(response.data.data.photos));
    }
}

export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.id;
    const response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0 ) {
        dispatch(getUserProfile(userId))
    }   else    {
        dispatch(stopSubmit('editProfile', {_error: response.data.messages[0]}));
        return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;