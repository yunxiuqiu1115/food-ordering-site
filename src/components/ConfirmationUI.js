import React from "react";
import { CartTitleAlign, Pikachu } from "../style/styled";
import { Container } from "./index";

import pikachu from "../image/pikachu.gif";

const ConfirmationUI = () => {
  const [isAuth, setAuth] = React.useState(
    window.localStorage.getItem("userID")
  );
  const handleLogOut = () => {
    setAuth(false);
    window.localStorage.clear();
  };
  return (
    <>
      <Container
        isAuth={isAuth}
        currentPage="Confirmation"
        onLogin={() => {
          setAuth(true);
        }}
        onLogOut={handleLogOut}
      />
      <CartTitleAlign>Your order is on the way!</CartTitleAlign>
      <Pikachu src={pikachu} alt="loading..." />
    </>
  );
};

export default ConfirmationUI;
