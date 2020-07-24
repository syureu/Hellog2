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
import Stretching from './img/stretching.jpg';
import './styles.css';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 350,
  },
  imgpaper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    width: 700,
  },
}));

export default function Day1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <Paper className={classes.imgpaper}>
            <img className="photo" src={Stretching}></img>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <p>Section2</p>
            <br />
            <p>
              ddddddddddddddddddddddddddddddddddddddddddddddddddd ddddddddddddd
              ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            </p>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            <p>Section3</p>
            <br />
            <p className="textbox">
              ddddddddddddddddddddddddddddddddddddddddddddddddddd ddddddddddddd
              ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
