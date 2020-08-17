import React from "react";
import { BtnNoneOutLine } from "../style/styled";

const ResumeTracking = () => {
  const user = window.localStorage.getItem("userID");
  const resumeTracking = () => {
    window.dataLayer.push({
      event: "Resume Tracking",
      user: user,
      timezone: "Chicago",
    });
    window.location.reload();
    alert("You have successfully resumed web tracking!");
  };

  return (
    <BtnNoneOutLine onClick={resumeTracking}>Resume Tracking</BtnNoneOutLine>
  );
};

export default ResumeTracking;
