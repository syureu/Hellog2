import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './styles.css';

//사진들
import onearmlatpulldown from './img/Week710/Upper/One-arm-lat-pulldown.png';
import cablerow from './img/Week710/Upper/cablerow.png';
import barbellbenchpress from './img/Week710/Upper/Barbell-Bench-Press.png';
import barbellmilitarypress from './img/Week710/Upper/barbell-military-press.png';
import facepull from './img/Week710/Upper/Face-pull.png';
import tricepsropepushdown from './img/Week710/Upper/Triceps-Rope-Push-down.png';
import dumbbellconcentrationcurl from './img/Week710/Upper/Dumbbell-Concentration-Curl.png';
import cabletwist from './img/Week710/Upper/Cable-twist.png';
import frontplank from './img/Week710/Upper/Front-Plank.png';

import barbellfrontsquat from './img/Week710/Lower/barbell-front-squat.png';
import dumbellrearlunge from './img/Week710/Lower/Dumbbell-Rear-Lunge.png';
import romaniandeadlift from './img/Week710/Lower/romaniandeadlift.png';
import seatedlegcurl from './img/Week710/Lower/seated-leg-curl.png';
import lyinglegcurl from './img/Week710/Lower/lying-leg-curl.png';
import standingdumbbellonelegcalfraise from './img/Week710/Lower/standing-dumbbell-one-leg-calf-raise.jpg';
import lyingsidehipraise from './img/Week710/Lower/lying-side-hip-raise.png';
import bicyclecrunch from './img/Week710/Lower/bicycle-crunch.png';
import lyingleghipraise from './img/Week710/Lower/lying-leg-hip-raise.png';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(pic, exp, prog) {
  return { pic, exp, prog };
}

const rows = [
  createData(
    <div>
      <h4>상체운동 루틴</h4>
    </div>,
    <div>
      <h4>반복횟수가 가능한 최대무게로</h4>
    </div>,
    <div>
      <h4>자극 부위에 집중할 것</h4>
    </div>,
  ),
  createData(
    <img className="photo" src={onearmlatpulldown}></img>,
    <div>
      <h4>One-Arm Lap Pulldown</h4>ㅇ
    </div>,
    '2 X 13-15',
  ),
  createData(
    <img className="photo" src={cablerow}></img>,
    <div>
      <h4>Cable Row</h4>ㅇ
    </div>,
    '2 X 13-15',
  ),

  createData(
    <img className="photo" src={barbellbenchpress}></img>,
    <div>
      <h4>Barbell Bench Press</h4>ㅇ
    </div>,
    '2 X 13-15',
  ),
  createData(
    <img className="photo" src={barbellmilitarypress}></img>,
    <div>
      <h4>Barbell Military Press</h4>ㅇ
    </div>,
    '2 X 13-15',
  ),
  createData(
    <img className="photo" src={facepull}></img>,
    <div>
      <h4>Face Pull</h4>ㅇ
    </div>,
    '2 X 13-15',
  ),
  createData(
    <img className="photo" src={tricepsropepushdown}></img>,
    <div>
      <h4>Triceps Rope Push-down</h4>ㅇ
    </div>,
    '2 X 13-15',
  ),
  createData(
    <img className="photo" src={dumbbellconcentrationcurl}></img>,
    <div>
      <h4>Dumbbell Curl </h4>ㅇ
    </div>,
    '2 X 13-15',
  ),
  createData(
    <img className="photo" src={cabletwist}></img>,
    <div>
      <h4>Cable Twist</h4>ㅇ
    </div>,
    '2 X 13-15',
  ),
  createData(
    <img className="photo" src={frontplank}></img>,
    <div>
      <h4>Front Plank</h4>ㅇ
    </div>,
    '2 X 45-60초',
  ),
  createData(
    <div>
      <h4>하체운동 루틴</h4>
    </div>,
    <div>
      <h4>반복횟수가 가능한 최대무게로</h4>
    </div>,
    <div>
      <h4>자극 부위에 집중할 것</h4>
    </div>,
  ),
  createData(
    <img className="photo" src={barbellfrontsquat}></img>,
    <div>
      <h4>BarBell Front Squat</h4>ㅇ
    </div>,
    '2 X 13-15',
  ),
  createData(
    <img className="photo" src={dumbellrearlunge}></img>,
    <div>
      <h4>Dumbbel Rear Lunge</h4>ㅇ
    </div>,
    '2 X 13-15',
  ),
  createData(
    <img className="photo" src={romaniandeadlift}></img>,
    <div>
      <h4>Romanian Deadlift</h4>ㅇ
    </div>,
    '2 X 13-15',
  ),
  createData(
    <img className="photo" src={seatedlegcurl}></img>,
    <div>
      <h4>Seated Leg Curl</h4>ㅇ
    </div>,
    '2 X 13-15',
  ),
  createData(
    <img className="photo" src={lyinglegcurl}></img>,
    <div>
      <h4>Lying Leg Curl</h4>ㅇ
    </div>,
    '2 X 13-15',
  ),
  createData(
    <img className="photo" src={standingdumbbellonelegcalfraise}></img>,
    <div>
      <h4>Dumbbell Calf Raise</h4>ㅇ
    </div>,
    '2 X 20-25',
  ),
  createData(
    <img className="photo" src={lyingsidehipraise}></img>,
    <div>
      <h4>Lying Side Hip Raise</h4>ㅇ
    </div>,
    '2 X 20-25',
  ),
  createData(
    <img className="photo" src={bicyclecrunch}></img>,
    <div>
      <h4>Bicycle Crunch</h4>ㅇ
    </div>,
    '2 X 20-25',
  ),
  createData(
    <img className="photo" src={lyingleghipraise}></img>,
    <div>
      <h4>Lying Leg Hip Raise</h4>ㅇ
    </div>,
    '2 X 15-20',
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
      <div align="center">
        <h4>분할 운동 주차</h4>
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
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center" width="50%">
                운동 종류
              </StyledTableCell>
              <StyledTableCell align="center" width="25%">
                운동 설명
              </StyledTableCell>
              <StyledTableCell align="center" width="25%">
                세트 수 X 횟수
              </StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.pic}>
                <StyledTableCell align="center">{row.pic}</StyledTableCell>
                <StyledTableCell align="center">{row.exp}</StyledTableCell>
                <StyledTableCell align="center">{row.prog}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
