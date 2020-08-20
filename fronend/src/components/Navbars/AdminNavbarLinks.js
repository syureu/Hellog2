import React from "react";
// import classNames from "classnames";
// import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
// import MenuList from "@material-ui/core/MenuList";
// import Grow from "@material-ui/core/Grow";
// import Paper from "@material-ui/core/Paper";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
// import Hidden from "@material-ui/core/Hidden";
// import Poppers from "@material-ui/core/Popper";
// import Divider from "@material-ui/core/Divider";
// @material-ui/icons
// import Person from "@material-ui/icons/Person";
// import Search from "@material-ui/icons/Search";
// core components
// import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";

// import Login from "components/Auth/Signinup/Login.js";

const useStyles = makeStyles(styles);

export default function AdminNavbarLinks() {
  const classes = useStyles();
  // const [openNotification, setOpenNotification] = React.useState(null);
  // const [openProfile, setOpenProfile] = React.useState(null);
  // const { logged, onLogout } = this.props;
  const id = window.sessionStorage.getItem("AuthID");
  // const handleClickNotification = (event) => {
  //   if (openNotification && openNotification.contains(event.target)) {
  //     setOpenNotification(null);
  //   } else {
  //     setOpenNotification(event.currentTarget);
  //   }
  // };
  // const handleCloseNotification = () => {
  //   setOpenNotification(null);
  // };
  // const handleClickProfile = (event) => {
  //   if (openProfile && openProfile.contains(event.target)) {
  //     setOpenProfile(null);
  //   } else {
  //     setOpenProfile(event.currentTarget);
  //   }
  // };
  // const handleCloseProfile = () => {
  //   setOpenProfile(null);
  // };
  const onLogout = () => {
    window.sessionStorage.clear();
    window.location.href = "/";
  };
  return (
    <div className={classes.manager}>
      <MenuItem className="d-flex justify-content-center">
        {id ? (
          <Button onClick={onLogout}>로그아웃</Button>
        ) : (
          <div>
            <a href="/login">
              <Button>로그인</Button>
            </a>
            &nbsp; &nbsp;
            <a href="/signup">
              <Button>회원가입</Button>
            </a>
          </div>
        )}
      </MenuItem>
    </div>
  );
}
