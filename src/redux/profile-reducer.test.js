import profileReducer, {addPostCreator, deletePostCreator} from './profile-reducer';

let state = {
    posts: [
        {id: 1, text: 'Первый пост', likes: 2},
        {id: 2, text: 'Второй пост', likes: 43},
        {id: 3, text: 'Третий пост', likes: 3325},
    ],
    newPostText: 'from state POST',
    profile: null,
    status: '',
};

test('length of post should be incremented', () => {

    let action = addPostCreator('it-kamasutra');

    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(4);
});

test('message of new post should be correct', () => {

    let action = addPostCreator('it-kamasutra');

    let newState = profileReducer(state, action);

    expect (newState.posts[3].text).toBe('it-kamasutra')
});

test('length of array should be decrement after deleting', () => {

    let action = deletePostCreator(1);

    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(2)
});

test('length of array shouldn t be decrement after deleting if id is incorrect', () => {

    let action = deletePostCreator(1000);

    let newState = profileReducer(state, action);

    expect (newState.posts.length).toBe(3)
});