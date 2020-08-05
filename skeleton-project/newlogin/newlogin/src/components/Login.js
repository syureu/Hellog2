import React, { useState } from "react";
import { Link } from "react-router-dom";
const Login = ({ setHasCookie }) => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const baseUrl = "http://syureu.iptime.org:29002";
  const loginApi = (user) => {
    return fetch(baseUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((response) => response.json());
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userId || !userPw) {
      return;
    }
    try {
      const response = await loginApi({
        username: userId,
        password: userPw,
      });
      if (response.result === "ok") {
        setHasCookie(true);
      } else {
        throw new Error(response.error);
      }
    } catch (err) {
      alert("로그인에 실패했습니다.");
      setUserId("");
      setUserPw("");
      console.error("login error", err);
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
