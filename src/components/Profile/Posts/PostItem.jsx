import s from './PostItem.module.css';

const PostItem = (props) => {

    return (

        <div className={s.post}>
            <div className={s.avatar}>
                <img src='https://cldup.com/8lhI-gKnI2.jpg' alt='Аватар пользователя'/>
            </div>
            <div className={s.text}>
                {props.message}
            </div>
            <div className={s.likes}>
                Likes: {props.likes}
            </div>
        </div>

    );

}

export default PostItem;