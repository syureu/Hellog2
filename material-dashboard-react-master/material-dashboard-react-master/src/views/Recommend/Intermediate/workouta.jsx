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
import barbellbenchpress from './img/WorkoutA/Barbell-Bench-Press.png';
import inclinedumbbellbenchpress from './img/WorkoutA/Incline-reverse-grip-dumbbell-bench-press1.png';
import arnoldpress from './img/WorkoutA/Arnold-press.png';
import facepull from './img/WorkoutA/Face-pull.png';
import tricepsdips from './img/WorkoutA/Triceps-Dip-2.png';
import bicyclecrunch from './img/WorkoutA/bicycle-crunch.png';

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
    <img className="photo" src={barbellbenchpress}></img>,
    <div>
      <h4>Barbell Bench Press</h4>ㅇ
    </div>,
    '3 X 9-11',
  ),
  createData(
    <img className="photo" src={inclinedumbbellbenchpress}></img>,
    <div>
      <h4>Incline Dumbbell BenchPress</h4>ㅇ
    </div>,
    '2 X 9-11',
  ),
  createData(
    <img className="photo" src={arnoldpress}></img>,
    <div>
      <h4>Arnold press</h4>ㅇ
    </div>,
    '2 X 9-11',
  ),
  createData(
    <img className="photo" src={facepull}></img>,
    <div>
      <h4>Cable Face Pull</h4>ㅇ
    </div>,
    '2 X 9-11',
  ),
  createData(
    <img className="photo" src={tricepsdips}></img>,
    <div>
      <h4>Triceps Dips</h4>ㅇ
    </div>,
    '2 X 9-11',
  ),
  createData(
    <img className="photo" src={bicyclecrunch}></img>,
    <div>
      <h4>Bicycle Crunch</h4>ㅇ
    </div>,
    '3 X 20-25',
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