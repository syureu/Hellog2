import React, { Component } from "react";
import styled from "styled-components";

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
  render(){
      const { logged, onLogout} = this.state;

      return()
  } 

}

export default App;

