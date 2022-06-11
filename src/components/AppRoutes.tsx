import React from 'react';
import Users from "../pages/Users";
import Posts from "../pages/Posts";
import {Route, Routes} from "react-router-dom";
import User from "../pages/User";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='users' element={<Users/>}/>
            <Route path='users/:id' element={<User/>}/>
            <Route path='posts' element={<Posts/>}/>
        </Routes>
    );
};

export default AppRoutes;