import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import User from "../Components/Users/User";
import Dashboard from "../Components/Dashboard/Dashboard";
import Home from "../Components/Home/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import BookIcon from "@mui/icons-material/Book";
import EditUser from "../Components/Users/EditUser/EditUser";
import Register from "../Components/Register/Register";
import WarningIcon from "@mui/icons-material/Warning";
import NotFound from "../Components/Not Found/NotFound";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      { path: "/", element: <Dashboard />, name: "Dashboard", icon: <DashboardIcon /> },
      {
        path: "user/",
        name: "User",
        icon: <SupervisedUserCircleIcon />,
        children: [
          { index: true, element: <User /> },
          { path: "edituser", element: <EditUser /> },
        ],
      },
      { path: "blog/", element: <Blog />, name: "Blog", icon: <BookIcon /> },
      {
        path: "/notfound",
        name: "Not Found",
        icon: <WarningIcon />,
        element: <NotFound />,
      },
      { path: "/register", element: <Register />, name: "Register" },
    ],
  },
]);
