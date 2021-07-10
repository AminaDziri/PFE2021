import React from "react";

const UserTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>IP Address</th>
        <th>Port Number </th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.users.length > 0 ? (
        props.users.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(user);
                }}
                className="btn btn-warning"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteUser(user.id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No Arms....</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default UserTable;
