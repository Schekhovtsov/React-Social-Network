import {profileAPI, usersAPI} from '../api/api';
import {setAuthUsersData} from './auth-reducer';

const ADD_POST = 'rsn/profile/ADD_POST';
const DELETE_POST = 'rsn/profile/DELETE_POST';
const SET_USER_PROFILE = 'rsn/profile/SET_USER_PROFILE';
const SET_USER_STATUS = 'rsn/profile/SET_USER_STATUS';

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

        default:
            return state;


    }


}

export const addPostCreator = (newPostBody) => ({type: ADD_POST, text: newPostBody});
export const deletePostCreator = (postId) => ({type: DELETE_POST, postId});

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status});

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

export default profileReducer;