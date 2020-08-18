import { Card, Container, ActionButtons } from "./index";
import food from "../data/food-data";
import React from "react";

import { CardAlign } from "../style/styled";

const MainPage = () => {
  const [isAuth, setAuth] = React.useState(
    window.localStorage.getItem("isAuth")
  );
  const handleLogOut = () => {
    setAuth(false);
    window.localStorage.clear();
  };
  return (
    <div>
      {/* Navigation bar */}
      <Container
        isAuth={isAuth}
        currentPage="Main"
        onLogin={() => {
          setAuth(true);
        }}
        onLogOut={handleLogOut}
      />

      {/* Body */}

      <CardAlign>
        {food.map((foodItem) => (
          <Card foodItem={foodItem} key={`${foodItem.id}`} isAuth={isAuth} />
        ))}
      </CardAlign>

      {/* Buttons */}
      <ActionButtons isAuth={isAuth} currentPage="Main" />
    </div>
  );
};

export default MainPage;
