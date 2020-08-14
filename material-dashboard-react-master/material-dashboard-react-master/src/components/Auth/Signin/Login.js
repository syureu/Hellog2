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

const Login = ({ setHasCookie }) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const baseUrl = "http://i3d203.p.ssafy.io:29001";
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
          // setHasCookie(true);

          console.log(response);
          // console.log(response.headers.get(userId));
          // window.localStorage.setItem("userInfo", JSON.stringify(json));
          // this.setState({

          // })
          console.log(response.headers.get("Authorization"));
          window.sessionStorage.setItem(
            "AuthID",
            response.headers.get("Authorization")
          );
          console.log("pass");

          window.location.href = "/";
        } else {
          console.log("Error");
          throw new Error(response.error);
        }
        // window.sessionStorage.setItem("id", userId);
        // window.sessionStorage.setItem("password", userPw);
        // window.sessionStorage.setItem(
        //   "token",
        //   response.headers.get("Authorization")
        // );
      } catch (err) {
        alert("로그인에 실패했습니다.");
        setUserId("");
        setUserPw("");
        console.error("login error", err);
      }
    }
  };
  return (
    <MDBContainer>
      <h2>Login</h2>
      <MDBRow>
        <MDBCol md="6">
          <form onSubmit={handleSubmit}>
            <p className="h4 text-center mb-4">Sign in</p>
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
              <MDBBtn color="indigo" type="submit">
                Login
              </MDBBtn>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
      <Link to="/join">회원가입</Link>
    </MDBContainer>
  );
};
export default Login;

/* { <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="id"
        />
        <input
          type="password"
          name="user_pw"
          value={userPw}
          onChange={(e) => setUserPw(e.target.value)}
          placeholder="pw"
        />
        <button type="submit">Login</button>
      </form>} */

// import React from "react";
// import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

// const FormPage = () => {
// return (
// <MDBContainer>
//   <MDBRow>
//     <MDBCol md="6">
//       <form>
//         <p className="h4 text-center mb-4">Sign in</p>
//         <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
//           Your ID
//         </label>
//         <input type="text"
//           id="defaultFormLoginEmailEx"
//           className="form-control"
//           name="username"
//           value={userId}
//           onChange={(e) => setUserId(e.target.value)}
//           placeholder="ID를 입력하세요"
//           />
//         <br />
//         <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
//           Your password
//         </label>
//         <input type="password"
//          id="defaultFormLoginPasswordEx" className="form-control"
//          name="user_pw"
//          value={userPw}
//          onChange={(e) => setUserPw(e.target.value)}
//          placeholder="pw"
//           />
//         <div className="text-center mt-4">
//           <MDBBtn color="indigo" type="submit">Login</MDBBtn>
//         </div>
//       </form>
//     </MDBCol>
//   </MDBRow>
// </MDBContainer>
// );
// };

// export default FormPage;
