import React, { useCallback, useRef, useState, useEffect } from "react";
// import Layout from '../../layout/';
import {
  Grid,
  Typography,
  Divider,
  makeStyles,
  Button,
  Tabs,
  Box,
  Tab,
  Slide,
  withStyles,
} from "@material-ui/core";
// import Wrapper from './styles';

import { common, grey } from "@material-ui/core/colors";

import Calendar from "@toast-ui/react-calendar";
import "tui-calendar/dist/tui-calendar.css";
import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";

import moment from "moment";

import CarouselSlide from "./CarouselSlide";
import { SLIDE_INFO } from "./constants";

import categoryDats from "./dump.json";
import ButtonBases from "../../components/Main/ButtonBases";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import recordDummy from "./record.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  button: {
    backgroundColor: grey[700],
    color: common.white,
  },
  typography: {
    color: common.white,
  },
  divider: {
    backgroundColor: common.white,
  },
}));

var username = sessionStorage.getItem("name");

const ArrowStyle = {
  cursor: "pointer",
  height: "840px",
  backgroundColor: "#fafafa",
};

const Arrow = (props) => {
  const { direction, clickFunction } = props;
  const icon =
    direction === "left" ? (
      <ArrowBackIosIcon style={ArrowStyle} />
    ) : (
      <ArrowForwardIosIcon style={ArrowStyle} />
    );

  return <Grid onClick={clickFunction}>{icon}</Grid>;
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
      <MySection level={index}></MySection>
      {/* <img align="center" width="700" src={ronnie}></img> */}
    </Typography>
  );
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
};

///////////////////////////////////////////////
// hook

const useGetCategoryDatas = (url) => {
  // const { serverUrl, user, setUser } = useContext(CommonContext);
  const [data, setData] = useState([]);

  const getDatas = async () => {
    setData(categoryDats);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return data;
};

const useOnChangeIndex = (categoryDatas) => {
  const [appbarIndex, setAppbarIndex] = useState(0);
  const [appbarIndexDelta, setAppbarIndexDelta] = useState(0);

  const onChangeIndexHandler = (event, newIndex) => {
    let deltaValue = 0;

    if (newIndex > appbarIndex && newIndex !== categoryDatas.length - 1) {
      deltaValue = 1;
    }
    if (newIndex < appbarIndex && newIndex !== 0) {
      deltaValue = -1;
    }
    if (appbarIndex === newIndex) {
      deltaValue = appbarIndexDelta * -1;
    }
    setAppbarIndexDelta(deltaValue);
    setAppbarIndex(newIndex);
  };

  return [onChangeIndexHandler, appbarIndex, appbarIndexDelta];
};

// const getRecords = (username) => {
//   return fetch(baseUrl + "/api/records/myrecord/v2?name=" + username, {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: AuthID,
//     },
//   }).then((response) => response.json());
// };
// const getRecords = [
//   {
//     countt: 8,
//     endTime: "2020-08-17T21:24:24.471+09:00",
//     exerciseName: "데드리프트",
//     sett: 3,
//     startTime: "2020-08-17T21:19:24.471+09:00",
//     weight: 100,
//   },
//   {
//     countt: 10,
//     endTime: "2020-08-20T21:24:24.471+09:00",
//     exerciseName: "스미스머신",
//     sett: 3,
//     startTime: "2020-08-20T21:19:24.471+09:00",
//     weight: 100,
//   },
//   {
//     countt: 10,
//     endTime: "2020-08-20T21:24:24.471+09:00",
//     exerciseName: "스위스여신",
//     sett: 3,
//     startTime: "2020-08-20T21:19:24.471+09:00",
//     weight: 100,
//   },
// ];

const getRecords = recordDummy;

const useGetRecordDatas = (username) => {
  // const { serverUrl, user, setUser } = useContext(CommonContext);
  const [schedule, setSchedule] = useState([]);
  const [calendar, setCalendar] = useState([]);

  const getDatas = async () => {
    // const records = await getRecords(username)[0];
    const records = await getRecords;

    let schedules = records.map((record, index) => {
      let body =
        // "세트 : " +
        // record.sett +
        // "<br/>" +
        // " 무게 : " +
        // record.weight +
        // " kg" +
        // "<br/>" +
        // " 횟수 : " +
        // record.countt;
        record.weight +
        " kg" +
        "<br/>" +
        record.countt +
        " 회" +
        " X " +
        record.sett +
        " 세트";

      let start = new Date(record.startTime).toISOString();
      let end = new Date(record.endTime).toISOString();

      return {
        calendarId: index,
        category: "time",
        isVisible: true,
        title: record.exerciseName,
        id: index,
        body: body,
        start,
        end,
      };
    });

    let calendars = records.map((record, index) => {
      let generateColor = "#" + Math.random().toString(16).substr(-6);
      return {
        id: index,
        name: record.exerciseName,
        color: "#ffffff",
        bgColor: generateColor,
        dragBgColor: generateColor,
        borderColor: generateColor,
      };
    });

    setSchedule(schedules);
    setCalendar(calendars);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return { schedule, calendar };
};

const MySection = (props) => {
  const { level } = props;
  const cal = useRef(null);

  const [index, setIndex] = useState(0);
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("down");

  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;

    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);

    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };

  const onClickSchedule = useCallback((e) => {
    console.log(e);
  }, []);

  // const onBeforeCreateSchedule = useCallback((scheduleData) => {
  //   console.log("-----------");
  //   console.log(scheduleData);

  //   const schedule = {
  //     id: String(Math.random()),
  //     title: scheduleData.title,
  //     isAllDay: scheduleData.isAllDay,
  //     start: scheduleData.start,
  //     end: scheduleData.end,
  //     category: scheduleData.isAllDay ? "allday" : "time",
  //     dueDateClass: "",
  //     location: scheduleData.location,
  //     raw: {
  //       class: scheduleData.raw["class"],
  //     },
  //     state: scheduleData.state,
  //   };

  //   cal.current.calendarInst.createScheduls([schedule]);
  // }, []);

  // const onBeforeDeleteSchedule = useCallback((res) => {
  //   console.log(res);

  //   const { id, calendarId } = res.schedule;

  //   // cal.current.calendarInst.deleteSchedule(id, calendarId);
  // });

  // const onBeforeUpdateSchedule = useCallback((e) => {
  //   console.log(e);

  //   const { schedule, changes } = e;

  //   cal.current.calendarInst.updateSchedule(
  //     schedule.id,
  //     schedule.calendarId,
  //     changes
  //   );
  // }, []);

  const handleClickNextButton = () => {
    const calendarInst = cal.current.getInstance();
    calendarInst.next();
    setRenderRangeTest();
  };

  const handleClickPrevButton = () => {
    const calendarInst = cal.current.getInstance();
    calendarInst.prev();
    setRenderRangeTest();
  };

  const handleClickTodayButton = () => {
    const calendarInst = cal.current.getInstance();
    calendarInst.today();
    setRenderRangeTest();
  };

  const setRenderRangeTest = () => {
    const calendarInst = cal.current.getInstance();
    const renderRange = document.getElementById("renderRange");
    const options = calendarInst.getOptions();
    const viewName = calendarInst.getViewName();
    let html = [];

    if (viewName === "day") {
      html.push(moment(calendarInst.getDate().getTime()).format("YYYY.MM.DD"));
    } else if (
      viewName === "month" &&
      (!options.month.visibleWeeksCount || options.month.visibleWeeksCount > 4)
    ) {
      html.push(moment(calendarInst.getDate().getTime()).format("YYYY.MM"));
    } else {
      html.push(
        moment(calendarInst.getDateRangeStart().getTime()).format("YYYY.MM.DD")
      );
      html.push(" ~ ");
      html.push(
        moment(calendarInst.getDateRangeEnd().getTime()).format(" MM.DD")
      );
    }
    renderRange.innerHTML = html.join("");
  };

  function _getFormattedTime(time) {
    const date = new Date(time);
    const h = date.getHours();
    let m = date.getMinutes();
    m = m === 0 ? "00" : m;

    return `${h}:${m}`;
  }

  function _getTimeTemplate(schedule, isAllDay) {
    var html = [];

    if (!isAllDay) {
      html.push("<strong>" + _getFormattedTime(schedule.start) + "</strong> ");
    }
    if (schedule.isPrivate) {
      html.push('<span class="calendar-font-icon ic-lock-b"></span>');
      html.push(" Private");
    } else {
      if (schedule.isReadOnly) {
        html.push('<span class="calendar-font-icon ic-readonly-b"></span>');
      } else if (schedule.recurrenceRule) {
        html.push('<span class="calendar-font-icon ic-repeat-b"></span>');
      } else if (schedule.attendees.length) {
        html.push('<span class="calendar-font-icon ic-user-b"></span>');
      } else if (schedule.location) {
        html.push('<span class="calendar-font-icon ic-location-b"></span>');
      }
      html.push(" " + schedule.title);
    }

    return html.join("");
  }

  const templates = {
    time: function (schedule) {
      setRenderRangeTest();
      return _getTimeTemplate(schedule, false);
    },
  };

  const record = useGetRecordDatas("");

  const classes = useStyles();

  if (level === 0) {
    return (
      <>
        <Grid container direction="row" justify="space-between" id="menu">
          <Box component="span" id="menu-navi">
            <Button
              variant="contained"
              className={classes.button}
              data-action="move-today"
              onClick={handleClickTodayButton}
            >
              Today
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              data-action="move-prev"
              onClick={handleClickPrevButton}
            >
              <ArrowBackIosIcon />
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              data-action="move-next"
              onClick={handleClickNextButton}
            >
              <ArrowForwardIosIcon />
            </Button>
          </Box>
          <Box component="span">
            <Typography
              variant="h6"
              gutterBottom
              id="renderRange"
              className={classes.typography}
            ></Typography>
          </Box>
        </Grid>
        <Grid>
          {/* <Calendar
            ref={cal}
            height="1000"
            useCreationPopup={true}
            useDetailPopup={true}
            template={templates}
            calendars={record.calendar}
            schedules={record.schedule}
            onClickSchedule={onClickSchedule}
            view="month"
            className="myCalendar"
          ></Calendar> */}
          {username === "헬창" ? (
            <Calendar
              ref={cal}
              height="1000"
              useCreationPopup={true}
              useDetailPopup={true}
              template={templates}
              calendars={record.calendar}
              schedules={record.schedule}
              onClickSchedule={onClickSchedule}
              // onBeforeCreateSchedule={onBeforeCreateSchedule}
              // onBeforeDeleteSchedule={onBeforeDeleteSchedule}
              // onBeforeUpdateSchedule={onBeforeUpdateSchedule}
              view="month"
              className="myCalendar"
            ></Calendar>
          ) : (
            <Calendar
              ref={cal}
              height="1000"
              useCreationPopup={true}
              useDetailPopup={true}
              template={templates}
              onClickSchedule={onClickSchedule}
              // onBeforeCreateSchedule={onBeforeCreateSchedule}
              // onBeforeDeleteSchedule={onBeforeDeleteSchedule}
              // onBeforeUpdateSchedule={onBeforeUpdateSchedule}
              view="month"
              className="myCalendar"
            ></Calendar>
          )}
        </Grid>
      </>
    );
  } else if (level === 1) {
    return (
      <Grid container direction="row" justify="center" alignItems="stretch">
        <Grid item>
          <Arrow direction="left" clickFunction={() => onArrowClick("left")} />
        </Grid>
        <Slide in={slideIn} direction={slideDirection}>
          <Grid item>
            <CarouselSlide content={content} />
          </Grid>
        </Slide>
        <Grid item>
          <Arrow
            direction="right"
            clickFunction={() => onArrowClick("right")}
          />
        </Grid>
      </Grid>
    );
  }
};

const StyledTabs = withStyles({
  indicator: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    "& > span": {
      maxWidth: 80,
      width: "100%",
      backgroundColor: "#635ee7",
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    color: "#fff",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    "&:focus": {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

const MyLog = (props) => {
  const classes = useStyles();
  const categoryDatas = useGetCategoryDatas("/category");

  const [
    onChangeIndexHandler,
    appbarIndex,
    appbarIndexDelta,
  ] = useOnChangeIndex(categoryDatas);

  return (
    <div className={classes.root}>
      <Grid className="vote-grid-title-grid">
        <Typography variant="h5" align="center" className={classes.typography}>
          {username ? username : ""}
        </Typography>
      </Grid>
      <br></br>
      <Divider variant="middle" classes={{ root: classes.divider }} />
      <br></br>
      <StyledTabs
        value={appbarIndex + appbarIndexDelta}
        onChange={onChangeIndexHandler}
        variant="scrollable"
        aria-label="full width tabs example"
        className={classes.tabs}
      >
        {categoryDatas.map((categoryData, index) => (
          <StyledTab
            key={index}
            {...a11yProps(index)}
            label={
              <ButtonBases
                categoryData={categoryData}
                isSelected={index === appbarIndex ? true : false}
                index={index}
              />
            }
            className="tab"
          ></StyledTab>
        ))}
      </StyledTabs>
      {categoryDatas.map((categoryData, index) => (
        <TabPanel
          key={index}
          value={appbarIndex}
          index={index}
          className="tab-panel"
        >
          <Grid className="vote-grid-title-grid">
            <Typography
              variant="h4"
              align="center"
              className={classes.typography}
            >
              {categoryData.cat_title}
            </Typography>
          </Grid>
          <br></br>
          <Divider
            variant="middle"
            classes={{ root: classes.divider }}
            style={{ margin: "0px 0 20px 0" }}
          />
        </TabPanel>
      ))}
    </div>
  );
};

export default MyLog;
