import React from 'react';
import './Table.css';

import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

// function createData(category, description, date, money, action) {
//   return { category, description, date, money, action };
// }

const rows = JSON.parse(localStorage.getItem('items')) === null ? [] : JSON.parse(localStorage.getItem('items'));

export const HomeTable = (props) => {
  const classes = useStyles();
  const modal = ['actionButtons']
    if(props.showActionButtons){
    modal.push('modalShow')
  }
  return (
    <div className="tableList">
      {console.log(props)}
      {console.log(JSON.parse(localStorage.getItem('items')))}
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="caption table">
          <TableHead>
            <TableRow>
              <TableCell>Category</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Money</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.categories}>
                <TableCell component="th" scope="row">
                  {row.categories}
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.money}</TableCell>
                <TableCell align="right">
                  <div className='actionWrapper'>
                    <button className='actionBtn' onClick={props.showActionButtonsHandler}>
                      <MoreVertIcon />
                    </button>
                    <div className={modal.join(' ')}>
                      <button>Редагувати</button>
                      <button>Видалити</button>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
    </div>
  );
};
