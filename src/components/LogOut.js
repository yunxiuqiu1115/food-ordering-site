import React from "react";
import { SubtitleText, LogOutContainer } from "../style/styled";

const LogOut = ({ onLogOut, label }) => {
  return (
    <div>
      <LogOutContainer>
        <SubtitleText onClick={onLogOut}>{label}</SubtitleText>
      </LogOutContainer>
    </div>
  );
};
export default LogOut;
