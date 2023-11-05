import React from "react";

import Home from "./Home";
import Members from "./Members";
import Register from "./Register";
import Login from "./Login";
import Logout from "./Logout";
import Users from "./Users";
import Profile from "./Profile";

interface Pages {
  title: string;
  path: string;
  element: React.FC | any;
}

const pages: Pages[] = [
  { title: "Home", path: "/", element: <Home /> },
  { title: "Register", path: "/register", element: <Register /> },
  { title: "Login", path: "/login", element: <Login /> },
  { title: "Members", path: "/admin/members", element: <Members /> },
  { title: "Logout", path: "/logout", element: <Logout /> },
  { title: "Users", path: "/users", element: <Users /> },
  { title: "Profile", path: "/profile", element: <Profile /> },
];

export default pages;
