import React, { useState, useEffect, useContext } from 'react';
import Layout from '../../layout/';
import Wrapper from './styles';

import { CommonContext } from '../../context/CommonContext';
import { ViewContext } from '../../context/ViewContext';

import ButtonBases from '../../components/Main/ButtonBases';
import VoteGridList from '../../components/Grid/VoteGridList';
import VoteGridTitle from '../../components/Grid/VoteGridTitle';

import categoryDats from './dump.json';

///////////////////////////////////////////////
// sub

const plactice = (props) => {
  return (
    <Layout>
      <Wrapper>
        <label>Test Label</label>
      </Wrapper>
    </Layout>
  );
};

export default plactice;
