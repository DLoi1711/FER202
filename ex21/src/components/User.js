import React from 'react';
import { Link, useParams } from 'react-router-dom';

const users = [
    { id: 1, firstName: "John", lastName: "Done", age: 25 },
    { id: 2, firstName: "Mary", lastName: "Thompson", age: 35 },
    { id: 3, firstName: "John", lastName: "Smith", age: 30 },
    { id: 4, firstName: "Emily", lastName: "Johnson", age: 25 },
    { id: 5, firstName: "William", lastName: "Davis", age: 34 }
];

export const UserList = () => (
    <div>
        <h2>Users</h2>
        <ul>
            {users.map(user => (
                <li key={user.id}>
                    <Link to={`/users/${user.id}`}>{user.firstName} {user.lastName}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export const UserDetail = () => {
    let { id } = useParams();
    const user = users.find(u => u.id === parseInt(id));
    return user ? (
        <div>
            <h2>{user.firstName} {user.lastName}</h2>
            <p>Age: {user.age}</p>
            <Link to="/users">Back to Users</Link>
        </div>
    ) : <p>User not found</p>;
};