import s from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import FriendsContainer from "./Friends/FriendsContainer";

const sidebar = (props) => {

    return (
        <div>
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to='/profile'>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs'>Messages</NavLink>
                </div> <br />
                <div className={s.item}>
                    <NavLink to='/users'>Users</NavLink>
                </div>
              {/*  <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                </div>*/}
            </nav>

            <FriendsContainer />
        </div>

    );

}

export default sidebar;