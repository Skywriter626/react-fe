import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import http from "../http";
import {IUser} from "../components/Users/IUser";
import {initialUser} from "../components/Users/initialUser";

const User = () => {
    const {id} = useParams();
    const [user, setUser] = useState<IUser>(initialUser);

    useEffect(() => {
        getUser();
    }, []);

    //CRUD
    const getUser = () => {
        http.get(`users/${id}`).then(res => {
            setUser(res.data);
        }).catch((err) => {
            console.log(err);
        });
    };
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.email}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item</li>
                <li className="list-group-item">A second item</li>
                <li className="list-group-item">A third item</li>
            </ul>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
        </div>
    );
};

export default User;