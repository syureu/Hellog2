import React, { Component } from "react";
import "./main.css";

class write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: "",
      previewURL: "",
      base64Img: "",
    };
  }

  handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        previewURL: reader.result,
      });
    };
    reader.readAsDataURL(file);

    var File = document.querySelector("#mealImg");
    var base64Img;

    // 정상 로드시 result에 인코딩 값을 저장하기
    var Reader = new FileReader(File);
    Reader.onload = function () {
      base64Img = Reader.result;
    };
    // 실패할 경우 에러 출력하기
    Reader.onerror = function (error) {
      console.log("Error");
    };
  };

  render() {
    let mealImg_preview = null;
    if (this.state.file !== "") {
      mealImg_preview = (
        <img className="mealImg_preview" src={this.state.previewURL}></img>
      );
    }

    return (
      <div className="Write">
        <div>
          <input
            type="text"
            autoComplete="off"
            id="title_txt"
            name="title"
            placeholder="제목"
          />
        </div>

        <div>
          <input
            type="file"
            id="mealImg"
            autoComplete="off"
            accept="image/jpg,impge/png,image/jpeg,image/gif"
            name="mealImg"
            onChange={this.handleFileOnChange}
          ></input>
          {mealImg_preview}
        </div>

        <div>
          <textarea
            id="content_txt"
            name="contents"
            placeholder="내용을 입력하세요."
          ></textarea>
        </div>
      </div>
    );
  }
}

export default write;
