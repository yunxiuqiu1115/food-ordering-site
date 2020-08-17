import React from "react";
import { BtnNoneOutLine } from "../style/styled";

const LikeThisPage = () => {
  const user = window.localStorage.getItem("userID");
  const likeThisPage = () => {
    window.dataLayer.push({
      event: "Like this page",
      user: user,
      timezone: "Chicago",
    });
    alert("Thank you for your support!");
  };

  return <BtnNoneOutLine onClick={likeThisPage}>Like This Page</BtnNoneOutLine>;
};

export default LikeThisPage;
