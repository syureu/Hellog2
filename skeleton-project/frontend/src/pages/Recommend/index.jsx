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
} from '@material-ui/core';

import Axios from 'axios';

import { CommonContext } from '../../context/CommonContext';
import { ViewContext } from '../../context/ViewContext';

import ButtonBases from '../../components/Main/ButtonBases';
import VoteGridList from '../../components/Grid/VoteGridList';
import VoteGridTitle from '../../components/Grid/VoteGridTitle';

import categoryDats from './dump.json';

const TestClicked = () => {
  console.log('Test 성공');
};

///////////////////////////////////////////////
// main section (운동법)

const MainSection = props => {
  const { level } = props;
  if (level == 0) {
    return (
      <Box>
        <label>index : 0 </label>
        <Button onClick={TestClicked}>Test</Button>
        <img src="data:image/png;base64,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"></img>
      </Box>
    );
  } else if (level == 1) {
    return (
      <Box>
        <label>index : 1 </label>
      </Box>
    );
  } else if (level == 2) {
    return (
      <Box>
        <label>index : 2 </label>
      </Box>
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

const MainVote = props => {
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

export default MainVote;
