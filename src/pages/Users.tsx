import React, {useEffect, useState} from 'react';
import {IUser} from "../components/Users/IUser";
import {useSearch} from "../hooks/useSortAndSearch";
import AddUserForm from "../components/Users/AddUserForm";
import UsersList from "../components/Users/UsersList";
import http from "../http";

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [isEditUser, setIsEditUser] = useState(false);
    const [params, setParams] = useState({field:'', query:''});
    const sortedAndSearchedUsers = useSearch(users, params.field, params.query);

    useEffect(() => {
        getUsers();
    }, []);

    // CRUD
    const getUsers = () => {
        http.get('users').then(res => {
            setUsers(res.data);
        }).catch((error) => {
            console.log(error);
        });
    };

    const removeUser = (id: number | string) => {
        const isDelete = window.confirm('Really delete this user?');
        http.delete(`users/${id.toString()}`).then(res => console.log(res));
        if (isDelete) {
            setUsers(users.filter((user) => user.id !== id));
        }
    };

    return (
        <div className="container">
            <h1 className="m-5">Users</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Search</span>
                <input type="text"
                       className="form-control"
                       placeholder="Input email user"
                       aria-label="Username"
                       aria-describedby="basic-addon1"
                       onChange={(event) => setParams({...params, query: event.target.value})}
                />
            </div>
            <button className="btn btn-primary mb-2" onClick={() => setIsEditUser(!isEditUser)}>Show form</button>
            {isEditUser && <AddUserForm users={users} setUsers={setUsers}/>}
            <UsersList users={sortedAndSearchedUsers}
                       removeUser={removeUser}
                       params={params}
                       setParams={setParams}
            />
        </div>
    );
};

export default Users;