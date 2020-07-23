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
import TestImage from './img/TestImage.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Day1() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <img src={TestImage}></img>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            Section2
            <br />
            ddddddddddddddddddddddddddddddddddddddddddddddddddd ddddddddddddd
            ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}>
            Section3
            <br />
            ddddddddddddddddddddddddddddddddddddddddddddddddddd ddddddddddddd
            dddddddddddddddddddddddddddddddddddddd
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
