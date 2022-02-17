import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
const useStyles = makeStyles({
  container: {
    maxWidth: "2000px",
    maxHeight: "600px",
    color:"#FFFFFF",
    backgroundColor: "#273D49CC"
  },

  head1: {
    backgroundColor: "#273D49CC",
    color:"#FFFFFF",
  },

  containerbdy: {
    
    color:"#FFFFFF",
    backgroundColor: "#273D49CC"
  },
});

export default function TableData({ responseData, scrollabeTarget }) {
  // const rows = populate(responseData);
  const classes = useStyles();
  return (
    <TableContainer
      component={Paper}
      className={classes.container}
      id="scrollableDiv"
    >
      <Table stickyHeader aria-label="sticky table">
        <TableHead className={classes.head1}>
          <TableRow size="size">
          <TableCell>  <input type="checkbox"></input></TableCell>
            <TableCell align="right">Cust_No</TableCell>
            <TableCell align="right">Name_Cust</TableCell>
            <TableCell align="right">Due_in_Date</TableCell>
            <TableCell align="right">Invoice Curremcy</TableCell>
            <TableCell align="right">Total_Open_Amount</TableCell>
            <TableCell align="right">Invoice ID</TableCell>
            <TableCell align="right">Notes</TableCell>

          </TableRow>
        </TableHead>
        <TableBody className={classes.containerbdy}>
          {responseData.map((row, index) => (
            <TableRow key={index}>
            <TableCell component="th" scope="row">
                <input type="checkbox"></input>
              </TableCell>
              <TableCell align="right">{row.cust_number}</TableCell>
              <TableCell align="right">{row.name_customer}</TableCell>
              <TableCell align="right">{row.due_in_date}</TableCell>
              <TableCell align="right">{row.invoice_currency}</TableCell>
              <TableCell align="right">{row.total_open_amount}</TableCell>
              <TableCell align="right">{row.invoice_id}</TableCell>
              <TableCell align="right">{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}