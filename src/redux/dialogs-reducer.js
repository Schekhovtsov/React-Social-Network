const ADD_MESSAGE = 'ADD-MESSAGE';

let initialStore = {
    dialogs: [
        {
            id: 1,
            img: 'https://sun1-23.userapi.com/s/v1/ig2/Dw1bqB3Nwx9huqMg4BYE1TuHabpSwEwBUyDuy05hYS-EKWNhndWspip7JwcmdAXPA3klShfDzwLYn4mV10s6un-G.jpg?size=200x200&quality=96&crop=0,0,2100,2100&ava=1',
            name: 'Илья'
        },
        {
            id: 2,
            img: 'https://sun1-86.userapi.com/s/v1/ig1/FaZAhfpSgvrHjFlbeNwtdxftobDsNix34Zmas0-ACJwC0aZKCRtcXxI2Nu8EzybHn-c-_I_P.jpg?size=200x289&quality=96&crop=0,0,1492,2160&ava=1',
            name: 'Евгений'
        },
        {
            id: 3,
            img: 'https://sun1-47.userapi.com/s/v1/if1/WCjgqTWcAoiTXEVnMx_Qz9LQfr8krZFZ3cikLmSjY1-Z-VHswoU58MyPAF9CsZ670kHg2Xfq.jpg?size=200x200&quality=96&crop=230,270,510,510&ava=1',
            name: 'Денис'
        },
    ],
    messages: [
        {id: 1, text: 'Первый текст'},
        {id: 2, text: 'Второй текст'},
        {id: 3, text: 'Третий текст'},
    ],
};

const dialogsReducer = (state = initialStore, action) => {


    switch (action.type) {

        case ADD_MESSAGE: {
            return {
                ...state,
                messages: [...state.messages, {id: 4, text: action.text}]
            };
        }

        default:
            return state;

    }

}

export const addMessageCreator = (text) => ({type: ADD_MESSAGE, text: text});

export default dialogsReducer;