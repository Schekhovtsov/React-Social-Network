import s from './Users.module.css';
import {NavLink} from 'react-router-dom';
import noAvatarUser from '../../assets/images/no_avatar.png';
import React from 'react';

const UserItem = (props) => {

    return (
        <div>
            {
                props.users.map(user => <div className={s.friendsWrapper} key={user.id}>

                    <div>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : noAvatarUser} className={s.avatar}/>
                            </NavLink>
                        </div>
                    </div>

                    <div>
                        <div>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div>
                            <div>{/*'u.location.city'*/}</div>
                            <div>{/*'u.location.country'*/}</div>
                        </div>
                        <div>
                            {user.followed ?
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            props.deleteFriend(user.id);
                                        }}>DELETE FRIEND</button> :
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                        onClick={() => {
                                            props.addFriend(user.id);
                                        }}>ADD FRIEND</button>
                            }
                        </div>
                    </div>

                </div>)
            }
        </div>
    );

}

export default UserItem;