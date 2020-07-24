import React, { useState, useContext, useCallback, useEffect } from 'react';
import {
  Paper,
  Grid,
  Avatar,
  createMuiTheme,
  ThemeProvider,
  Fab,
  Divider,
  FormControlLabel,
  Checkbox,
  Input,
  Select,
  MenuItem,
  FormControl,
} from '@material-ui/core';
import Wrapper from './styles';
import RadioButtonsGroup from './../RadioButtonsGroup/index';
import BasicDateTimePicker from './../DateTimePicker';
import { CommonContext } from '../../../context/CommonContext';
import { ViewContext } from '../../../context/ViewContext';
import { useDropzone } from 'react-dropzone';
import NavigationIcon from '@material-ui/icons/Navigation';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';

import categoryDats from './trainers.json';

const themeSubTitleGroupComponent = createMuiTheme({
  overrides: {
    MuiFormControlLabel: {
      root: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
  },
});

const InputTitleComponent = () => {
  const { title, setTitle, description, setDescription } = useContext(
    ViewContext,
  );

  const onChangeDescriptionTitleHandler = e => {
    setDescription(e.target.value);
  };

  const onChangeTitleHandler = e => {
    setTitle(e.target.value);
  };

  return (
    <Wrapper>
      <Input
        placeholder="제목을 입력해주세요 (ex. 2020.01.01 홍길동 저녁 식단)"
        defaultValue={title}
        inputProps={{
          'aria-label': 'description',
        }}
        fullWidth={true}
        onChange={onChangeTitleHandler}
        className="input-title-component-input1"
      />
      <Input
        placeholder="식단에 대해서 설명해주세요"
        defaultValue={description}
        multiline={true}
        inputProps={{
          'aria-label': 'description',
        }}
        fullWidth={true}
        onChange={onChangeDescriptionTitleHandler}
        className="input-title-component-input2"
      />
    </Wrapper>
  );
};

const SubTitleGroupComponent = () => {
  const {
    isMultipleChoice,
    setIsMultipleChoice,
    isPowerVoteChoice,
    setIsPowerVoteChoice,
  } = useContext(ViewContext);

  const onChangeIsMultipleChoiceHandler = name => e => {
    setIsMultipleChoice(e.target.checked);
  };

  const onChangeIsPowerVoteChoiceHandler = name => e => {
    setIsPowerVoteChoice(e.target.checked);
  };

  return (
    <Wrapper>
      <ThemeProvider theme={themeSubTitleGroupComponent}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
        >
          <Grid item xs={12}>
            <h2>
              식단 종류
              <Divider
                variant="fullWidth"
                orientation="horizontal"
                className="sub-title-group-component-divider"
              />
            </h2>
          </Grid>
        </Grid>
      </ThemeProvider>
    </Wrapper>
  );
};

const useGetCategoryDatas = url => {
  const { serverUrl, user, setUser } = useContext(CommonContext);
  const [data, setData] = useState([]);

  const getDatas = async () => {
    setData(categoryDats);
  };

  useEffect(() => {
    getDatas();
  }, []);

  return data;
};

const SelectCategoryComponent = () => {
  const { category, setCategory } = useContext(ViewContext);
  const categoryDatas = useGetCategoryDatas('/category');
  const handleChange = e => {
    setCategory(e.target.value);
  };

  return (
    <Wrapper>
      <FormControl className="form-control">
        <Select
          value={category}
          onChange={handleChange}
          displayEmpty
          className="select-empty"
          required
        >
          <MenuItem value={0} disabled>
            담당 트레이너를 선택해주세요
          </MenuItem>

          {categoryDatas.map((data, index) => (
            <MenuItem key={index} value={data.cat_no}>
              {data.cat_type}
            </MenuItem>
          ))}
        </Select>
        {/* <FormHelperText>Select category</FormHelperText> */}
      </FormControl>
    </Wrapper>
  );
};

const CreateVoteMainComponent = () => {
  return (
    <Wrapper className="create-vote-main-component">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item xs={12}>
          <InputTitleComponent />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={3}>
              <SelectCategoryComponent />
            </Grid>
            <Grid item>
              <BasicDateTimePicker />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} className="create-vote-main-component-grid-item">
          <SubTitleGroupComponent />
          <RadioButtonsGroup />
        </Grid>
      </Grid>
    </Wrapper>
  );
};

const ThumbnailImageComponent = props => {
  const { thumbnailImageData, setThumbnailImageData } = useContext(ViewContext);

  const onDrop = useCallback(acceptedFiles => {
    console.log('PPAP: Basic -> acceptedFiles', acceptedFiles);
    // Do something with the files
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone(onDrop);

  useEffect(() => {
    for (const file of acceptedFiles) {
      console.log('TCL: Basic -> file', file);
      setThumbnailImageData({
        img: URL.createObjectURL(file),
        file: file,
      });
    }
  }, [acceptedFiles]);

  const files = acceptedFiles.map(file => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Wrapper>
      <h4 className="ThumbnailImageComponentH4">식단 사진</h4>
      <Paper>
        <section className="container">
          <div {...getRootProps({ className: 'dropzone' })}>
            {thumbnailImageData.img ? (
              <Avatar
                variant="square"
                src={thumbnailImageData.img}
                className="coverAvatar"
              />
            ) : (
              <Fab variant="extended" className="cover-upload-fab">
                <NavigationIcon className="extended-icon" />
                Upload Image
              </Fab>
            )}
            <input {...getInputProps()} />
          </div>
          <aside className="thumbnail-image-component-aside">
            <h4>최소 "800x600" 이상의 사진을 올려주세요</h4>
            <ul>{files}</ul>
          </aside>
        </section>
      </Paper>
    </Wrapper>
  );
};

const CreateVoteComponent = () => {
  return (
    <Grid
      container
      direction="row-reverse"
      justify="center"
      alignItems="flex-start"
      spacing={2}
    >
      <Grid item xs={12} sm={9}>
        <CreateVoteMainComponent />
      </Grid>
      <Grid item xs={12} sm={3}>
        <ThumbnailImageComponent />
      </Grid>
    </Grid>
  );
};

export default CreateVoteComponent;
