import React, { useState, Component } from "react";
import { Link, withRouter } from "react-router-dom";

const Login = ({ setHasCookie }) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const baseUrl = "http://i3d203.p.ssafy.io:29001/";
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
        if (response.status === 200) {
          setHasCookie(true);
          window.sessionStorage.setItem("id", userId);
          window.sessionStorage.setItem("password", userPw);
          window.sessionStorage.setItem(
            "token",
            response.headers.get("Authorization")
          );

          console.log(response.headers.get("Authorization"));
        } else {
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
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
      </form>
      <Link to="/join">회원가입</Link>
    </div>
  );
};
export default Login;
