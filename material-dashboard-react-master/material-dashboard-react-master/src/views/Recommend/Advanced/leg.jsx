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
import barbellsquat from "./img/leg/barbellsquat.png";
import barbelllegdeadlift from "./img/leg/barbell-straight-leg-deadlift.png";
import dumbbellunge from "./img/leg/Dumbbell-Rear-Lunge.png";
import legpress from "./img/leg/leg-press.png";
import legextension from "./img/leg/lever-leg-extension.png";
import lyinglegcurl from "./img/leg/lying-leg-curl.png";
import seatedlegcurl from "./img/leg/seated-leg-curl.png";

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
    <img className="photo" src={barbellsquat}></img>,
    <div>
      <h2>Barbell Squat</h2>
      <h4>5 X 12-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={barbelllegdeadlift}></img>,
    <div>
      <h2>Barbell Leg Deadlift</h2>
      <h4>5 X 12-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={dumbbellunge}></img>,
    <div>
      <h2>Dumbbel Lunge</h2>
      <h4>5 X 12-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={legpress}></img>,
    <div>
      <h2>Leg Press</h2>
      <h4>5 X 12-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={legextension}></img>,
    <div>
      <h2>Leg Extension</h2>
      <h4>5 X 12-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={lyinglegcurl}></img>,
    <div>
      <h2>Lying Leg Curl</h2>
      <h4>5 X 12-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={seatedlegcurl}></img>,
    <div>
      <h2>Seated Leg Curl</h2>
      <h4>5 X 12-15</h4>
    </div>
  ),
];

const useStyles = makeStyles({
  table: {
    maxWidth: 1200,
  },
});

export default function Back() {
  const classes = useStyles();

  return (
    <div>
      <div align="center">
        <h3>주의사항</h3>
        <ul>
          <li>세트 간 휴식은 2분미만</li>
          <li>전체 운동시간은 1시간 미만</li>
          <li>횟수를 수행 가능한 무게로 하되 점차 늘려갈 것</li>
        </ul>
      </div>
      <br />
      <TableContainer component={Paper}>
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
