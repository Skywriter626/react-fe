import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {initialPost} from "../components/Posts/initialPost";
import {IPost} from "../components/Posts/IPost";
import http from "../http";

const Post = () => {
    const {id} = useParams();
    const [post, setPost] = useState<IPost>(initialPost);

    useEffect(() => {
        getPost();
    }, []);

    const getPost= () => {
        http.get(`posts/${id}`).then(res => {
            setPost(res.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
            </div>
        </div>
    );
};

export default Post;