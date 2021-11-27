import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader';
import noAvatarUser from '../../../assets/images/no_avatar.png';
import ProfileStatus from './ProfileStatus.jsx';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({profile,
                     status, updateStatus}) => {

    if (!profile) {
        return <Preloader />
    }

    return (

        <div className={s.contentGrid}>


                {profile.photos.large != null ? (
                    <div className={s.profileImage}>
                        <img src={profile.photos.large} alt='Изображение профиля'/>
                    </div> ) : (
                    <div className={s.profileImage}>

                            Обложка не загружена

                    </div> )
                }

            <div className={s.avatar}>
                <img src={
                    profile.photos.small != null ? profile.photos.small : noAvatarUser
                } alt='Аватар'/>
            </div>

            <div className={s.bio}>
                <div className={s.name}>
                    { profile.fullName }
                </div>
                <div className={s.desc}>
                    <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
                    { profile.aboutMe ? 'About me: ' + profile.aboutMe : null } <br /><br />
                    { profile.lookingForAJob ? 'Ищу работу' : 'Не ищу работу'} <br /><br />
                    { profile.contacts.twitter ? profile.contacts.twitter : null} <br />
                    { profile.contacts.vk ? profile.contacts.vk : null} <br />
                    { profile.contacts.github ? profile.contacts.github : null} <br />
                </div>
            </div>

        </div>

    );

}

export default ProfileInfo;