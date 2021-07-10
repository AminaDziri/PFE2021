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
import ur5 from "../../images/ur5.png"
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


export default function TypographyPage() {
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
 
      <Grid container spacing={8}>
        <Grid item xs={12}>
        <Widget disableWidgetMenu>
          <Grid container item xs={12}>
          <Grid item xs={8}>
          <Widget  noWidgetShadow disableWidgetMenu noBodyPadding noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
            
            <div >
              <div >
              <Typography variant="h2" color="primary"  className={classes.text}>
              Execution of the trajectory
              </Typography>
        <Widget  disableWidgetMenu>
            <div > 
           
              
            <div id="upload-box">
            <ThemeProvider theme={theme}>
               <Typography variant="h6" color="#16B4AC">Upload your file HERE</Typography>
            </ThemeProvider>
                <input type="file" onChange={handleUpload} />
                <p color="primary">Filename: {file.name},File type: {file.type},File size: {file.size} bytes</p> 
             </div>
                
        
               <FormControl fullWidth className={classes.margin} variant="outlined">
                 <TextField
                     id="outlined-full-width"
                     label="Acceleration"
                     style={{ margin: 8 }}
                     placeholder=""
                     
                     fullWidth
                     margin="normal"
                     InputLabelProps={{
                     shrink: true,
                      }}
                     variant="outlined"
                   />
               
                   
              </FormControl>
              <FormControl fullWidth className={classes.margin} variant="outlined">
              <TextField
                     id="outlined-full-width"
                     label="Speed"
                     style={{ margin: 8 }}
                     placeholder=""
                     
                     fullWidth
                     margin="normal"
                     InputLabelProps={{
                     shrink: true,
                      }}
                     variant="outlined"
                   />
               
              </FormControl>
              <FormControl fullWidth className={classes.margin} variant="outlined">
              <TextField
                     id="outlined-full-width"
                     label="Ray"
                     style={{ margin: 8 }}
                     placeholder=""
                     
                     fullWidth
                     margin="normal"
                     InputLabelProps={{
                     shrink: true,
                      }}
                     variant="outlined"
                   />
               
              </FormControl>
              <FormControl fullWidth className={classes.margin} variant="filled">
              <TextField
                 id="outlined-secondary"
                 label="Name of shape"
                 variant="outlined"
                 color="primary"
               />
               
              </FormControl>
                         </div>
               <ToastContainer />
               <FormControl fullWidth className={classes.margin} variant="outlined">
               <Button onClick={() => toast('The element is successfully added')}
                 color="primary"
                 size="medium"
                 className={classes.button}
                 startIcon={<SaveIcon />}
                >
                Generate the form
               </Button>
               </FormControl>
               
               </Widget>
               
                
              </div>
              
              <div className={classes.layoutButtonsRow}>
                
                
                
              </div>
            </div>
          </Widget>
            </Grid>
            
            <Grid item xs={4}>
          <img src={ur5}  />
            </Grid>
          </Grid>
          </Widget>
        </Grid>
        
        
      </Grid>




      
      
              
    </>
  );
}

