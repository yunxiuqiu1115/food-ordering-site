import React from "react";
import { BtnNoneOutLine } from "../style/styled";

const ResumeTracking = () => {
  const resumeTracking = () => {
    window.location.reload();
    alert("You have successfully resumed web tracking!");
  };

  return (
    <BtnNoneOutLine onClick={resumeTracking}>Resume Tracking</BtnNoneOutLine>
  );
};

export default ResumeTracking;
