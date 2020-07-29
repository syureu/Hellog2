import React, { useState } from 'react';

import { ViewContext } from '../../context/ViewContext';
import DialogActionsComponet from '../../components/Create/DialogActionsComponet/index';
import CreateArticleComponent from '../../components/Create/CreateArticleComponent/index';

const Create = props => {
  const [nowSelectedIndex, setNowSelectedIndex] = useState(0);
  const [isMultipleChoice, setIsMultipleChoice] = useState(false);
  const [isPowerVoteChoice, setIsPowerVoteChoice] = useState(false);
  const [category, setCategory] = useState(0);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnailImageData, setThumbnailImageData] = useState({
    img: '',
  });
  const [readyToUpload, setReadyToUpload] = useState(true);

  const [data, setData] = useState([
    {
      optionTitle: '',
      targetUploadType: '',
      uploadTarget: '',
      uploadTargetPath: '',
    },
    {
      optionTitle: '',
      targetUploadType: '',
      uploadTarget: '',
      uploadTargetPath: '',
    },
  ]);
  const [endDt, setEndDt] = useState(0);

  return (
    <ViewContext.Provider
      value={{
        data,
        setData,
        nowSelectedIndex,
        setNowSelectedIndex,
        title,
        setTitle,
        thumbnailImageData,
        setThumbnailImageData,
        isMultipleChoice,
        category,
        setCategory,
        setIsMultipleChoice,
        isPowerVoteChoice,
        setIsPowerVoteChoice,
        description,
        setDescription,
        readyToUpload,
        setReadyToUpload,
        endDt,
        setEndDt,
      }}
    >
      <DialogActionsComponet props={props} />
      <h3>식단을 입력해주세요</h3>
      <br />
      <CreateArticleComponent />
    </ViewContext.Provider>
  );
};

export default Create;
