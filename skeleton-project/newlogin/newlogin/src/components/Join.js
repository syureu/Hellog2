import React, { useState } from "react";
import { Link } from "react-router-dom";
const Join = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userName, setUserName] = useState("");
  const [userBirthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [male, setMale] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [isJoinSuccess, setJoinSuccess] = useState(false);
  const baseUrl = "http://i3d203.p.ssafy.io:29001/";
  const createUserApi = (user) => {
    return fetch(baseUrl + "/api/users/user", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // .then((response) => response.json());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    var birthday = new Date(userBirthday).getTime();
    try {
      const response = await createUserApi({
        username: userId,
        password: userPw,
        name: userName,
        birthday: birthday,
        phone: phone,
        male: male,
        height: height,
        weight: weight,
      });
      if (response.result === "ok") {
        setJoinSuccess(true);
      }
    } catch (err) {
      console.error("login error", err);
      alert("회원가입에 실패하였습니다. 잠시 후 다시 시도해주세요.");
    }
  };
  return (
    <div>
      {!isJoinSuccess && (
        <>
          <h2>Join</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_id"
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
            <input
              type="text"
              name="user_name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="name"
            />
            <input
              type="text"
              name="birthday"
              value={userBirthday}
              onChange={(e) => setBirthday(e.target.value)}
              placeholder="생년월일 6자리"
            />
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="010-0000-0000 양식에 맞춰서"
            />
            <input
              type="text"
              name="male"
              value={male}
              onChange={(e) => setMale(e.target.value)}
              placeholder="R U male? (true or false 입력)"
            />
            <input
              type="text"
              name="height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="height"
            />
            <input
              type="text"
              name="weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="weight"
            />
            <button type="submit">제출</button>
          </form>
        </>
      )}
      {isJoinSuccess && (
        <div>
          <p>회원가입을 축하합니다!</p>
          <Link to="/login">로그인</Link>
        </div>
      )}
    </div>
  );
};
export default Join;
