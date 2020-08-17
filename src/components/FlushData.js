import React from "react";
import { BtnNoneOutLine } from "../style/styled";

const FlushData = () => {
  const user = window.localStorage.getItem("userID");
  const flushData = () => {
    alert("Successfully flush data!");
  };

  return <BtnNoneOutLine onClick={flushData}>Flush Data</BtnNoneOutLine>;
};

export default FlushData;
