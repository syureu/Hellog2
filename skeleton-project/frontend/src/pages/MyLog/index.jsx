import React from 'react';
import Layout from '../../layout/';
import { Grid, Typography, Divider, makeStyles } from '@material-ui/core';
import Wrapper from './styles';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Bar } from 'react-chartjs-2';

const localizer = momentLocalizer(moment);

const now = new Date();
const temp = new Date(2020, 6, 25);

const eventList = [
  {
    id: 0,
    title: 'Today',
    start: new Date(new Date().setHours(new Date().getHours() - 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 3)),
  },
  {
    id: 1,
    title: 'Point in Time Event',
    start: now,
    end: temp,
  },
  {
    id: 2,
    title: 'Video Record',
    start: temp,
    end: temp,
  },
];

const options = {
  legend: {
    display: false, // label 숨기기
  },
  scales: {
    yAxes: [
      {
        ticks: {
          min: 0, // 스케일에 대한 최솟갓 설정, 0 부터 시작
          stepSize: 1, // 스케일에 대한 사용자 고정 정의 값
        },
      },
    ],
  },
  maintainAspectRatio: false, // false로 설정 시 사용자 정의 크기에 따라 그래프 크기가 결정됨.
};

const arr = [10, 0, 0, 0, 0, 0, 0, 0];

const Graph = ({ rankArr }) => {
  let calculatedArr = [0, 0, 0, 0, 0, 0, 0, 0];
  rankArr.forEach(item => calculatedArr[item]++);
  let rankColor = [
    '#11b288',
    '#207ac7',
    '#207ac7',
    '#207ac7',
    '#d6d6d6',
    '#d6d6d6',
    '#d6d6d6',
    '#d6d6d6',
  ];

  const data = {
    labels: ['#1', '#2', '#3', '#4', '#5', '#6', '#7', '#8'],
    datasets: [
      {
        backgroundColor: rankColor,
        borderColor: rankColor,
        borderWidth: 1,
        hoverBackgroundColor: rankColor,
        hoverBorderColor: rankColor,
        data: calculatedArr,
      },
    ],
  };

  return <Bar data={data} width={300} height={200} options={options} />;
};

const MyLog = () => {
  return (
    <Layout>
      <Wrapper>
        <Grid className="vote-grid-title-grid">
          <Typography
            variant="h2"
            align="center"
            className="vote-grid-title-typography1"
          >
            여기다가 회원의 이름
          </Typography>
        </Grid>
        <Divider style={{ margin: '0px 0 20px 0' }} />
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid container direction="column" xs={12} sm={6}>
            <Grid item>
              <Graph rankArr={arr} />
            </Grid>
            <Divider style={{ margin: '20px 0 20px 0' }} />
            <Grid item>
              <Graph rankArr={arr} />
            </Grid>
            <Divider style={{ margin: '20px 0 20px 0' }} />
            <Grid item>
              <Graph rankArr={arr} />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Calendar
              localizer={localizer}
              events={eventList}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 600 }}
            />
          </Grid>
        </Grid>
      </Wrapper>
    </Layout>
  );
};

export default MyLog;
