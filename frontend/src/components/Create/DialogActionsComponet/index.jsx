import React, { useContext } from 'react';

import Grid from '@material-ui/core/Grid';

import { useHistory } from 'react-router-dom';

import Fab from '@material-ui/core/Fab';

import Axios from 'axios';

import { CommonContext } from '../../../context/CommonContext';
import { ViewContext } from '../../../context/ViewContext';

import Wrapper from './styles';

const DialogActionsComponet = () => {
  const { serverUrl, user, setSignDialogOpen, setUser, setEndDt } = useContext(
    CommonContext,
  );

  let history = useHistory();

  const {
    data,
    title,
    thumbnailImageData,
    isMultipleChoice,
    isPowerVoteChoice,
    description,
    readyToUpload,
    category,
    endDt,
  } = useContext(ViewContext);

  const createVoteHandler = async () => {
    if (user.user_id === '') {
      alert('Please sign in to upload.');
      setSignDialogOpen(true);
      return;
    }

    if (title === '') {
      alert(`제목을 입력해주세요.`);
      return;
    }
    if (category === 0) {
      alert(`식사 시간대를 선택해주세요.`);
      return;
    }

    if (thumbnailImageData.img === '') {
      alert(`사진을 등록해주세요.`);
      return;
    }
    if (data[0].optionTitle === '' || data[1].optionTitle === '') {
      alert(`식재료를 입력해주세요.`);
      return;
    }

    const formData = new FormData();

    formData.append('files', thumbnailImageData.file);

    for (const optionData of data) {
      if (optionData.targetUploadType === 'image') {
        formData.append('files', optionData.uploadTarget);
      }
    }

    var optionData = {
      title: title,
      description: description,
      data: data.map(x => {
        return {
          optionTitle: x.optionTitle,
          targetUploadType: x.targetUploadType,
          uploadTargetPath:
            x.targetUploadType !== 'image'
              ? x.uploadTarget
              : x.uploadTarget.path,
        };
      }),
      isMultipleChoice,
      category,
      isPowerVoteChoice,
      thumbnailImage: thumbnailImageData.file.path,
      end_dt: endDt,
    };

    formData.append('optionData', JSON.stringify(optionData));

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        authorization: user.token,
      },
    };

    console.log({ user });
    console.log({ formData });
    console.log({ config });

    //
    alert('Registered.');
    history.push(`/FinalTest/`);
  };

  const handleClose = () => {
    history.goBack();
  };

  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justify="flex-end"
        alignItems="center"
        className="dialog-actions-componet-grid"
      >
        <Fab
          variant="extended"
          aria-label="like"
          onClick={handleClose}
          className="up-cancel-fab dialog-actions-componet-fab1"
        >
          취소
        </Fab>

        <Fab
          variant="extended"
          aria-label="like"
          color="inherit"
          onClick={readyToUpload && createVoteHandler}
          className="up-cancel-fab"
          style={{
            backgroundColor: readyToUpload ? 'Red' : 'Gray',
          }}
        >
          식단 등록
        </Fab>
      </Grid>
    </Wrapper>
  );
};

export default DialogActionsComponet;
