import React, { useState, useEffect, useContext } from 'react';
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

import TestImage from './TestImage.jpg';

const TestClicked = () => {
  console.log('Test 성공');
};

///////////////////////////////////////////////
// main section (운동법)

const MainSection = props => {
  const { level } = props;
  if (level == 0) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <label>index : 0 </label>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={TestClicked}>스트레칭</Button>
          <Button onClick={TestClicked}>Day1</Button>
          <Button onClick={TestClicked}>Day2</Button>
          <Button onClick={TestClicked}>Day3</Button>
          <Button onClick={TestClicked}>Day4</Button>
          <Button onClick={TestClicked}>Day5</Button>
        </Grid>
        <Grid item xs={6}>
          <img src={TestImage}></img>
        </Grid>
        <Grid item xs={3}>
          Section 2
        </Grid>
        <Grid item xs={3}>
          Section 3
        </Grid>
      </Grid>
    );
  } else if (level == 1) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <label>index : 2 </label>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={TestClicked}>Test</Button>
        </Grid>
        <Grid item xs={6}>
          중급자 이미지 넣기
        </Grid>
        <Grid item xs={3}>
          Section 2
        </Grid>
        <Grid item xs={3}>
          Section 3
        </Grid>
      </Grid>
    );
  } else if (level == 2) {
    return (
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <label>index : 3 </label>
        </Grid>
        <Grid item xs={6}>
          <Button onClick={TestClicked}>Day1</Button>
          <Button onClick={TestClicked}>Day2</Button>
        </Grid>
        <Grid item xs={6}>
          상급자 이미지 넣기
        </Grid>
        <Grid item xs={3}>
          Section 2
        </Grid>
        <Grid item xs={3}>
          Section 3
        </Grid>
      </Grid>
    );
  } else if (level == 3) {
    return (
      <Box>
        <label>index : 3 </label>
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
