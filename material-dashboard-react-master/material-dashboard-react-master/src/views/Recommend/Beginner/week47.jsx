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
import barellsquat from './img/Week47/barbellsquat.png';
import cableclosegrippulldown from './img/Week47/Cable-close-grip-pull-down.png';
import pushup from './img/Week47/push-up.png';
import dumbbelllunge from './img/Week47/Dumbbell-Lunge.png';
import bentoveronearmdumbbellrow from './img/Week47/bent-over-one-arm-dumbbell-row.png';
import lyinglegcurl from './img/Week47/lying-leg-curl.png';
import dumbbellonearmshoulderpress from './img/Week47/Dumbbell-One-Arm-Shoulder-Press.png';
import standingdumbbellonelegcalfraise from './img/Week47/standing-dumbbell-one-leg-calf-raise.jpg';
import bicyclecrunch from './img/Week47/bicycle-crunch.png';
import ezbarcurl from './img/Week47/EZ-Bar-Curl.png';

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
    <img className="photo" src={barellsquat}></img>,
    <div>
      <h4>Barbell-Squat</h4>ㅇ
    </div>,
    '13-15',
  ),
  createData(
    <img className="photo" src={cableclosegrippulldown}></img>,
    <div>
      <h4>Close Grib Lat Pulldown</h4>ㅇ
    </div>,
    '13-15',
  ),
  createData(
    <img className="photo" src={pushup}></img>,
    <div>
      <h4>Push up</h4>ㅇ
    </div>,
    '13-15',
  ),

  createData(
    <img className="photo" src={dumbbelllunge}></img>,
    <div>
      <h4>Dumbbell Lunge</h4>ㅇ
    </div>,
    '13-15',
  ),
  createData(
    <img className="photo" src={bentoveronearmdumbbellrow}></img>,
    <div>
      <h4>Bentover One Arm Dumbbell Row</h4>ㅇ
    </div>,
    '13-15',
  ),
  createData(
    <img className="photo" src={lyinglegcurl}></img>,
    <div>
      <h4>Lying Leg Curl</h4>ㅇ
    </div>,
    '13-15',
  ),
  createData(
    <img className="photo" src={dumbbellonearmshoulderpress}></img>,
    <div>
      <h4>Dumbbell One Arm Shoulder Press</h4>ㅇ
    </div>,
    '13-15',
  ),
  createData(
    <img className="photo" src={standingdumbbellonelegcalfraise}></img>,
    <div>
      <h4>Dumbbell One-leg Calf Raise</h4>ㅇ
    </div>,
    '25-30',
  ),
  createData(
    <img className="photo" src={bicyclecrunch}></img>,
    <div>
      <h4>Bicycle Crunch</h4>ㅇ
    </div>,
    '20-25',
  ),
  createData(
    <img className="photo" src={ezbarcurl}></img>,
    <div>
      <h4>EZ Bar Curl</h4>ㅇ
    </div>,
    '13-15',
  ),
];

const useStyles = makeStyles({
  table: {
    maxWidth: 1200,
  },
});

export default function Week47() {
  const classes = useStyles();

  return (
    <div>
      <div align="center">
        <h4>전신 운동 주차</h4>
        <ul>
          <li>전체를 1세트, 총 2세트 진행</li>
          <li>각 운동 간 휴식은 20~30초</li>
          <li>세트 간 휴식은 2-3분</li>
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
