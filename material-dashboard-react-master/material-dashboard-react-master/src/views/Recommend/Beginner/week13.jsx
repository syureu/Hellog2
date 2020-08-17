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
import dumbbellsquat from "./img/Week13/dumbbell-squat.png";
import widegriplatpulldowm from "./img/Week13/wide-grip-lat-pulldown.png";
import seatedlegcurl from "./img/Week13/seated-leg-curl.png";
import dumbbellbenchpress from "./img/Week13/Dumbbell-Bench-Press.png";
import leverstandingcalfraise from "./img/Week13/Lever-Standing-Calf-Raise.png";
import cablerow from "./img/Week13/cablerow.png";
import bicyclecrunch from "./img/Week13/bicycle-crunch.png";
import dumbbellshoulderpress from "./img/Week13/Dumbbell-Shoulder-Press.png";
import dumbbellkickback from "./img/Week13/Dumbbell-Kickback.png";
import bodyweightsquat from "./img/Week13/Bodyweight-squat.png";

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
    <img className="photo" src={dumbbellsquat}></img>,
    <div>
      <h2>Dumbbell-Squat</h2>
      <h4>15-18</h4>
    </div>
  ),
  createData(
    <img className="photo" src={widegriplatpulldowm}></img>,
    <div>
      <h2>Wide Grib Lat Pulldown</h2>
      <h4>15-18</h4>
    </div>
  ),
  createData(
    <img className="photo" src={seatedlegcurl}></img>,
    <div>
      <h2>Seated Leg Curl</h2>
      <h4>15-18</h4>
    </div>
  ),
  createData(
    <img className="photo" src={dumbbellbenchpress}></img>,
    <div>
      <h2>Dumbbell BenchPress</h2>
      <h4>15-18</h4>
    </div>
  ),
  createData(
    <img className="photo" src={leverstandingcalfraise}></img>,
    <div>
      <h2>Standing Calf Raise</h2>
      <h4>25-30</h4>
    </div>
  ),
  createData(
    <img className="photo" src={cablerow}></img>,
    <div>
      <h2>Cable Row</h2>
      <h4>15-18</h4>
    </div>
  ),
  createData(
    <img className="photo" src={bicyclecrunch}></img>,
    <div>
      <h2>Bicycle Crunch</h2>
      <h4>15-20</h4>
    </div>
  ),
  createData(
    <img className="photo" src={dumbbellshoulderpress}></img>,
    <div>
      <h2>Dumbbell Shoulder Press</h2>
      <h4>15-18</h4>
    </div>
  ),
  createData(
    <img className="photo" src={dumbbellkickback}></img>,
    <div>
      <h2>Dumbbell Kick Back</h2>
      <h4>15-18</h4>
    </div>
  ),
  createData(
    <img className="photo" src={bodyweightsquat}></img>,
    <div>
      <h2>Squat</h2>
      <h4>15-18</h4>
    </div>
  ),
];

const useStyles = makeStyles({
  table: {
    maxWidth: 1200,
  },
});

export default function Week13() {
  const classes = useStyles();

  return (
    <div>
      <div align="center">
        <h3>전신 운동 주차</h3>
        <ul>
          <li>전체를 1세트, 총 2세트 진행</li>
          <li>각 운동 간 휴식은 20~30초</li>
          <li>세트 간 휴식은 2-3분</li>
          <li>전체 운동시간은 40분 미만</li>
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
                운동 이름
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
