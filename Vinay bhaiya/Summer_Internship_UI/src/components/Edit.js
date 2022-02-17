import React, {Fragment,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Label } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {KeyboardDatePicker } from "@material-ui/pickers";


const useStyles = makeStyles((theme) => ({
    divs:{
        backgroundColor:"#273D49CC"
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        background:"#39495E",
       
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%',
        
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        backgroundColor:"#39495E",
        border:"none"
      },
      label1:{
          marginLeft:"10px",
          color:"#97A1A9"
      },
      text1:{
        marginLeft:"10px",
      },

      


      root1: {
        flexGrow: 1,
        width: '100%'
      },
    grid:{
        width:"100%",
        margin:"0px",

    },
    }));

export default function Edit() {
    
 
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">



  <Grid container spacing={3} className={classes.grid}>
    <Grid item md={8}>
    <Paper className={classes.paper}>
    <label className={classes.label1}>Invoice Number</label>
         <TextField className={classes.text1} id="edt_inv_num" variant="outlined" marginLeft="70px" name="custName" />
         </Paper>
      </Grid>
         <Grid item md={8}>
    <Paper className={classes.paper}>
   <label className={classes.label1}>Note</label>
   <TextField className={classes.text1} multiline rows={6} id="edt_note" variant="outlined" marginLeft="70px" name="custName" />

         </Paper>
     
    </Grid>

    <Grid item md={8}>
    <Paper className={classes.paper}>
   <label className={classes.label1}>Total_Open_Amount</label>
   <TextField className={classes.text1}  id="edt_ttl_amnt" variant="outlined" marginLeft="70px" name="custName" />

         </Paper>
     
    </Grid>

  </Grid>
   

    </form>
    )
}
