import React, { useState, useEffect, useContext } from 'react';
import { Link, Route, Switch, BrowserRouter } from 'react-router-dom';
import Layout from '../../layout/';
import Wrapper from './styles';
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Divider,
  Button,
  Grid,
} from '@material-ui/core';

import Axios from 'axios';

import { CommonContext } from '../../context/CommonContext';
import { ViewContext } from '../../context/ViewContext';

import ButtonBases from '../../components/Main/ButtonBases';
import VoteGridList from '../../components/Grid/VoteGridList';
import VoteGridTitle from '../../components/Grid/VoteGridTitle';

import categoryDats from './dump.json';

import Stretching from './stretching';
import BDay1 from './Beginner/bday1';
import BDay2 from './Beginner/bday2';
import BDay3 from './Beginner/bday3';
import BDay4 from './Beginner/bday4';
import BDay5 from './Beginner/bday5';

import IDay1 from './Intermediate/iday1';
import IDay2 from './Intermediate/iday2';
import IDay3 from './Intermediate/iday3';
import IDay4 from './Intermediate/iday4';
import IDay5 from './Intermediate/iday5';

import mdt from './Advanced/mdt';

import ronnie from './ronnie.jpg';

const TestClicked = () => {
  console.log('Test 성공');
};

///////////////////////////////////////////////
// main section (운동법)

const MainSection = props => {
  const { level } = props;
  if (level == 0) {
    return (
      <BrowserRouter>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <label>
              <h4>Beginner Routine </h4>
            </label>
          </Grid>
          <Grid item xs={6} align="right">
            <Link to="/Recommend/stretching">
              <Button>Warm-up</Button>
            </Link>
            <Link to="/Recommend/beginner/day1">
              <Button>Day1</Button>
            </Link>
            <Link to="/Recommend/beginner/day2">
              <Button>Day2</Button>
            </Link>
            <Link to="/Recommend/beginner/day3">
              <Button>Day3</Button>
            </Link>
            <Link to="/Recommend/beginner/day4">
              <Button>Day4</Button>
            </Link>
            <Link to="/Recommend/beginner/day5">
              <Button>Day5</Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route
                path="/Recommend/stretching"
                component={Stretching}
              ></Route>
              <Route path="/Recommend/beginner/day1" component={BDay1}></Route>
              <Route path="/Recommend/beginner/day2" component={BDay2}></Route>
              <Route path="/Recommend/beginner/day3" component={BDay3}></Route>
              <Route path="/Recommend/beginner/day4" component={BDay4}></Route>
              <Route path="/Recommend/beginner/day5" component={BDay5}></Route>
            </Switch>
          </Grid>
        </Grid>
      </BrowserRouter>
    );
  } else if (level == 1) {
    return (
      <BrowserRouter>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <label>
              <h4>Intermegidate Routine </h4>
            </label>
          </Grid>
          <Grid item xs={6} align="right">
            <Link to="/Recommend/stretching">
              <Button>Warm-up</Button>
            </Link>
            <Link to="/Recommend/intermediate/day1">
              <Button>Day1</Button>
            </Link>
            <Link to="/Recommend/intermediate/day2">
              <Button>Day2</Button>
            </Link>
            <Link to="/Recommend/intermediate/day3">
              <Button>Day3</Button>
            </Link>
            <Link to="/Recommend/intermediate/day4">
              <Button>Day4</Button>
            </Link>
            <Link to="/Recommend/intermediate/day5">
              <Button>Day5</Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route
                path="/Recommend/stretching"
                component={Stretching}
              ></Route>
              <Route
                path="/Recommend/intermediate/day1"
                component={IDay1}
              ></Route>
              <Route
                path="/Recommend/intermediate/day2"
                component={IDay2}
              ></Route>
              <Route
                path="/Recommend/intermediate/day3"
                component={IDay3}
              ></Route>
              <Route
                path="/Recommend/intermediate/day4"
                component={IDay4}
              ></Route>
              <Route
                path="/Recommend/intermediate/day5"
                component={IDay5}
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
          <Grid item xs={6}>
            <label>
              <h4>Advanced Routine </h4>
            </label>
          </Grid>
          <Grid item xs={6} align="right">
            <Link to="/Recommend/stretching">
              <Button>Warm-up</Button>
            </Link>
            <Link to="/Recommend/advanced/day1">
              <Button>MDT</Button>
            </Link>
            <Link to="/Recommend/advanced/day2">
              <Button>Day2</Button>
            </Link>
            <Link to="/Recommend/advanced/day3">
              <Button>Day3</Button>
            </Link>
            <Link to="/Recommend/advanced/day4">
              <Button>Day4</Button>
            </Link>
            <Link to="/Recommend/advanced/day5">
              <Button>Day5</Button>
            </Link>
          </Grid>
          <Grid item xs={12}>
            <Switch>
              <Route
                path="/Recommend/stretching"
                component={Stretching}
              ></Route>
              <Route path="/Recommend/advanced/day1" component={mdt}></Route>
              <Route path="/Recommend/advanced/day2" component={IDay2}></Route>
              <Route path="/Recommend/advanced/day3" component={IDay3}></Route>
              <Route path="/Recommend/advanced/day4" component={IDay4}></Route>
              <Route path="/Recommend/advanced/day5" component={IDay5}></Route>
            </Switch>
          </Grid>
        </Grid>
      </BrowserRouter>
    );
  } else if (level == 3) {
    return (
      <Box>
        <label>
          <h4>PT Cource </h4>
        </label>
      </Box>
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

const TabPanel = props => {
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
      {/* <img align="center" width="700" src={ronnie}></img> */}
    </Typography>
  );
};

const a11yProps = index => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

///////////////////////////////////////////////
// hook

const useGetCategoryDatas = url => {
  const { serverUrl, user, setUser } = useContext(CommonContext);
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

const useOnChangeIndex = categoryDatas => {
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

///////////////////////////////////////////////
// main

const Recommend = props => {
  const { drawerOpen, serverUrlBase, serverImgUrl } = useContext(CommonContext);

  const categoryDatas = useGetCategoryDatas('/category');

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
      <Layout>
        <Wrapper>
          <AppBar
            position="fixed"
            color="inherit"
            className={drawerOpen ? 'appbar appbar-shift' : 'appbar'}
          >
            <Tabs
              value={appbarIndex + appbarIndexDelta}
              onChange={onChangeIndexHandler}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              aria-label="full width tabs example"
              className="big-indicator"
            >
              // 상단 카테고리
              {categoryDatas.map((categoryData, index) => (
                <Tab
                  key={index}
                  {...a11yProps(index)}
                  label={
                    <ButtonBases
                      categoryData={categoryData}
                      isSelected={index === appbarIndex ? true : false}
                      serverUrlBase={serverUrlBase}
                      serverImgUrl={serverImgUrl}
                      index={index}
                    />
                  }
                  className="tab"
                ></Tab>
              ))}
            </Tabs>
          </AppBar>
          {categoryDatas.map((categoryData, index) => (
            <TabPanel
              key={index}
              value={appbarIndex}
              index={index}
              className="tab-panel"
            >
              <VoteGridTitle categoryData={categoryData} />
              <Divider style={{ margin: '0px 0 20px 0' }} />
            </TabPanel>
          ))}
        </Wrapper>
      </Layout>
    </ViewContext.Provider>
  );
};

export default Recommend;
