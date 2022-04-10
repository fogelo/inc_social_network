import {addPostAC, profileReducer} from './profile-reducer';

test('post should be added', () => {
    const startState = {
        posts: [
            {id: '1', post: 'Я попал в инкубатор', likesCount: 12},
            {id: '2', post: 'Я выучил CSS', likesCount: 1},
            {id: '3', post: 'Я выучил JS', likesCount: 122},
            {id: '4', post: 'Я выучил React', likesCount: 312},
        ],
    }

    const action = addPostAC('newPost')

    const endState = profileReducer(startState, action)

    expect(endState.posts.length).toBe(5)
})