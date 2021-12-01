import {authAPI, securityAPI} from '../api/api';
import {stopSubmit} from 'redux-form';

const SET_USERS_DATA = 'rsn/auth/SET_USERS_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'rsn/auth/GET_CAPTCHA_URL_SUCCESS';

let initialState = {
    id: null,
    email: null,
    login: null,
    rememberMe: false,
    isAuth: false,
    captchaUrl: null // if null then captcha is no required
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USERS_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload,
            };

        default:
            return state;

    }

}


export const setAuthUsersData = (id, email, login, rememberMe, isAuth) => ({
    type: SET_USERS_DATA,
    payload: { id, email, login, rememberMe, isAuth  }
});

export const setCaptchaUrlSuccess = (captchaUrl) =>  ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: { captchaUrl  }
});

export const getAuthUserData = () => async (dispatch) => {
    const response = await authAPI.authorization();
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUsersData(id, email, login, true, true));
    }
}

export const login = (email, password, rememberMe, captcha) => async (dispatch) => {
    const response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
        // success, get auth data
    }   else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl());
        }
        let message = response.data.messages.length > 0 ?
            response.data.messages[0] :
            null ; // 'Some error'
        dispatch(stopSubmit('Login', {_error: message}));
    }
}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(setCaptchaUrlSuccess(captchaUrl));
}

export const logout = () => async (dispatch) => {

    let response = await authAPI.logout();

    if (response.resultCode === 0) {
        dispatch(setAuthUsersData(null, null, null, false, false));
    }

}


export default authReducer;