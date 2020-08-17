import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";

const Join = () => {
  const [userId, setUserId] = useState("");
  const [userPw, setUserPw] = useState("");
  const [userRePw, setUserRePw] = useState("");
  const [userName, setUserName] = useState("");
  const [userBirthday, setBirthday] = useState("");
  const [phone, setPhone] = useState("");
  const [male, setMale] = useState("");
  const [height, setHeight] = useState("");
  const [idValid, setIdValid] = useState(false);
  const [isJoinSuccess, setJoinSuccess] = useState(false);
  const baseUrl = "https://i3d203.p.ssafy.io:29002";

  // const checkIdApi = (user) => {
  //   return fetch(baseUrl + "/api/users/username/" + { userId }, {
  //     method: "GET",
  //     body: JSON.stringify(user),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };
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

  // const checkId = async (userId) => {
  //   userId.preventDefault();
  //   try {
  //     const response = await checkIdApi({
  //       username: userId,
  //     });
  //     if (response.status != 200) {
  //       alert("이미 존재하는 아이디입니다.");
  //       return false;
  //     }
  //   } catch {
  //     alert("사용 가능한 아이디 입니다.");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    var id = userId;
    if (id.length < 4 || id.length > 16) {
      alert("아이디가 4~16자 이내인지 확인해주세요");
      return false;
    }
    var pw = userPw;
    var rep = userRePw;
    if (pw != rep) {
      alert("비밀번호가 일치하지 않습니다");
      return false;
    }
    var pattern1 = /[0-9]/; // 숫자
    var pattern2 = /[a-zA-Z]/; // 문자
    var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/; // 특수문자
    if (
      !pattern1.test(pw) ||
      !pattern2.test(pw) ||
      !pattern3.test(pw) ||
      pw.length < 8
    ) {
      alert("비밀번호는 8자리 이상 문자, 숫자, 특수문자로 구성하여야 합니다.");
      return false;
    }
    let year = parseInt(userBirthday.substr(0, 4), 10);
    let month = parseInt(userBirthday.substr(4, 2), 10) - 1;
    let day = parseInt(userBirthday.substr(6, 2), 10);
    var birthday = new Date(year, month, day).getTime();
    try {
      const response = await createUserApi({
        username: userId,
        password: userPw,
        name: userName,
        birthday: birthday,
        phone: phone,
        male: male,
        height: height,
      });
      if (response.status === 200) {
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
                  placeholder="id는 4 ~ 20자 필수"
                />
                {/* <button onClick={checkId(userId)}>중복검사</button> */}

                <br />
                <input
                  type="password"
                  name="user_pw"
                  className="form-control"
                  value={userPw}
                  onChange={(e) => setUserPw(e.target.value)}
                  placeholder=" 숫자, 특수문자 반드시 포함"
                />
                <br />
                <input
                  type="password"
                  name="user_pw"
                  className="form-control"
                  value={userRePw}
                  onChange={(e) => setUserRePw(e.target.value)}
                  placeholder="비밀번호를 한번 더 입력해주세요"
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
                  placeholder="생년월일 8자리 ex) 1994-04-08"
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
                  placeholder="R U male? (남성일 시 true or false 입력)"
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
