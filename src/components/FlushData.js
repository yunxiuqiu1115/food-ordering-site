import React from "react";
import { BtnNoneOutLine } from "../style/styled";

const FlushData = () => {
  const user = window.localStorage.getItem("userID");
  const flushData = () => {
    window.dataLayer.push({
      event: "Flush Data",
      user: user,
      timezone: "Chicago",
    });
    alert("Successfully flush data!");
  };

  return <BtnNoneOutLine onClick={flushData}>Flush Data</BtnNoneOutLine>;
};

export default FlushData;
