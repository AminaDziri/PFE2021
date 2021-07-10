import React, { useState,  Fragment  } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddForm";
import EditUserForm from "./forms/EditForm";
import "./index.css"
// styles

import classnames from "classnames";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SaveIcon from '@material-ui/icons/Save';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Button from '@material-ui/core/Button';


// components
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import ur5 from "../../images/ur5.png";
import ur from "../../images/robot.png";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme();



const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function DashboardPage() {
  const classes = useStyles();
  const usersData = [
    { id: 1, name: "192.168.1.100", username: "8001" },
    { id: 2, name: "192.168.1.102", username: "8003" },
    { id: 3, name: "192.168.1.103", username: "8004" },
    { id: 4, name: "192.168.1.108", username: "8009" }
  ];
  // sets initial form state - "blank slate"
  const initialFormState = { id: null, ip: "", port: "" };

  // set state Hooks syntax - you define the two params in [x, y].
  // useState comes from React import for handling state
  const [users, setUsers] = useState(usersData);
  const [editing, setEditing] = useState(false);
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // increment the ID of the new user manually - function will
  // take a user object as a parameter & add them to the users array of objects
  // the ...users code ensures that all the previous users remain in the array
  const addUser = (user) => {
    user.id = user.length + 4;
    setUsers([...users, user]);
  };

  // pass deleteUser through props to UserTable
  // use setter to take ID of user & filter them out of the users array
  const deleteUser = (id) => {
    setEditing(false);

    setUsers(users.filter((user) => user.id !== id));
  };

  const editRow = (user) => {
    setEditing(true);
    setCurrentUser({ id: user.id, name: user.name, username: user.username });
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
  };

  // deleteUser() fixed -> had to add function to <EditUserForm>
  return (
    <>
     <Grid container spacing={4}>
        <Grid item xs={12}>
        <Widget disableWidgetMenu>
          <Grid container item xs={12}>
          
          <Widget  noWidgetShadow disableWidgetMenu noBodyPadding noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}> 
      <div className="container">
      
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit Arm</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
                deleteUser={deleteUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2> Add A Robotic Arm  <img src={ur5} width="80" /></h2>
              <Grid item xs={4}>
                
               </Grid>
              <AddUserForm addUser={addUser} />
              <h2>View Arms <img src={ur} width="80" /></h2>
              <div className="flex-row">
              <UserTable users={users} editRow={editRow} deleteUser={deleteUser} /> </div>
            </Fragment>
          )}
        </div>
        
      </div>
    </div>
    </Widget>
    
    </Grid>
    
    </Widget>
    </Grid>
    </Grid>
    </>
  );
}
