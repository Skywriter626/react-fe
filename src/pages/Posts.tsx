import React, {useEffect, useState} from 'react';
import {IPost} from "../components/Posts/IPost";
import http from "../http";

const Posts = () => {
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        getPosts();
    }, []);

    const getPosts = () => {
        http.get('posts').then(res => {
            setPosts(res.data);
        }).catch((err) => {
            console.log(err);
        });
    };

    const removePost = (id: number | string) => {
        const isDelete = window.confirm('Really delete this post?');
        http.delete(`posts/${id.toString()}`).then(res => console.log(res));
        if (isDelete) {
            setPosts(posts.filter((post) => post.id !== id));
        }
    };

    return (
        <div>
           <h1>Posts</h1>
        </div>
    );
};

export default Posts;