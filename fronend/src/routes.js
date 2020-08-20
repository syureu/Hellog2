import Dashboard from "@material-ui/icons/Dashboard";
import UserProfile from "views/UserProfile/UserProfile.js";
import MyLog from "views/MyLog/index.jsx";
import Main from "views/Main/Main.js";
import Recommend from "views/Recommend/index";
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
