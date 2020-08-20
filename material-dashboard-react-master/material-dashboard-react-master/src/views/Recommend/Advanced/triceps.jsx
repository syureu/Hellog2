import React from "react";
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
import barbellseatedoverheadtricepsextension from "./img/triceps/Barbell-Seated-Overhead-Triceps-Extension.png";

import lyingbarbelltricepsextension from "./img/triceps/lying-barbell-triceps-extension.png";
import tricepsdip from "./img/triceps/Triceps-Dip.png";
import tricepsropepushdown from "./img/triceps/Triceps-Rope-Push-down.png";

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
    <img className="photo" src={barbellseatedoverheadtricepsextension}></img>,
    <div>
      <h2>Barbell Seated Overhead T-Extension</h2>
      <h4>4 X 8-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={lyingbarbelltricepsextension}></img>,
    <div>
      <h2>Lying Barbell T-Extension</h2>
      <h4>4 X 8-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={tricepsdip}></img>,
    <div>
      <h2>Triceps Dips</h2>
      <h4>4 X 8-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={tricepsropepushdown}></img>,
    <div>
      <h2>Triceps Rope Push Down</h2>
      <h4>4 X 8-15</h4>
    </div>
  ),
];

const useStyles = makeStyles({
  table: {
    maxWidth: 1200,
  },
});

export default function Triceps() {
  const classes = useStyles();

  return (
    <div>
      <div className="textbox">
        <h3>주의사항</h3>
        <ul>
          <li>세트 간 휴식은 2분미만</li>
          <li>전체 운동시간은 1시간 미만</li>
          <li>횟수를 수행 가능한 무게로 하되 점차 늘려갈 것</li>
        </ul>
      </div>
      <br />
      <TableContainer component={Paper} align="center">
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" width="75%">
                운동 종류
              </StyledTableCell>
              <StyledTableCell align="center" width="25%">
                운동 설명
                <br />
                횟수
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
      </TableContainer>
    </div>
  );
}
