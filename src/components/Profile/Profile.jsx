import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo {...props}
                         profile={props.profile}
                         isOwner={props.isOwner}
                         status={props.status}
                         updateStatus={props.updateStatus}
                         saveAvatar={props.saveAvatar}
                         saveProfile={props.saveProfile}  />
           {/* <PostsContainer />*/}
        </div>
    );

}

export default Profile;