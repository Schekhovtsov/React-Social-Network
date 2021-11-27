import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let uri = '/dialogs/' + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <div className={s.avatar}>
                <img src={props.img} alt={props.name} />
            </div>
            <div className={s.name}>
                <NavLink to={uri}>{props.name}</NavLink>
            </div>
            <div className={s.text}>
                Текст сообщения
            </div>
        </div>
    );

}

export default DialogItem;