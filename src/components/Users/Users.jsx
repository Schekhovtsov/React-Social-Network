import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import UserItem from './UserItem';

const Users = ({pageSize, currentPage, onPageChanged,
               users, totalUsersCount, followingInProgress,
               addFriend, deleteFriend, ...props}) => {



    return (
        <div>

            <Paginator whoPaginating={'users'}
                       currentPage={currentPage}
                       onPageChanged={onPageChanged}
                       pageSize={pageSize}
                       totalItemsCount={totalUsersCount}
                       batchSize={15}
            />

            <UserItem users={users}
                      followingInProgress={followingInProgress}
                      addFriend={addFriend}
                      deleteFriend={deleteFriend}/>


        </div>
    );

};

export default Users;