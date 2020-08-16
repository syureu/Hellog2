import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
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
        <MDBContainer align="center">
          <h2>Join</h2>
          <MDBRow align="center">
            <MDBCol align="center">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="user_id"
                  className="form-control"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  placeholder="id"
                />
                <br />
                <input
                  type="password"
                  name="user_pw"
                  className="form-control"
                  value={userPw}
                  onChange={(e) => setUserPw(e.target.value)}
                  placeholder="pw"
                />
                <br />
                <input
                  type="text"
                  name="user_name"
                  className="form-control"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="name"
                />
                <br />
                <input
                  type="text"
                  name="birthday"
                  className="form-control"
                  value={userBirthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  placeholder="생년월일 6자리"
                />
                <br />
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="010-0000-0000 양식에 맞춰서"
                />
                <br />
                <input
                  type="text"
                  name="male"
                  className="form-control"
                  value={male}
                  onChange={(e) => setMale(e.target.value)}
                  placeholder="R U male? (true or false 입력)"
                />
                <br />
                <input
                  type="text"
                  name="height"
                  className="form-control"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                  placeholder="height"
                />
                <br />
                <input
                  type="text"
                  name="weight"
                  className="form-control"
                  value={weight}
                  onChange={(e) => setWeight(e.target.value)}
                  placeholder="weight"
                />
                <br />
                <button type="submit">제출</button>
              </form>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
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
