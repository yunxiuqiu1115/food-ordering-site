import React from "react";
import { BtnNoneOutLine } from "../style/styled";
import { Link } from "react-router-dom";

const Purchase = () => {
  const foodList = JSON.parse(window.localStorage.getItem("foodList")) || {};
  const foodMap = Object.values(foodList);
  const user = window.localStorage.getItem("userID");
  const currencyCode = window.localStorage.getItem("currencyCode") || "USD";
  const purchase = () => {
    window.localStorage.removeItem("foodList");
  };

  return (
    <Link to="/confirmation" style={{ textDecoration: "none" }}>
      <BtnNoneOutLine onClick={purchase}>Purchase</BtnNoneOutLine>
    </Link>
  );
};

export default Purchase;
