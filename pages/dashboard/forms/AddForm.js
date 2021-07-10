import React, { useState } from "react";

const AddForm = (props) => {
  const initialFormState = { id: null, name: "", username: "" };
  const [user, setUser] = useState(initialFormState);

  // should this be a different var type? table is not updating with new additions
  // update state based on event in input
  const inputHandler = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form
      onSubmit={(event) => {
        // default event for form is submit (preventing with a check)
        event.preventDefault();
        if (!user.name || !user.username) {
          alert("Enter both an IP Address and Port Number  please!");
          return;
        } else {
          props.addUser(user);
          setUser(initialFormState);
        }
      }}
    >
      <label>IP Address</label>
      <input
        type="text"
        name="name"
        placeholder="Enter a IP Address.."
        value={user.name}
        onChange={inputHandler}
      />
      <label>Port Number</label>
      <input
        type="text"
        name="username"
        placeholder="Enter a Port Number..."
        value={user.username}
        onChange={inputHandler}
      />
      <button className="btn btn-success">Add New Arm</button>
    </form>
  );
};

export default AddForm;
