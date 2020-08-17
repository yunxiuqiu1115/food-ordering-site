import React from "react";
import { BarBody, BarText, BarContainer, PriceAlign } from "../style/styled";
const BarTitle = () => {
  return (
    <BarContainer>
      <BarBody>
        <BarText>Name</BarText>
        <PriceAlign>
          <BarText>Price</BarText>
          <BarText>Amount</BarText>
          <BarText>Total</BarText>
        </PriceAlign>
      </BarBody>
    </BarContainer>
  );
};
export default BarTitle;
