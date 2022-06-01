import React, { FC } from 'react';
import { USERS } from "./users";

const UsersList: FC = () => {
    return (
        <>
            <h1 className="m-5">Users</h1>
            <table className="table">
                <thead>
                <tr>
                    {Object.keys(USERS[0]).map(head => <th scope="row">{ head }</th>)}
                </tr>
                </thead>
                <tbody>
                {USERS.map(user => <tr>
                    <td> {user.id} </td>
                    <td> {user.name} </td>
                    <td> {user.username} </td>
                    <td> {user.email} </td>
                    <td> {user.address.city} </td>
                    <td> {user.phone} </td>
                    <td> {user.website} </td>
                    <td> {user.company.name} </td>
                </tr>)}
                </tbody>
            </table>
        </>
    );
};

export default UsersList;