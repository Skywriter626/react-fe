import React, {FC} from 'react';
import { Link } from "react-router-dom";

const NavBar: FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <ul className="navbar-nav me-auto mb-2 mg-lg-0">
                    <li className="nav-item">
                        <Link to='users' className="nav-link active" aria-current="page">Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='posts' className="nav-link">Posts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;