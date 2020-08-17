import React from "react";
import { SubtitleText } from "../style/styled";
import { Link } from "react-router-dom";
const Cart = () => {
  return (
    <Link to="/cart" style={{ textDecoration: "none" }}>
      <SubtitleText>Cart</SubtitleText>
    </Link>
  );
};

export default Cart;
