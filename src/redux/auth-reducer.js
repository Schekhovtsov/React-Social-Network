import {authAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USERS_DATA = 'rsn/auth/SET_USERS_DATA';


let initialState = {
    id: null,
    email: null,
    login: null,
    rememberMe: false,
    isAuth: false,
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS_DATA:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;

    }

}


export const setAuthUsersData = (id, email, login, rememberMe, isAuth) =>
    ({type: SET_USERS_DATA,
    payload: { id, email, login, rememberMe, isAuth  }
    });

export const getAuthUserData = () => async (dispatch) => {

    let response = await authAPI.authorization();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUsersData(id, email, login, true, true));
    }


}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);

    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    }   else {
        let message = response.data.messages.length > 0 ?
            response.data.messages[0] :
            null ; // 'Some error'
        dispatch(stopSubmit('Login', {_error: message}));
    }

}

export const logout = () => async (dispatch) => {

    let response = await authAPI.logout();

    if (response.resultCode === 0) {
        dispatch(setAuthUsersData(null, null, null, false, false));
    }

}


export default authReducer;