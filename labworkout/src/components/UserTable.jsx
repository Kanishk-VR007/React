import React from 'react'
const UserTable=({users})=>{
    const activeUsers=users.filter(users=>users.status=="active");
    const inactiveUsers=users.filter(users=>users.status=="inactive");
    return(
        <div>
            <h1>Active Users</h1>
            <table>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
                </thead>
                <tbody>
                    {activeUsers.map((Users)=>{
                        <tr>
                            <td>
                                {Users.name}
                            </td>
                            <td>
                                {Users.email}
                            </td>
                            <tr>
                                {Users.phone}
                            </tr>
                        </tr>
                    }
                        )
                        }
                </tbody>
            </table>
            <h1>
                Inactive Users
            </h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th> Email</th>
                        <th>Phone</th>
                    </tr>
                </thead>
                <tbody>
                        {
                           inactiveUsers.map((user)=>{
                            <tr>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                           })
                        }
                </tbody>
            </table>
        </div>
    );
}
export default UserTable;
