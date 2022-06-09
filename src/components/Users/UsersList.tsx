import React, { ChangeEvent, FC, useMemo, useState } from 'react';
import { USERS } from "./users";
import { initialUser } from './initialUser';
import { v4 as uuid4 } from "uuid";
import { IUser } from "./IUser";
import axios from "axios";
import http from "../../http";
import {useSearch} from "../../hooks/useUsers";

const UsersList: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [user, setUser] = useState(initialUser);
    const [isEditUser, setIsEditUser] = useState(false);
    const [searchedUsers, setSearchedUsers] = useState<IUser[]>([]);
    const [params, setParams] = useState({field:'', query:''});
    const sortedAndSearchedUsers = useSearch(users, params.field, params.query);

    const onSort = (field: string) => {
        if (!field) return;
        setSearchedUsers([...searchedUsers].sort((a: any, b: any) => a[field] < b[field] ? -1 : 1));
    }

    useMemo(() => {
        searchedUsers.length ? setSearchedUsers(searchedUsers) : setSearchedUsers(users);
    }, []);

    const getUsers = () => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(res => {
            setUsers(res.data);
        }).catch(error => {
            console.log(error);
        });
    };

    const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchedUsers(users.filter(user => user.email.toLowerCase().includes(event.target.value.toLowerCase())));
    };

    // VIEW CHANGE
    const clearUser = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event?.preventDefault();
        setUser({...initialUser, id: uuid4()});
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const field = event.target.id;
        setUser({ ...user, [field]: event.target.value });
    };

    // CRUD
    const addUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        http.post('https://jsonplaceholder.typicode.com/users', user).then(res => {
            setSearchedUsers([...searchedUsers, res.data]);
            clearUser();
        }).catch(error => {
            console.log(error);
        });
    };

    const removeUser = (id: number | string) => {
        const isDelete = window.confirm('Really delete this user?');
        if (isDelete) {
            setUsers(users.filter((user) => user.id !== id));
        }
    };

    return (
        <>
            <h1 className="m-5">Users</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Search</span>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Input email user"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    onChange={onSearch}
                />
            </div>
            <button className="btn btn-primary mb-2" onClick={() => setIsEditUser(!isEditUser)}>Show form</button>
            <button className="btn btn-success mb-2" onClick={() => getUsers()}>Fetch users</button>
            {isEditUser &&
                <form onSubmit={(event) => addUser(event)}>
                    <h4>Form for create User</h4>
                    {Object.keys(user).map((value, index) => {
                            if (value === 'id') return;
                            return <input className="form-control mb-1"
                                          key={index + 1}
                                          id={value}
                                          value={user[value as keyof Omit<IUser, 'address' | 'company'>]}
                                          placeholder={value}
                                          onChange={(event) => onChange(event)}/>;
                        }
                    )}
                    <button className="btn btn-success m-2">Add</button>
                    <button className="btn btn-danger m-2" onClick={(event) => clearUser(event)}>Clear</button>
                </form>
            }
            {searchedUsers
                ?
                <table className="table">
                    <thead>
                    <tr>
                        {Object.keys(users[0]).map(head => <th key={head} scope="row"
                                                               onClick={() => onSort(head)}>{head}</th>)}
                        <th>action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {searchedUsers.map((user, index) =>
                        <tr key={user.id}>
                            <td> {index + 1} </td>
                            <td> {user.name} </td>
                            <td> {user.username} </td>
                            <td> {user.email} </td>
                            <td> {user.address?.city} </td>
                            <td> {user.phone} </td>
                            <td> {user.website} </td>
                            <td> {user.company?.name} </td>
                            <td>
                                <button
                                    type="button"
                                    className="btn btn-outline-danger"
                                    onClick={() => removeUser(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            : ''}
        </>
    );
};

export default UsersList;