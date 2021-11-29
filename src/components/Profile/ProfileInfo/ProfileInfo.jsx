import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import noAvatarUser from '../../../assets/images/no_avatar.png';
import ProfileStatus from './ProfileStatus.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import ProfileDataForm from './ProfileDataForm';
import {useState} from 'react';

export const Contact = ({contactTitle, contactValue}) => {
    return <div><b>{contactTitle}</b>: {contactValue} </div>
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return (
        <div>
            {isOwner && <button onClick={goToEditMode}>Редактировать</button>}
            {profile.aboutMe ? 'About me: ' + profile.aboutMe : null} <br/><br/>
            {profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'}
            {profile.lookingForAJobDescription && <div>{profile.lookingForAJobDescription}</div>} <br/>

            {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
                }
            )}
        </div>
    );
}

const ProfileInfo = ({ profile, isOwner,
                         status, updateStatus, saveAvatar
                     }) => {


    const [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const avatarSelected = (e) => {
        if (e.target.files.length) {
            saveAvatar(e.target.files[0]);
        }
    }

    return (

        <div className={s.contentGrid}>

            {profile.photos.large != null ? (
                <div className={s.profileImage}>
                    <img src={profile.photos.large} alt="Изображение профиля"/>
                </div>) : (
                <div className={s.profileImage}>

                    Обложка не загружена

                </div>)
            }

            <div className={s.avatar}>
                <img src={
                    profile.photos.small || noAvatarUser
                } alt="Аватар"/>
            </div>

            <div className={s.bio}>
                <div className={s.name}>
                    {profile.fullName}
                </div>
                <div className={s.desc}>

                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>

                    { editMode
                        ? <ProfileDataForm profile={profile} />
                        : <ProfileData profile={profile}
                                       isOwner={isOwner}
                                       goToEditMode={ () => { setEditMode(true) } } /> }

                    {isOwner && <div> Загрузить аватар: <input type="file" onChange={avatarSelected}/></div>}
                </div>
            </div>

        </div>

    );

}

export default ProfileInfo;