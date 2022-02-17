import React, {Fragment,useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Label } from '@material-ui/icons';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {KeyboardDatePicker } from "@material-ui/pickers";
import MaterialUIPickers from "./datePicker"

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

export default function Add() {
    
 
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">



  <Grid container spacing={3} className={classes.grid}>
    <Grid item md={6}>
    <Paper className={classes.paper}>
    <label className={classes.label1}>Customer Name</label>
         <TextField className={classes.text1} id="cust_name" variant="outlined" marginLeft="70px" name="custName" required/>
         </Paper>
      </Grid>
         <Grid item md={6}>
    <Paper className={classes.paper}>
    <MaterialUIPickers/>
         </Paper>
     
    </Grid>

    <Grid item md={11}>
    <Paper className={classes.paper}>
    <label className={classes.label1}>Customer Number</label>
         <TextField className={classes.text1} id="cust_num" variant="outlined" required  marginLeft="70px" name="custnum" />
         </Paper>


     
    </Grid>


    <Grid item md={11}>
    <Paper className={classes.paper}>
    <label className={classes.label1}>Note</label>
         <TextField className={classes.text1} multiline rows={6} id="note" variant="outlined" marginLeft="70px" name="note"  />
         </Paper>
     
    </Grid>


    <Grid item md={11}>
    <Paper className={classes.paper}>
    <label className={classes.label1}>Invoice Number</label>
         <TextField className={classes.text1} id="inv_num" variant="outlined" marginLeft="70px" name="inv_no" required />
         </Paper>
     
    </Grid>



    <Grid item md={11}>
    <Paper className={classes.paper}>
    <label className={classes.label1}>Invoice Amount</label>
         <TextField className={classes.text1} id="inv_amnt" variant="outlined" marginLeft="70px" name="inv_amt" required/>
         </Paper>
     
    </Grid>



  </Grid>

    </form>
    )
}
