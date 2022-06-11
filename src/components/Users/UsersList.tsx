import React, {Dispatch, SetStateAction} from 'react';
import { IUser } from "./IUser";
import {Link} from 'react-router-dom';

const UsersList = (
    {
        users,
        removeUser,
        params,
        setParams
    } : {
        users: IUser[],
        removeUser: (id: string | number) => void,
        params: {field: string, query: string},
        setParams: Dispatch<SetStateAction<{field: string, query: string}>>,
    }) => {
    return (
        <>
            {users.length
                ?
                <table className="table">
                    <thead>
                    <tr>
                        {Object.keys(users[0]).map((head) =>
                            <th key={head}
                                scope="row"
                                onClick={() => setParams({...params, field: head})}
                            >
                                {head}
                            </th>
                        )}
                        <th>action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) =>
                        <tr key={user.id}>
                            <td> {index + 1} </td>
                            <Link to={user.id.toString()}> {user.name} </Link>
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
            : <h2>Users don't exist</h2>}
        </>
    );
};

export default UsersList;