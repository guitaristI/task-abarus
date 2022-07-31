import {PostAction, PostActionTypes, PostState} from "../../types/post";

const initialState = {
    posts: [],
    page: 1,
    loading: false,
    error: null,
    limit: 10
}

export const postsReducer = (state = initialState, action: PostAction): PostState => {
    switch (action.type) {
        case PostActionTypes.FETCH_POSTS:
            return {...state, loading: true}
        case PostActionTypes.FETCH_POSTS_SUCCESS:
            return {...state, loading: false, posts: action.payload}
        case PostActionTypes.FETCH_POSTS_ERROR:
            return {...state, loading: false, error: action.payload}
        case PostActionTypes.SET_POSTS_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}