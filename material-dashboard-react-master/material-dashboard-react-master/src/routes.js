/*!

=========================================================
* Material Dashboard React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
// import LibraryBooks from "@material-ui/icons/LibraryBooks";
// import BubbleChart from "@material-ui/icons/BubbleChart";
// import LocationOn from "@material-ui/icons/LocationOn";
// import Notifications from "@material-ui/icons/Notifications";
// import Unarchive from "@material-ui/icons/Unarchive";
// import Language from "@material-ui/icons/Language";
// core components/views for Admin layout
// import DashboardPage from "views/Dashboard/Dashboard.js";
import UserProfile from "views/UserProfile/UserProfile.js";
// import Icons from "views/Icons/Icons.js";
// core components/views for RTL layout

import Dietboard from "views/Dietboard/Dietboard.js";
import MyLog from "views/MyLog/index.jsx";
import Main from "views/Main/Main.js";
// import Login from "components/Auth/Signinup/Login.js";

// import Signup from "components/Auth/Signinup/Sgin.js";
import Recommend from "views/Recommend/index";
import abc from "views/abc/abc.js";

import machine from "views/Machine/machine.jsx";

const dashboardRoutes = [
  {
    path: "/Main",
    name: "Main",
    rtlName: "Main",
    icon: Dashboard,
    component: Main,
    layout: "/admin",
  },
  {
    path: "/Dietboard",
    name: "식단관리",
    rtlName: "wtf",
    icon: "restaurant",
    component: Dietboard,
    layout: "/admin",
  },
  {
    path: "/MyLog",
    name: "운동기록",
    rtlName: "wtf",
    icon: "date_range",
    component: MyLog,
    layout: "/admin",
  },
  {
    path: "/Recommend",
    name: "운동추천",
    rtlName: "wtf",
    icon: "fitness_center",
    component: Recommend,
    layout: "/admin",
  },
  {
    path: "/machine",
    name: "대표운동",
    rtlName: "wtf",
    icon: "menu_book",
    component: machine,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Contact Us",
    rtlName: "Contact Us",
    icon: "account_box",
    component: UserProfile,
    layout: "/admin",
  },
];

export default dashboardRoutes;
