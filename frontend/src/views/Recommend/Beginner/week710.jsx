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
import onearmlatpulldown from "./img/Week710/Upper/One-arm-lat-pulldown.png";
import cablerow from "./img/Week710/Upper/cablerow.png";
import barbellbenchpress from "./img/Week710/Upper/Barbell-Bench-Press.png";
import barbellmilitarypress from "./img/Week710/Upper/barbell-military-press.png";
import facepull from "./img/Week710/Upper/Face-pull.png";
import tricepsropepushdown from "./img/Week710/Upper/Triceps-Rope-Push-down.png";
import dumbbellconcentrationcurl from "./img/Week710/Upper/Dumbbell-Concentration-Curl.png";
import cabletwist from "./img/Week710/Upper/Cable-twist.png";
import frontplank from "./img/Week710/Upper/Front-Plank.png";

import barbellfrontsquat from "./img/Week710/Lower/barbell-front-squat.png";
import dumbellrearlunge from "./img/Week710/Lower/Dumbbell-Rear-Lunge.png";
import romaniandeadlift from "./img/Week710/Lower/romaniandeadlift.png";
import seatedlegcurl from "./img/Week710/Lower/seated-leg-curl.png";
import lyinglegcurl from "./img/Week710/Lower/lying-leg-curl.png";
import standingdumbbellonelegcalfraise from "./img/Week710/Lower/standing-dumbbell-one-leg-calf-raise.jpg";
import lyingsidehipraise from "./img/Week710/Lower/lying-side-hip-raise.png";
import bicyclecrunch from "./img/Week710/Lower/bicycle-crunch.png";
import lyingleghipraise from "./img/Week710/Lower/lying-leg-hip-raise.png";

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
    <div>
      <h2>상체운동 루틴</h2>
    </div>,
    <div>
      <h3>반복횟수가 가능한 최대무게로</h3>
    </div>,
    <div>
      <h3>자극 부위에 집중할 것</h3>
    </div>
  ),
  createData(
    <img className="photo" src={onearmlatpulldown} alt=""></img>,
    <div>
      <h2>One-Arm Lap Pulldown</h2>
      <h4>2 X 13-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={cablerow} alt=""></img>,
    <div>
      <h2>Cable Row</h2>
      <h4>2 X 13-15</h4>
    </div>
  ),

  createData(
    <img className="photo" src={barbellbenchpress} alt=""></img>,
    <div>
      <h2>Barbell Bench Press</h2>
      <h4>2 X 13-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={barbellmilitarypress} alt=""></img>,
    <div>
      <h2>Barbell Military Press</h2>
      <h4>2 X 13-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={facepull} alt=""></img>,
    <div>
      <h2>Face Pull</h2>
      <h4>2 X 13-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={tricepsropepushdown} alt=""></img>,
    <div>
      <h2>Triceps Rope Push-down</h2>
      <h4>2 X 13-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={dumbbellconcentrationcurl} alt=""></img>,
    <div>
      <h2>Dumbbell Curl </h2>
      <h4>2 X 13-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={cabletwist} alt=""></img>,
    <div>
      <h2>Cable Twist</h2>
      <h4>2 X 13-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={frontplank} alt=""></img>,
    <div>
      <h2>Front Plank</h2>
      <h4>2 X 45-60초</h4>
    </div>
  ),
  createData(
    <div>
      <h2>하체운동 루틴</h2>
    </div>,
    <div>
      <h3>반복횟수가 가능한 최대무게로</h3>
    </div>,
    <div>
      <h3>자극 부위에 집중할 것</h3>
    </div>
  ),
  createData(
    <img className="photo" src={barbellfrontsquat} alt=""></img>,
    <div>
      <h2>BarBell Front Squat</h2>
      <h4>2 X 13-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={dumbellrearlunge} alt=""></img>,
    <div>
      <h2>Dumbbel Rear Lunge</h2>
      <h4>2 X 13-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={romaniandeadlift} alt=""></img>,
    <div>
      <h2>Romanian Deadlift</h2>
      <h4>2 X 13-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={seatedlegcurl} alt=""></img>,
    <div>
      <h2>Seated Leg Curl</h2>
      <h4>2 X 13-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={lyinglegcurl} alt=""></img>,
    <div>
      <h2>Lying Leg Curl</h2>
      <h4>2 X 13-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={standingdumbbellonelegcalfraise} alt=""></img>,
    <div>
      <h2>Dumbbell Calf Raise</h2>
      <h4>2 X 20-25</h4>
    </div>
  ),
  createData(
    <img className="photo" src={lyingsidehipraise} alt=""></img>,
    <div>
      <h2>Lying Side Hip Raise</h2>
      <h4>2 X 20-25</h4>
    </div>
  ),
  createData(
    <img className="photo" src={bicyclecrunch} alt=""></img>,
    <div>
      <h2>Bicycle Crunch</h2>
      <h4>2 X 20-25</h4>
    </div>
  ),
  createData(
    <img className="photo" src={lyingleghipraise} alt=""></img>,
    <div>
      <h2>Lying Leg Hip Raise</h2>
      <h4>2 X 15-20</h4>
    </div>
  ),
];

const useStyles = makeStyles({
  table: {
    maxWidth: 1200,
  },
});

export default function Week710() {
  const classes = useStyles();

  return (
    <div>
      <div className="textbox">
        <h2>분할 운동 주차</h2>
        <ul>
          <li>상체하는 날, 하체하는 날 나누어서 진행 </li>
          <li>권장운동 일정: 상체 하체 휴식 | 주 4일 운동 </li>
          <li>각 운동 간 휴식은 20~30초</li>
          <li>세트 간 휴식은 60~90초</li>
          <li>전체 운동시간은 40분 미만</li>
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
                세트 수 X 횟수
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
