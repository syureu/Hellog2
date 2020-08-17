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
import barbellmilitarypress from "./img/shoulder/barbell-military-press.png";
import behindneckpress from "./img/shoulder/behind-neck-press.png";
import cableexternalrotation from "./img/shoulder/Cable-External-Rotation.png";
import dumbbelllateralraise from "./img/shoulder/dumbbell-lateral-raise.png";
import dumbbellrearlateralraise from "./img/shoulder/Dumbbell-Rear-Lateral-Raise.png";
import seateddumbbeloverheadpress from "./img/shoulder/seated-dumbbell-overhead-press.png";

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
    <img className="photo" src={barbellmilitarypress}></img>,
    <div>
      <h2>Barbell Military Press</h2>
      <h4>5 X 12-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={behindneckpress}></img>,
    <div>
      <h2>Behind Neck Press</h2>
      <h4>5 X 12-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={cableexternalrotation}></img>,
    <div>
      <h2>Cable External Rotation</h2>
      <h4>5 X 12-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={dumbbelllateralraise}></img>,
    <div>
      <h2>Dumbbel Lateral Raise</h2>
      <h4>5 X 12-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={dumbbellrearlateralraise}></img>,
    <div>
      <h2>Dumbbel Rear Lateral Raise</h2>
      <h4>5 X 12-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={seateddumbbeloverheadpress}></img>,
    <div>
      <h2>Seated Dumbbel Overhead Press</h2>
      <h4>5 X 12-15</h4>
    </div>
  ),
];

const useStyles = makeStyles({
  table: {
    maxWidth: 1200,
  },
});

export default function Shoulder() {
  const classes = useStyles();

  return (
    <div>
      <div align="center">
        <h3>주의사항</h3>
        <ul>
          <li>세트 간 휴식은 2분</li>
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
