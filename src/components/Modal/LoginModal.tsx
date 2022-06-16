import React, {ChangeEvent, Dispatch, SetStateAction, useContext, useState} from 'react';
import Context from "../context/context";
import http from "../../http";
import {initialUser} from "../Users/initialUser";
import {v4 as uuid4} from "uuid";
import user from "../../pages/User";
import users from "../../pages/Users";

const LoginModal = (
            {
                showModal,
                setShowModal
            } : {
                showModal: boolean,
                setShowModal: Dispatch<SetStateAction<boolean>>
            }) => {
    const initialAuth = {username: '', password: ''};
    const [auth, setAuth] = useState(initialAuth);

    const {setIsAuth} = useContext(Context);

    const login = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        http.post('https://fakestoreapi.com/auth/login', auth).then((res) => {
            localStorage.setItem('token', res.data.token);
            clearAuth();
        }).catch((err) => {
            console.log(err);
        });
        setIsAuth(true);
        setShowModal(false);
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const field = event.target.id;
        setAuth({ ...auth, [field]: event.target.value });
    };

    const clearAuth = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event?.preventDefault();
        setAuth(initialAuth);
    }

    return (
        <div className={`modal ${showModal && 'd-block'}`} tabIndex={-1}>
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Modal title</h5>
                        <button
                            onClick={() => setShowModal(false)}
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        />
                    </div>
                    <div className="modal-body">
                        <p>Login in App</p>
                        <input id="username" value={auth.username} placeholder="input your email" onChange={onChange}/>
                        <input id="password" value={auth.password} placeholder="input your password" onChange={onChange} type="password"/>
                    </div>
                    <div className="modal-footer">
                        <button onClick={() => setShowModal(false)} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={(event) => login(event)} type="button" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;