import React, {useContext} from 'react';
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import {Route, Routes} from "react-router-dom";
import User from "../pages/User";
import Login from "./Login";
import Context from "./context/context";

const AppRoutes = () => {
    const {isAuth} = useContext(Context);
    {
        if (isAuth) {
            return (
                <Routes>
                    <Route path='users' element={<Users/>}/>
                    <Route path='users/:id' element={<User/>}/>
                    <Route path='posts' element={<Posts/>}/>
                    <Route path='*' element={<User/>}/>
                </Routes>
            );
        }
        return (
            <Routes>
                <Route path='login' element={<Login/>}/>
            </Routes>
        );
    }
};

export default AppRoutes;