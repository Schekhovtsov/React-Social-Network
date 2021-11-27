import s from "./FriendItem.module.css";
import {NavLink} from "react-router-dom";

const FriendItem = (props) => {

    let uri = '/dialogs/' + props.id;

    return (
        <div className={s.item}>
            <div className={s.image}>
                <NavLink to={uri}>
                    <img src={props.img} alt={props.name} />
                </NavLink>
            </div>
            <div className={s.name}>
                <NavLink to={uri}>
                    { props.name }
                </NavLink>
            </div>
        </div>
    );
}

export default FriendItem;

