import { Link, useNavigate } from "react-router-dom";
import { StyledHeader, StyledNav } from "./style";
import pages from "../../../pages/pagesData";
import { Page } from "../../../types/pages";
import { useState } from "react";
import { useAuth } from "../../../contexts/AuthContext";

const ProfileUnloggedOptions = () => {
  return (
    <ul>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );
};
const ProfileLoggedOptions = () => {
  return (
    <ul>
      <li>
        <Link to="/logout">Logout</Link>
      </li>
    </ul>
  );
};
const ProfileComponent = () => {
  const { isLogged, toggleLoginLogin, toggleLoginLogout } = useAuth();
  return (
    <>
      {isLogged ? <ProfileLoggedOptions /> : <ProfileUnloggedOptions />}
      <button onClick={toggleLoginLogin}>Login</button>
    </>
  );
};

const Header = () => {
  const links = [
    { path: "/", title: "Home" },
    { path: "/register", title: "Register" },
    { path: "/login", title: "Login" },
    { path: "/logout", title: "logout" },
    { path: "/admin/members", title: "Members" },
    { path: "/users", title: "Users" },
  ];

  const navigation = links.map(({ title, path }) => {
    return (
      <li>
        <Link to={path}>{title}</Link>
      </li>
    );
  });

  return (
    <StyledHeader>
      <ProfileComponent />
      <StyledNav>
        <ul>{navigation}</ul>
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
