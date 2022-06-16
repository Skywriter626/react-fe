import React, {Dispatch, SetStateAction} from 'react';
import {IPost} from "./IPost";
import {Link} from "react-router-dom";

const PostsList = (
    {
        posts,
        removePost,
        params,
        setParams
    } : {
        posts: IPost[],
        removePost: (id: string | number) => void,
        params: {field: string, query: string},
        setParams: Dispatch<SetStateAction<{field: string, query: string}>>
    }) => {

    return (
        <>
            {posts.length
                ?
                <table className="table">
                    <thead>
                    <tr>
                        {Object.keys(posts[0]).map((head) =>
                            <th key={head}
                                scope="row"
                                onClick={() => setParams({...params, field: head})}
                            >
                                {head}
                            </th>
                        )}
                        <th>action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map((post, index) =>
                        <tr key={post.id}>
                            <td> {index + 1} </td>
                            <Link to={post.id.toString()}> {post.id} </Link>
                            <td> {post.userId} </td>
                            <td> {post.title} </td>
                            <td> {post.body} </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => removePost(post.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
                : <h2>Posts don't exist</h2>}
        </>
    );
};

export default PostsList;