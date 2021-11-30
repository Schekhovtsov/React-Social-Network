import FriendItem from "./FriendItem";
import s from './Friends.module.css';

const Friends = (props) => {

    let friendsElements =
        props.friends.map(f => (
            <div key={f.id}>
                <FriendItem id={f.id} img={f.img} name={f.name}/>
            </div>)
        );

    return (

        <div className={s.friendsWrapper}>
            <h3>Friends</h3>
            <div className={s.friendsGrid}>
                {friendsElements}
            </div>
        </div>

    );

}

export default Friends;

