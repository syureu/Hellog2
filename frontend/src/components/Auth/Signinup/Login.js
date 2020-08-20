import React, { useState } from "react";
import {
  Link,
  // Route,
  // Switch,
  // BrowserRouter,
  // withRouter,
} from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
// import Admin from "layouts/Admin.js";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import { Button } from "react-bootstrap";

const Login = ({ setHasCookie }) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const baseUrl = "https://i3d203.p.ssafy.io:29002";
  const loginApi = (user) => {
    return fetch(baseUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer",
        // 여기에 Authorization 관해서 저장되게 해야할 거 같은데
      },
      body: JSON.stringify(user),
    });
  };

  const userApi = (user) => {
    fetch(baseUrl + "/api/users/myinfo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("AuthID"),
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        console.log("변환완료");
        console.log(json);
        console.log(json.name);

        window.sessionStorage.setItem("active", json.active);
        window.sessionStorage.setItem("birthday", json.birthday);
        window.sessionStorage.setItem("gymId", json.gymId);
        window.sessionStorage.setItem("height", json.height);
        window.sessionStorage.setItem("limitPermitDay", json.limitPermitDay);
        window.sessionStorage.setItem("male", json.male);
        window.sessionStorage.setItem("name", json.name);
        window.sessionStorage.setItem("phone", json.phone);
        window.sessionStorage.setItem("signUpDay", json.signUpDay);
        window.sessionStorage.setItem("username", json.username);
        window.sessionStorage.setItem("weight", json.weight);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId || !userPw) {
      return;
    } else {
      try {
        const response = await loginApi({
          username: userId,
          password: userPw,
        });
        console.log(response);
        // const { history } = this.props;
        if (response.status === 200) {
          console.log("200확인");
          alert(userId + "님 환영합니다.");

          console.log(response);

          // })
          console.log(response.headers.get("Authorization"));
          window.sessionStorage.setItem(
            "AuthID",
            response.headers.get("Authorization")
          );

          // var AuthID = sessionStorage.getItem("AuthID");
          // userInfo();
          userApi();
          // console.log(AuthID);
          console.log("pass");
          // var active = sessionStorage.getItem("active");
          // var birthday = sessionStorage.getItem("birthday");
          // var height = sessionStorage.getItem("height");
          // var limitPermitDay = sessionStorage.getItem("limitPermitDay");
          // var male = sessionStorage.getItem("male");
          var name = sessionStorage.getItem("name");
          // var phone = sessionStorage.getItem("phone");
          // var signUpDay = sessionStorage.getItem("signUpDay");
          // var username = sessionStorage.getItem("username");
          // var weight = sessionStorage.getItem("weight");

          console.log("이름검사");
          console.log(name);
          window.location.href = "/";
        } else {
          console.log("Error");
          throw new Error(response.error);
        }
      } catch (err) {
        alert("로그인에 실패했습니다.");
        setUserId("");
        setUserPw("");
        console.error("login error", err);
      }
    }
  };
  return (
    <MDBContainer align="center" md="6">
      <h2 className="title">Login</h2>
      <MDBRow align="center">
        <MDBCol>
          <form onSubmit={handleSubmit}>
            <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
              Your ID
            </label>
            <input
              type="text"
              id="defaultFormLoginEmailEx"
              className="form-control"
              name="username"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="ID를 입력하세요"
            />
            <br />
            <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
              Your password
            </label>
            <input
              type="password"
              id="defaultFormLoginPasswordEx"
              className="form-control"
              name="user_pw"
              value={userPw}
              onChange={(e) => setUserPw(e.target.value)}
              placeholder="pw"
            />
            <div className="text-center mt-4">
              <Button variant="danger" type="submit" mr="10px">
                Login
              </Button>
              <br />
              <br />
              <Link to="/signup">
                <Button variant="dark">회원가입</Button>
              </Link>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default Login;
