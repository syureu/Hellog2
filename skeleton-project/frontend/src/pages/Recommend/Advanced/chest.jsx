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
import barbellbenchpress from './img/chest/Barbell-Bench-Press.png';
import dip from './img/chest/dip.png';
import dumbbelchestfly from './img/chest/dumbbell-chest-fly.png';
import inclinedumbbelbenchpress from './img/chest/incline-dumbbell-bench-press.png';
import inclinebarbellbenchpress from './img/chest/Incline-Reverse-Grip-Barbell-Bench-Press.jpg';
import pecdecfly from './img/chest/pecdecfly.png';

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
    '',
  ),
  createData(
    <img className="photo" src={dip}></img>,
    <div>
      <h4>Dips</h4>ㅇ
    </div>,
    '',
  ),
  createData(
    <img className="photo" src={dumbbelchestfly}></img>,
    <div>
      <h4>Dumbbel Chest Fly</h4>ㅇ
    </div>,
    '',
  ),
  createData(
    <img className="photo" src={inclinedumbbelbenchpress}></img>,
    <div>
      <h4>Incline Dumbbel Bench Press</h4>ㅇ
    </div>,
    '',
  ),
  createData(
    <img className="photo" src={inclinebarbellbenchpress}></img>,
    <div>
      <h4>Incline Barbell Bench Press</h4>ㅇ
    </div>,
    '',
  ),
  createData(
    <img className="photo" src={pecdecfly}></img>,
    <div>
      <h4>Pecdecfly</h4>ㅇ
    </div>,
    '',
  ),
];

const useStyles = makeStyles({
  table: {
    maxWidth: 1200,
  },
});

export default function Chest() {
  const classes = useStyles();

  return (
    <div>
      <div align="center">
        <h4>주의사항</h4>
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