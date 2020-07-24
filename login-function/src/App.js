import React, { useState } from "react";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";

import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import LoginForm from "./LoginForm";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

import AuthRoute from "./AuthRoute";
import { signIn } from "./auth";

function App() {
  const [user, setUser] = useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(signIn({ email, password }));
  const logout = () => setUser(null);

  return (
    <>
      <h1> Login Function </h1>
      <hr />
      <BrowserRouter>
        <header>
          <Link to="/">
            <button>Home</button>
          </Link>
          <Link to="/about">
            <button>About</button>
          </Link>
          {/* <Link to="/users">
            <button>Users</button>
          </Link> */}
          <Link to="/profile">
            <button>Profile</button>
          </Link>
          {authenticated ? (
            <LogoutButton logout={logout} />
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
        </header>
        <hr />
        <main>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/about" component={About}></Route>
            {/* <Route path="/profile" component={Profile}></Route> */}
            <AuthRoute
              authenticated={authenticated}
              path="/profile"
              render={(props) => <Profile user={user} {...props} />}
            />
            <Route
              path="/login"
              render={(props) => (
                <LoginForm
                  authenticated={authenticated}
                  login={login}
                  {...props}
                />
              )}
            />
            <Route component={NotFound}></Route>
          </Switch>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

// 참고링크 : https://www.daleseo.com/react-router-authentication/
