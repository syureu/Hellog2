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
import barbellsquat from './img/leg/barbellsquat.png';
import barbelllegdeadlift from './img/leg/barbell-straight-leg-deadlift.png';
import dumbbellunge from './img/leg/Dumbbell-Rear-Lunge.png';
import legpress from './img/leg/leg-press.png';
import legextension from './img/leg/lever-leg-extension.png';
import lyinglegcurl from './img/leg/lying-leg-curl.png';
import seatedlegcurl from './img/leg/seated-leg-curl.png';

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
    '',
  ),
  createData(
    <img className="photo" src={barbelllegdeadlift}></img>,
    <div>
      <h4>Barbell Leg Deadlift</h4>ㅇ
    </div>,
    '',
  ),
  createData(
    <img className="photo" src={dumbbellunge}></img>,
    <div>
      <h4>Dumbbel Lunge</h4>ㅇ
    </div>,
    '',
  ),
  createData(
    <img className="photo" src={legpress}></img>,
    <div>
      <h4>Leg Press</h4>ㅇ
    </div>,
    '',
  ),
  createData(
    <img className="photo" src={legextension}></img>,
    <div>
      <h4>Leg Extension</h4>ㅇ
    </div>,
    '',
  ),
  createData(
    <img className="photo" src={lyinglegcurl}></img>,
    <div>
      <h4>Lying Leg Curl</h4>ㅇ
    </div>,
    '',
  ),
  createData(
    <img className="photo" src={seatedlegcurl}></img>,
    <div>
      <h4>Seated Leg Curl</h4>ㅇ
    </div>,
    '',
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
