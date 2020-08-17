import React from "react";
import { BarContainer, BarBody, BarText, PriceAlign } from "../style/styled";

export const Bar = ({ cartItem }) => {
  return (
    <BarContainer>
      <BarBody>
        <BarText>{cartItem.name}</BarText>
        <PriceAlign>
          <BarText>${cartItem.price}</BarText>
          <BarText>{cartItem.amount}</BarText>
          <BarText>${(cartItem.price * cartItem.amount).toFixed(2)}</BarText>
        </PriceAlign>
      </BarBody>
    </BarContainer>
  );
};

export default Bar;
