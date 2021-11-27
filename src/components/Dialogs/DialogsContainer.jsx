import {addMessageCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import {compose} from 'redux';

let mapStateToProps = (state) => {
    return ({
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
    });
}

let mapsDispatchToProps = (dispatch) => {
    return ({
        onSendMessageClick: (newMessageBody) => {
            dispatch(addMessageCreator(newMessageBody));
        },
    });
}

export default compose(
    connect(mapStateToProps, mapsDispatchToProps),
    //withAuthRedirect
)(Dialogs);