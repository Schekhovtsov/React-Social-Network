import s from './ProfileInfo.module.css';
import {Contact} from './ProfileInfo';
import {Field, reduxForm} from 'redux-form';
import {Input} from '../../common/FormsControls';
import {required} from '../../../utils/validators/validator';
import React from 'react';

const ProfileForm = ({profile, handleSubmit, error}) => {

    return (
        <form onSubmit={handleSubmit}>

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
                       component={'textarea'} />
            </div>

{/*            {profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}
            {profile.lookingForAJobDescription && <div>{profile.lookingForAJobDescription}</div>} <br/>*/}

            <div>
                Ищу работу:
                <Field name={'lookingForAJob'}
                       component={Input}
                       type={'checkbox'}
                       validate={[required]} />
            </div>

            <div>
                Скилы: <br />
                <Field placeholder={profile.lookingForAJobDescription}  name={'lookingForAJobDescription'}
                       component={'textarea'} />
            </div>

            {/*{Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                }
            )}*/}
        </form>
    );
}

const ProfileDataReduxForm = reduxForm({form: 'editProfile'})(ProfileForm);

const ProfileDataForm = ({profile}) => {

    function onSubmit(formData) {
        console.log(formData);
    }

    return (
        <ProfileDataReduxForm profile={profile} onSubmit={onSubmit} />
    );

}

export default ProfileDataForm;