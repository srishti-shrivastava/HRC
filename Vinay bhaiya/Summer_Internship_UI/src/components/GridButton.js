import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
import edt from './images/Path 18191.png'
import srch from './images/search-24px (3).png'
import Typography from '@material-ui/core/Typography';
import AddBtn from "./AddBtn";
//import AddFormDialog from './Add'
import './grid.css'
import ViewBtn from "./View"
import EditBtn from "./EditBtn"
import DltBtn from "./DltBtn"
import Search from "./Search"
const useStyles = makeStyles((theme) => ({
    divs:{
        backgroundColor:"#39495E",
        color:"#FFFFFF",
        fontFamily:"Ubuntu"
    },
    add:{
        color:"#FFFFFF",
        marginTop:"30px",
        marginLeft:"638px",
        textAlign:"center",
        border:"1px solid #14AFF1",
        borderRadius:"10px",
        width:"99px",
        height:"45px",
        textTransform:"none",
        fontSize:"20px"
    },

   can:{
    color:"#14AFF1",
    marginTop:"30px",
    marginRight:"250px",
    textAlign:"center",
    border:"1px solid #14AFF1",
    borderRadius:"10px",
    width:"99px",
    height:"45px"
   },
   predict:{
   
   
    width: "106px",
    height: "45px",
    background:"#97A1A9", 
    borderRadius: "10px",
    textAlign: "left",
    color: "#FFFFFF",
    fontSize:"20px",
    textTransform:"none"
},

view:{
    marginLeft:"20px",
    display: "inline-block"
}, 
   
search:{
    marginLeft:"20px",
    display: "inline-block"
}, 
adbtn:{
    marginLeft:"10px",
    display: "inline-block"
    }, 

    dlt:{
        marginLeft:"10px",
        display: "inline-block"
    }, 
   

prdt:{
        marginLeft:"30px",
        display: "inline-block",
        marginTop:"30px"
        }, 
    
        }));

export default function GridButton() {
    const classes = useStyles();
    
       
    const [showModal, setShowModal] = useState(false);
        return (
           
          <div>
           <div className={classes.prdt}>
             <Button  className={classes.predict} variant="outlined">Predict</Button>
             </div>
            <div className={classes.view}>
            <ViewBtn/>
            </div>
            <div className={classes.adbtn}>
            <AddBtn/>
            </div>
            <div className={classes.view}>
            <EditBtn showModal = {showModal} setShowModal = {setShowModal} className="ModalButtons" ></EditBtn>

            </div>
            <div className={classes.dlt}>
                <DltBtn/>
            </div>
            <div className={classes.view}>
                <Search/>
            </div>

            </div>
           
    )
}
