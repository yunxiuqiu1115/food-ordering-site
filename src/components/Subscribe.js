import React from "react";
import { BtnNoneOutLine } from "../style/styled";

const Subscribe = () => {
  const user = window.localStorage.getItem("userID");
  const subscribe = () => {
    window.dataLayer.push({
      event: "Subscribe",
      user: user,
      timezone: "Chicago",
    });
  };

  return <BtnNoneOutLine onClick={subscribe}>Subscribe</BtnNoneOutLine>;
};

export default Subscribe;
