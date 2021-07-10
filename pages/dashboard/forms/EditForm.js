import React, { useState, useEffect } from "react";

const EditForm = (props) => {
  const [user, setUser] = useState(props.currentUser);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    setUser(props.currentUser);
  }, [props]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();

        props.updateUser(user.id, user);
      }}
    >
      <label>IP Address</label>
      <input
        type="text"
        ipaddress="IP Address"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>Port Number</label>
      <input
        type="text"
        name="Port Number"
        value={user.username}
        onChange={handleInputChange}
      />
      <button className="btn btn-success">Update Arm</button>
      <button
        onClick={() => props.setEditing(false)}
        className="btn btn-warning" color="#af0b0b"
      >
        Cancel
      </button>
    </form>
  );
};

export default EditForm;
