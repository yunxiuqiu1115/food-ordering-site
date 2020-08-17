import React from "react";
import {
  CardContainer,
  CardBody,
  CardTitle,
  CardText,
  CardImage,
  CardHover,
} from "../style/styled";

import CartButton from "./CartButton";

export const Card = ({ foodItem, isAuth }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <div>
      <CardContainer>
        <CardImage
          src={foodItem.image}
          alt={foodItem.name}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        />

        {hover && <CardHover>${foodItem.price}</CardHover>}

        <CardBody>
          <CardTitle>{foodItem.name}</CardTitle>
          <CardText>{foodItem.description}</CardText>
        </CardBody>
        {isAuth && (
          <CartButton
            foodID={foodItem.id}
            price={foodItem.price}
            name={foodItem.name}
            labelName="Add to cart"
          />
        )}
      </CardContainer>
    </div>
  );
};
