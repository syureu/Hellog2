import React from 'react';
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Divider,
  Button,
  Grid,
  makeStyles,
  Paper,
} from '@material-ui/core';
import chestpress from './img/chestpress.jpg';
import tbarrow from './img/tbarrow.png';
import './styles.css';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  imgpaper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 700,
  },
}));

function createData(pic, exp, prog) {
  return { pic, exp, prog };
}

const rows = [
  createData(
    <img className="photo" src={tbarrow}></img>,
    <p>
      등 운동aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
      aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaa
    </p>,
    '10 * 5',
  ),
  createData(
    <img className="photo" src={chestpress}></img>,
    <p>가슴운동 </p>,
    '10 * 5',
  ),
];

export default function Day1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" width="50%">
                운동종류
              </TableCell>
              <TableCell align="center" width="25%">
                운동소개
              </TableCell>
              <TableCell align="center" width="25%">
                추천프로그램 <br /> 횟수 * set
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow>
                <TableCell align="center" width="50%">
                  {row.pic}
                </TableCell>
                <TableCell align="center">{row.exp}</TableCell>
                <TableCell align="center">{row.prog}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
