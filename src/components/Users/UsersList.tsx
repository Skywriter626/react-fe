import React, { ChangeEvent, FC, useMemo, useState } from 'react';
import { USERS } from "./users";
import { initialUser } from './initialUser';
import { v4 as uuid4 } from "uuid";
import { IUser } from "./IUser";

const UsersList: FC = () => {
    const [users, setUsers] = useState(USERS);
    const [user, setUser] = useState(initialUser);
    const [isEditUser, setIsEditUser] = useState(false);
    const [searchedUsers, setSearchedUsers] = useState<IUser[]>([]);

    const onSort = (field: string) => {
        users.sort((a: any, b: any) => a[field] < b[field] ? -1 : 1);
    }

    useMemo(() => {
        searchedUsers.length ? setSearchedUsers(searchedUsers) : setSearchedUsers(users);
    }, [])

    const onSearch = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchedUsers(users.filter(user => user.email.toLowerCase().includes(event.target.value.toLowerCase())));
    };

    const clearUser = (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event?.preventDefault();
        setUser({...initialUser, id: uuid4()});
    }

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const field = event.target.id;
        setUser({ ...user, [field]: event.target.value });
    };
    const addUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setUsers([...users, user]);
        clearUser();
    };

    const removeUser = (id: number | string) => {
        const isDelete = window.confirm('Really delete this user?');
        if (isDelete) {
            setUsers(users.filter(user => user.id !== id));
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
            {isEditUser
                ?
                <form onSubmit={(event) => addUser(event)}>
                    <h4>Form for create User</h4>
                    {Object.keys(user).map((value, index) => {
                            if (value === 'id') return;
                            return <input className="form-control mb-1"
                                          key={index + 1}
                                          id={value}
                                            // @ts-ignore
                                          value={user[value]}
                                          placeholder={value}
                                          onChange={(event) => onChange(event)}/>;
                        }
                    )}
                    <button className="btn btn-success m-2">Add</button>
                    <button className="btn btn-danger m-2" onClick={(event) => clearUser(event)}>Clear</button>
                </form>
            :''}
            <table className="table">
                <thead>
                <tr>
                    {Object.keys(users[0]).map(head => <th key= { head } scope="row" onClick={() => onSort(head)}>{ head }</th>)}
                    <th>action</th>
                </tr>
                </thead>
                <tbody>
                    {searchedUsers.map((user, index) =>
                        <tr key={user.id}>
                            <td> {user.id} </td>
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
                                    onClick= { () => removeUser(user.id) }
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default UsersList;