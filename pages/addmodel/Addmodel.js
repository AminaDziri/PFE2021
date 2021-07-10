import React from "react";
import { Grid } from "@material-ui/core";



// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import { Typography } from "../../components/Wrappers";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
const theme = createMuiTheme();

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


export default function AddmodelPage () {
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
      <Typography variant="h5" color= "#16B4AC"  className={classes.text}>
      Modify the Shape
              </Typography>
        <Widget  disableWidgetMenu>
            <div > 
              
            <div id="upload-box">
            <ThemeProvider theme={theme}>
               <Typography variant="h6" color="#16B4AC">Upload your form HERE....</Typography>
            </ThemeProvider>
                <input type="file" onChange={handleUpload} />
                <p>Filename: {file.name}</p>
                <p>File type: {file.type}</p>
                <p>File size: {file.size} bytes</p>
                 
             </div>
             
               <FormControl fullWidth className={classes.margin} variant="outlined">
                   <InputLabel htmlFor="outlined-adornment-amount">Acceleration</InputLabel>
                    <OutlinedInput
                     id="outlined-adornment-amount"
                     value={values.amount}
                     onChange={handleChange('Acceleration')}
            
                      labelWidth={30}
                    />
              </FormControl>
              <FormControl fullWidth className={classes.margin} variant="outlined">
                   <InputLabel htmlFor="outlined-adornment-amount">Speed</InputLabel>
                    <OutlinedInput
                     id="outlined-adornment-amount"
                     value={values.amount}
                     onChange={handleChange('Speed')}
            
                      labelWidth={30}
                    />
              </FormControl>
              <FormControl fullWidth className={classes.margin} variant="outlined">
                   <InputLabel htmlFor="outlined-adornment-amount">Ray</InputLabel>
                    <OutlinedInput
                     id="outlined-adornment-amount"
                     value={values.amount}
                     onChange={handleChange('Ray')}
            
                      labelWidth={30}
                    />
              </FormControl>

              <TextField
                    id="outlined-full-width"
                    label="Offset on the X axis"
                    style={{ margin: 8 }}
                  
                    helperText="REQUIRED!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
               />

                  <TextField
                    id="outlined-full-width"
                    label="Offset on the Y axis"
                    style={{ margin: 8 }}
                    
                    helperText="REQUIRED!"
                    fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
               />

                  <TextField
                    id="outlined-full-width"
                    label="Offset on the Z axis"
                    style={{ margin: 8 }}
                   helperText="REQUIRED!" 
                     fullWidth
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                    }}
                    variant="outlined"
                 />
              
              
                         </div>
               <ToastContainer />
               <FormControl fullWidth className={classes.margin} variant="outlined">
               <Button onClick={() => toast('The element is successfully added')}
                 variant="contained"
                 color="primary"
                 size="large"
                 className={classes.button}
                 startIcon={<SaveIcon />}
                >
                Generate the form
               </Button>
               </FormControl>
               
               </Widget>
      
              
    </>
  );
}