import React from "react";
import { BtnNoneOutLine } from "../style/styled";

const Unsubscribe = () => {
  const user = window.localStorage.getItem("userID");
  const unsubscribe = () => {
    window.dataLayer.push({
      event: "Unsubscribe",
      user: user,
      timezone: "Chicago",
    });
    alert("You have successfully unsubscribed for push notifications!");
  };

  return <BtnNoneOutLine onClick={unsubscribe}>Unsubscribe</BtnNoneOutLine>;
};

export default Unsubscribe;
