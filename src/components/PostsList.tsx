import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchPosts, setPosts, setPostsPage} from "../store/action-creators/posts";
import Table from "./Table";
import Search from "./Search";
import Pagination from "./Pagination";
import Preloader from "./Preloader";

const PostsList: React.FC = () => {
    const {posts, page, loading, error, limit} = useTypedSelector(state => state.posts);
    const dispatch = useDispatch();

    const sortData = (sort: any) => {
        const sortedPosts = [...posts].sort((a: any, b: any) => b[sort] > a[sort] ? 1 : -1);
        dispatch(setPosts(sortedPosts));
    }

    useEffect(() => {
        dispatch(fetchPosts(page, limit) as any)
    }, [page])

    return (
        <div className='container'>
            <Search posts={posts}/>
            {loading ? <Preloader/> :
                <Table posts={posts} sortData={sortData}/>
            }
            <Pagination pageSize={limit} currentPage={page} totalItemsCount={100}/>
        </div>
    );
};

export default PostsList;