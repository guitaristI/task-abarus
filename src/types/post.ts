export interface PostState {
    posts: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}

export enum PostActionTypes {
    FETCH_POSTS = 'FETCH_POST',
    FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_ERROR = 'FETCH_POSTS_ERROR',
    SET_POSTS_PAGE = 'SET_POSTS_PAGE',
}

interface FetchPostsAction {
    type: PostActionTypes.FETCH_POSTS;
}

interface FetchPostsSuccessAction {
    type: PostActionTypes.FETCH_POSTS_SUCCESS;
    payload: any[];
}

interface FetchPostsErrorAction {
    type: PostActionTypes.FETCH_POSTS_ERROR;
    payload: string;
}

interface SetPostsPageAction {
    type: PostActionTypes.SET_POSTS_PAGE;
    payload: number;
}

export type PostAction =
    FetchPostsAction
    | FetchPostsSuccessAction
    | FetchPostsErrorAction
    | SetPostsPageAction;

export type Post = {
    id: string;
    title: string;
    body: string
}
