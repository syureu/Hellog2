import React, { Component } from "react";
import "../main.css";

import axios from "axios";

class right_write extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      mealImg: "",
      contents: "",
    };
  }

  _submitBoard = async function () {
    const title = document.getElementsByName("title")[0].value.trim();
    const mealImg = document.getElementsByName("mealImg")[0];
    const contents = document.getElementsByName("contents")[0].value.trim();
    if (title === "") {
      return alert("제목을 입력해주세요.");
    } else if (contents === "") {
      return alert("내용을 입력해주세요.");
    } else if (mealImg.value === "") {
      return alert("사진을 입력해주세요.");
    }
    var AuthID = sessionStorage.getItem("AuthID");

    const baseUrl = "https://i3d203.p.ssafy.io:29002";
    let addrArray = mealImg.value.split(".");
    try {
      const tmp = await axios(baseUrl + "/api/users/myinfo", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthID,
        },
      });

      const data = {
        writer: tmp.data.id,
        title: title,
        content: contents,
        //picture: mealImg.files[0],
      };
      const res = await axios(baseUrl + "/api/dietboards/dietboard", {
        method: "POST",
        data: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthID,
        },
      });

      console.log(res);
      if (res) {
        alert("글 등록이 완료되었습니다.");
        return window.location.replace("/admin/abc");
      }
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    return (
      <div>
        <div id="post_submit">
          <button onClick={() => this._submitBoard()}> 포스트 등록 </button>
        </div>
      </div>
    );
  }
}

export default right_write;
