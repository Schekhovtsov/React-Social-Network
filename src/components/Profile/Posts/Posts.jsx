import React from 'react';
import s from './Posts.module.css';
import PostItem from './PostItem';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, required} from '../../../utils/validators/validator';
import {Textarea} from '../../common/FormsControls';

const maxLengthCreator5 = maxLengthCreator(5);

const AddPostForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <label>
                Add new comment <br/>
                <div>
                    <Field component={Textarea} name={'newPostBody'}
                           placeholder={'Post message'}
 /*                          TypeField={'textarea'}*/
                           validate={[required, maxLengthCreator5]} />
                </div>
            </label>
            <button>Отправить</button>
        </form>
    );

}

const Posts = React.memo(props => {

    let posts = [...props.profilePage.posts]
                .reverse()
                .map(p => <PostItem key={p.id} message={p.text} likes={p.likes}/>);

    const PostReduxForm = reduxForm({form: 'Post'})(AddPostForm);

    const addNewMessage = (formData) => {
        props.onAddPostClick(formData.newPostBody);
    }

    return (

        <div className={s.posts}>

            <div className={s.title}>
                <h2>My Posts</h2>
            </div>

            <div>
                <PostReduxForm onSubmit={addNewMessage}/>
            </div>

            <div className={s.posts}>
                {posts}
            </div>

        </div>
    );

});

export default Posts;