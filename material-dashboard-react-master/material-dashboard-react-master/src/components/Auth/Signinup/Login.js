import React, { useState, Component } from "react";
import {
  Link,
  Route,
  Switch,
  BrowserRouter,
  withRouter,
} from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import Admin from "layouts/Admin.js";
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
    return fetch(baseUrl + "/api/users/myinfo", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: sessionStorage.getItem("AuthID"),
      },
      body: JSON.stringify(user),
    });
  };

  const userInfo = async () => {
    // e.preventDefault();
    try {
      const infoResponse = await userApi();
      if (infoResponse.status === 200) {
        console.log("여기부터 userinfo");

        console.log(infoResponse);
        const reader = infoResponse.body.getReader();

        console.log(reader);
        console.log(reader.read());
        console.log(infoResponse.body.username);

        // console.log(infoResponse.body.getReader());
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log(err);
    }
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

          // setHasCookie(true);

          console.log(response);

          // })
          console.log(response.headers.get("Authorization"));
          window.sessionStorage.setItem(
            "AuthID",
            response.headers.get("Authorization")
          );

          var AuthID = sessionStorage.getItem("AuthID");
          userInfo();
          console.log(AuthID);
          console.log("pass");
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
