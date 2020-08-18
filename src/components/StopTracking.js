import React from "react";
import { BtnNoneOutLine } from "../style/styled";

const StopTracking = () => {
  const stopTracking = () => {
    alert("You have successfully stopped web tracking!");
  };

  return (
    <BtnNoneOutLine onClick={stopTracking}>Disable Tracking</BtnNoneOutLine>
  );
};

export default StopTracking;
