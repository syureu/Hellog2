import React, { Component } from "react";
// import styled from "styled-components";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import Main from "views/Main/Main";
// import { CookiesProvider } from "react-cookie";
import Login from "components/Auth/Signinup/Login.js";
import Signup from "components/Auth/Signinup/Signup.js";
// import machine from "views/Machine/machine.jsx";
// import Profilebar from "components/Navbars/AdminNavbarLinks.js";

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
    const id = window.sessionStorage.getItem("AuthID");
    if (id) {
      this.onLogin();
    } else {
      this.onLogout();
    }
  }

  render() {
    // const { logged, onLogout } = this.state;
    // exports.logged = logged;
    return (
      <BrowserRouter>
        {/* <Profilebar logged={logged} onLogout={onLogout}></Profilebar> */}
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          {/* <Route path="/machine" component={machine} /> */}
          {/* <Redirect from="/" to="/admin/dashboard" /> */}
          <Redirect from="/" to="/admin/Main" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
