import {createSelector} from 'reselect';

const getUsersSelector = (state) => {
    return state.usersPage.users;
}

// Если в state не будет меняться значение users, ф-я перезапускаться не будет
export const getUsers = createSelector(getUsersSelector,
    (users) => {
    // фейковая фильтрация
    return users.filter(u => true);
} );

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching;
}

export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress;
}
