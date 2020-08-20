import React, { useState, useEffect, useContext } from "react";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import {
  createMuiTheme,
  withStyles,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { yellow, purple, white } from "@material-ui/core/colors";

import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Divider,
  Grid,
} from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

import Axios from "axios";

import { CommonContext } from "../../context/CommonContext";
import { ViewContext } from "../../context/ViewContext";

import ButtonBases from "../../components/Main/ButtonBases";
import VoteGridList from "../../components/Grid/VoteGridList";
import VoteGridTitle from "../../components/Grid/VoteGridTitle";

import categoryDats from "./dump.json";

import Stretching from "./stretching";

//Beginner
import Week13 from "./Beginner/week13";
import Week47 from "./Beginner/week47";
import Week710 from "./Beginner/week710";
import Week1012 from "./Beginner/week1012";

//intermediate
import WorkoutA from "./Intermediate/workouta";
import WorkoutB from "./Intermediate/workoutb";
import WorkoutC from "./Intermediate/workoutc";

//Advanced

import Back from "./Advanced/back";
import Biceps from "./Advanced/biceps";
import Chest from "./Advanced/chest";
import Leg from "./Advanced/leg";
import Shoulder from "./Advanced/shoulder";
import Triceps from "./Advanced/triceps";

const TestClicked = () => {
  console.log("Test 성공");
};
///////////////////////////////////////////////
// main section (운동법)
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[100]),
    backgroundColor: yellow[100],
    "&:hover": {
      backgroundColor: yellow[300],
    },
  },
}))(Button);

const MainSection = (props) => {
  const { level } = props;
  if (level == 0) {
    return (
      <BrowserRouter>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center">
            <label align="center">
              <div align="center">
                <h4>
                  "Beginner Program" 은 앞으로 계속 될 운동들을 진행 할 수
                  있도록
                </h4>
                <h4>기초적인 체력 및 근육 발달을 위한 프로그램입니다</h4>
              </div>
              <br />
              <ul align="center">
                <li>
                  <h5>
                    총 12주 프로그램이며, 각 주차별 운동법이 소개되어 있습니다.
                  </h5>
                </li>
                <li>
                  <h5>
                    소개된 프로그램은 1일 운동 프로그램이며, 수행 후 1~2일의
                    휴식을 취하세요.
                  </h5>
                </li>
                <li>
                  <h5> 주 3회(일) 정도의 운동을 권장합니다.</h5>
                </li>
              </ul>
            </label>
          </Grid>
          <Grid item xs={6}>
            <label>
              <h4>Beginner Routine </h4>
            </label>
          </Grid>
          <Grid item xs={6} align="right">
            <Link to="/Recommend/stretching">
              <ColorButton>Warm-up</ColorButton>
            </Link>{" "}
            <Link to="/Recommend/beginner/week13">
              <ColorButton>1-3 Weeks</ColorButton>
            </Link>{" "}
            <Link to="/Recommend/beginner/week47">
              <ColorButton>4-6 Weeks</ColorButton>
            </Link>{" "}
            <Link to="/Recommend/beginner/week710">
              <ColorButton>7-9 Weeks</ColorButton>
            </Link>{" "}
            <Link to="/Recommend/beginner/week1012">
              <ColorButton>10-12 Weeks</ColorButton>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route
                path="/Recommend/stretching"
                component={Stretching}
              ></Route>
              <Route
                path="/Recommend/beginner/week13"
                component={Week13}
              ></Route>
              <Route
                path="/Recommend/beginner/week47"
                component={Week47}
              ></Route>
              <Route
                path="/Recommend/beginner/week710"
                component={Week710}
              ></Route>
              <Route
                path="/Recommend/beginner/week1012"
                component={Week1012}
              ></Route>
            </Switch>
          </Grid>
        </Grid>
      </BrowserRouter>
    );
  } else if (level == 1) {
    return (
      <BrowserRouter>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center">
            <label align="center">
              <div align="center">
                <h4>"Intermediate Program" 은 Beginner Routine을 끝내고</h4>
                <h4>3분할을 통해 집중적으로 운동하는 Routine입니다</h4>
              </div>
              <br />
              <ul align="center">
                <li>
                  <h5> A : 가슴, 어깨, 삼두 / B : 등, 이두 / C : 하체</h5>
                </li>
                <li>
                  <h5>
                    하루에 Chapter 하나씩, 한 주간 A B C 휴식 A B 코스를
                    권장합니다
                  </h5>
                </li>
              </ul>
            </label>
          </Grid>
          <Grid item xs={6}>
            <label>
              <h4>Intermegidate Routine </h4>
            </label>
          </Grid>
          <Grid item xs={6} align="right">
            <Link to="/Recommend/stretching">
              <ColorButton color="secondary">Warm-up</ColorButton>
            </Link>{" "}
            <Link to="/Recommend/intermediate/workouta">
              <ColorButton color="secondary">A</ColorButton>
            </Link>{" "}
            <Link to="/Recommend/intermediate/workoutb">
              <ColorButton color="secondary">B</ColorButton>
            </Link>{" "}
            <Link to="/Recommend/intermediate/workoutc">
              <ColorButton color="secondary">C</ColorButton>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route
                path="/Recommend/stretching"
                component={Stretching}
              ></Route>
              <Route
                path="/Recommend/intermediate/workouta"
                component={WorkoutA}
              ></Route>
              <Route
                path="/Recommend/intermediate/workoutb"
                component={WorkoutB}
              ></Route>
              <Route
                path="/Recommend/intermediate/workoutc"
                component={WorkoutC}
              ></Route>
            </Switch>
          </Grid>
        </Grid>
      </BrowserRouter>
    );
  } else if (level == 2) {
    return (
      <BrowserRouter>
        <Grid container spacing={2}>
          <Grid item xs={12} align="center">
            <label align="center">
              <div align="center">
                <h4>"Advanced Program" 은 Intermediate Routine을 끝내고</h4>
                <h4>자신만의 루틴을 만들어 나가야합니다.</h4>
              </div>
              <br />
              <ul align="center">
                <li>
                  <h5> 항상 부상위험에 주의해주세요</h5>
                </li>
                <li>
                  <h5>
                    각 부위별 운동만 소개해놓았습니다. 본인에게 맞는 Routine을
                    완성하세요
                  </h5>
                </li>
              </ul>
            </label>
          </Grid>
          <Grid item xs={6}>
            <label>
              <h4>Advanced Routine </h4>
            </label>
          </Grid>
          <Grid item xs={6} align="right">
            <Link to="/Recommend/advanced/chest">
              <ColorButton color="secondary">Chest</ColorButton>
            </Link>{" "}
            <Link to="/Recommend/advanced/back">
              <ColorButton color="secondary">Back</ColorButton>
            </Link>{" "}
            <Link to="/Recommend/advanced/leg">
              <ColorButton color="secondary">Leg</ColorButton>
            </Link>{" "}
            <Link to="/Recommend/advanced/shoulder">
              <ColorButton color="secondary">Shoulder</ColorButton>
            </Link>{" "}
            <Link to="/Recommend/advanced/biceps">
              <ColorButton color="secondary">Biceps</ColorButton>
            </Link>{" "}
            <Link to="/Recommend/advanced/triceps">
              <ColorButton color="secondary">Triceps</ColorButton>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route
                path="/Recommend/stretching"
                component={Stretching}
              ></Route>
              <Route path="/Recommend/advanced/chest" component={Chest}></Route>
              <Route path="/Recommend/advanced/back" component={Back}></Route>
              <Route path="/Recommend/advanced/leg" component={Leg}></Route>
              <Route
                path="/Recommend/advanced/shoulder"
                component={Shoulder}
              ></Route>
              <Route
                path="/Recommend/advanced/biceps"
                component={Biceps}
              ></Route>
              <Route
                path="/Recommend/advanced/triceps"
                component={Triceps}
              ></Route>
            </Switch>
          </Grid>
        </Grid>
      </BrowserRouter>
    );
  } else {
    return (
      <>
        <label>Nothing</label>
      </>
    );
  }
};

///////////////////////////////////////////////
// sub

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
      <MainSection level={index}></MainSection>
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
  const [data, setData] = useState([]);

  const getDatas = async () => {
    let respone = [];

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

    if (newIndex !== categoryDatas.length - 1) {
      deltaValue = 0;
    }
    if (newIndex !== 0) {
      deltaValue = 0;
    }
    setAppbarIndexDelta(deltaValue);
    setAppbarIndex(newIndex);
  };

  return [onChangeIndexHandler, appbarIndex, appbarIndexDelta];
};

///////////////////////////////////////////////
// main

const Recommend = (props) => {
  const categoryDatas = useGetCategoryDatas("/category");

  const [
    onChangeIndexHandler,
    appbarIndex,
    appbarIndexDelta,
  ] = useOnChangeIndex(categoryDatas);

  return (
    <ViewContext.Provider
      value={{
        categoryDatas,
      }}
    >
      <Tabs
        value={appbarIndex + appbarIndexDelta}
        onChange={onChangeIndexHandler}
        indicatorColor="secondary"
        textColor="secondary"
        variant="scrollable"
        aria-label="full width tabs example"
        className="big-indicator text-white"
      >
        // 상단 카테고리
        {categoryDatas.map((categoryData, index) => (
          <Tab
            key={index}
            {...a11yProps(index)}
            label={<ButtonBases categoryData={categoryData} index={index} />}
            className="tab text-white"
          ></Tab>
        ))}
      </Tabs>
      {categoryDatas.map((categoryData, index) => (
        <TabPanel
          key={index}
          value={appbarIndex}
          index={index}
          className="tab-panel "
        >
          <VoteGridTitle categoryData={categoryData} />
          <Divider style={{ margin: "0px 0 20px 0" }} />
        </TabPanel>
      ))}
    </ViewContext.Provider>
  );
};

export default Recommend;
