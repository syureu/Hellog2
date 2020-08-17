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

//A

import latpulldown from "./img/Week1012/WorkoutA/Lat-pull-down.png";
import cabletwistingonearmrow from "./img/Week1012/WorkoutA/seated-twisting-cable-row.png";
import dumbbellcurl from "./img/Week1012/WorkoutA/Dumbbell-Alternate-Biceps-Curl.png";
import barbellreversecurl from "./img/Week1012/WorkoutA/Barbell-Reverse-Curl.png";
import lyingsidehipraise from "./img/Week1012/WorkoutA/lying-side-hip-raise.png";
import bicyclecrunch from "./img/Week1012/WorkoutA/bicycle-crunch.png";
import seatedkneeraise from "./img/Week1012/WorkoutA/seated-knee-raise.png";

//B
import barbellbenchpress from "./img/Week1012/WorkoutB/Barbell-Bench-Press.png";
import inclinereversedumbbellbenchpress from "./img/Week1012/WorkoutB/Incline-reverse-grip-dumbbell-bench-press.png";
import dumbbellonearmoverheadpress from "./img/Week1012/WorkoutB/Dumbbell-One-Arm-Shoulder-Press.png";
import dumbbellbentoverlateralraise from "./img/Week1012/WorkoutB/Dumbbell-Rear-Lateral-Raise.png";
import cablefacepull from "./img/Week1012/WorkoutB/Cable-Face-pull.png";
import diamondpushup from "./img/Week1012/WorkoutB/diamond-push-up.png";
import declinedumbbelltricepsextension from "./img/Week1012/WorkoutB/Decline-Dumbbell-Triceps-Extension.jpg";
import hangingvariation from "./img/Week1012/WorkoutB/Hanging-leg-hip-raise.png";

// C
import barbellsumosquat from "./img/Week1012/WorkoutC/barbell-sumo-squat.png";
import weightoneleghipthrust from "./img/Week1012/WorkoutC/weighted-one-leg-hip-thrust.png";
import seatedlegcurl from "./img/Week1012/WorkoutC/seated-leg-curl.png";
import lyinglegcurl from "./img/Week1012/WorkoutC/lying-leg-curl.png";
import standingcalfraise from "./img/Week1012/WorkoutC/Lever-Standing-Calf-Raise.png";
import wheelrollout from "./img/Week1012/WorkoutC/wheel-rollout.png";
import cablewoodchop from "./img/Week1012/WorkoutC/Cable-wood-chop.png";

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
      <h2> A : 등, 이두, 코어</h2>
    </div>,
    <div>
      <h3>반복횟수가 가능한 최대무게로</h3>
    </div>,
    <div>
      <h3>자극 부위에 집중할 것</h3>
    </div>
  ),
  createData(
    <img className="photo" src={latpulldown}></img>,
    <div>
      <h2>Lat Pulldown</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={cabletwistingonearmrow}></img>,
    <div>
      <h2>Cable Twisting One-arm Row</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={dumbbellcurl}></img>,
    <div>
      <h2>Dumbbell Curl</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={barbellreversecurl}></img>,
    <div>
      <h2>Barbell Reverse Curl</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={lyingsidehipraise}></img>,
    <div>
      <h2>Lying Side Hip Raise</h2>
      <h4>2 X 25-30</h4>
    </div>
  ),
  createData(
    <img className="photo" src={bicyclecrunch}></img>,
    <div>
      <h2>Bicycle Crunch</h2>
      <h4>2 X 25-30</h4>
    </div>
  ),
  createData(
    <img className="photo" src={seatedkneeraise}></img>,
    <div>
      <h2>Seated Knee Raise</h2>
      <h4>2 X 25-30</h4>
    </div>
  ),
  createData(
    <div>
      <h2> B : 가슴 어깨 삼두 코어</h2>
    </div>,
    <div>
      <h3>반복횟수가 가능한 최대무게로</h3>
    </div>,
    <div>
      <h3>자극 부위에 집중할 것</h3>
    </div>
  ),
  createData(
    <img className="photo" src={barbellbenchpress}></img>,
    <div>
      <h2>Barbell Bench Press</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={inclinereversedumbbellbenchpress}></img>,
    <div>
      <h2>Incline Reverse Dumbbell Bench Press</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={dumbbellonearmoverheadpress}></img>,
    <div>
      <h2>Dumbbell One Arm Overhead Press</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={dumbbellbentoverlateralraise}></img>,
    <div>
      <h2>Dumbbell Bentover Lateral Raise</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={cablefacepull}></img>,
    <div>
      <h2>Cable Face Pull</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={diamondpushup}></img>,
    <div>
      <h2>Diamond Push Up</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={declinedumbbelltricepsextension}></img>,
    <div>
      <h2>Decline Dumbbell Triceps Extension</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={hangingvariation}></img>,
    <div>
      <h2>Haning variation</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <div>
      <h2> C : 하체, 코어</h2>
    </div>,
    <div>
      <h3>반복횟수가 가능한 최대무게로</h3>
    </div>,
    <div>
      <h3>자극 부위에 집중할 것</h3>
    </div>
  ),
  createData(
    <img className="photo" src={barbellsumosquat}></img>,
    <div>
      <h2>Barbell Sumo Squat</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={weightoneleghipthrust}></img>,
    <div>
      <h2>One-leg Hip Thrust</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={seatedlegcurl}></img>,
    <div>
      <h2>Seated Leg Curl</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={lyinglegcurl}></img>,
    <div>
      <h2>Lying Leg Curl</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
  createData(
    <img className="photo" src={standingcalfraise}></img>,
    <div>
      <h2>Standing Calf Raise</h2>
      <h4>2 X 20-25</h4>
    </div>
  ),
  createData(
    <img className="photo" src={wheelrollout}></img>,
    <div>
      <h2>Wheel Rollout</h2>
      <h4>2 X 10-15</h4>
    </div>
  ),
  createData(
    <img className="photo" src={cablewoodchop}></img>,
    <div>
      <h2>Cable Wood Chop</h2>
      <h4>2 X 12-14</h4>
    </div>
  ),
];

const useStyles = makeStyles({
  table: {
    maxWidth: 1200,
  },
});

export default function Week1012() {
  const classes = useStyles();

  return (
    <div>
      <div align="center">
        <h2>3분할 운동 주차</h2>
        <ul>
          <li> A: 등-코어, B: 가슴-어깨, C: 하체 3분할 루틴 </li>
          <li>권장운동 일정: A B C 휴식 A B 휴식 | 주 5일 운동 </li>
          <li>각 운동 간 휴식은 20~30초</li>
          <li>세트 간 휴식은 60~90초</li>
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
