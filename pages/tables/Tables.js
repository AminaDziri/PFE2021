import React, { useState,  Fragment  } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { ToastContainer, toast } from 'react-toastify';
import FormControl from '@material-ui/core/FormControl';
import ButtonGroup from '@material-ui/core/ButtonGroup';

// components

import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";

// data
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';



const theme = createMuiTheme();
const datatableData = [
  ["PP_spray_v0","WayPoints0.csv"],
  ["PP_spray_v1","WayPoints1.csv"],
  ["PP_spray_v2","WayPoints2.csv"],
  ["PP_spray_v3","WayPoints3.csv"],
];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: '25ch',
  },
}));


export default function Tables() {
  const classes = useStyles();
const [values, setValues] = React.useState({
  amount: '',
  password: '',
  weight: '',
  weightRange: '',
  showPassword: false,
});

const handleChange = (prop) => (event) => {
  setValues({ ...values, [prop]: event.target.value });
};

const handleClickShowPassword = () => {
  setValues({ ...values, showPassword: !values.showPassword });
};

const handleMouseDownPassword = (event) => {
  event.preventDefault();
};
// State to store uploaded file
const [file, setFile] = React.useState("");  
// Handles file upload event and updates state
function handleUpload(event) {
  setFile(event.target.files[0]);

  // Add code here to upload file to server
  // ...
}
  return (
    <>
        <Grid item xs={12}>
        <Widget disableWidgetMenu>
          <Grid container item xs={12}>
          <Grid item xs={8}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
        <Typography  variant="h2" color="primary"  className={classes.text}>
        Design PP_spray Denim
              </Typography>
              
              <Widget  disableWidgetMenu >
              <div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">Enter name of the new design</i>
          <textarea id="icon_prefix2" class="materialize-textarea"></textarea>
          <div class="input-field col s6">
            <div>
            <input type="file" onChange={handleUpload} />
               <p color="primary">File type: {file.type}</p>
            </div>
            
          
          
          </div>
          <div class="input-field col s6">
            <div>
            <input type="file" onChange={handleUpload} />
               <p color="primary">File type: {file.type}</p>
            </div>
            
          
            <FormControl fullWidth className={classes.margin} variant="outlined">
               <ButtonGroup size="large" color="primary" aria-label="large outlined primary button group">
                 <Button onClick={() => toast('The Design is successfully added')}
                 variant="contained"
                 color="primary"
                 size="SMALL"
                 className={classes.button}
                 startIcon={<SaveIcon />}> Generate Trajectory</Button>
                
               </ButtonGroup>
                </FormControl>
          </div>
          </div>
    
        </div>
        
        <MUIDataTable
            title="Designs List"
            data={datatableData}
            columns={["Design", "Trajectory"]}
            options={{
              filterType: "checkbox",
            }}
          />
      
    </form>
  </div>
               </Widget>
              
         
        </Grid>
      </Grid>
        
            </Grid>
            </Grid>
          </Widget>
        </Grid>
     
    
    </>
  );
}
