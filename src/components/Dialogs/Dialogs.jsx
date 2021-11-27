import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validator';

const maxLengthCreator5 = maxLengthCreator(5);

const AddMessageForm = (props) => {

    return(
        <form onSubmit={props.handleSubmit}>
            <label>
                Add new message <br/>
                <div>
                    <Field component={Textarea}
                           name={'newMessageBody'}
    /*                       TypeField={'textarea'}*/
                           validate={[required, maxLengthCreator5]} />
                </div>
            </label>
            <button>Отправить</button>
        </form>
    );

}

const Dialogs = (props) => {

    let dialogsElements =
        props.dialogs.map( d => <DialogItem key={d.id} id={d.id} name={d.name} img={d.img} /> );

    let messagesElements =
        props.messages.map( m => <Message key={m.id} text={m.text} /> );

    const MessageReduxForm = reduxForm({form: 'Message'})(AddMessageForm);

    const addNewMessage = (formData) => {
        props.onSendMessageClick(formData.newMessageBody);
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    { dialogsElements }
                </div>
                <div className={s.messages}>
                    <div>
                        { messagesElements }
                    </div>

                    <div className={s.newPostForm}>
                        <MessageReduxForm onSubmit={addNewMessage} />
                    </div>

                </div>
            </div>

        </div>
    );

}

export default Dialogs;