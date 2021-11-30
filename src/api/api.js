import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '72d58d80-8a13-42cd-ba59-271fc14a56bf',
    }
})

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },

    addFriend(userId) {
        return instance.post(`follow/${userId}`, {})
            .then(response => {
                return response.data;
            })
    },

    deleteFriend(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data;
            })
    },

    getUserProfile(userId) {
        console.warn('Obsolete method. Use profileAPI object');
        return profileAPI.getUserProfile(userId);
    },

    getUserStatus(userId) {
        console.warn('Obsolete method. Use profileAPI object');
        return profileAPI.getUserStatus(userId);
    },

}

export const profileAPI = {

    getUserProfile(userId) {
        return instance.get(`profile/${userId}`)
            .then(response => {
                return response.data;
            })
    },

    getUserStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },

    updateUserStatus(status) {
        return instance.put(`profile/status/`, { status: status })
            .then(response => {
                return response.data;
            })
    },

    savePhoto(file) {
        const formData = new FormData();
        formData.append('image', file);

        return instance.put(`profile/photo/`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },

    saveProfile(profile) {
        return instance.put(`profile`, profile);
    },

}

export const authAPI = {

    authorization() {
        return instance.get(`auth/me`, {});
    },

    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {
            email, password, rememberMe,
        })
    },

    logout() {
        return instance.delete(`auth/login`)
    },

}

