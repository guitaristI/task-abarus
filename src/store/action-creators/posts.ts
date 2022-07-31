import {Dispatch} from "redux";
import {PostAction, PostActionTypes} from "../../types/post";
import axios from "axios";


export const fetchPosts = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<PostAction>) => {
        try {
            dispatch({type: PostActionTypes.FETCH_POSTS})
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`, {
                params: {_page: page, _limit: limit}
            })
            dispatch({type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: PostActionTypes.FETCH_POSTS_ERROR, payload: 'an error occurred when uploading posts'})
        }
    }
}

export const setPostsPage = (page: number): PostAction => {
    return {type: PostActionTypes.SET_POSTS_PAGE, payload: page}
}

export const setPosts = (posts: any) => {
    return {type: PostActionTypes.FETCH_POSTS_SUCCESS, payload: posts}
}