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
import barbellcurl from "./img/biceps/barbell-curl.png";
import dumbbelconcentrationcurl from "./img/biceps/Dumbbell-Concentration-Curl.png";
import dumbbelcurl from "./img/biceps/Dumbbell-Curl.png";
import dumbbellhammercurl from "./img/biceps/Dumbbell-Hammer-Curl.png";
import ezbarcurl from "./img/biceps/EZ-Bar-Curl.png";
import preachercurl from "./img/biceps/Machine-preacher-curl.png";

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

function createData(pic, exp, prog) {
  return { pic, exp, prog };
}

const rows = [
  createData(
    <img className="photo" src={barbellcurl}></img>,
    <div>
      <h2>Barbell Curl</h2>
      <h4>5 X 8-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={dumbbelconcentrationcurl}></img>,
    <div>
      <h2>Dumbbel Concentration Curl</h2>
      <h4>5 X 8-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={dumbbelcurl}></img>,
    <div>
      <h2>Dumbbel Curl</h2>
      <h4>5 X 8-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={dumbbellhammercurl}></img>,
    <div>
      <h2>Dumbbel Hammer Curl</h2>
      <h4>5 X 8-15</h4>
    </div>,
    ""
  ),
  createData(
    <img className="photo" src={ezbarcurl}></img>,
    <div>
      <h2>EZ Bar Curl</h2>
      <h4>5 X 8-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={preachercurl}></img>,
    <div>
      <h2>Preacher Curl</h2>
      <h4>5 X 8-15</h4>
    </div>
  ),
];

const useStyles = makeStyles({
  table: {
    maxWidth: 1200,
  },
});

export default function Biceps() {
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
