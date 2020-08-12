import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { withCookies, useCookies } from "react-cookie";
import Login from "./Login";
import Join from "./Join";
import Todo from "./Todo";
// import "./css/App.css";
const App = () => {
  const [cookies, removeCookie] = useCookies(["user"]);
  const [hasCookie, setHasCookie] = useState(false);
  useEffect(() => {
    if (cookies.user && cookies.user !== "undefined") {
      setHasCookie(true);
    }
  }, [cookies]);
  return (
    <div className="App">
      <h1>Todo App</h1>
      {!hasCookie ? <Redirect to="/login" /> : <Redirect to="/todo" />}
      <Switch>
        <Route
          exact
          path="/login"
          render={(routerProps) => {
            return <Login {...routerProps} setHasCookie={setHasCookie} />;
          }}
        />
        <Route exact path="/join" component={Join} />
        <Route
          exact
          path="/todo"
          render={(routerProps) => {
            return (
              <Todo
                {...routerProps}
                setHasCookie={setHasCookie}
                removeCookie={() => {
                  removeCookie("user");
                  setHasCookie(false);
                }}
              />
            );
          }}
        />
      </Switch>
    </div>
  );
};
export default withCookies(App);

// 우리는 백엔드에서 쿠키가 아닌 토큰을 발급 받아서
// 쿠키를 저장하는게 아니라 토큰을 저장해야함
// 토큰은 DB에서 보내줄 때 응답이 headers에 Authentication에 들어있고
// 이 구성을 별도의 login 링크로 보내고
// 로그인 시 돌아가는 링크를 메인 화면으로 함?
