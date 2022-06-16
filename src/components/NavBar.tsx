import React, {FC, useContext, useState} from 'react';
import { Link } from "react-router-dom";
import Context from "./context/context";
import jwtDecode from "jwt-decode";
import user from "../pages/User";

const NavBar: FC = () => {
    const {isAuth, setIsAuth} = useContext(Context);
    //const [currentUser, setCurrentUser] = useState({user: ''});

    const logOut = () => {
        setIsAuth(false);
        localStorage.clear();
    }

    //const token = localStorage.getItem('token') || '';

    // if (token) {
    //     setCurrentUser(jwtDecode(token));
    // }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                {isAuth
                    ?
                    <ul className="navbar-nav me-auto mb-2 mg-lg-0">
                        <li className="nav-item">
                            <Link to='users' className="nav-link active" aria-current="page">Users</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='posts' className="nav-link">Posts</Link>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => logOut()} className="btn-primary mt-1">LogOut</button>
                        </li>
                        {/*<li>*/}
                        {/*    <p className="btn btn-primary m-5">{`Current user ${currentUser.user}`}</p>*/}
                        {/*</li>*/}
                    </ul>
                    :
                    <ul className="navbar-nav me-auto mb-2 mg-lg-0">
                        <li className="nav-item">
                            <Link to='login' className="nav-link active" aria-current="page">Authorization</Link>
                        </li>
                    </ul>
                }
            </div>
        </nav>
    );
};

export default NavBar;