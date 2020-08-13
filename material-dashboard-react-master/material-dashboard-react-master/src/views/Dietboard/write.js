import React, { Component } from "react";
import "./main.css";

import { CKEditor } from "../../inc/index";

import "codemirror/lib/codemirror.css";
import "@toast-ui/editor/dist/toastui-editor.css";

import { Editor } from "@toast-ui/react-editor";

class write extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.match.params.data && this.props.title.length === 0) {
      this.props._getModifyData(this.props.match.params.data);
    }
  }

  render() {
    const { _getContents, _getTitles, contents, title } = this.props;

    return (
      <div className="Write">
        <div id="Title">
          <input
            type="text"
            autoComplete="off"
            id="title_txt"
            name="title"
            placeholder="제목"
            defaultValue={title}
            onBlur={() => _getTitles()}
          />
        </div>

        <div>
          <CKEditor _getContents={_getContents} contents={contents} />
          <Editor
            initialValue="hello react editor world!"
            previewStyle="vertical"
            height="600px"
            initialEditType="markdown"
            useCommandShortcut={true}
            _getContents={_getContents}
            contents={contents}
          />
        </div>
      </div>
    );
  }
}

export default write;
