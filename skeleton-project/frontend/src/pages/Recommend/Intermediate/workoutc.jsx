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
import barbellsquat from './img/WorkoutC/barbellsquat.png';
import dumbbelllunge from './img/WorkoutC/Dumbbell-Lunge-2.png';
import inverselegcurl from './img/WorkoutC/inverse-leg-curl.png';
import seatedcalfraise from './img/WorkoutC/Lever-Seated-Calf-Raise-plate-loaded.png';
import standingcalfraise from './img/WorkoutC/Lever-Standing-Calf-Raise.png';
import cabledownuptwist from './img/WorkoutC/Cable-down-up-twist.png';
import hanginglegraise from './img/WorkoutC/Hanging-leg-hip-raise.png';

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
    <img className="photo" src={barbellsquat}></img>,
    <div>
      <h4>Barbell Squat</h4>ㅇ
    </div>,
    '3 X 9-11',
  ),
  createData(
    <img className="photo" src={dumbbelllunge}></img>,
    <div>
      <h4>Dumbbell Lunge</h4>ㅇ
    </div>,
    '3 X 9-11',
  ),
  createData(
    <img className="photo" src={inverselegcurl}></img>,
    <div>
      <h4>Inverse Leg Curl</h4>ㅇ
    </div>,
    '3 X 9-11',
  ),
  createData(
    <img className="photo" src={seatedcalfraise}></img>,
    <div>
      <h4>Seated Calf Raise</h4>ㅇ
    </div>,
    '2 X 20-25',
  ),
  createData(
    <img className="photo" src={standingcalfraise}></img>,
    <div>
      <h4>Standing Calf Raise</h4>ㅇ
    </div>,
    '2 X 20-25',
  ),
  createData(
    <img className="photo" src={cabledownuptwist}></img>,
    <div>
      <h4>Cable Down Up Twist</h4>ㅇ
    </div>,
    '2 X 9-11',
  ),
  createData(
    <img className="photo" src={hanginglegraise}></img>,
    <div>
      <h4>Hanging Leg Raise</h4>ㅇ
    </div>,
    '3 X 9-11',
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
        <h4>주의사항</h4>
        <ul>
          <li>슈퍼세트로 운동을 진행합니다</li>
          <li>(한 운동의 한세트가 끝나면 바로 이어서 다음 운동 한세트 수행)</li>
          <li>세트 간 휴식은 2-3분</li>
          <li>전체 운동시간은 1시간 미만</li>
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
                횟수
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
