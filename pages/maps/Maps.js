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
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import denim from "../../images/denim.jpg";
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


export default function MapsPage () {
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
    <Grid container spacing={4}>
        <Grid item xs={12}>
        <Widget disableWidgetMenu>
          <Grid container item xs={12}>
          <Grid item xs={4}>
          <Widget  noWidgetShadow disableWidgetMenu noBodyPadding noHeaderPadding style={{paddingRight: 15}} headerClass={classes.widgetHeader}>
            
            <div >
            <div >
      <Typography variant="h5" color= "#16B4AC"  className={classes.text}>
      Change of scale
              </Typography>
        <Widget  disableWidgetMenu>
            <div > 
              
            <div id="upload-box">
            
                <input type="file" onChange={handleUpload} />
                
                 
             </div>
             <ThemeProvider theme={theme}>
               <Typography variant="h6" color="primary">Size</Typography>
            </ThemeProvider>
             
      <RadioGroup row aria-label="position" name="position" defaultValue="top">
             <FormControlLabel
                value="top"
                control={<Radio color="primary" />}
                label="Big Size"
                labelPlacement="botton"
                
              />
               <FormControlLabel
                 value="start"
                 control={<Radio color="primary" />}
                 label="Standard size"
                 labelPlacement="botton"
              />
               <FormControlLabel
                 value="end"
                 control={<Radio color="primary" />}
                 label="Small size"
                 labelPlacement="Small size"
              />
                 </RadioGroup>
                
              
              <FormControl fullWidth className={classes.margin} variant="outlined">
                   <InputLabel htmlFor="outlined-adornment-amount">Offset of upper points</InputLabel>
                    <OutlinedInput
                     id="outlined-adornment-amount"
                     value={values.amount}
                     onChange={handleChange('Speed')}
            
                      labelWidth={30}
                    />
              </FormControl>
              <FormControl fullWidth className={classes.margin} variant="outlined">
                   <InputLabel htmlFor="outlined-adornment-amount">Offset of lower points</InputLabel>
                    <OutlinedInput
                     id="outlined-adornment-amount"
                     value={values.amount}
                     onChange={handleChange('Ray')}
            
                      labelWidth={30}
                    />
              </FormControl>

              <FormControl fullWidth className={classes.margin} variant="outlined">
                   <InputLabel htmlFor="outlined-adornment-amount">Straight point offset</InputLabel>
                    <OutlinedInput
                     id="outlined-adornment-amount"
                     value={values.amount}
                     onChange={handleChange('Ray')}
            
                      labelWidth={30}
                    />
              </FormControl>
              <FormControl fullWidth className={classes.margin} variant="outlined">
                   <InputLabel htmlFor="outlined-adornment-amount">Left point offset</InputLabel>
                    <OutlinedInput
                     id="outlined-adornment-amount"
                     value={values.amount}
                     onChange={handleChange('Ray')}
            
                      labelWidth={30}
                    />
              </FormControl>

                         </div>
               <ToastContainer />
            
               </Widget>
               </div>
              </div>

            </Widget>
              </Grid>
             <Grid item xs={4}>
               <img src={denim}/>
             </Grid>
            </Grid>
           </Widget>

            </Grid>
             </Grid>
   
    </>
  );
}