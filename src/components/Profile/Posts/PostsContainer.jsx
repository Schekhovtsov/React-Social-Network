import React from "react";
import {addPostCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {compose} from 'redux';

class PostsContainer extends React.Component {

    render() {
        return <Posts {...this.props} />
    }

}

let mapStateToProps = (state) => {
    return ({
        profilePage: state.profilePage,
    });
}

let mapsDispatchToProps = (dispatch) => {
    return ({
        onAddPostClick: (newPostBody) => {
            dispatch(addPostCreator(newPostBody));
        },
    });
}


export default compose(
    connect(mapStateToProps, mapsDispatchToProps)
)(PostsContainer);