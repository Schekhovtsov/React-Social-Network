import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _state: {

        profilePage: {
            posts: [
                {id: 1, text: 'Первый пост', likes: 2},
                {id: 2, text: 'Второй пост', likes: 43},
                {id: 3, text: 'Третий пост', likes: 3325},
            ],
            newPostText: 'from state POST',
        },

        dialogsPage: {
            dialogs: [
                {id: 1, img: 'https://sun1-23.userapi.com/s/v1/ig2/Dw1bqB3Nwx9huqMg4BYE1TuHabpSwEwBUyDuy05hYS-EKWNhndWspip7JwcmdAXPA3klShfDzwLYn4mV10s6un-G.jpg?size=200x200&quality=96&crop=0,0,2100,2100&ava=1', name: 'Илья'},
                {id: 2, img: 'https://sun1-86.userapi.com/s/v1/ig1/FaZAhfpSgvrHjFlbeNwtdxftobDsNix34Zmas0-ACJwC0aZKCRtcXxI2Nu8EzybHn-c-_I_P.jpg?size=200x289&quality=96&crop=0,0,1492,2160&ava=1', name: 'Евгений'},
                {id: 3, img: 'https://sun1-47.userapi.com/s/v1/if1/WCjgqTWcAoiTXEVnMx_Qz9LQfr8krZFZ3cikLmSjY1-Z-VHswoU58MyPAF9CsZ670kHg2Xfq.jpg?size=200x200&quality=96&crop=230,270,510,510&ava=1', name: 'Денис'},
            ],
            messages: [
                {id: 1, text: 'Первый текст'},
                {id: 2, text: 'Второй текст'},
                {id: 3, text: 'Третий текст'},
            ],
            newMessageText: 'from state MESSAGE',
        },

        sidebar: {
            friends: [
                {id: 1, img: 'https://sun1-23.userapi.com/s/v1/ig2/Dw1bqB3Nwx9huqMg4BYE1TuHabpSwEwBUyDuy05hYS-EKWNhndWspip7JwcmdAXPA3klShfDzwLYn4mV10s6un-G.jpg?size=200x200&quality=96&crop=0,0,2100,2100&ava=1', name: 'Илья'},
                {id: 2, img: 'https://sun1-86.userapi.com/s/v1/ig1/FaZAhfpSgvrHjFlbeNwtdxftobDsNix34Zmas0-ACJwC0aZKCRtcXxI2Nu8EzybHn-c-_I_P.jpg?size=200x289&quality=96&crop=0,0,1492,2160&ava=1', name: 'Евгений'},
                {id: 3, img: 'https://sun1-47.userapi.com/s/v1/if1/WCjgqTWcAoiTXEVnMx_Qz9LQfr8krZFZ3cikLmSjY1-Z-VHswoU58MyPAF9CsZ670kHg2Xfq.jpg?size=200x200&quality=96&crop=230,270,510,510&ava=1', name: 'Денис'},
            ]
        }

    },
    _callSubscriber() {},

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }

};





export default store;