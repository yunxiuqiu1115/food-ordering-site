import React from "react";
import { Header } from "../style/styled";
import { NavbarDiv } from "../style/styled";
import { Login, LogOut, Cart, ChangeUser, Home } from "./index";
const Container = ({ isAuth, currentPage, onLogin, onLogOut }) => {
  return (
    <Header>
      <NavbarDiv>
        {!isAuth && <Login label="Login" onLogin={onLogin} />}
        {isAuth && <LogOut label="Log Out" onLogOut={onLogOut} />}
        {isAuth && <ChangeUser />}
        {isAuth && currentPage !== "Cart" && <Cart />}
        {isAuth && currentPage !== "Main" && <Home />}
      </NavbarDiv>
    </Header>
  );
};

export default Container;
