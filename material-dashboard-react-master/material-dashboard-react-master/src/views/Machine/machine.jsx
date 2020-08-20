import React, { useState, useEffect, useContext } from "react";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import "./styles.css";

//사진들

import assistedpullup from "./gif/Assistedpullup.gif";
// import assistedpullup from "../../assets/img/Assistedpullup.gif";
import hanginglegraise from "./gif/hanginglegraise.gif";
import latpulldown from "./gif/latpulldown.gif";
import Lyinglegcurl from "./gif/Lyinglegcurl.gif";
import rearlegextension from "./gif/rearlegextension.gif";
import seatedarmcurl from "./gif/seatedarmcurl.gif";
import seatedlegcurl from "./gif/seatedlegcurl.gif";
import seatedoverheadpress from "./gif/seatedoverheadpress.gif";
import Seatedpress from "./gif/Seatedpress.gif";

const Machine = () => {
  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  function createData(pic, exp) {
    return { pic, exp };
  }

  const rows = [
    createData(
      <img className="photo" src={assistedpullup}></img>,
      <div class="text-color">
        <h2>Assisted Pull-up</h2>
      </div>
    ),
    createData(
      <img className="photo" src={hanginglegraise}></img>,
      <div class="text-color">
        <h2>Hanging Leg Raise</h2>
      </div>
    ),
    createData(
      <img className="photo" src={latpulldown}></img>,
      <div class="text-color">
        <h2>Lat Pull-Down</h2>
      </div>
    ),
    createData(
      <img className="photo" src={Lyinglegcurl}></img>,
      <div class="text-color">
        <h2>Lying Leg Curl</h2>
      </div>
    ),
    createData(
      <img className="photo" src={rearlegextension}></img>,
      <div class="text-color">
        <h2>Rear Leg Extension</h2>
      </div>
    ),
    createData(
      <img className="photo" src={seatedarmcurl}></img>,
      <div class="text-color">
        <h2>Seated Arm Curl</h2>
      </div>
    ),
    createData(
      <img className="photo" src={seatedlegcurl}></img>,
      <div class="text-color">
        <h2>Seated Leg Curl</h2>
      </div>
    ),
    createData(
      <img className="photo" src={seatedoverheadpress}></img>,
      <div class="text-color">
        <h2>Seated Over Head Press</h2>
      </div>
    ),
    createData(
      <img className="photo" src={Seatedpress}></img>,
      <div class="text-color">
        <h2>Seated Press</h2>
      </div>
    ),
  ];

  const useStyles = makeStyles({
    table: {
      maxWidth: 1200,
    },
  });
  const classes = useStyles();
  return (
    <div>
      <div align="center" class="text-color">
        <h1>대표적인 기구 소개</h1>
        <h3> 공통적으로 많은 기구들의 사용법을 소개합니다</h3>
      </div>
      <TableContainer align="center">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" width="75%">
                운동 방법
              </StyledTableCell>
              <StyledTableCell align="center" width="25%">
                기구 이름
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.pic}>
                <StyledTableCell align="center">{row.pic}</StyledTableCell>
                <StyledTableCell align="center">{row.exp}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <p class="text-color">
          출처 :
          https://www.bostonmagazine.com/health/2015/01/05/fitness-tips-weight-machines-gym/
        </p>
      </TableContainer>
    </div>
  );
};
export default Machine;
