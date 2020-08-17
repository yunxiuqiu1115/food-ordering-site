import React from "react";
import { SubtitleText } from "../style/styled";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <SubtitleText>Home</SubtitleText>
    </Link>
  );
};

export default Home;
