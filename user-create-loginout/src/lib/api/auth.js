import axios from "axios";

const baseUrl = "http://syureu.iptime.org:29002";
const config = {
  headers: { "Content-Type": "application/json" },
};
export const checkEmailExists = (email) =>
  axios.get("/api/auth/exists/email/" + email);
export const checkUsernameExists = (username) =>
  axios.get("/api/auth/exists/username/" + username);

export const localRegister = ({ email, username, password }) =>
  axios.post("/api/auth/register/local", { email, username, password });
export const localLogin = ({ username, password }) => {
  var temp = { username: username, password: password };
  console.log(temp);
  axios.post(baseUrl + "/login", { username, password }, config);
  console.log(123);
};

export const checkStatus = () => axios.get("/api/auth/check");
export const logout = () => axios.post("/api/auth/logout");
