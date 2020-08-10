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
import barbellmilitarypress from './img/shoulder/barbell-military-press.png';
import behindneckpress from './img/shoulder/behind-neck-press.png';
import cableexternalrotation from './img/shoulder/Cable-External-Rotation.png';
import dumbbelllateralraise from './img/shoulder/dumbbell-lateral-raise.png';
import dumbbellrearlateralraise from './img/shoulder/Dumbbell-Rear-Lateral-Raise.png';
import seateddumbbeloverheadpress from './img/shoulder/seated-dumbbell-overhead-press.png';

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
    <img className="photo" src={barbellmilitarypress}></img>,
    <div>
      <h4>Barbell Military Press</h4>ㅇ
    </div>,
    '',
  ),
  createData(
    <img className="photo" src={behindneckpress}></img>,
    <div>
      <h4>Behind Neck Press</h4>ㅇ
    </div>,
    '',
  ),
  createData(
    <img className="photo" src={cableexternalrotation}></img>,
    <div>
      <h4>Cable External Rotation</h4>ㅇ
    </div>,
    '',
  ),
  createData(
    <img className="photo" src={dumbbelllateralraise}></img>,
    <div>
      <h4>Dumbbel Lateral Raise</h4>ㅇ
    </div>,
    '',
  ),
  createData(
    <img className="photo" src={dumbbellrearlateralraise}></img>,
    <div>
      <h4>Dumbbel Rear Lateral Raise</h4>ㅇ
    </div>,
    '',
  ),
  createData(
    <img className="photo" src={seateddumbbeloverheadpress}></img>,
    <div>
      <h4>Seated Dumbbel Overhead Press</h4>ㅇ
    </div>,
    '',
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
