import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {setPosts, setPostsPage} from "../store/action-creators/posts";
import search from "../img/icons/search.svg";

const Search = (props: any) => {

    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    const filteredPosts = props.posts.filter((p: { body: string; title: string }) => {
        return p.body.toLowerCase().includes(value.toLowerCase()) || p.title.toLowerCase().includes(value.toLowerCase())
    })
    const handle = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        dispatch(setPosts(filteredPosts))
    }

    return (
        <div className='form'>
            <form onSubmit={handle} className='search__form'>
                <input
                    type="text"
                    placeholder='Поиск'
                    className='search__input'
                    onChange={(event => setValue(event.target.value))}
                />
                <button className='search__button'><img src={search} alt=""/></button>
            </form>
        </div>
    );
};

export default Search;