import React from 'react';
import {Post} from "../types/post";

const Table = (props: any) => {
    return (

        <table className='table'>
            <thead>
            <tr>
                <th><span onClick={() => {
                    props.sortData('id')
                }}>ID</span></th>
                <th><span onClick={() => {
                    props.sortData('title')
                }}>Значение</span></th>
                <th><span onClick={() => {
                    props.sortData('body')
                }}>Описание</span></th>
            </tr>
            </thead>
            <tbody>
            {(props.posts as Post[]).map(post =>
                <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};

export default Table;