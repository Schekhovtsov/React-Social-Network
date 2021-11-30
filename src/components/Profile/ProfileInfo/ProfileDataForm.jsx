import s from './ProfileInfo.module.css';
import {Contact} from './ProfileInfo';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../../common/FormsControls';
import {required} from '../../../utils/validators/validator';
import React from 'react';
import sFormControl from '../../common/FormsControls.module.css';

const ProfileForm = ({profile, handleSubmit, initialValues, error}) => {

    return (
        <form onSubmit={handleSubmit}>

            { (error) &&
            <div className={sFormControl.formSomeError}>
                {error}
            </div> }

            <button>Сохранить</button>

            <div>
                Имя:
                <Field placeholder={profile.fullName}  name={'fullName'}
                       component={Input}
                       validate={[required]} />
            </div>

           {/* {profile.aboutMe ? 'About me: ' + profile.aboutMe : null} <br/><br/>*/}

            <div>
                Обо мне: <br />
                <Field placeholder={profile.aboutMe}  name={'aboutMe'}
                       component={'textarea'}
                       validate={[required]}/>
            </div>

{/*            {profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}
            {profile.lookingForAJobDescription && <div>{profile.lookingForAJobDescription}</div>} <br/>*/}

            <div>
                Ищу работу:
                <Field name={'lookingForAJob'}
                       component={Input}
                       type={'checkbox'} />
            </div>

            <div>
                Скилы: <br />
                <Field placeholder={profile.lookingForAJobDescription}  name={'lookingForAJobDescription'}
                       component={'textarea'}
                       validate={[required]}/>
            </div>

            {Object.keys(profile.contacts).map(key => {
                    return (
                        <div key={key} className={s.contact}>
                            <b>{key}:</b>
                            <Field placeholder={key}  name={'contacts.'+key}
                                   component={Input} />
                        </div>
                    );
                }
            )}

        </form>
    );
}

const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileForm);

const ProfileDataForm = ({profile, onSubmit, formData}) => {

/*    function onSubmit(formData) {
        console.log(formData);
    }*/

    return (
        <ProfileDataReduxForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
    );

}

export default ProfileDataForm;