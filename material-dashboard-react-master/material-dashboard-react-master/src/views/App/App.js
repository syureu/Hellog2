import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Test from "views/Test/Test";
import { CookiesProvider } from "react-cookie";
import Login from "components/Auth/Signin/Login.js";
import Profilebar from "components/Navbars/AdminNavbarLinks.js";
import "bootstrap/dist/css/bootstrap.css";

// core components
import Admin from "layouts/Admin.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logged: false,
      onLogin: this.onLogin,
      onLogout: this.onLogout,
    };
  }

  // Login Func
  onLogin = () => {
    this.setState({
      logged: true,
    });
  };
  // Logout Func
  onLogout = () => {
    this.setState({
      logged: false,
    });
    window.sessionStorage.clear();
  };

  componentDidMount() {
    const id = window.sessionStorage.getItem("Authorization");
    if (id) {
      this.onLogin();
    } else {
      this.onLogout();
    }
  }
  render() {
    const { logged, onLogout } = this.state;

    return (
      <BrowserRouter>
        <Profilebar logged={logged} onLogout={onLogout}></Profilebar>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Redirect from="/" to="/admin/dashboard" />
          <Redirect from="/" to="/admin/Test" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
