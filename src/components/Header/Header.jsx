import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header = (props) => {

    return (
        <header className={s.header}>
            <div className={s.headerBody}>
                <div className={s.siteTitle}>
                    <a href='/'>My React Social Network</a>
                </div>
                <div className={s.loginBlock}>
                    <div className={s.body}>
                        { props.isAuth === true ?
                            <div>
                                {props.login}
                                <button onClick={props.logout}>Выйти</button>
                            </div> :
                            <NavLink to={'/login'}>Войти</NavLink> }

                    </div>
                </div>
            </div>
        </header>
    );

}

export default Header;